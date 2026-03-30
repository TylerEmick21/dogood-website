import type { Metadata } from "next";
import { ICPPageTemplate } from "@/components/sections/ICPPageTemplate";

export const metadata: Metadata = {
  title: "NaaS for Film & Arts — Fiscal Sponsorship for Creatives",
  description:
    "Fiscal sponsorship for filmmakers, artists, and creatives. Unlock donors and grants without starting a nonprofit.",
  keywords: ["fiscal sponsorship for artists", "film fiscal sponsorship", "fiscal sponsorship documentary", "arts nonprofit alternative"],
};

const Icon = ({ d }: { d: string }) => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function ForArtistsPage() {
  return (
    <ICPPageTemplate
      data={{
        headline: "Fund your project. Keep your focus.",
        subhead: "Fiscal sponsorship for filmmakers, artists, and creatives who want to raise money — not paperwork.",
        bgColor: "black",

        painHeadline: "You don't need to start a nonprofit to get the grants and donors your project deserves.",
        painBody:
          "Most arts grants and major donors require a 501(c)(3) affiliation — but forming your own nonprofit takes months, costs thousands, and buries you in compliance overhead. Fiscal sponsorship is the industry-standard solution. Do Good makes it fast, affordable, and simple so you can focus on the project, not the paperwork.",

        solutionHeadline: "The same 501(c)(3) backing that major productions use — in days, not months.",
        solutionBody:
          "Do Good NaaS provides the fiscal sponsorship infrastructure that independent film and arts projects need to unlock donors, apply for grants, and accept tax-deductible contributions — without forming a standalone nonprofit. We've helped feature films, documentaries, and art projects raise meaningful money fast. We'll do the same for yours.",

        features: [
          { icon: <Icon d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />, title: "Production Fund Setup", description: "Your project gets its own named fund with a donation page, ready to share with donors and grant committees.", accent: "coral" },
          { icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "Grant Eligibility", description: "With a 501(c)(3) fiscal sponsor, you're eligible for arts grants, foundations, and institutional funders.", accent: "teal" },
          { icon: <Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Tax-Deductible Donations", description: "Individual donors can give tax-deductibly to your film or project. Major donors expect this.", accent: "sky" },
          { icon: <Icon d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />, title: "Donor-Facing Fund Page", description: "A clean, shareable page with your project description, impact story, and FundraiseUp donation widget.", accent: "marigold" },
          { icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />, title: "Compliance Documentation", description: "Fiscal sponsorship letters, IRS determination letter, and compliance docs — available in your portal.", accent: "teal" },
          { icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />, title: "Fast Turnaround", description: "If you have a grant deadline or campaign launch, we'll prioritize your setup. Most projects are live in 3–7 days.", accent: "coral" },
        ],

        steps: [
          { title: "Apply with your project", body: "Tell us about your film, art project, or creative initiative. We review quickly — grant deadlines don't wait." },
          { title: "Get your fiscal sponsorship letter", body: "Once approved, you receive a formal fiscal sponsorship letter from Do Good Foundation — exactly what grant committees and institutional donors need." },
          { title: "Raise for your project", body: "Share your fund page, send it to donors, attach it to grant applications. All donations are tax-deductible. You receive monthly disbursements net of fees." },
        ],

        testimonial: {
          quote: "We raised $15,000 — including $8K in the first 10 days. The fiscal sponsorship backing from Do Good made donors feel confident their gift was tax-deductible. It changed the dynamics of every conversation.",
          name: "What You Deserve",
          organization: "Independent Film",
          result: "$15K raised — $8K in first 10 days",
        },

        faq: [
          { question: "What types of arts projects qualify?", answer: "Feature films, documentaries, short films, theater productions, visual art projects, music recordings, literary works, and more. If it's a charitable creative endeavor, we can likely sponsor it." },
          { question: "Can I use my fiscal sponsorship letter for grant applications?", answer: "Yes. We provide a formal fiscal sponsorship letter on Do Good Foundation letterhead, including our EIN (85-4368754), which is the standard documentation required by most arts funders." },
          { question: "What happens to the fund after my project wraps?", answer: "You can close the fund once your project is complete and funds are disbursed. We'll document the closure properly for your records." },
          { question: "Can we run a crowdfunding campaign on top of this?", answer: "Yes. Many clients run a Kickstarter or Indiegogo for rewards-based giving in parallel with their Do Good fund for tax-deductible donations. They're complementary." },
          { question: "What if I have a hard grant deadline coming up?", answer: "Tell us on your application. We prioritize urgent cases and can often complete setup faster than our standard timeline." },
        ],
      }}
    />
  );
}
