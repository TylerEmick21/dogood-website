import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface HeroSectionProps {
  headline: string;
  subhead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Path to background image asset */
  bgImage?: string;
  /** Use a solid brand color block instead of an image */
  bgColor?: "coral" | "teal" | "black";
  /** Overlay opacity (0–100) for legibility over images */
  overlayOpacity?: number;
  /** Optional content to render below the CTAs (e.g. trust signal strip) */
  trustSignal?: React.ReactNode;
  className?: string;
}

const bgColorMap: Record<NonNullable<HeroSectionProps["bgColor"]>, string> = {
  coral: "bg-coral",
  teal: "bg-teal",
  black: "bg-brand-black",
};

export function HeroSection({
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  bgImage,
  bgColor = "black",
  overlayOpacity = 60,
  trustSignal,
  className,
}: HeroSectionProps) {
  const hasBgImage = Boolean(bgImage);

  return (
    <section
      className={cn(
        "relative flex min-h-[600px] items-center overflow-hidden",
        !hasBgImage && bgColorMap[bgColor],
        className
      )}
      aria-label="Hero"
    >
      {/* Background image */}
      {hasBgImage && bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}

      {/* Overlay */}
      {hasBgImage && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity / 100 }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="section-container relative z-10 py-20 md:py-28">
        <div className="max-w-content-narrow">
          <h1
            className={cn(
              "text-display-lg md:text-display-xl font-bold leading-tight",
              "text-white"
            )}
          >
            {headline}
          </h1>
          <p className="mt-6 text-body-lg text-white/85 max-w-2xl">{subhead}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 hover:text-white"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}

          {trustSignal && <div className="mt-10">{trustSignal}</div>}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
