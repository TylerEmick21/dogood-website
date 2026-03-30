"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

// Button element
interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

// Anchor / Next Link element
interface LinkProps extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type Props = ButtonProps | LinkProps;

const variantStyles: Record<Variant, string> = {
  /** Coral fill — primary CTA */
  primary: [
    "bg-coral text-white",
    "hover:bg-coral-hover active:bg-coral-hover/90",
    "shadow-btn",
    "focus-ring",
  ].join(" "),

  /** Ghost / outline — secondary action */
  secondary: [
    "bg-transparent text-coral border-2 border-coral",
    "hover:bg-coral-light active:bg-coral-light/80",
    "focus-ring",
  ].join(" "),

  /** Text-only link — tertiary / low-emphasis */
  tertiary: [
    "bg-transparent text-coral underline-offset-4",
    "hover:underline active:text-coral-hover",
    "focus-ring",
  ].join(" "),
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-btn",
  lg: "px-8 py-4 text-btn text-[17px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold font-sans transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button(
    { variant = "primary", size = "md", className, children, href, ...rest },
    ref
  ) {
    const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

    if (href !== undefined) {
      const { onClick, ...anchorRest } = rest as LinkProps;
      return (
        <Link
          href={href}
          className={classes}
          onClick={onClick}
          {...(anchorRest as object)}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
