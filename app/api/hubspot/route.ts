/**
 * POST /api/hubspot
 *
 * Server-side proxy for HubSpot form submissions.
 * Keeps the private app token out of the client bundle.
 *
 * Body shape:
 * {
 *   fields: Array<{ name: string; value: string }>,
 *   context: { pageUri: string; pageName: string; hutk?: string }
 * }
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_APPLY_FORM_ID;
const TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

interface HubSpotField {
  name: string;
  value: string;
}

interface SubmitBody {
  fields: HubSpotField[];
  context?: {
    pageUri?: string;
    pageName?: string;
    hutk?: string;       // HubSpot tracking cookie
    ipAddress?: string;
  };
}

export async function POST(req: NextRequest) {
  // ── Validate env vars ───────────────────────────────────────
  if (!PORTAL_ID || !FORM_ID || !TOKEN) {
    console.error("[HubSpot] Missing environment variables");
    return NextResponse.json(
      { error: "HubSpot integration is not configured." },
      { status: 503 }
    );
  }

  // ── Parse body ──────────────────────────────────────────────
  let body: SubmitBody;
  try {
    body = (await req.json()) as SubmitBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!Array.isArray(body.fields) || body.fields.length === 0) {
    return NextResponse.json({ error: "No fields provided." }, { status: 400 });
  }

  // ── Forward real IP to HubSpot context ──────────────────────
  const ipAddress =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    undefined;

  const payload = {
    fields: body.fields,
    context: {
      pageUri: body.context?.pageUri ?? "",
      pageName: body.context?.pageName ?? "Apply Page",
      ...(body.context?.hutk ? { hutk: body.context.hutk } : {}),
      ...(ipAddress ? { ipAddress } : {}),
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Do Good to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: "I agree to receive marketing communications from Do Good.",
          },
        ],
      },
    },
  };

  // ── Submit to HubSpot Forms API v3 ──────────────────────────
  const hsUrl = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${PORTAL_ID}/${FORM_ID}`;

  let hsRes: Response;
  try {
    hsRes = await fetch(hsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[HubSpot] Network error:", err);
    return NextResponse.json({ error: "Failed to reach HubSpot." }, { status: 502 });
  }

  // ── Return result ───────────────────────────────────────────
  if (!hsRes.ok) {
    const errBody = await hsRes.text().catch(() => "");
    console.error(`[HubSpot] Error ${hsRes.status}:`, errBody);
    return NextResponse.json(
      { error: "HubSpot submission failed.", details: hsRes.status },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
