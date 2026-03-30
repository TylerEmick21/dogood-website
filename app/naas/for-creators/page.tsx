import type { Metadata } from "next";
import { ICPPageTemplate } from "@/components/sections/ICPPageTemplate";

export const metadata: Metadata = {
  title: "NaaS for Creators — Your Foundation-in-a-Day",
  description:
    "Turn your audience's generosity into tax-deductible impact. Launch a creator foundation without starting a nonprofit from scratch.",
  keywords: ["creator foundation", "start a nonprofit as a creator", "influencer nonprofit", "creator giving fund"],
};

const Icon = ({ d }: { d: string }) => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function ForCreatorsPage() {
  return (
    <ICPPageTemplate
      data={{
        headline: "Your Foundation-in-a-Day. No board. No IRS.",
        subhead: "Turn your audience's generosity into tax-deductible impact — without starting a nonprofit from scratch.",
        bgColor: "coral",

        painHeadline: "You don't need to form a nonprofit to give your audience a meaningful way to give.",
        painBody:
          "Your audience is ready to support causes you care about — but directing them to a random GoFundMe doesn't feel right, and forming your own 501(c)(3) takes months and costs thousands. Do Good gives you a branded, compliant, tax-deductible giving experience in days. Your community gives. Your cause gets funded. You stay focused on creating.",

        solutionHeadline: "A foundation with your name on it. Our legal and financial infrastructure underneath.",
        solutionBody:
          "Do Good NaaS gives creators and community builders a branded fund that looks and feels like their own foundation — with Do Good Foundation's 501(c)(3) status powering the tax-deductible receipts, compliance, and disbursements. Your donors get a real tax deduction. You get a new revenue stream that's aligned with your values.",

        features: [
          { icon: <Icon d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />, title: "Branded Fund Page", description: "Your name, your cause, your story — hosted on Do Good with your donation widget embedded.", accent: "coral" },
          { icon: <Icon d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />, title: "Campaign Tools", description: "Launch giving campaigns tied to milestones, videos, or events. FundraiseUp supports livestream giving.", accent: "teal" },
          { icon: <Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Tax-Deductible Giving", description: "Your donors get real tax receipts. That's a meaningful reason for high-earner fans to give more.", accent: "sky" },
          { icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "Zero Compliance Burden", description: "No 990 filings, no board meetings, no IRS correspondence. We handle all of it.", accent: "marigold" },
          { icon: <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />, title: "Real-Time Analytics", description: "See donations as they come in. Track campaign performance from your client portal.", accent: "coral" },
          { icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />, title: "Fast Launch", description: "Most creator funds are live within 3–7 days. When you announce your campaign, the link works.", accent: "teal" },
        ],

        steps: [
          { title: "Apply with your cause", body: "Tell us who you are and what your fund is for. We'll review it within 1 business day. Most creators are approved on the first call." },
          { title: "We build your fund", body: "We set up your branded fund page with your donation widget. You get a clean URL to share with your audience (dogoodnaas.com/funds/your-name)." },
          { title: "Announce and raise", body: "Drop the link in your bio, your next video, your newsletter. Donations are tax-deductible. Monthly disbursements go straight to your account." },
        ],

        faq: [
          { question: "Can I use this for any cause I care about?", answer: "Yes, as long as it aligns with Do Good Foundation's charitable mission. We work with causes across education, arts, community development, health, and more." },
          { question: "Can I run multiple campaigns under one fund?", answer: "Yes. You can run seasonal campaigns, milestone-based giving drives, or evergreen fundraising — all under the same fund." },
          { question: "What about livestream donations?", answer: "FundraiseUp supports real-time donation notifications and can be integrated with streaming setups. We'll walk you through the options on your onboarding call." },
          { question: "Can I put the donate link in my Instagram bio?", answer: "Yes. Your fund URL is shareable anywhere — bio link, YouTube description, newsletter, TikTok. It works on mobile." },
          { question: "Do I need a separate business entity?", answer: "No. Individuals can apply. We just need to understand your cause and confirm it's a charitable purpose." },
        ],
      }}
    />
  );
}
