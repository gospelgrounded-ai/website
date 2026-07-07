import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description:
    'Shipping times, delivery, and returns for Gospel Grounded orders.',
};

export default function ShippingReturns() {
  return (
    <article className="container-px mx-auto max-w-3xl pb-24 pt-36 sm:pt-40">
      <h1 className="text-balance text-4xl font-extrabold tracking-tightest sm:text-5xl">
        Shipping &amp; Returns
      </h1>
      <p className="mt-4 text-sm text-muted2">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <p>
          Our products are printed and shipped on demand through our print
          partner, Printful. Here&apos;s what to expect.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-white">Production &amp; shipping</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Each item is made to order, so please allow a few business days for
              production before it ships.
            </li>
            <li>
              Delivery times depend on your location; an estimated delivery date
              is shown at checkout. Australian orders typically arrive within
              1–2 weeks of ordering.
            </li>
            <li>
              You&apos;ll receive tracking details by email once your order is on
              its way.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">
            Returns &amp; replacements
          </h2>
          <p className="mt-3">
            Because items are made to order, we don&apos;t accept returns for
            change of mind. However, if your order arrives{' '}
            <span className="text-white">
              damaged, defective, or incorrect
            </span>
            , we&apos;ll happily arrange a replacement or refund at no cost to
            you.
          </p>
          <p className="mt-3">
            Please contact us within 14 days of delivery with your order number
            and a photo of the issue via our{' '}
            <a href="/contact" className="text-brand hover:underline">
              contact page
            </a>
            , and we&apos;ll sort it out.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Questions</h2>
          <p className="mt-3">
            If anything about your order is unclear, reach out any time — we&apos;re
            glad to help.
          </p>
        </section>
      </div>
    </article>
  );
}
