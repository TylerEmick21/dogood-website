import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PricingTable } from "@/components/ui/PricingTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing — Simple, Transparent NaaS Pricing",
  description:
    "$25/month to get started. Rates drop as you grow. See exactly what's included in each Do Good NaaS tier.",
};

const TIERS = [
  {
    name: "Starter",
    threshold: "Under $100K raised/year",
    monthlyFee: "$25",
    rate: "5%",
    features: [
      "Fiscal sponsorship under Do Good Foundation 501(c)(3)",
      "Tax-deductible donation processing",
      "Branded fund page (dogoodnaas.com/funds/[slug])",
      "FundraiseUp or Give Lively donation embed",
      "Automatic donor receipts",
      "IRS + audit compliance",
      "Client portal (donations, documents, billing)",
      "Monthly disbursements",
      "Welcome Packet + onboarding resources",
      "Email support",
    ],
    cta: { label: "Apply Now", href: "/apply" },
  },
  {
    name: "Growth",
    threshold: "$100K+ raised/year",
    monthlyFee: "$50",
    rate: "4%",
    features: [
      "Everything in Starter",
      "Reduced platform rate (4% vs. 5%)",
      "Priority email + chat support",
      "Grant application guidance",
      "Advanced donation analytics",
      "Referral program participation",
      "Quarterly account review",
    ],
    cta: { label: "Apply Now", href: "/apply" },
    highlighted: true,
  },
  {
    name: "Impact",
    threshold: "$250K+ raised/year",
    monthlyFee: "Custom",
    rate: "3%",
    features: [
      "Everything in Growth",
      "Lowest platform rate (3%)",
      "Dedicated account manager",
      "Custom integration support",
      "Strategic fundraising guidance",
      "White-glove onboarding",
      "Custom reporting",
      "SLA-backed support",
    ],
    cta: { label: "Talk to Us", href: "/apply" },
  },
];

const FAQ = [
  { question: "What's included in every tier?", answer: "All tiers include fiscal sponsorship, tax-deductible donation processing, a branded fund page, automatic donor receipts, IRS compliance, the client portal, and monthly disbursements. There are no hidden fees beyond the platform rate and payment processing." },
  { question: "Can I pay annually instead of monthly?", answer: "Annual billing is available and saves you one month's platform fee. Contact us after you're approved to set up annual billing." },
  { question: "What are the payment processing fees?", answer: "Payment processing is handled by FundraiseUp (via Stripe) and is separate from the platform fee. Cards: ~2.9% + $0.30 per transaction. ACH bank transfers: ~1%. These fees are charged to the transaction, not billed to you separately." },
  { question: "Do donors pay the processing fees?", answer: "Optionally, yes. FundraiseUp's checkout gives donors the ability to cover processing fees. On average, 10–40% of donors opt in to cover fees — which means more net dollars to your fund." },
  { question: "When do tier changes happen?", answer: "Tier upgrades are automatic when your annual raised amount crosses the threshold. We review quarterly and notify you before applying a tier change. You're never charged retroactively." },
  { question: "What if my donations go down and I fall below a threshold?", answer: "Tier downgrades are also applied automatically at the next quarterly review if your annual pace falls below the threshold. You'll always be on the most favorable tier you qualify for." },
  { question: "Is there a setup fee?", answer: "No setup fee. You pay the monthly platform fee starting from the month your fund goes live." },
  { question: "What happens if I cancel?", answer: "Month-to-month means 30 days' notice to cancel. Remaining funds are disbursed within 60 days. We'll help you wind down cleanly." },
];

