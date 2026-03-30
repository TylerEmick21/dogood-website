import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
  /** Optional sub-label or annotation (e.g. "Average cost") */
  sublabel?: string;
}

interface StatsBarProps {
  stats: Stat[];
  /** Optional headline above the stats */
  headline?: string;
  /** Optional subhead below the stats */
  subhead?: string;
  /** Light gray background (default) vs. white */
  variant?: "gray" | "white" | "coral";
  className?: string;
}

const variantStyles = {
  gray: "bg-brand-gray-light",
  white: "bg-brand-white border-y border-gray-100",
  coral: "bg-coral text-white",
};

export function StatsBar({
  stats,
  headline,
  subhead,
  variant = "gray",
  className,
}: StatsBarProps) {
  const isCoral = variant === "coral";

  return (
    <section
      className={cn(variantStyles[variant], "section-y", className)}
      aria-label="Statistics"
    >
      <div className="section-container">
        {headline && (
          <h2
            className={cn(
              "text-center mb-10",
              isCoral ? "text-white" : "text-brand-black"
            )}
          >
            {headline}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className={cn(
                  "text-display-lg font-bold leading-none",
                  isCoral ? "text-white" : "text-coral"
                )}
              >
                {stat.value}
              </p>
              {stat.sublabel && (
                <p
                  className={cn(
                    "mt-1 text-caption font-medium uppercase tracking-wider",
                    isCoral ? "text-white/70" : "text-brand-gray-dark"
                  )}
                >
                  {stat.sublabel}
                </p>
              )}
              <p
                className={cn(
                  "mt-2 text-body font-semibold",
                  isCoral ? "text-white/90" : "text-brand-black"
                )}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {subhead && (
          <p
            className={cn(
              "mt-10 text-center text-body-lg font-semibold",
              isCoral ? "text-white" : "text-brand-black"
            )}
          >
            {subhead}
          </p>
        )}
      </div>
    </section>
  );
}

export default StatsBar;
