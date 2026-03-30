import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ApplyForm } from "@/components/sections/ApplyForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Apply — Let's See If We're a Good Fit",
  description:
    "Tell us about your project and we'll be in touch within 1 business day. No cost to apply.",
};

const SOCIAL_PROOF = [
  { quote: "We were live and accepting donations in under 7 days. Unbelievable speed.", org: "Sun Country Airlines" },
  { quote: "We raised $8K in our first 10 days. The fiscal sponsorship backing made all the difference.", org: "What You Deserve (Film)" },
  { quote: "Do Good helped us turn goodwill into a real revenue stream within 30 days.", org: "UnCharitable (Documentary)" },
];

const FAQ = [
  { question: "What happens after I apply?", answer: "We review your application, usually within 1 business day. If it's a fit, you'll book a 20-minute call with our team. We'll answer your questions, confirm the package, and walk you through next steps." },
  { question: "Is there a cost to apply?", answer: "No. Applying is completely free. You only pay the monthly platform fee once your fund is live and accepting donations." },
  { question: "How fast can I get started?", answer: "Most clients are live within 3–7 business days of signing their MSA. The fastest we've done it is under 24 hours for urgent campaign launches." },
  { question: "What if I'm not approved?", answer: "If we can't sponsor your project, we'll tell you why and suggest alternatives where possible. Our approval criteria are based on mission alignment, not ability to pay." },
  { question: "Do I need a business or organization already formed?", answer: "Not necessarily. Individuals can apply for fiscal sponsorship for a project or cause. We'll discuss the specifics on the call." },
];

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="section-y bg-brand-gray-light min-h-screen">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:items-start">

              {/* Left: form */}
              <div>
                <h1 className="text-display-lg font-bold text-brand-black">
                  Let&apos;s see if we&apos;re a good fit.
                </h1>
                <p className="mt-4 text-body-lg text-brand-gray-dark">
                  Tell us about your project and we&apos;ll be in touch within 1 business day. No cost to apply.
                </p>

                <div className="mt-8 rounded-card-lg bg-white p-8 shadow-card">
                  <ApplyForm />
                </div>

                {/* FAQ below form */}
                <div className="mt-14">
                  <h2 className="text-h3 font-semibold text-brand-black">Common Questions</h2>
                  <div className="mt-6">
                    <FAQAccordion items={FAQ} />
                  </div>
                </div>
              </div>

              {/* Right: social proof sidebar */}
              <aside className="lg:sticky lg:top-24 space-y-6">
                <div className="rounded-card-lg bg-white p-6 shadow-card border-l-4 border-coral">
                  <p className="text-caption font-semibold uppercase tracking-wider text-coral mb-4">What clients say</p>
                  <div className="space-y-6">
                    {SOCIAL_PROOF.map((item) => (
                      <blockquote key={item.org}>
                        <p className="text-body text-brand-black leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                        <footer className="mt-2 text-caption font-semibold text-brand-gray-dark">— {item.org}</footer>
                      </blockquote>
                    ))}
                  </div>
                </div>

                <div className="rounded-card-lg bg-teal-light p-6 border border-teal/20">
                  <p className="text-h3-sm font-semibold text-brand-black">What happens next?</p>
                  <ol className="mt-4 space-y-3">
                    {[
                      "We review your application (1 business day)",
                      "You book a 20-min call with our team",
                      "If it's a match, we send your MSA",
                      "Your fund page goes live in 3–7 days",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal text-white text-caption font-bold">{i + 1}</span>
                        <span className="text-body text-brand-black">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-card-lg bg-white p-6 shadow-card text-center">
                  <p className="text-body text-brand-gray-dark">Questions before you apply?</p>
                  <a
                    href="mailto:hello@dogoodnaas.com"
                    className="mt-2 inline-block text-body font-semibold text-coral hover:underline"
                  >
                    hello@dogoodnaas.com
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
