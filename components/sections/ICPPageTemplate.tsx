import { HeroSection } from "@/components/ui/HeroSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export interface ICPFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: "coral" | "teal" | "sky" | "marigold";
}

export interface ICPStep {
  title: string;
  body: string;
}

export interface ICPTestimonial {
  quote: string;
  name: string;
  title?: string;
  organization: string;
  result?: string;
}

export interface ICPPageData {
  headline: string;
  subhead: string;
  /** "You don't need to [pain] to [outcome]" */
  painHeadline: string;
  painBody: string;
  /** How Do Good solves their specific problem */
  solutionHeadline: string;
  solutionBody: string;
  features: ICPFeature[];
  steps: ICPStep[];
  testimonial?: ICPTestimonial;
  faq: FAQItem[];
  bgColor?: "coral" | "teal" | "black";
}

export function ICPPageTemplate({ data }: { data: ICPPageData }) {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <HeroSection
          headline={data.headline}
          subhead={data.subhead}
          primaryCta={{ label: "Apply Now", href: "/apply" }}
          secondaryCta={{ label: "How It Works", href: "/naas/how-it-works" }}
          bgColor={data.bgColor ?? "black"}
        />

        {/* Pain → Outcome reframe */}
        <section className="section-y bg-white" aria-labelledby="pain-reframe">
          <div className="section-container max-w-content-narrow text-center">
            <h2 id="pain-reframe" className="text-display-lg font-bold text-brand-black">
              {data.painHeadline}
            </h2>
            <p className="mt-6 text-body-lg text-brand-gray-dark leading-relaxed">{data.painBody}</p>
          </div>
        </section>

        {/* How Do Good solves it */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="solution">
          <div className="section-container max-w-content-narrow">
            <h2 id="solution" className="text-center">{data.solutionHeadline}</h2>
            <p className="mt-6 text-body-lg text-brand-gray-dark leading-relaxed text-center">{data.solutionBody}</p>
          </div>
        </section>

        {/* Testimonial / Case Study */}
        {data.testimonial && (
          <section className="section-y bg-white" aria-labelledby="case-study">
            <div className="section-container max-w-content-narrow">
              <h2 id="case-study" className="text-center mb-8">Real Results</h2>
              <TestimonialCard {...data.testimonial} />
            </div>
          </section>
        )}

        {/* Features — filtered for this ICP */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="features">
          <div className="section-container">
            <h2 id="features" className="text-center">What You Get</h2>
            <p className="mt-4 text-center text-body-lg text-brand-gray-dark">Built specifically for how you work.</p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.map((f) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} accent={f.accent} />
              ))}
            </div>
          </div>
        </section>

        {/* 3-step "How it works for you" */}
        <section className="section-y bg-white" aria-labelledby="how-for-you">
          <div className="section-container">
            <h2 id="how-for-you" className="text-center">How It Works for You</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {data.steps.map((step, i) => (
                <div key={i} className="relative rounded-card-lg bg-brand-gray-light p-8">
                  <span className="absolute -top-4 left-6 text-6xl font-bold text-coral/10 leading-none select-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-h3-sm font-semibold text-brand-black">{step.title}</h3>
                  <p className="mt-3 text-body text-brand-gray-dark">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="faq">
          <div className="section-container max-w-content-narrow">
            <h2 id="faq" className="text-center">Your Questions, Answered</h2>
            <div className="mt-10">
              <FAQAccordion items={data.faq} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-coral py-20 text-center">
          <div className="section-container">
            <h2 className="text-white text-display-lg font-bold">Ready to launch?</h2>
            <p className="mt-4 text-body-lg text-white/80 max-w-lg mx-auto">
              Apply in 5 minutes. No cost. We&apos;ll follow up within 1 business day.
            </p>
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
