import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { StatsBar } from "@/components/ui/StatsBar";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ICPCard } from "@/components/ui/ICPCard";
import { PricingTable } from "@/components/ui/PricingTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ROICalculator } from "@/components/ui/ROICalculator";
import { Button } from "@/components/ui/Button";

// ── Data ─────────────────────────────────────────────────────────────────────

const PROBLEM_STATS = [
  { value: "$2K–$10K", sublabel: "Average cost", label: "To form a 501(c)(3)" },
  { value: "40–80 hrs", sublabel: "Time required", label: "To get a nonprofit running" },
  { value: "6–18 mo", sublabel: "IRS wait time", label: "For tax-exempt approval" },
];

const FEATURES = [
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Turnkey Fiscal Sponsorship",
    description: "We're your 501(c)(3) backbone. Launch legally in days, not months.",
    accent: "coral" as const,
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Tax-Deductible Donations",
    description: "Every donor gets a proper receipt. We handle IRS compliance automatically.",
    accent: "teal" as const,
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Fund Dashboard + Reporting",
    description: "Real-time donations, disbursement tracking, and exportable reports.",
    accent: "sky" as const,
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
    title: "Fundraising Campaign Tools",
    description: "Branded fund pages, FundraiseUp integration, and campaign analytics.",
    accent: "marigold" as const,
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
    title: "Built-in Compliance",
    description: "IRS, audit, and receipt requirements handled. No surprises.",
    accent: "teal" as const,
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>,
    title: "Grants + Nonprofit Discounts",
    description: "Unlock Google Ad Grants, nonprofit software pricing, and more.",
    accent: "coral" as const,
  },
];

const ICP_CARDS = [
  { label: "Faith-Led Founders", description: "Launch a Community Impact Fund — without 18 months of IRS paperwork.", href: "/naas/for-faith-founders" },
  { label: "Creators & Communities", description: "Turn your audience's generosity into tax-deductible impact.", href: "/naas/for-creators" },
  { label: "Film & Arts", description: "Fund your project. Keep your focus. Fiscal sponsorship built for creatives.", href: "/naas/for-artists" },
  { label: "International Orgs", description: "Access the world's largest philanthropic market — the U.S.", href: "/naas/for-international" },
];

const TESTIMONIALS = [
  {
    quote: "We launched a global giving campaign in under 7 days. The speed was unbelievable — we couldn't have done it without Do Good.",
    name: "Sun Country Airlines",
    organization: "Sun Country Airlines",
    result: "Global campaign live in 7 days",
  },
  {
    quote: "We raised $15,000 — including $8K in the first 10 days. The fiscal sponsorship backing made donors feel confident.",
    name: "What You Deserve",
    organization: "Independent Film",
    result: "$15K raised, $8K in first 10 days",
  },
  {
    quote: "Within 30 days, our Pay It Forward program enabled donations and free nonprofit screenings — creating a new revenue stream.",
    name: "UnCharitable",
    organization: "Documentary Film",
    result: "New revenue stream in 30 days",
  },
];

const PRICING_TIERS = [
  {
    name: "Starter",
    threshold: "Under $100K raised/year",
    monthlyFee: "$25",
    rate: "5%",
    features: ["Fiscal sponsorship", "Tax-deductible donations", "Fund page", "Donation processing", "Compliance (IRS, receipts)", "Dashboard + reporting"],
    cta: { label: "Apply Now", href: "/apply" },
  },
  {
    name: "Growth",
    threshold: "$100K+ raised/year",
    monthlyFee: "$50",
    rate: "4%",
    features: ["Everything in Starter", "Reduced platform rate", "Priority support", "Grant application guidance", "Advanced reporting"],
    cta: { label: "Apply Now", href: "/apply" },
    highlighted: true,
  },
  {
    name: "Impact",
    threshold: "$250K+ raised/year",
    monthlyFee: "Custom",
    rate: "3%",
    features: ["Everything in Growth", "Dedicated account manager", "Custom integration support", "Strategic fundraising guidance", "White-glove onboarding"],
    cta: { label: "Talk to Us", href: "/apply" },
  },
];

