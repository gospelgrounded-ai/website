'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { ShopProduct } from '@/lib/printful';
import { siteUrl } from '@/lib/site';

/**
 * A product card wired to Snipcart. Every variant renders a hidden
 * `snipcart-add-item` button so Snipcart can crawl and validate each price,
 * while the visible control lets the customer pick a variant and add it.
 */
export default function ProductCard({ product }: { product: ShopProduct }) {
  const [selected, setSelected] = useState(0);
  const variant = product.variants[selected];
  const hasVariants = product.variants.length > 1;

  const addSelectedToCart = () => {
    // Trigger the hidden, pre-validated Snipcart button for this variant.
    document
      .getElementById(`buy-${variant.syncVariantId}`)
      ?.click();
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-muted2">
      <div className="relative aspect-square overflow-hidden bg-bg">
        {variant.image ? (
          <Image
            src={variant.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-teal-glow opacity-40" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        {product.description && (
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {product.description}
          </p>
        )}

        {hasVariants && (
          <select
            value={selected}
            onChange={(e) => setSelected(Number(e.target.value))}
            aria-label="Choose an option"
            className="mt-3 w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-sm text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            {product.variants.map((v, i) => (
              <option key={v.syncVariantId} value={i}>
                {v.name}
              </option>
            ))}
          </select>
        )}

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-white">
            {variant.currency === 'USD' ? '$' : ''}
            {variant.price}
            {variant.currency !== 'USD' ? ` ${variant.currency}` : ''}
          </span>
          <button
            type="button"
            onClick={addSelectedToCart}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Hidden validation/add buttons — one per variant. */}
      <div className="hidden">
        {product.variants.map((v) => (
          <button
            key={v.syncVariantId}
            id={`buy-${v.syncVariantId}`}
            className="snipcart-add-item"
            data-item-id={String(v.syncVariantId)}
            data-item-name={
              product.variants.length > 1 ? `${product.name} — ${v.name}` : product.name
            }
            data-item-price={v.price}
            data-item-url={`${siteUrl}/shop`}
            data-item-image={v.image}
            data-item-quantity="1"
          />
        ))}
      </div>
    </div>
  );
}
