import { NextResponse } from 'next/server';
import {
  createPrintfulOrder,
  type PrintfulOrderItem,
  type PrintfulRecipient,
} from '@/lib/printful';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Verify the request genuinely came from Snipcart. The X-Snipcart-RequestToken
// is validated with a simple GET handshake against Snipcart's API — the token
// itself is the credential, so no Authorization header is used.
async function isValidSnipcartRequest(token: string | null): Promise<boolean> {
  if (!token) {
    console.error('Snipcart webhook: missing request token header');
    return false;
  }

  try {
    const res = await fetch(
      `https://app.snipcart.com/api/requestvalidation/${token}`,
      { headers: { Accept: 'application/json' } }
    );
    if (!res.ok) {
      console.error('Snipcart token validation failed', res.status);
    }
    return res.ok;
  } catch (e) {
    console.error('Snipcart token validation error', e);
    return false;
  }
}

type SnipcartAddress = {
  fullName?: string;
  name?: string;
  address1?: string;
  address2?: string;
  city?: string;
  province?: string;
  country?: string;
  postalCode?: string;
  phone?: string;
};

export async function POST(request: Request) {
  const token = request.headers.get('x-snipcart-requesttoken');

  if (!(await isValidSnipcartRequest(token))) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Bad payload' }, { status: 400 });
  }

  // Only fulfill on completed orders; acknowledge everything else so Snipcart
  // does not retry.
  if (payload.eventName !== 'order.completed') {
    return NextResponse.json({ received: true });
  }

  const order = payload.content ?? {};
  const address: SnipcartAddress =
    order.shippingAddress ?? order.billingAddress ?? {};

  const items: PrintfulOrderItem[] = (order.items ?? [])
    .map((i: { id?: string; quantity?: number }) => ({
      sync_variant_id: Number(i.id),
      quantity: i.quantity ?? 1,
    }))
    .filter((i: PrintfulOrderItem) => Number.isFinite(i.sync_variant_id));

  if (items.length === 0) {
    // Nothing mappable to Printful (e.g. a non-Printful product). Acknowledge.
    return NextResponse.json({ received: true, fulfilled: false });
  }

  const recipient: PrintfulRecipient = {
    name: address.fullName ?? address.name ?? '',
    address1: address.address1 ?? '',
    address2: address.address2 || undefined,
    city: address.city ?? '',
    state_code: address.province || undefined,
    country_code: address.country ?? '',
    zip: address.postalCode ?? '',
    email: order.email,
    phone: address.phone || undefined,
  };

  const result = await createPrintfulOrder(recipient, items);

  if (!result.ok) {
    // Non-2xx tells Snipcart to retry the webhook later.
    console.error('Printful order failed', result.status, result.body);
    return NextResponse.json(
      { error: 'Fulfillment failed', details: result.body },
      { status: 502 }
    );
  }

  return NextResponse.json({ received: true, fulfilled: true });
}
