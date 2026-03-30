import type { Metadata } from "next";
import { ICPPageTemplate } from "@/components/sections/ICPPageTemplate";

export const metadata: Metadata = {
  title: "NaaS for Faith-Led Founders — Launch Your Community Impact Fund",
  description:
    "Fiscal sponsorship for churches, faith communities, and values-driven businesses. Launch a Community Impact Fund in a day — no IRS paperwork.",
  keywords: ["fiscal sponsorship for churches", "nonprofit for faith organizations", "community impact fund"],
};

const Icon = ({ d }: { d: string }) => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function FaithFoundersPage() {
  return (
    <ICPPageTemplate
      data={{
        headline: "Launch your Community Impact Fund. In a day.",
        subhead: "Values-driven leaders shouldn't have to choose between purpose and profit. We make both easy.",
        bgColor: "teal",

        painHeadline: "You don't need 18 months of IRS paperwork to create real community impact.",
        painBody:
          "Faith-led leaders know their community's needs better than anyone. What they don't know — and shouldn't have to — is how to navigate 501(c)(3) applications, find board members, or set up compliant donation processing. Do Good removes every one of those barriers so you can focus on the work.",

        solutionHeadline: "Your foundation. Our infrastructure.",
        solutionBody:
          "Whether you're a church launching a scholarship fund, a faith-based business building a community giving program, or a values-driven founder adding impact to your brand — Do Good NaaS gives you a fully compliant, tax-deductible donation infrastructure in days, not months. Your donors give with confidence. Your community sees the impact.",

        features: [
          { icon: <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Fast-Track Fiscal", description: "Launch your Community Impact Fund under our 501(c)(3) in days. Intake, donation page, compliance — all handled.", accent: "coral" },
          { icon: <Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Tax-Deductible Donations", description: "Every gift to your fund is tax-deductible. Donors get automatic receipts from Do Good Foundation.", accent: "teal" },
          { icon: <Icon d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />, title: "Community Programs", description: "Scholarships, benevolence funds, community events — one fiscal sponsor handles it all.", accent: "sky" },
          { icon: <Icon d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />, title: "Fundraising Tools", description: "Branded fund page, donation widget, campaign analytics — all included in your plan.", accent: "marigold" },
          { icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "Built-in Compliance", description: "IRS rules, donor receipts, and audit readiness — handled by us so you never have to worry.", accent: "teal" },
          { icon: <Icon d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />, title: "Grants + Discounts", description: "Access Google Ad Grants, nonprofit software pricing, and donor matching programs.", accent: "coral" },
        ],

        steps: [
          { title: "Apply with your mission", body: "Tell us about your community program or impact initiative. We'll review within 1 business day and schedule a call." },
          { title: "Sign your MSA and go live", body: "Once approved, sign the Master Sponsorship Agreement. We build your fund page and donation widget — you're live in days." },
          { title: "Share and raise", body: "Share your fund link with your congregation, network, or community. Donors give online, tax-deductibly. Monthly disbursements hit your account." },
        ],

        testimonial: {
          quote: "We launched a global giving campaign in under 7 days. The speed and simplicity were unlike anything we'd experienced. Our community showed up — because it was easy for them to.",
          name: "Community Partner",
          organization: "Faith-Led Business",
          result: "Live in under 7 days",
        },

        faq: [
          { question: "Can a church apply for fiscal sponsorship?", answer: "Yes. Churches and faith-based organizations are among our most common applicants. Your fund operates under Do Good Foundation's 501(c)(3) status." },
          { question: "Can we run multiple programs under one fund?", answer: "Yes — scholarships, benevolence, community events, and more can all flow through a single fund. We'll discuss scope on your onboarding call." },
          { question: "Do we need to change our own nonprofit status?", answer: "No. If you already have a nonprofit, fiscal sponsorship through Do Good is additive — not a replacement. It's a fast way to launch new programs without burdening your existing structure." },
          { question: "What if our donors are also church members?", answer: "That's fine. Donors give to Do Good Foundation for the benefit of your fund. They get a proper tax receipt regardless of their relationship to your organization." },
          { question: "Is there a minimum fundraising amount?", answer: "No minimums. The Starter plan is $25/month + 5% of donations. If you raise $500/month, your fee is $50. If you raise $0, you just pay the $25 subscription." },
        ],
      }}
    />
  );
}
