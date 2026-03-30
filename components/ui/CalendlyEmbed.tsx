"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CalendlyEmbedProps {
  /** Full Calendly URL, e.g. https://calendly.com/andy-dogood/20min */
  url: string;
  /** Minimum pixel height for the embed frame */
  minHeight?: number;
  /** Prefill contact info from a prior form submission */
  prefill?: {
    name?: string;
    email?: string;
  };
  className?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
      }) => void;
    };
  }
}

export function CalendlyEmbed({
  url,
  minHeight = 660,
  prefill,
  className,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script once
    const SCRIPT_ID = "calendly-inline-script";
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      initWidget();
    }

    function initWidget() {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: prefill
            ? Object.fromEntries(
                Object.entries(prefill).filter(([, v]) => Boolean(v)) as [string, string][]
              )
            : undefined,
        });
      }
    }
  }, [url, prefill]);

  return (
    <div className={cn("w-full overflow-hidden rounded-card", className)}>
      {/* Calendly inline widget container */}
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full"
        style={{ minWidth: "320px", minHeight: `${minHeight}px` }}
        data-auto-load="false"
      />
      {/* CSS reset for Calendly iframe */}
      <style>{`
        .calendly-inline-widget iframe {
          width: 100%;
          border: none;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}

export default CalendlyEmbed;
