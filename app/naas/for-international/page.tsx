import type { Metadata } from "next";
import { ICPPageTemplate } from "@/components/sections/ICPPageTemplate";

export const metadata: Metadata = {
  title: "NaaS for International Organizations — Access the U.S. Donor Market",
  description:
    "U.S. fiscal sponsorship for international nonprofits. Issue tax-deductible receipts and access the world's largest philanthropic market.",
  keywords: ["US fiscal sponsorship for international nonprofits", "501c3 for international organizations", "US donor market access"],
};

const Icon = ({ d }: { d: string }) => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function ForInternationalPage() {
  return (
    <ICPPageTemplate
      data={{
        headline: "Your mission is global. Your funding should be too.",
        subhead: "The U.S. is the world's largest philanthropic market. Do Good gives international organizations access to it.",
        bgColor: "teal",

        painHeadline: "You don't need a U.S. office or board to raise tax-deductible donations from U.S. donors.",
        painBody:
          "U.S. donors can only claim a tax deduction when they give to a registered 501(c)(3). Without that status, your organization is locked out of the world's largest philanthropic market — regardless of how important your work is. Forming a U.S. nonprofit takes 6–18 months and costs thousands. Do Good gives you a compliant U.S. legal home in days.",

        solutionHeadline: "A U.S. 501(c)(3) legal home — without the cost or wait.",
        solutionBody:
          "Do Good NaaS acts as your U.S. fiscal sponsor, giving your international organization the ability to accept tax-deductible donations from U.S. donors, qualify for U.S.-based grants, and receive formal 501(c)(3) documentation — without forming a U.S. entity. We handle the regulatory compliance. You focus on your global mission.",

        features: [
          { icon: <Icon d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />, title: "U.S. Legal Home", description: "Your fund operates under Do Good Foundation's 501(c)(3) status — your U.S. legal and compliance anchor.", accent: "coral" },
          { icon: <Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Tax-Deductible U.S. Donations", description: "U.S. donors can now give to your cause and claim their deduction. Remove the biggest barrier to major gifts.", accent: "teal" },
          { icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "Regulatory Compliance", description: "IRS requirements, donor receipts, and annual 990 filing — all handled by Do Good Foundation.", accent: "sky" },
          { icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />, title: "Grant Documentation", description: "Formal fiscal sponsorship letters and 501(c)(3) documentation for U.S. grant applications.", accent: "marigold" },
          { icon: <Icon d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />, title: "International Disbursements", description: "We disburse net funds to your international bank account via wire transfer on a monthly basis.", accent: "coral" },
          { icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />, title: "Fast Setup", description: "Be ready to accept U.S. donations in days — not the 6–18 months it takes to form a U.S. entity.", accent: "teal" },
        ],

        steps: [
          { title: "Apply with your organization details", body: "Tell us about your international organization, your mission, and the programs you want to fund through U.S. donations. We'll confirm eligibility on a call." },
          { title: "Sign your MSA and get your documentation", body: "Once approved, sign your Master Sponsorship Agreement. We issue a formal fiscal sponsorship letter and set up your U.S. fund page." },
          { title: "Start receiving U.S. donations", body: "Share your fund link with U.S. donors, diaspora communities, and foundations. They give tax-deductibly. You receive monthly disbursements in your home currency." },
        ],

        faq: [
          { question: "Can any international organization apply?", answer: "Most can. We evaluate each application based on mission alignment, charitable purpose, and operational capacity. We do not work with organizations in OFAC-sanctioned jurisdictions." },
          { question: "How are funds sent internationally?", answer: "We disburse via international wire transfer to your bank account. Wire fees vary by destination country. We'll discuss your specific situation on the onboarding call." },
          { question: "Do U.S. donors need to know we're an international organization?", answer: "Your fund page is transparent about who you are. Donors give to Do Good Foundation for the benefit of your international program — which is the standard structure for international fiscal sponsorship." },
          { question: "Can we apply for U.S.-based grants with this?", answer: "Yes. Our fiscal sponsorship documentation satisfies the 501(c)(3) requirement for most U.S. private foundations and grant programs." },
          { question: "What currencies can donors give in?", answer: "U.S. dollars only, via FundraiseUp (credit card or ACH). International donors can also give in USD. Disbursements to your account are in USD; your bank handles currency conversion." },
          { question: "Is there a higher fee for international organizations?", answer: "No. The same Starter/Growth/Impact pricing applies. International wire transfer fees are charged at cost and deducted from disbursements." },
        ],
      }}
    />
  );
}
