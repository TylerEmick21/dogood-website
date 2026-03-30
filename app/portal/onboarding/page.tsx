import type { Metadata } from "next";
import { MOCK_USER } from "@/lib/auth";
import { OnboardingChecklist } from "@/components/portal/OnboardingChecklist";
import type { OnboardingStep } from "@/components/portal/OnboardingChecklist";

export const metadata: Metadata = {
  title: "Onboarding — Client Portal",
};

const steps: OnboardingStep[] = [
  {
    label: "MSA agreement signed",
    status: "complete",
  },
  {
    label: "Intake form submitted",
    status: "complete",
  },
  {
    label: "Kickoff call scheduled / completed",
    status: "complete",
  },
  {
    label: "Fund page reviewed and approved",
    status: "in_progress",
    action: { label: "Review Fund Page", href: "/portal/fund-page" },
  },
  {
    label: '"Powered by Do Good" added to your website',
    status: "pending",
    description:
      "Add our attribution badge to your website's footer or donation page.",
  },
  {
    label: "FundraiseUp account set up (optional)",
    status: "pending",
  },
  {
    label: "First donation received",
    status: "pending",
  },
  {
    label: "Project plan submitted",
    status: "pending",
    action: { label: "Upload Project Plan", href: "/portal/documents" },
  },
  {
    label: "Referral program explained",
    status: "pending",
    description:
      "Learn how to earn credits by referring other organizations to Do Good.",
  },
];

export default function OnboardingPage() {
  // MOCK_USER imported to gate this page; swap with Clerk session in production
  void MOCK_USER;

  return (
    <div className="px-6 py-8 md:px-8 md:py-10 max-w-content-narrow mx-auto">
      <h1 className="text-h2-sm font-semibold text-brand-black mb-2">Onboarding</h1>
      <p className="text-body text-brand-gray-dark mb-8">
        Complete each step to get your fund fully set up and live.
      </p>

      <OnboardingChecklist steps={steps} />
    </div>
  );
}
