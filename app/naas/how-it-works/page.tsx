import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How It Works — NaaS",
  description:
    "The complete step-by-step guide to launching your nonprofit with Do Good NaaS — from application through disbursements.",
};

const STEPS = [
  {
    n: "01",
    title: "Apply",
    who: "You",
    time: "5 minutes",
    body: "Fill out our short interest form with your name, organization, mission, and ICP type. No essays, no business plan — just the basics so we can assess fit.",
    detail: "Your application is reviewed by our team, usually within 1 business day. We look for mission clarity, alignment with our Foundation's purpose, and basic organizational readiness.",
  },
  {
    n: "02",
    title: "Intake & Kickoff Call",
    who: "Do Good + You",
    time: "20 min call",
    body: "Book a 20-minute call with our team. We walk through your mission, answer questions, and confirm the NaaS package that fits your needs.",
    detail: "If it's a match, we send your Master Sponsorship Agreement (MSA) for signature via Adobe. The MSA outlines the terms of fiscal sponsorship, fee structure, and disbursement schedule.",
  },
  {
    n: "03",
    title: "MSA Signed",
    who: "You",
    time: "~24 hours",
    body: "Review and sign the MSA. This is the legal agreement establishing your fund under Do Good Foundation's 501(c)(3) umbrella.",
    detail: "Once signed, you're officially a Do Good client. Your fund is authorized to accept tax-deductible donations.",
  },
  {
    n: "04",
    title: "Fund Page Built",
    who: "Do Good",
    time: "2–3 days",
    body: "We build your branded fund page on the Do Good platform. You review and approve the copy, imagery, and donation widget before it goes live.",
    detail: "Each fund page includes your organization name, mission description, impact stats, and a FundraiseUp or Give Lively donation embed. It lives at dogoodnaas.com/funds/[your-slug].",
  },
  {
    n: "05",
    title: "You're Live — Start Raising",
    who: "You",
    time: "Ongoing",
    body: "Share your fund link. Post it on social, embed it on your site, add it to your email signature. Donors give via credit card or ACH — we process everything.",
    detail: "Every donation triggers an automatic tax-deductible receipt from Do Good Foundation. You can track all donations in real time through your client portal.",
  },
  {
    n: "06",
    title: "Monthly Disbursements",
    who: "Do Good",
    time: "Monthly",
    body: "Each month, we calculate your gross donations, deduct platform fees and payment processing fees, and wire the net amount to your bank account.",
    detail: "You receive a detailed breakdown: gross donations, platform fee, payment processing fee, and net disbursed. All records are accessible in your portal under Donations and Billing.",
  },
];

const MONEY_TIMELINE = [
  { label: "Donation received", timing: "Instant", who: "Donor", notes: "Donor gets receipt immediately" },
  { label: "Funds held by Do Good Foundation", timing: "Day 0–30", who: "Do Good", notes: "Held in Foundation account" },
  { label: "Monthly reconciliation", timing: "1st of month", who: "Do Good", notes: "Fees calculated" },
  { label: "Disbursement to your bank", timing: "5th–10th of month", who: "Do Good → You", notes: "Net amount wired via ACH" },
  { label: "Funds available to you", timing: "Within 3 business days", who: "You", notes: "Depends on your bank" },
];

const DO_GOOD_HANDLES = [
  "501(c)(3) legal structure and IRS compliance",
  "Donor receipts and acknowledgement letters",
  "Annual 990 filing and audit readiness",
  "Payment processing (Stripe via FundraiseUp)",
  "Fund page hosting and maintenance",
  "Monthly disbursements and financial reporting",
  "Client portal and document management",
];

const CLIENT_HANDLES = [
  "Your program or project activities",
  "Fundraising outreach and donor relationships",
  "How disbursed funds are spent (within mission)",
  "Submitting a Project Plan to Do Good",
  "Providing updates for your fund page",
  "Keeping your payment method current in the portal",
];

const FAQ = [
  { question: "Can I accept donations before my fund page is live?", answer: "No — you need an active fund page with a FundraiseUp widget to legally route donations through Do Good Foundation. This protects both you and your donors." },
  { question: "What's the minimum donation amount?", answer: "FundraiseUp minimum is $5. We recommend setting a suggested donation amount based on your typical supporter profile." },
  { question: "Can donors give by check?", answer: "Yes. Checks should be made payable to Do Good Foundation with your fund name in the memo line. Contact us for the mailing address." },
  { question: "How are fees calculated?", answer: "Platform fee (5%, 4%, or 3% depending on tier) + payment processing (~2.9% + $0.30 per card transaction, ~1% ACH). Both are deducted before disbursement." },
  { question: "What if a donor wants a refund?", answer: "Refunds are handled on a case-by-case basis. As the fiscal sponsor, Do Good Foundation processes refund requests in accordance with our refund policy. Contact support within 30 days of a donation." },
  { question: "Can I raise funds for multiple projects under one fund?", answer: "Yes, within reason. If projects are materially different, we may recommend separate funds. Talk to your account manager." },
  { question: "How do I get access to my client portal?", answer: "Portal login credentials are emailed to you as part of the kickoff onboarding email. You can reset your password from the login page at any time." },
];

