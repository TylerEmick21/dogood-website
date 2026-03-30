import { cn } from "@/lib/utils";
import { Button } from "./Button";

export interface PricingTier {
  name: string;
  threshold: string;
  monthlyFee: string;
  rate: string;
  features: string[];
  cta?: { label: string; href: string };
  highlighted?: boolean;
}

interface PricingTableProps {
  tiers: PricingTier[];
  footnote?: string;
  className?: string;
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-teal flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export function PricingTable({ tiers, footnote, className }: PricingTableProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative flex flex-col rounded-card-lg p-8 transition-shadow",
              tier.highlighted
                ? "bg-coral text-white shadow-btn ring-2 ring-coral"
                : "bg-white shadow-card hover:shadow-card-hover border border-gray-100"
            )}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-black px-4 py-1 text-caption font-semibold text-white whitespace-nowrap">
                Most Popular
              </span>
            )}

            {/* Tier name */}
            <h3 className={cn("text-h3-sm font-semibold", tier.highlighted ? "text-white" : "text-brand-black")}>
              {tier.name}
            </h3>
            <p className={cn("mt-1 text-caption", tier.highlighted ? "text-white/70" : "text-brand-gray-dark")}>
              {tier.threshold}
            </p>

            {/* Pricing */}
            <div className="mt-6 flex items-end gap-1">
              <span className={cn("text-display-lg font-bold leading-none", tier.highlighted ? "text-white" : "text-brand-black")}>
                {tier.monthlyFee}
              </span>
              <span className={cn("mb-1 text-body", tier.highlighted ? "text-white/70" : "text-brand-gray-dark")}>
                /mo
              </span>
            </div>
            <p className={cn("mt-1 text-caption font-semibold", tier.highlighted ? "text-white/80" : "text-coral")}>
              + {tier.rate} of donations
            </p>

            {/* Features */}
            <ul className="mt-8 flex flex-col gap-3 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className={tier.highlighted ? "[&>svg]:text-white" : ""}>
                    <CheckIcon />
                  </span>
                  <span className={cn("text-body", tier.highlighted ? "text-white/90" : "text-brand-black")}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {tier.cta && (
              <div className="mt-8">
                <Button
                  href={tier.cta.href}
                  variant={tier.highlighted ? "secondary" : "primary"}
                  className={cn(
                    "w-full justify-center",
                    tier.highlighted && "border-white text-white hover:bg-white/10"
                  )}
                >
                  {tier.cta.label}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {footnote && (
        <p className="mt-6 text-center text-caption text-brand-gray-dark">{footnote}</p>
      )}
    </div>
  );
}

export default PricingTable;