const COMPARISON_ROWS = [
  { label: "Launch timeline", dogood: "3–7 days", own501c3: "6–18 months" },
  { label: "Legal setup cost", dogood: "$0", own501c3: "$2,000–$10,000" },
  { label: "IRS application", dogood: "Not required", own501c3: "Form 1023 required" },
  { label: "Board required", dogood: "No", own501c3: "Yes (minimum 3 members)" },
  { label: "Annual 990 filing", dogood: "We handle it", own501c3: "You handle it (CPA cost)" },
  { label: "Ongoing legal overhead", dogood: "None", own501c3: "Ongoing ($500–$3,000/yr)" },
  { label: "Donor receipts", dogood: "Automatic", own501c3: "You must send manually" },
  { label: "Start raising funds", dogood: "This week", own501c3: "After IRS approval" },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-brand-black py-20 text-center text-white">
          <div className="section-container">
            <h1 className="text-display-lg font-bold text-white">Simple, transparent pricing.</h1>
            <p className="mt-4 text-body-lg text-white/75 max-w-xl mx-auto">
              $25/month to get started. Rates drop as you grow. No long-term contracts.
            </p>
          </div>
        </section>

        {/* Pricing table */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="pricing-tiers">
          <div className="section-container">
            <h2 id="pricing-tiers" className="sr-only">Pricing Tiers</h2>
            <PricingTable
              tiers={TIERS}
              footnote="Tier upgrades are automatic when you cross a threshold. Payment processing fees (~2.9% + $0.30 cards, ~1% ACH) are separate and charged per transaction."
            />
          </div>
        </section>

        {/* Fee example calculator */}
        <section className="section-y bg-white" aria-labelledby="fee-example">
          <div className="section-container max-w-content-narrow">
            <h2 id="fee-example" className="text-center">What Do the Fees Look Like in Practice?</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark">
              A real example at the Starter tier.
            </p>
            <div className="mt-10 rounded-card-lg bg-brand-gray-light p-8 border border-gray-200">
              <p className="text-caption font-semibold uppercase tracking-wider text-brand-gray-dark mb-6">Example: $5,000/month in donations</p>
              <div className="space-y-3">
                {[
                  { label: "Gross donations", value: "$5,000.00", highlight: false },
                  { label: "Platform fee (5%)", value: "−$250.00", highlight: false },
                  { label: "Payment processing (~2.9% + $0.30/txn, avg)", value: "−$155.00", highlight: false },
                  { label: "Monthly platform subscription", value: "−$25.00", highlight: false },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-body text-brand-gray-dark">{row.label}</span>
                    <span className="text-body font-semibold text-brand-black">{row.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-3 mt-2 rounded-btn bg-teal-light px-4">
                  <span className="text-body font-bold text-brand-black">Net disbursed to you</span>
                  <span className="text-h3-sm font-bold text-teal">$4,570.00</span>
                </div>
              </div>
              <p className="mt-4 text-caption text-brand-gray-dark">
                *Processing fee estimate assumes avg $100 donation × 50 donors. Actual varies by transaction size and method. Donors can opt to cover processing fees at checkout.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="comparison">
          <div className="section-container">
            <h2 id="comparison" className="text-center">Do Good NaaS vs. Forming Your Own 501(c)(3)</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark max-w-xl mx-auto">
              The numbers speak for themselves.
            </p>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse">
                <thead>
                  <tr>
                    <th className="pb-4 text-left text-caption font-semibold uppercase tracking-wider text-brand-gray-dark w-1/3"></th>
                    <th className="pb-4 text-center text-caption font-semibold uppercase tracking-wider text-coral w-1/3">[Do Good] NaaS</th>
                    <th className="pb-4 text-center text-caption font-semibold uppercase tracking-wider text-brand-gray-dark w-1/3">Own 501(c)(3)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.label} className="hover:bg-white transition-colors">
                      <td className="py-3 pr-4 text-body font-medium text-brand-black">{row.label}</td>
                      <td className="py-3 px-4 text-center text-body font-semibold text-coral">{row.dogood}</td>
                      <td className="py-3 pl-4 text-center text-body text-brand-gray-dark">{row.own501c3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y bg-white" aria-labelledby="pricing-faq">
          <div className="section-container max-w-content-narrow">
            <h2 id="pricing-faq" className="text-center">Pricing FAQs</h2>
            <div className="mt-10">
              <FAQAccordion items={FAQ} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-coral py-20 text-center">
          <div className="section-container">
            <h2 className="text-white text-display-lg font-bold">$25/month to start. No risk.</h2>
            <p className="mt-4 text-body-lg text-white/80 max-w-lg mx-auto">
              No setup fee. No long-term contract. Month-to-month. Cancel anytime with 30 days&apos; notice.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/apply" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">Apply Now</Button>
              <Button href="/apply#book" variant="tertiary" size="lg" className="text-white hover:text-white/80">Book a Call First</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
