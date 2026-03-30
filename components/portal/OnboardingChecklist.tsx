"use client";

import { cn } from "@/lib/utils";

type StepStatus = "complete" | "in_progress" | "pending";

export interface OnboardingStep {
  label: string;
  status: StepStatus;
  /** Optional action label + URL */
  action?: { label: string; href: string };
  /** Extra description shown under the label */
  description?: string;
}

interface OnboardingChecklistProps {
  steps: OnboardingStep[];
  className?: string;
}

const statusConfig: Record<StepStatus, { icon: React.ReactNode; labelColor: string; bg: string; border: string }> = {
  complete: {
    icon: (
      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
    ),
    labelColor: "text-brand-black line-through opacity-60",
    bg: "bg-teal",
    border: "border-teal",
  },
  in_progress: {
    icon: (
      <svg className="h-5 w-5 text-white animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    ),
    labelColor: "text-brand-black font-semibold",
    bg: "bg-coral",
    border: "border-coral",
  },
  pending: {
    icon: null,
    labelColor: "text-brand-gray-dark",
    bg: "bg-white",
    border: "border-gray-200",
  },
};

export function OnboardingChecklist({ steps, className }: OnboardingChecklistProps) {
  const completed = steps.filter((s) => s.status === "complete").length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <div className={cn("rounded-card-lg bg-white p-6 shadow-card", className)}>
      {/* Progress header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-h3-sm font-semibold text-brand-black">Onboarding Checklist</h2>
          <span className="text-caption font-semibold text-coral">{completed}/{steps.length} complete</span>
        </div>
        <div className="h-2 w-full rounded-full bg-brand-gray-light overflow-hidden">
          <div
            className="h-full rounded-full bg-coral transition-all duration-500"
            style={{ width: `${pct}%` }}
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${pct}% complete`}
          />
        </div>
      </div>

      {/* Steps */}
      <ol className="space-y-4">
        {steps.map((step, i) => {
          const config = statusConfig[step.status];
          return (
            <li key={i} className="flex items-start gap-4">
              {/* Status indicator */}
              <div
                className={cn(
                  "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2",
                  config.bg,
                  config.border
                )}
                aria-label={step.status.replace("_", " ")}
              >
                {config.icon ?? (
                  <span className="text-caption font-semibold text-brand-gray-dark">{i + 1}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className={cn("text-body", config.labelColor)}>{step.label}</p>
                {step.description && (
                  <p className="mt-0.5 text-caption text-brand-gray-dark">{step.description}</p>
                )}
                {step.action && step.status !== "complete" && (
                  <a
                    href={step.action.href}
                    className="mt-2 inline-flex items-center gap-1 text-caption font-semibold text-coral hover:underline focus-ring rounded-sm"
                  >
                    {step.action.label}
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default OnboardingChecklist;
