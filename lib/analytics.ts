/**
 * GA4 Event Tracking Library
 *
 * Usage:
 *   import { trackEvent } from "@/lib/analytics";
 *   trackEvent("cta_click", { cta_label: "Apply Now", page: "/naas" });
 *
 * All events are no-ops if GA4 is not loaded or window is undefined.
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetOrDate: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

// ── Event name constants ────────────────────────────────────────────────────

export const EVENTS = {
  // CTA interactions
  CTA_CLICK: "cta_click",

  // Form events
  APPLY_FORM_START: "apply_form_start",
  APPLY_FORM_SUBMIT: "apply_form_submit",
  APPLY_FORM_ERROR: "apply_form_error",

  // Calendly
  CALENDLY_PAGE_VIEWED: "calendly_page_viewed",
  CALENDLY_BOOKING_CONFIRMED: "calendly_booking_confirmed",

  // Donations
  DONATION_INITIATED: "donation_initiated",
  DONATION_COMPLETED: "donation_completed",

  // Portal
  PORTAL_LOGIN: "portal_login",
  PORTAL_DOCUMENT_DOWNLOAD: "portal_document_download",
  PORTAL_EDIT_REQUEST: "portal_edit_request",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

// ── Core tracking function ──────────────────────────────────────────────────

/**
 * Send a GA4 custom event.
 * Safe to call server-side (no-op) or before GA4 loads (queued by gtag).
 */
export function trackEvent(
  eventName: EventName | string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    ...params,
    send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  });
}

// ── Convenience helpers ─────────────────────────────────────────────────────

/** Track a CTA button click with label and destination. */
export function trackCTAClick(label: string, destination: string, page?: string): void {
  trackEvent(EVENTS.CTA_CLICK, {
    cta_label: label,
    cta_destination: destination,
    page_path: page ?? (typeof window !== "undefined" ? window.location.pathname : ""),
  });
}

/** Track apply form submission with ICP type. */
export function trackApplyFormSubmit(orgType: string, utmSource?: string): void {
  trackEvent(EVENTS.APPLY_FORM_SUBMIT, {
    org_type: orgType,
    utm_source: utmSource,
  });
}

/** Track when a FundraiseUp donation widget is opened. */
export function trackDonationInitiated(fundSlug: string, fundName: string): void {
  trackEvent(EVENTS.DONATION_INITIATED, {
    fund_slug: fundSlug,
    fund_name: fundName,
  });
}

/** Track a Calendly booking confirmation (call from Calendly postMessage listener). */
export function trackCalendlyBooking(eventType?: string): void {
  trackEvent(EVENTS.CALENDLY_BOOKING_CONFIRMED, {
    calendly_event_type: eventType ?? "20min",
  });
}

// ── Calendly postMessage listener ───────────────────────────────────────────

/**
 * Attach a window listener that fires when Calendly confirms a booking.
 * Call once on the /apply page mount.
 */
export function attachCalendlyListener(): () => void {
  function onMessage(e: MessageEvent) {
    if (e.origin !== "https://calendly.com") return;
    const data = e.data as { event?: string; payload?: { event_type?: { name?: string } } };
    if (data?.event === "calendly.event_scheduled") {
      trackCalendlyBooking(data.payload?.event_type?.name);
    }
  }
  window.addEventListener("message", onMessage);
  return () => window.removeEventListener("message", onMessage);
}
