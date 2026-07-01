// Printful integration. The API token lives ONLY in the Vercel environment
// (PRINTFUL_API_TOKEN) — never in the repo. Everything here runs server-side.

const PRINTFUL_API = 'https://api.printful.com';

export type ShopVariant = {
  syncVariantId: number;
  name: string;
  /** Retail price as a plain number string, e.g. "25.00". */
  price: string;
  currency: string;
  image: string;
};

export type ShopProduct = {
  id: number;
  name: string;
  image: string;
  variants: ShopVariant[];
};

function authHeaders(token: string): Record<string, string> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  // Account-level tokens (multiple stores) must specify which store to use.
  const storeId = process.env.PRINTFUL_STORE_ID;
  if (storeId) headers['X-PF-Store-Id'] = storeId;
  return headers;
}

/**
 * Fetch the store's sync products (the designs Webster created in Printful),
 * each with its buyable variants. Returns [] on any failure or missing token,
 * so the shop degrades to an empty state instead of breaking the build.
 */
export async function getShopProducts(): Promise<ShopProduct[]> {
  const token = process.env.PRINTFUL_API_TOKEN;
  if (!token) return [];

  try {
    const listRes = await fetch(`${PRINTFUL_API}/store/products`, {
      headers: authHeaders(token),
      next: { revalidate: 300 },
    });
    if (!listRes.ok) return [];

    const list = ((await listRes.json())?.result ?? []) as Array<{
      id: number;
      name: string;
      thumbnail_url?: string;
    }>;

    const products = await Promise.all(
      list.map(async (p): Promise<ShopProduct | null> => {
        const detailRes = await fetch(`${PRINTFUL_API}/store/products/${p.id}`, {
          headers: authHeaders(token),
          next: { revalidate: 300 },
        });
        if (!detailRes.ok) return null;

        const result = (await detailRes.json())?.result;
        const syncProduct = result?.sync_product ?? {};
        const syncVariants = (result?.sync_variants ?? []) as Array<{
          id: number;
          name: string;
          retail_price: string;
          currency: string;
          synced?: boolean;
          files?: Array<{ type: string; preview_url?: string }>;
          product?: { image?: string };
        }>;

        const variants: ShopVariant[] = syncVariants
          .filter((v) => v.synced !== false && v.retail_price)
          .map((v) => ({
            syncVariantId: v.id,
            name: v.name,
            price: v.retail_price,
            currency: v.currency ?? 'AUD',
            image:
              v.files?.find((f) => f.type === 'preview')?.preview_url ??
              v.product?.image ??
              syncProduct.thumbnail_url ??
              p.thumbnail_url ??
              '',
          }));

        if (variants.length === 0) return null;

        return {
          id: p.id,
          name: syncProduct.name ?? p.name,
          image: syncProduct.thumbnail_url ?? p.thumbnail_url ?? variants[0].image,
          variants,
        };
      })
    );

    return products.filter((p): p is ShopProduct => p !== null);
  } catch {
    return [];
  }
}

export type PrintfulRecipient = {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  state_code?: string;
  country_code: string;
  zip: string;
  email?: string;
  phone?: string;
};

export type PrintfulOrderItem = { sync_variant_id: number; quantity: number };

/**
 * Create a Printful order. Defaults to a DRAFT so nothing is charged or shipped
 * until reviewed in Printful. Set PRINTFUL_AUTO_CONFIRM=true to auto-fulfill.
 */
export async function createPrintfulOrder(
  recipient: PrintfulRecipient,
  items: PrintfulOrderItem[]
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const token = process.env.PRINTFUL_API_TOKEN;
  if (!token) return { ok: false, status: 500, body: 'Missing PRINTFUL_API_TOKEN' };

  const confirm = process.env.PRINTFUL_AUTO_CONFIRM === 'true';
  const res = await fetch(`${PRINTFUL_API}/orders${confirm ? '?confirm=true' : ''}`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({ recipient, items }),
  });

  const body = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, body };
}
