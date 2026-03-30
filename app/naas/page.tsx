import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ICPCard } from "@/components/ui/ICPCard";
import { PricingTable } from "@/components/ui/PricingTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "NaaS — Nonprofit-as-a-Service",
  description:
    "The fastest way to launch a compliant nonprofit — or add one to your business. Do Good NaaS handles fiscal sponsorship, donations, compliance, and more.",
};

const WHAT_INCLUDED = [
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Fiscal Sponsorship", description: "Operate under our 501(c)(3) umbrella. No IRS application, no board, no wait.", accent: "coral" as const },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Tax-Deductible Donations", description: "Every gift comes with a proper IRS-compliant receipt. Donors give with confidence.", accent: "teal" as const },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, title: "Fund Dashboard + Reporting", description: "Real-time donation tracking, disbursement history, and CSV exports.", accent: "sky" as const },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>, title: "Fundraising Campaign Tools", description: "Branded fund pages, FundraiseUp integration, and campaign performance analytics.", accent: "marigold" as const },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>, title: "Built-in Compliance", description: "IRS filings, 990 support, audit readiness, and donor receipts — handled for you.", accent: "teal" as const },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>, title: "Grants + Nonprofit Discounts", description: "Unlock Google Ad Grants, TechSoup pricing, and donor matching programs.", accent: "coral" as const },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: "Dedicated Onboarding", description: "A structured 9-step onboarding process so you're live and raising fast.", accent: "sky" as const },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Fast Disbursements", description: "Monthly disbursements to your bank account, net of fees. Transparent every step.", accent: "marigold" as const },
];

const ICP_CARDS = [
  { label: "Faith-Led Founders", description: "Community impact funds for churches, faith communities, and values-driven businesses.", href: "/naas/for-faith-founders" },
  { label: "Creators & Communities", description: "Turn your audience's generosity into tax-deductible impact — with a branded fund.", href: "/naas/for-creators" },
  { label: "Film & Arts", description: "Fiscal sponsorship for filmmakers, artists, and creatives raising production funds.", href: "/naas/for-artists" },
  { label: "International Orgs", description: "Access the U.S. philanthropic market with a compliant 501(c)(3) legal home.", href: "/naas/for-international" },
];

const STEPS = [
  { n: "01", title: "Apply", body: "Complete a short interest form. We review your mission and confirm fit — usually within 1 business day." },
  { n: "02", title: "Get Approved", body: "Book a 20-minute call with our team. If it's a match, you sign our Master Sponsorship Agreement." },
  { n: "03", title: "Launch Your Fund", body: "We set up your branded fund page, FundraiseUp donation widget, and client portal access." },
  { n: "04", title: "Raise", body: "Share your fund link. Donations flow in. Donors receive automatic tax-deductible receipts." },
  { n: "05", title: "Receive Disbursements", body: "Monthly, we transfer your net funds directly to your bank account with a full breakdown." },
];

const PRICING_TIERS = [
  { name: "Starter", threshold: "Under $100K raised/year", monthlyFee: "$25", rate: "5%", features: ["Fiscal sponsorship", "Tax-deductible donation processing", "Branded fund page", "Donor receipts + compliance", "Dashboard + reporting", "Monthly disbursements", "Client portal access"], cta: { label: "Apply Now", href: "/apply" } },
  { name: "Growth", threshold: "$100K+ raised/year", monthlyFee: "$50", rate: "4%", features: ["Everything in Starter", "Reduced platform rate (4%)", "Priority support", "Grant application guidance", "Advanced analytics", "Referral program access"], cta: { label: "Apply Now", href: "/apply" }, highlighted: true },
  { name: "Impact", threshold: "$250K+ raised/year", monthlyFee: "Custom", rate: "3%", features: ["Everything in Growth", "Lowest platform rate (3%)", "Dedicated account manager", "Custom integration support", "Strategic fundraising guidance", "White-glove onboarding"], cta: { label: "Talk to Us", href: "/apply" } },
];

