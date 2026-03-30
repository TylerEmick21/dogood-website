import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  /** Accent color for the icon container */
  accent?: "coral" | "teal" | "sky" | "marigold";
  className?: string;
}

const accentMap = {
  coral: "bg-coral-light text-coral",
  teal: "bg-teal-light text-teal",
  sky: "bg-sky-light text-sky",
  marigold: "bg-marigold-light text-marigold",
};

export function FeatureCard({
  icon,
  title,
  description,
  accent = "coral",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-card bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
          accentMap[accent]
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-h3-sm font-semibold text-brand-black">{title}</h3>
      <p className="mt-2 text-body text-brand-gray-dark">{description}</p>
    </div>
  );
}

export default FeatureCard;
