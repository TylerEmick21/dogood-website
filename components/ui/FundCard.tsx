import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export interface FundCardProps {
  slug: string;
  name: string;
  organization: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  category?: string;
  country?: string;
  className?: string;
}

export function FundCard({
  slug,
  name,
  organization,
  description,
  imageSrc,
  imageAlt,
  category,
  country,
  className,
}: FundCardProps) {
  const href = `/funds/${slug}`;

  return (
    <article
      className={cn(
        "flex flex-col rounded-card-lg bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-44 bg-teal-light overflow-hidden flex-shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg className="h-14 w-14 text-teal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        )}
        {/* Category badge */}
        {category && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-caption font-semibold text-teal backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <Link href={href} className="focus-ring rounded-sm">
          <h3 className="text-h3-sm font-semibold text-brand-black hover:text-coral transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <p className="mt-1 text-caption text-brand-gray-dark">{organization}</p>
        {country && <p className="text-caption text-brand-gray-dark">{country}</p>}
        <p className="mt-3 text-body text-brand-black/80 line-clamp-3 flex-1">{description}</p>

        <div className="mt-5">
          <Button href={href} variant="primary" size="sm" className="w-full justify-center">
            Donate
          </Button>
        </div>

        <p className="mt-3 text-center text-caption text-brand-gray-dark">
          Powered by{" "}
          <span className="font-medium">Do Good Foundation</span>
          , a 501(c)(3)
        </p>
      </div>
    </article>
  );
}

export default FundCard;