const FAQ = [
  { question: "What exactly is fiscal sponsorship?", answer: "Fiscal sponsorship lets your project or cause accept tax-deductible donations under Do Good Foundation's 501(c)(3) status — without you having to form, register, or maintain your own nonprofit. We become the legal and financial home for your fund." },
  { question: "Do I lose control of my mission or funds?", answer: "No. You control how your funds are used, subject to our MSA and IRS requirements. We handle compliance — you run the program. Disbursements go to you monthly, net of fees." },
  { question: "What if I already have my own nonprofit?", answer: "You may not need fiscal sponsorship, but some established nonprofits use us for specific campaign funds or to add a new giving channel without burdening their existing structure. Book a call and we can assess the right fit." },
  { question: "How long does approval take?", answer: "Most applicants hear back within 1 business day. The full onboarding (MSA → fund page → live) typically takes 3–7 days." },
  { question: "What are the payment processing fees?", answer: "Payment processing is separate from the platform fee — approximately 2.9% + $0.30 per card transaction, ~1% for ACH. Donors can optionally cover these fees at checkout (10–40% typically do)." },
  { question: "Is there a long-term contract?", answer: "No. Month-to-month. You can exit with 30 days' notice. Final disbursements are processed within 60 days of termination." },
  { question: "Can international organizations apply?", answer: "Yes — that's one of our most common use cases. We provide a U.S. 501(c)(3) legal home so international organizations can accept tax-deductible donations from U.S. donors." },
  { question: "What causes or projects are NOT eligible?", answer: "We don't sponsor projects that conflict with our Foundation's mission, involve political campaign activity, or operate in restricted jurisdictions. When in doubt, apply and we'll be honest about fit." },
  { question: "Who is Do Good Foundation?", answer: "Do Good Foundation (EIN 85-4368754) is the 501(c)(3) entity that provides fiscal sponsorship. [Do Good] is the platform and service layer built on top of the Foundation's legal infrastructure." },
  { question: "What happens to my fund if I leave?", answer: "Funds must be disbursed or transferred to another eligible nonprofit per IRS rules. We help you execute this properly so no donor intent is violated." },
];

export default function NaaSPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <HeroSection
          headline="Nonprofit-as-a-Service. Built for builders."
          subhead="The fastest way to launch a compliant nonprofit — or add one to your business."
          primaryCta={{ label: "Apply Now", href: "/apply" }}
          secondaryCta={{ label: "See Pricing", href: "/naas/pricing" }}
          bgColor="black"
        />

        {/* What is NaaS */}
        <section className="section-y bg-white" aria-labelledby="what-is-naas">
          <div className="section-container max-w-content-narrow">
            <h2 id="what-is-naas" className="text-center">What is NaaS?</h2>
            <p className="mt-6 text-body-lg text-brand-gray-dark text-center leading-relaxed">
              NaaS — Nonprofit-as-a-Service — is our fiscal sponsorship platform. It gives individuals,
              businesses, creators, and international organizations a{" "}
              <strong className="text-brand-black">legal, compliant, fully operational nonprofit structure</strong>{" "}
              in days — without forming their own 501(c)(3).
            </p>
            <p className="mt-4 text-body-lg text-brand-gray-dark text-center leading-relaxed">
              We handle the legal structure, tax-deductible donation processing, compliance, receipts,
              and reporting. You handle your mission.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="whats-included">
          <div className="section-container">
            <h2 id="whats-included" className="text-center">What&apos;s Included</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark">Everything you need. Nothing you don&apos;t.</p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHAT_INCLUDED.map((f) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} accent={f.accent} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works — 5-step */}
        <section className="section-y bg-white" aria-labelledby="how-it-works">
          <div className="section-container">
            <h2 id="how-it-works" className="text-center">How It Works</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark">From application to live donations in under a week.</p>
            <div className="mt-12 relative">
              {/* Connector line — desktop */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-brand-gray-light" aria-hidden="true" />
              <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                {STEPS.map((s) => (
                  <div key={s.n} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-coral text-white text-h3-sm font-bold shadow-btn mb-4">
                      {s.n}
                    </div>
                    <h3 className="text-h3-sm font-semibold text-brand-black">{s.title}</h3>
                    <p className="mt-2 text-caption text-brand-gray-dark">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button href="/naas/how-it-works" variant="secondary">See the Full Process</Button>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="who-its-for">
          <div className="section-container">
            <h2 id="who-its-for" className="text-center">Who It&apos;s For</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ICP_CARDS.map((c) => (
                <ICPCard key={c.href} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-y bg-white" aria-labelledby="pricing">
          <div className="section-container">
            <h2 id="pricing" className="text-center">Pricing</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark">Simple, transparent. Rates drop as you grow.</p>
            <div className="mt-12">
              <PricingTable
                tiers={PRICING_TIERS}
                footnote="Month-to-month. No long-term contracts. Tier upgrades are automatic when you cross a threshold. Payment processing fees are separate (~2.9% + $0.30 cards, ~1% ACH)."
              />
            </div>
            <div className="mt-6 text-center">
              <Button href="/naas/pricing" variant="secondary">Full Pricing Details</Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="faq">
          <div className="section-container max-w-content-narrow">
            <h2 id="faq" className="text-center">Frequently Asked Questions</h2>
            <div className="mt-10">
              <FAQAccordion items={FAQ} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-coral py-20 text-center" aria-labelledby="naas-cta">
          <div className="section-container">
            <h2 id="naas-cta" className="text-white text-display-lg font-bold">Ready to launch?</h2>
            <p className="mt-4 text-body-lg text-white/80 max-w-xl mx-auto">
              Apply in 5 minutes. We&apos;ll follow up within 1 business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/apply" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">Apply Now</Button>
              <Button href="/apply#book" variant="tertiary" size="lg" className="text-white hover:text-white/80">Book a Call</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
