import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ICPCardProps {
  label: string;
  description?: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Icon to show when no image is provided */
  icon?: React.ReactNode;
  className?: string;
}

export function ICPCard({
  label,
  description,
  href,
  imageSrc,
  imageAlt,
  icon,
  className,
}: ICPCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card-lg bg-white shadow-card",
        "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        "focus-ring",
        className
      )}
    >
      {/* Image or icon area */}
      <div className="relative h-48 bg-brand-gray-light overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? label}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-coral/30">
            {icon ?? (
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
              </svg>
            )}
          </div>
        )}
        {/* Teal bottom border on hover */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal transition-all duration-300 group-hover:w-full" aria-hidden="true" />
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-h3-sm font-semibold text-brand-black group-hover:text-coral transition-colors">
          {label}
        </h3>
        {description && (
          <p className="mt-2 text-caption text-brand-gray-dark flex-1">{description}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-caption font-semibold text-coral">
          Learn more
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default ICPCard;
