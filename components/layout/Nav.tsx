"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const naasLinks = [
  { label: "How It Works", href: "/naas/how-it-works" },
  { label: "Pricing", href: "/naas/pricing" },
  { label: "For Faith Founders", href: "/naas/for-faith-founders" },
  { label: "For Creators", href: "/naas/for-creators" },
  { label: "For Artists", href: "/naas/for-artists" },
  { label: "For International Orgs", href: "/naas/for-international" },
];

const mainLinks = [
  { label: "Funds", href: "/funds" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4 transition-transform duration-200", className)}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 7.5l5 5 5-5" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-6 w-6 flex-col items-center justify-center gap-[5px]">
      <span
        className={cn(
          "block h-[2px] w-6 rounded bg-brand-black transition-all duration-300",
          open && "translate-y-[7px] rotate-45"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-6 rounded bg-brand-black transition-all duration-300",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-6 rounded bg-brand-black transition-all duration-300",
          open && "-translate-y-[7px] -rotate-45"
        )}
      />
    </span>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [naasDropdown, setNaasDropdown] = useState(false);
  const [mobileNaas, setMobileNaas] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setNaasDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 focus-ring rounded-sm" aria-label="[Do Good] home">
          {/* Placeholder wordmark — replace with actual SVG asset */}
          <span className="text-xl font-bold tracking-tight">
            <span className="text-coral">do</span>
            <span className="text-teal"> good</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {/* NaaS dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setNaasDropdown((v) => !v)}
              onKeyDown={(e) => e.key === "Escape" && setNaasDropdown(false)}
              aria-expanded={naasDropdown}
              aria-haspopup="true"
              className="flex items-center gap-1 text-body font-medium text-brand-black hover:text-coral transition-colors focus-ring rounded-sm"
            >
              NaaS
              <ChevronDown className={cn(naasDropdown && "rotate-180")} />
            </button>

            {naasDropdown && (
              <div
                className="absolute left-0 top-full mt-2 w-56 rounded-card bg-white shadow-card-hover ring-1 ring-black/5 py-2"
                role="menu"
              >
                {naasLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setNaasDropdown(false)}
                    className="block px-4 py-2.5 text-sm text-brand-black hover:bg-coral-light hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body font-medium text-brand-black hover:text-coral transition-colors focus-ring rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button href="/login" variant="secondary" size="sm">
            Client Login
          </Button>
          <Button href="/apply" variant="primary" size="sm">
            Apply Now
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden focus-ring rounded-sm p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="section-container py-4 space-y-1">
            {/* NaaS accordion */}
            <button
              onClick={() => setMobileNaas((v) => !v)}
              className="flex w-full items-center justify-between py-3 text-base font-medium text-brand-black hover:text-coral"
            >
              NaaS
              <ChevronDown className={cn(mobileNaas && "rotate-180")} />
            </button>
            {mobileNaas && (
              <div className="ml-4 space-y-1 border-l-2 border-coral-light pl-4">
                {naasLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-brand-gray-dark hover:text-coral"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-brand-black hover:text-coral"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button href="/apply" variant="primary" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                Apply Now
              </Button>
              <Button href="/login" variant="secondary" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                Client Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
