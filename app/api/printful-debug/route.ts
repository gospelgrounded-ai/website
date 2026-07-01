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

  out.configuredStoreId = process.env.PRINTFUL_STORE_ID ?? null;

  // List stores, then count products in each so we can identify the right one.
  try {
    const storesRes = await fetch('https://api.printful.com/stores', { headers });
    out.storesStatus = storesRes.status;
    const storesBody = await storesRes.json().catch(() => null);
    const stores = Array.isArray(storesBody?.result) ? storesBody.result : [];

    out.stores = await Promise.all(
      stores.map(
        async (s: { id: number; name: string; type?: string }) => {
          const storeHeaders = { ...headers, 'X-PF-Store-Id': String(s.id) };
          const probe = async (path: string) => {
            try {
              const res = await fetch(`https://api.printful.com${path}`, {
                headers: storeHeaders,
              });
              const body = await res.json().catch(() => null);
              const result = Array.isArray(body?.result) ? body.result : [];
              return {
                status: res.status,
                error: body?.error?.message ?? body?.error ?? null,
                count: result.length,
                sample: result.slice(0, 3).map((p: { name?: string }) => p.name),
              };
            } catch (e) {
              return { status: 'exception', error: String(e) };
            }
          };

          return {
            id: s.id,
            name: s.name,
            type: s.type ?? null,
            syncProducts: await probe('/store/products'),
            templates: await probe('/product-templates'),
          };
        }
      )
    );
  } catch (e) {
    out.storesError = String(e);
  }

  return NextResponse.json(out);
}