const FAQ_ITEMS = [
  { question: "What is fiscal sponsorship?", answer: "Fiscal sponsorship lets your project or organization accept tax-deductible donations under Do Good Foundation's 501(c)(3) status — without you having to form your own nonprofit. We handle the legal and financial compliance." },
  { question: "How fast can I get started?", answer: "Most applicants are approved and have a live donation page within 3–7 business days. The IRS wait time problem is ours to solve, not yours." },
  { question: "Is there a cost to apply?", answer: "No. Applying is free. You only pay the monthly platform fee once you're live and accepting donations." },
  { question: "What happens after I apply?", answer: "You'll book a 20-minute call with our team. We review your project, answer questions, and confirm the fit. If approved, you'll sign our MSA and we'll kick off onboarding." },
  { question: "Do I need to form my own board?", answer: "No. Under fiscal sponsorship, you operate under our board and legal structure. You focus on your mission — we handle governance." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero */}
        <HeroSection
          headline="The Fastest Path to Impact"
          subhead="Instantly launch a compliant nonprofit — without the lawyers, the board, or the IRS wait."
          primaryCta={{ label: "Apply Now", href: "/apply" }}
          secondaryCta={{ label: "How It Works", href: "/naas/how-it-works" }}
          bgColor="black"
          trustSignal={
            <p className="text-caption text-white/60 font-medium uppercase tracking-widest">
              Trusted by creators, faith leaders, businesses, and international orgs
            </p>
          }
        />

        {/* 2. The Problem */}
        <StatsBar
          stats={PROBLEM_STATS}
          subhead="Your mission can't afford to wait."
          variant="gray"
        />

        {/* 3. How It Works */}
        <section className="section-y bg-white" aria-labelledby="how-it-works-heading">
          <div className="section-container">
            <h2 id="how-it-works-heading" className="text-center">How NaaS Works</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark max-w-2xl mx-auto">
              Three steps from idea to launch.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { step: "01", title: "Apply & get approved", body: "Tell us about your mission. We review and approve in days, not months." },
                { step: "02", title: "Launch your fund page", body: "Your branded donation page is live. Donors can give immediately, tax-deductibly." },
                { step: "03", title: "Raise. We handle the rest.", body: "We manage compliance, receipts, disbursements, and reporting. You focus on impact." },
              ].map((s) => (
                <div key={s.step} className="relative rounded-card-lg bg-brand-gray-light p-8">
                  <span className="absolute -top-4 left-6 text-6xl font-bold text-coral/10 leading-none select-none" aria-hidden="true">{s.step}</span>
                  <h3 className="relative text-h3-sm font-semibold text-brand-black">{s.title}</h3>
                  <p className="mt-3 text-body text-brand-gray-dark">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/apply" variant="primary" size="lg">Start the Process</Button>
            </div>
          </div>
        </section>

        {/* 4. Who It's For */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="who-heading">
          <div className="section-container">
            <h2 id="who-heading" className="text-center">Who It&apos;s For</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ICP_CARDS.map((card) => (
                <ICPCard key={card.href} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. What You Get */}
        <section className="section-y bg-white" aria-labelledby="features-heading">
          <div className="section-container">
            <h2 id="features-heading" className="text-center">What You Get</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark max-w-2xl mx-auto">
              Everything you need to launch, grow, and run a compliant nonprofit.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} accent={f.accent} />
              ))}
            </div>
          </div>
        </section>

        {/* 6. Social Proof */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="proof-heading">
          <div className="section-container">
            <h2 id="proof-heading" className="text-center">Real Results</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* 7. Pricing Preview */}
        <section className="section-y bg-white" aria-labelledby="pricing-heading">
          <div className="section-container">
            <h2 id="pricing-heading" className="text-center">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark">
              $25/month to get started. Rates drop as you grow.
            </p>
            <div className="mt-12">
              <PricingTable
                tiers={PRICING_TIERS}
                footnote="Month-to-month. No long-term contracts. Tier upgrades are automatic."
              />
            </div>
            <div className="mt-6 text-center">
              <Button href="/naas/pricing" variant="secondary">See Full Pricing Details</Button>
            </div>
          </div>
        </section>

        {/* 8. ROI Calculator */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="roi-heading">
          <div className="section-container">
            <h2 id="roi-heading" className="text-center">How much are you leaving on the table?</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark max-w-xl mx-auto">
              See your net revenue with [Do Good] vs. starting your own 501(c)(3).
            </p>
            <div className="mt-10">
              <ROICalculator />
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="section-y bg-white" aria-labelledby="faq-heading">
          <div className="section-container max-w-content-narrow">
            <h2 id="faq-heading" className="text-center">Common Questions</h2>
            <div className="mt-10">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="bg-coral py-20 text-white text-center" aria-labelledby="cta-heading">
          <div className="section-container">
            <h2 id="cta-heading" className="text-white text-display-lg font-bold">
              Start your nonprofit in a day.
            </h2>
            <p className="mt-4 text-body-lg text-white/80 max-w-xl mx-auto">
              No lawyers. No board. No IRS wait. Just impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/apply"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Apply Now
              </Button>
              <Button
                href="/apply#book"
                variant="tertiary"
                size="lg"
                className="text-white hover:text-white/80"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
