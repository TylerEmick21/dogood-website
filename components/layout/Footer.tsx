import Link from "next/link";
import { cn } from "@/lib/utils";

const naasLinks = [
  { label: "How It Works", href: "/naas/how-it-works" },
  { label: "Pricing", href: "/naas/pricing" },
  { label: "For Faith Founders", href: "/naas/for-faith-founders" },
  { label: "For Creators", href: "/naas/for-creators" },
  { label: "For Artists", href: "/naas/for-artists" },
  { label: "For International Orgs", href: "/naas/for-international" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Funds", href: "/funds" },
  { label: "Apply", href: "/apply" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal#privacy" },
  { label: "Terms of Service", href: "/legal#terms" },
  { label: "Compliance", href: "/legal#compliance" },
  { label: "Client Login", href: "/login" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function FooterCol({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="text-caption font-semibold uppercase tracking-widest text-brand-gray-dark">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-brand-white">
      <div className="section-container py-14 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link href="/" aria-label="[Do Good] home" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-coral">do</span>
                <span className="text-teal"> good</span>
              </span>
            </Link>
            <p className="text-caption text-brand-gray-dark leading-relaxed max-w-[220px]">
              The fastest path to impact. Powered by Do Good Foundation, a 501(c)(3) organization.
            </p>
            <p className="text-caption text-brand-gray-dark">EIN 85-4368754</p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-brand-gray-dark hover:text-coral transition-colors focus-ring rounded-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NaaS column */}
          <FooterCol title="NaaS">
            <ul className="space-y-2">
              {naasLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-brand-gray-dark hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Company column */}
          <FooterCol title="Company">
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-brand-gray-dark hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Legal column */}
          <FooterCol title="Legal">
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-brand-gray-dark hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-caption text-brand-gray-dark">
          <p>© {new Date().getFullYear()} [Do Good]. All rights reserved.</p>
          <p>
            Powered by{" "}
            <span className="font-medium text-brand-black">Do Good Foundation</span>
            , a 501(c)(3) organization (EIN 85-4368754)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