function Step({ step, isLast }: { step: typeof STEPS[0]; isLast: boolean }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coral text-white font-bold text-body shadow-btn z-10">
          {step.n}
        </div>
        {!isLast && <div className="mt-2 w-0.5 flex-1 bg-brand-gray-light min-h-[40px]" aria-hidden="true" />}
      </div>

      {/* Content */}
      <div className={cn("pb-10", isLast && "pb-0")}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="text-h3-sm font-semibold text-brand-black">{step.title}</h3>
          <span className="rounded-full bg-teal-light px-3 py-0.5 text-caption font-medium text-teal">{step.time}</span>
          <span className="rounded-full bg-coral-light px-3 py-0.5 text-caption font-medium text-coral">{step.who}</span>
        </div>
        <p className="text-body text-brand-black">{step.body}</p>
        <p className="mt-2 text-body text-brand-gray-dark">{step.detail}</p>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <HeroSection
          headline="From application to live donations — in under a week."
          subhead="Here's exactly what happens when you join Do Good NaaS, step by step."
          primaryCta={{ label: "Apply Now", href: "/apply" }}
          secondaryCta={{ label: "See Pricing", href: "/naas/pricing" }}
          bgColor="teal"
        />

        {/* NaaS explained simply */}
        <section className="section-y bg-white" aria-labelledby="naas-explained">
          <div className="section-container max-w-content-narrow">
            <h2 id="naas-explained" className="text-center">The NaaS Model, Simply Explained</h2>
            <div className="mt-8 space-y-4 text-body-lg text-brand-gray-dark leading-relaxed">
              <p>
                Forming your own 501(c)(3) takes months, costs thousands, and requires ongoing legal
                and financial overhead. <strong className="text-brand-black">Fiscal sponsorship is the shortcut.</strong>
              </p>
              <p>
                Instead of creating a new nonprofit entity, you operate under{" "}
                <strong className="text-brand-black">Do Good Foundation&apos;s existing 501(c)(3) status</strong>{" "}
                (EIN 85-4368754). Your donors get the same tax deduction they&apos;d get giving to any
                established nonprofit. You get a legal, compliant structure in days.
              </p>
              <p>
                NaaS is the full-stack service layer on top of that structure — the fund page, the
                donation processing, the portal, the compliance, the disbursements.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-step flow */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="step-by-step">
          <div className="section-container max-w-content-narrow">
            <h2 id="step-by-step" className="text-center">The Full Process</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark">Six steps from idea to funded.</p>
            <div className="mt-12">
              {STEPS.map((step, i) => (
                <Step key={step.n} step={step} isLast={i === STEPS.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Money Timeline */}
        <section className="section-y bg-white" aria-labelledby="money-timeline">
          <div className="section-container">
            <h2 id="money-timeline" className="text-center">Money Timeline</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark max-w-xl mx-auto">
              Here&apos;s exactly how funds move from donor to your bank account.
            </p>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-coral">
                    <th className="pb-3 text-caption font-semibold uppercase tracking-wider text-coral">Event</th>
                    <th className="pb-3 text-caption font-semibold uppercase tracking-wider text-coral">Timing</th>
                    <th className="pb-3 text-caption font-semibold uppercase tracking-wider text-coral">Who</th>
                    <th className="pb-3 text-caption font-semibold uppercase tracking-wider text-coral">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MONEY_TIMELINE.map((row) => (
                    <tr key={row.label} className="hover:bg-brand-gray-light transition-colors">
                      <td className="py-4 pr-4 text-body font-medium text-brand-black">{row.label}</td>
                      <td className="py-4 pr-4 text-body text-teal font-semibold whitespace-nowrap">{row.timing}</td>
                      <td className="py-4 pr-4 text-body text-brand-gray-dark">{row.who}</td>
                      <td className="py-4 text-body text-brand-gray-dark">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Responsibility split */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="responsibilities">
          <div className="section-container">
            <h2 id="responsibilities" className="text-center">What We Handle vs. What You Handle</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-card-lg bg-white p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-light">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-h3-sm font-semibold text-brand-black">Do Good Handles</h3>
                </div>
                <ul className="space-y-3">
                  {DO_GOOD_HANDLES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      <span className="text-body text-brand-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-card-lg bg-white p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-light">
                    <svg className="h-5 w-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <h3 className="text-h3-sm font-semibold text-brand-black">You Handle</h3>
                </div>
                <ul className="space-y-3">
                  {CLIENT_HANDLES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      <span className="text-body text-brand-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="section-y bg-white" aria-labelledby="compliance">
          <div className="section-container max-w-content-narrow">
            <h2 id="compliance" className="text-center">Compliance, Simply Explained</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { title: "IRS Compliance", body: "Do Good Foundation files the annual 990 and maintains 501(c)(3) status. You benefit from that status without any filing requirements of your own." },
                { title: "Donor Receipts", body: "Every donation triggers an automatic receipt from Do Good Foundation — the legally required acknowledgment for tax-deductible gifts. You never need to send one." },
                { title: "Audit Readiness", body: "We maintain clean books, donation records, and disbursement documentation for every fund. If you're ever audited, we have everything ready." },
              ].map((item) => (
                <div key={item.title} className="rounded-card bg-teal-light p-6 border border-teal/20">
                  <h3 className="text-h3-sm font-semibold text-brand-black">{item.title}</h3>
                  <p className="mt-2 text-body text-brand-gray-dark">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="faq">
          <div className="section-container max-w-content-narrow">
            <h2 id="faq" className="text-center">Questions About the Process</h2>
            <div className="mt-10">
              <FAQAccordion items={FAQ} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-coral py-20 text-center">
          <div className="section-container">
            <h2 className="text-white text-display-lg font-bold">Ready to start?</h2>
            <p className="mt-4 text-body-lg text-white/80 max-w-xl mx-auto">Apply in 5 minutes. We follow up within 1 business day.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/apply" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">Apply Now</Button>
              <Button href="/naas/pricing" variant="tertiary" size="lg" className="text-white hover:text-white/80">See Pricing</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
