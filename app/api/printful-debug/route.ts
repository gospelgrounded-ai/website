import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// TEMPORARY diagnostic endpoint. Reports why the shop might be empty without
// leaking secrets or product data. Remove after debugging.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get('diag') !== '1') {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }

  const token = process.env.PRINTFUL_API_TOKEN;
  const out: Record<string, unknown> = {
    hasPrintfulToken: Boolean(token),
    hasSnipcartSecret: Boolean(process.env.SNIPCART_SECRET_KEY),
    hasSnipcartPublic: Boolean(process.env.NEXT_PUBLIC_SNIPCART_API_KEY),
    autoConfirm: process.env.PRINTFUL_AUTO_CONFIRM === 'true',
  };

  if (!token) return NextResponse.json(out);

  const headers = { Authorization: `Bearer ${token}` };

  // Which stores can this token see?
  try {
    const storesRes = await fetch('https://api.printful.com/stores', { headers });
    out.storesStatus = storesRes.status;
    const storesBody = await storesRes.json().catch(() => null);
    out.storesError = storesBody?.error?.message ?? storesBody?.error ?? null;
    out.storeCount = Array.isArray(storesBody?.result)
      ? storesBody.result.length
      : null;
    out.storeIds = Array.isArray(storesBody?.result)
      ? storesBody.result.map((s: { id: number; name: string }) => ({
          id: s.id,
          name: s.name,
        }))
      : null;
  } catch (e) {
    out.storesError = String(e);
  }

  // Can we list products with this token as-is?
  try {
    const prodRes = await fetch('https://api.printful.com/store/products', {
      headers,
    });
    out.productsStatus = prodRes.status;
    const prodBody = await prodRes.json().catch(() => null);
    out.productsError = prodBody?.error?.message ?? prodBody?.error ?? null;
    out.productCount = Array.isArray(prodBody?.result)
      ? prodBody.result.length
      : null;
  } catch (e) {
    out.productsError = String(e);
  }

  return NextResponse.json(out);
}
