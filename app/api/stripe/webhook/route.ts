/**
 * POST /api/stripe/webhook
 *
 * Handles Stripe webhook events for client billing management.
 *
 * Events handled:
 *  - customer.subscription.created   → welcome email, portal access
 *  - customer.subscription.updated   → tier change (Starter → Growth → Impact)
 *  - customer.subscription.deleted   → deactivate portal access
 *  - invoice.payment_succeeded       → update invoice history
 *  - invoice.payment_failed          → notify client, retry logic
 *
 * Setup:
 *  1. Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET to .env.local
 *  2. Run: npm install stripe
 *  3. Register webhook endpoint in Stripe Dashboard → Webhooks
 *     URL: https://dogoodnaas.com/api/stripe/webhook
 *     Events: customer.subscription.*, invoice.payment_*
 */

import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;

// ── Minimal Stripe types (avoids requiring @types/stripe at build time) ──────

interface StripeSubscription {
  id: string;
  customer: string;
  status: string;
  items: { data: Array<{ price: { id: string; unit_amount: number | null } }> };
  metadata: Record<string, string>;
}

interface StripeInvoice {
  id: string;
  customer: string;
  subscription: string | null;
  amount_paid: number;
  amount_due: number;
  status: string;
  hosted_invoice_url: string | null;
}

interface StripeEvent {
  id: string;
  type: string;
  data: { object: StripeSubscription | StripeInvoice };
}

// ── Webhook signature verification ──────────────────────────────────────────

async function verifyStripeSignature(
  rawBody: string,
  signature: string,
  secret: string
): Promise<boolean> {
  // Stripe uses HMAC-SHA256 with the webhook secret
  const encoder = new TextEncoder();
  const parts = signature.split(",");
  const tPart = parts.find((p) => p.startsWith("t="));
  const v1Part = parts.find((p) => p.startsWith("v1="));
  if (!tPart || !v1Part) return false;

  const timestamp = tPart.slice(2);
  const expectedSig = v1Part.slice(3);
  const signedPayload = `${timestamp}.${rawBody}`;

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign("HMAC", key, encoder.encode(signedPayload));
  const computedSig = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Constant-time comparison
  return computedSig === expectedSig;
}

// ── Event handlers ───────────────────────────────────────────────────────────

async function handleSubscriptionCreated(sub: StripeSubscription) {
  console.log(`[Stripe] New subscription: ${sub.id} for customer ${sub.customer}`);
  // TODO Phase 5: Create/update client record in HubSpot (Closed Won)
  // TODO Phase 5: Send welcome email via HubSpot sequence
  // TODO Phase 5: Create portal access in Clerk (set publicMetadata.tier)
}

async function handleSubscriptionUpdated(sub: StripeSubscription) {
  console.log(`[Stripe] Subscription updated: ${sub.id} — status: ${sub.status}`);
  // TODO Phase 5: Sync tier change to HubSpot contact property
  // TODO Phase 5: Update Clerk user metadata with new tier
  // Map price ID → tier name:
  // const tierMap: Record<string, string> = {
  //   [process.env.STRIPE_PRICE_STARTER!]: "Starter",
  //   [process.env.STRIPE_PRICE_GROWTH!]:  "Growth",
  //   [process.env.STRIPE_PRICE_IMPACT!]:  "Impact",
  // };
}

async function handleSubscriptionDeleted(sub: StripeSubscription) {
  console.log(`[Stripe] Subscription cancelled: ${sub.id}`);
  // TODO Phase 5: Set portal access to inactive in Clerk
  // TODO Phase 5: Update HubSpot contact to "Churned"
  // TODO Phase 5: Trigger offboarding email sequence
}

async function handlePaymentSucceeded(invoice: StripeInvoice) {
  console.log(`[Stripe] Payment succeeded: invoice ${invoice.id} — $${(invoice.amount_paid / 100).toFixed(2)}`);
  // TODO Phase 5: Log invoice to portal billing history (database or CMS)
  // TODO Phase 5: Send payment receipt via HubSpot or Stripe email
}

async function handlePaymentFailed(invoice: StripeInvoice) {
  console.warn(`[Stripe] Payment FAILED: invoice ${invoice.id} — $${(invoice.amount_due / 100).toFixed(2)}`);
  // TODO Phase 5: Notify client via email (HubSpot sequence: "Payment Failed")
  // TODO Phase 5: Flag account in Clerk metadata for dunning flow
}

// ── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  if (!WEBHOOK_SECRET || !STRIPE_SECRET) {
    console.error("[Stripe] Missing STRIPE_WEBHOOK_SECRET or STRIPE_SECRET_KEY");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 503 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature") ?? "";

  // Verify signature
  const valid = await verifyStripeSignature(rawBody, signature, WEBHOOK_SECRET);
  if (!valid) {
    console.warn("[Stripe] Invalid webhook signature");
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  let event: StripeEvent;
  try {
    event = JSON.parse(rawBody) as StripeEvent;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Route event to handler
  try {
    switch (event.type) {
      case "customer.subscription.created":
        await handleSubscriptionCreated(event.data.object as StripeSubscription);
        break;
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object as StripeSubscription);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object as StripeSubscription);
        break;
      case "invoice.payment_succeeded":
        await handlePaymentSucceeded(event.data.object as StripeInvoice);
        break;
      case "invoice.payment_failed":
        await handlePaymentFailed(event.data.object as StripeInvoice);
        break;
      default:
        // Acknowledge unhandled events without error
        console.log(`[Stripe] Unhandled event type: ${event.type}`);
    }
  } catch (err) {
    console.error(`[Stripe] Error handling ${event.type}:`, err);
    return NextResponse.json({ error: "Handler error." }, { status: 500 });
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
