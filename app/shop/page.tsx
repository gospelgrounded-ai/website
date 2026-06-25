import type { Metadata } from 'next';
import NewsletterForm from '@/components/NewsletterForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Gospel Grounded merch and resources — coming soon. Sign up to hear when the shop opens.',
};

export default function Shop() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-14 pt-36 sm:pt-40">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Shop
          </span>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
            Wear it. Share it. Stay grounded.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Gospel-centred apparel and resources designed to start conversations
            that matter.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10 text-center sm:p-16">
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
              store — quality apparel and resources, printed and shipped on
              demand. Leave your email and you&apos;ll be first to know when it
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
        </div>
      </section>
    </>
  );
}
