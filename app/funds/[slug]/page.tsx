import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FundraiseUpEmbed } from "@/components/ui/FundraiseUpEmbed";
import { FUNDS } from "@/lib/funds";
import { cn } from "@/lib/utils";
import type { Fund } from "@/lib/funds";

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return FUNDS.map((fund) => ({ slug: fund.slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fund = FUNDS.find((f) => f.slug === slug);

  if (!fund) {
    return { title: "Fund Not Found" };
  }

  return {
    title: `${fund.name} — Do Good Foundation`,
    description: fund.description,
    openGraph: {
      title: `${fund.name} — Do Good Foundation`,
      description: fund.description,
    },
  };
}

// ── Hero background by category ───────────────────────────────────────────────
function heroBg(category: Fund["category"]): string {
  switch (category) {
    case "Arts & Film":
      return "bg-teal";
    case "Community":
      return "bg-coral";
    case "International":
    case "Faith":
      return "bg-brand-black";
    case "Education":
      return "bg-sky";
    case "Environment":
      return "bg-teal-hover";
    default:
      return "bg-brand-black";
  }
}

function heroTextColor(category: Fund["category"]): string {
  switch (category) {
    case "Arts & Film":
    case "Education":
    case "Environment":
      return "text-brand-black";
    default:
      return "text-brand-white";
  }
}

function heroBadgeCls(category: Fund["category"]): string {
  switch (category) {
    case "Arts & Film":
    case "Education":
    case "Environment":
      return "bg-brand-black/10 text-brand-black";
    default:
      return "bg-brand-white/15 text-brand-white";
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function FundPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fund = FUNDS.find((f) => f.slug === slug);

  if (!fund) {
    notFound();
  }

  const bgCls = heroBg(fund.category);
  const textCls = heroTextColor(fund.category);
  const badgeCls = heroBadgeCls(fund.category);

  return (
    <>
      <Nav />

      {/* ── Hero banner ──────────────────────────────────────────────────── */}
      <section className={cn("w-full", bgCls)}>
        <div className="section-container py-16 md:py-24">
          {/* Category badge */}
          <span
            className={cn(
              "inline-block rounded-full px-4 py-1 text-caption font-semibold mb-5",
              badgeCls
            )}
          >
            {fund.category} &middot; {fund.country}
          </span>

          <h1
            className={cn(
              "text-display-lg font-bold leading-tight max-w-3xl",
              textCls
            )}
          >
            {fund.name}
          </h1>
          <p className={cn("mt-3 text-body-lg font-medium", textCls, "opacity-80")}>
            {fund.organization}
          </p>
        </div>
      </section>

      {/* ── Fund description ─────────────────────────────────────────────── */}
      <section className="section-y bg-brand-white border-b border-gray-100">
        <div className="section-container max-w-content-narrow">
          <p className="text-body-lg text-brand-black/80 leading-relaxed">{fund.description}</p>
        </div>
      </section>

      {/* ── Impact stats strip ───────────────────────────────────────────── */}
      {fund.impactStats.length > 0 && (
        <section className="bg-brand-gray-light border-y border-gray-200">
          <div className="section-container py-10 md:py-14">
            <dl
              className={cn(
                "grid gap-8",
                fund.impactStats.length === 1 && "grid-cols-1",
                fund.impactStats.length === 2 && "grid-cols-1 sm:grid-cols-2",
                fund.impactStats.length >= 3 && "grid-cols-1 sm:grid-cols-3"
              )}
            >
              {fund.impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-1"
                >
                  <dt className="text-display-lg font-bold text-teal leading-none">
                    {stat.value}
                  </dt>
                  <dd className="text-body text-brand-gray-dark">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Your Impact bullets ──────────────────────────────────────────── */}
      <section className="section-y bg-brand-white">
        <div className="section-container max-w-content-narrow">
          <h2 className="text-h2-sm font-semibold text-brand-black md:text-h2">
            Your Impact
          </h2>
          <ul className="mt-8 space-y-4" aria-label="Ways your donation helps">
            {fund.impactBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-4">
                {/* Teal bullet icon */}
                <span
                  className="mt-1 flex-shrink-0 rounded-full bg-teal-light p-1"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p className="text-body text-brand-black/80">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Donation widget ──────────────────────────────────────────────── */}
      <section className="section-y bg-coral-light border-y border-coral/10">
        <div className="section-container max-w-content-narrow">
          <div className="rounded-card-lg bg-brand-white p-8 md:p-12 shadow-card">
            <h2 className="text-h2-sm font-semibold text-brand-black md:text-h2">
              Support this fund
            </h2>
            <p className="mt-3 text-body text-brand-gray-dark">
              Your tax-deductible donation goes directly to{" "}
              <span className="font-medium text-brand-black">{fund.organization}</span>.
            </p>

            <div className="mt-8">
              <FundraiseUpEmbed campaignId={fund.fundraiseUpCampaignId} />
            </div>

            <p className="mt-6 text-caption text-brand-gray-dark">
              Powered by{" "}
              <span className="font-medium text-brand-black">Do Good Foundation</span>
              , a 501(c)(3) organization (EIN 85-4368754). All donations are
              tax-deductible to the fullest extent permitted by law.
            </p>
          </div>
        </div>
      </section>

      {/* ── How your donation is used ────────────────────────────────────── */}
      <section className="section-y bg-brand-white">
        <div className="section-container max-w-content-narrow">
          <h2 className="text-h2-sm font-semibold text-brand-black md:text-h2">
            How your donation is used
          </h2>
          <div className="mt-6 space-y-4 text-body text-brand-black/80">
            <p>
              Do Good Foundation serves as the fiscal sponsor for{" "}
              <span className="font-medium text-brand-black">{fund.organization}</span>.
              All donations are received and managed by Do Good Foundation, a 501(c)(3)
              public charity, ensuring your contribution is fully tax-deductible.
            </p>
            <p>
              Funds are disbursed directly to support the stated mission of this fund.
              Do Good Foundation maintains full legal and fiduciary oversight to ensure
              every dollar is used with integrity and in accordance with IRS guidelines.
            </p>
            <p>
              For questions about this fund or how donations are processed, please{" "}
              <a
                href="/contact"
                className="text-teal font-medium underline underline-offset-2 hover:text-teal-hover transition-colors focus-ring rounded-sm"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
