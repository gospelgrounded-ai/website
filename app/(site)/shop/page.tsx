import type { Metadata } from 'next';
import NewsletterForm from '@/components/NewsletterForm';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import JsonLd from '@/components/JsonLd';
import { getShopProducts } from '@/lib/printful';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Gospel-centred apparel and resources from Gospel Grounded — printed and shipped on demand.',
};

// Cached and regenerated every 5 minutes (ISR): the page is served instantly
// from cache — so Snipcart's product-validation crawl never times out — while
// still picking up Printful changes automatically.
export const revalidate = 300;

export default async function Shop() {
  const products = await getShopProducts();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-14 pt-36 sm:pt-40">
          <span
            className="inline-block animate-fade-up text-xs font-semibold uppercase tracking-wider text-brand"
            style={{ animationDelay: '0ms' }}
          >
            Shop
          </span>
          <h1
            className="mt-4 max-w-2xl animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '90ms' }}
          >
            Wear it. Share it. Stay grounded.
          </h1>
          <p
            className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-muted"
            style={{ animationDelay: '180ms' }}
          >
            Gospel-centred apparel and resources designed to start conversations
            that matter.
          </p>
        </div>
      </section>

      {products.length > 0 ? (
        <section className="container-px mx-auto max-w-7xl py-16">
          {products.map((p) => (
            <JsonLd
              key={`ld-${p.id}`}
              data={{
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: p.name,
                image: p.image,
                description: p.description,
                offers: {
                  '@type': 'Offer',
                  price: p.variants[0]?.price,
                  priceCurrency: p.variants[0]?.currency ?? 'AUD',
                  availability: 'https://schema.org/InStock',
                },
              }}
            />
          ))}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 110}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted2">
            Secure checkout · printed and shipped on demand.
          </p>
        </section>
      ) : (
        <section className="container-px mx-auto max-w-7xl py-24">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10 text-center sm:p-16">
            <div className="absolute inset-0 bg-teal-glow opacity-70" />
            <div className="relative mx-auto max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                Coming soon
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                The shop is on its way
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                We&apos;re putting the finishing touches on the Gospel Grounded
                store. Leave your email and you&apos;ll be first to know when it
                opens.
              </p>
              <div className="mt-8 flex justify-center">
                <NewsletterForm />
              </div>
              <p className="mt-6 text-sm text-muted2">
                In the meantime, find all the latest teaching on{' '}
                <a
                  href={site.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand hover:underline"
                >
                  YouTube
                </a>
                .
              </p>
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
