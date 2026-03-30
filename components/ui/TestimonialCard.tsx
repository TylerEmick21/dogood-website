import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  organization: string;
  result?: string;
  logoSrc?: string;
  logoAlt?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  organization,
  result,
  logoSrc,
  logoAlt,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-card bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover",
        className
      )}
    >
      {/* Result badge */}
      {result && (
        <p className="mb-4 text-caption font-semibold uppercase tracking-wider text-coral">
          {result}
        </p>
      )}

      {/* Quote mark */}
      <span className="mb-3 block text-4xl leading-none text-coral/30 font-serif select-none" aria-hidden="true">
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="flex-1 text-body-lg text-brand-black leading-relaxed">
        {quote}
      </blockquote>

      {/* Attribution */}
      <footer className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-5">
        {logoSrc && (
          <Image
            src={logoSrc}
            alt={logoAlt ?? organization}
            width={48}
            height={48}
            className="h-10 w-auto object-contain grayscale"
          />
        )}
        <div>
          <p className="text-body font-semibold text-brand-black">{name}</p>
          {title && (
            <p className="text-caption text-brand-gray-dark">{title}</p>
          )}
          <p className="text-caption text-brand-gray-dark">{organization}</p>
        </div>
      </footer>
    </article>
  );
}

export default TestimonialCard;
