import type { Metadata } from 'next';
import WatchGrid from '@/components/WatchGrid';

export const metadata: Metadata = {
  title: 'Watch',
  description:
    'Watch gospel-centred teaching, theology, and discipleship videos from Gospel Grounded.',
};

export default function Watch() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-14 pt-36 sm:pt-40">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Watch
          </span>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
            Teaching you can watch, anytime
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Browse the full library of videos — sermons, deep dives, and
            everyday encouragement. Filter by what you need today.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <WatchGrid />
      </section>
    </>
  );
}
