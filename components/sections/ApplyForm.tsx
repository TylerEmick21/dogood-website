"use client";

import { useState, useEffect } from "react";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { getStoredUTM, utmToHubSpotFields } from "@/lib/utm";
import { trackApplyFormSubmit, trackCTAClick, attachCalendlyListener, EVENTS, trackEvent } from "@/lib/analytics";

const ORG_TYPES = [
  "Faith-based organization",
  "Creator / Community",
  "Film / Arts",
  "International Nonprofit",
  "SMB / Startup",
  "Other",
];

const HEAR_ABOUT = [
  "Google search",
  "Social media",
  "Referral from a friend or colleague",
  "Existing Do Good client",
  "LinkedIn",
  "Podcast or media",
  "Event or conference",
  "Other",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  orgName: string;
  orgType: string;
  country: string;
  mission: string;
  hearAbout: string;
}

const EMPTY: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  orgName: "",
  orgType: "",
  country: "",
  mission: "",
  hearAbout: "",
};

function InputField({
  label,
  id,
  required,
  hint,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body font-semibold text-brand-black">
        {label}
        {required && <span className="ml-1 text-coral" aria-hidden="true">*</span>}
      </label>
      {hint && <p className="text-caption text-brand-gray-dark">{hint}</p>}
      {children}
    </div>
  );
}

const fieldBase =
  "w-full rounded-btn border border-gray-200 bg-white px-4 py-3 text-body text-brand-black placeholder:text-brand-gray-dark focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition";

export function ApplyForm() {
  const [stage, setStage] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Track form start on first interaction
  const [started, setStarted] = useState(false);
  function handleFirstInteraction() {
    if (!started) {
      setStarted(true);
      trackEvent(EVENTS.APPLY_FORM_START);
    }
  }

  // Attach Calendly booking listener when stage 2 is shown
  useEffect(() => {
    if (stage !== 2) return;
    const cleanup = attachCalendlyListener();
    return cleanup;
  }, [stage]);

  function set(field: keyof FormData) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      handleFirstInteraction();
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // Gather UTM params from sessionStorage
    const utm = getStoredUTM();
    const utmFields = utmToHubSpotFields(utm);

    const fields = [
      { name: "firstname", value: form.firstName },
      { name: "lastname", value: form.lastName },
      { name: "email", value: form.email },
      { name: "company", value: form.orgName },
      { name: "organization_type", value: form.orgType },
      { name: "country", value: form.country },
      { name: "mission_description", value: form.mission },
      { name: "how_did_you_hear", value: form.hearAbout },
      ...utmFields,
    ];

    try {
      const res = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: "Apply Page",
            // hutk: read from __hssc cookie if present
            hutk: document.cookie
              .split("; ")
              .find((c) => c.startsWith("hubspotutk="))
              ?.split("=")?.[1],
          },
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      // Fire GA4 event
      trackApplyFormSubmit(form.orgType, utm.utm_source);
      trackCTAClick("Apply Form Submit", "/apply", "/apply");

      setStage(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(
        "Something went wrong submitting your application. Please try again or email us at hello@dogoodnaas.com."
      );
      trackEvent(EVENTS.APPLY_FORM_ERROR, { org_type: form.orgType });
    } finally {
      setSubmitting(false);
    }
  }

  if (stage === 2) {
    return (
      <div id="book" className="w-full">
        <div className="mb-8 rounded-card-lg bg-teal-light border border-teal/20 p-6 text-center">
          <p className="text-h3-sm font-semibold text-brand-black">
            You&apos;re in. Let&apos;s talk.
          </p>
          <p className="mt-2 text-body text-brand-gray-dark">
            Book a 20-minute call with our team below.
          </p>
        </div>

        <CalendlyEmbed
          url={
            process.env.NEXT_PUBLIC_CALENDLY_URL ??
            "https://calendly.com/dogood/20min"
          }
          prefill={{
            name: `${form.firstName} ${form.lastName}`.trim(),
            email: form.email,
          }}
        />

        <p className="mt-4 text-center text-body text-brand-gray-dark">
          Not ready to book yet? We&apos;ll follow up via email within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6" noValidate>
      {/* Name row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField label="First Name" id="firstName" required>
          <input
            id="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={set("firstName")}
            className={fieldBase}
            placeholder="Andy"
          />
        </InputField>
        <InputField label="Last Name" id="lastName" required>
          <input
            id="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={set("lastName")}
            className={fieldBase}
            placeholder="Choi"
          />
        </InputField>
      </div>

      <InputField label="Email Address" id="email" required>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={set("email")}
          className={fieldBase}
          placeholder="you@yourorg.com"
        />
      </InputField>

      <InputField label="Organization Name" id="orgName" required>
        <input
          id="orgName"
          type="text"
          required
          value={form.orgName}
          onChange={set("orgName")}
          className={fieldBase}
          placeholder="Your project or organization name"
        />
      </InputField>

      <InputField label="Organization Type" id="orgType" required>
        <select
          id="orgType"
          required
          value={form.orgType}
          onChange={set("orgType")}
          className={cn(fieldBase, "cursor-pointer")}
        >
          <option value="" disabled>
            Select a type…
          </option>
          {ORG_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </InputField>

      <InputField label="Country / Region" id="country" required>
        <input
          id="country"
          type="text"
          required
          autoComplete="country-name"
          value={form.country}
          onChange={set("country")}
          className={fieldBase}
          placeholder="United States"
        />
      </InputField>

      <InputField
        label="One-line mission description"
        id="mission"
        required
        hint="150 characters max. What are you trying to accomplish?"
      >
        <textarea
          id="mission"
          required
          maxLength={150}
          rows={2}
          value={form.mission}
          onChange={set("mission")}
          className={cn(fieldBase, "resize-none")}
          placeholder="We help underrepresented filmmakers tell their stories through fiscal sponsorship and community support."
        />
        <p className="text-right text-caption text-brand-gray-dark">
          {form.mission.length}/150
        </p>
      </InputField>

      <InputField label="How did you hear about us?" id="hearAbout">
        <select
          id="hearAbout"
          value={form.hearAbout}
          onChange={set("hearAbout")}
          className={cn(fieldBase, "cursor-pointer")}
        >
          <option value="">Select…</option>
          {HEAR_ABOUT.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </InputField>

      {error && (
        <p
          role="alert"
          className="rounded-btn bg-red-50 border border-red-200 px-4 py-3 text-body text-red-700"
        >
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={submitting}
        onClick={() =>
          trackCTAClick("Submit Application", "/apply#submit", "/apply")
        }
      >
        {submitting ? "Submitting…" : "Submit Application →"}
      </Button>

      <p className="text-center text-caption text-brand-gray-dark">
        No cost to apply. We&apos;ll follow up within 1 business day.
      </p>
    </form>
  );
}
