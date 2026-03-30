/**
 * UTM Parameter Capture & Persistence
 *
 * Strategy:
 *  1. On first page load, read UTM params from the URL.
 *  2. Persist them in sessionStorage so they survive SPA navigation.
 *  3. Attach them to every HubSpot form submission and GA4 event.
 *
 * UTM params tracked:
 *  utm_source, utm_medium, utm_campaign, utm_term, utm_content
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const SESSION_KEY = "dogood_utm";
const UTM_KEYS: (keyof UTMParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

/** Read UTM params from the current URL's search string. */
export function readUTMFromURL(search: string): UTMParams {
  const params = new URLSearchParams(search);
  const utm: UTMParams = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

/** Persist UTM params to sessionStorage (only overwrites if new params are present). */
export function persistUTM(utm: UTMParams): void {
  if (typeof window === "undefined") return;
  if (Object.keys(utm).length === 0) return;
  try {
    const existing = getStoredUTM();
    // New params take precedence over stored ones
    const merged = { ...existing, ...utm };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(merged));
  } catch {
    // sessionStorage may be unavailable (private browsing, storage full)
  }
}

/** Retrieve persisted UTM params from sessionStorage. */
export function getStoredUTM(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as UTMParams) : {};
  } catch {
    return {};
  }
}

/** Capture UTM params from URL and persist — call once on page load. */
export function captureUTM(): void {
  if (typeof window === "undefined") return;
  const utm = readUTMFromURL(window.location.search);
  persistUTM(utm);
}

/**
 * Convert stored UTM params to HubSpot form field array format.
 * Maps utm_* keys to HubSpot's expected property names.
 */
export function utmToHubSpotFields(
  utm: UTMParams
): Array<{ name: string; value: string }> {
  const fieldMap: Record<keyof UTMParams, string> = {
    utm_source: "hs_analytics_source",
    utm_medium: "utm_medium",
    utm_campaign: "utm_campaign",
    utm_term: "utm_term",
    utm_content: "utm_content",
  };
  return Object.entries(utm)
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => ({ name: fieldMap[k as keyof UTMParams] ?? k, value: v as string }));
}
