"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FundraiseUpEmbedProps {
  /**
   * FundraiseUp campaign ID / widget slug assigned to this fund.
   * Format: "ABCD1234" — provided in FundraiseUp dashboard.
   */
  campaignId: string;
  /**
   * Optional: override widget color to match brand
   * Passed as a query param to the script URL.
   */
  accentColor?: string;
  className?: string;
}

export function FundraiseUpEmbed({
  campaignId,
  accentColor = "#FF5344", // coral
  className,
}: FundraiseUpEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SCRIPT_ID = `fundraiseup-${campaignId}`;

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      // FundraiseUp inline widget loader
      script.src = `https://cdn.fundraiseup.com/widget/${campaignId}`;
      script.async = true;
      if (containerRef.current) {
        containerRef.current.appendChild(script);
      } else {
        document.body.appendChild(script);
      }
    }
  }, [campaignId]);

  return (
    <div className={cn("w-full", className)}>
      {/* FundraiseUp attaches its button/form to an <a> with data attribute */}
      <a
        href={`https://fundraiseup.com/donate/${campaignId}`}
        data-fundraiseup={campaignId}
        target="_blank"
        rel="noopener noreferrer"
        style={{ "--fu-button-color": accentColor } as React.CSSProperties}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-btn px-8 py-4",
          "bg-coral text-white text-btn font-semibold shadow-btn",
          "hover:bg-coral-hover transition-all duration-200"
        )}
      >
        Donate Now
      </a>

      {/* FundraiseUp script container */}
      <div ref={containerRef} aria-hidden="true" />

      <p className="mt-3 text-caption text-brand-gray-dark">
        Tax-deductible donations processed securely by{" "}
        <span className="font-medium">Do Good Foundation</span>
        , a 501(c)(3) organization (EIN 85-4368754)
      </p>
    </div>
  );
}

export default FundraiseUpEmbed;
