import type { Metadata } from 'next';
import BlogGrid from '@/components/BlogGrid';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Short, gospel-centred reads on faith, theology, and discipleship from Gospel Grounded.',
};

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-14 pt-36 sm:pt-40">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Blog
          </span>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
            Short reads, long-lasting truth
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Articles to help you think clearly and live faithfully — grounded in
            Scripture, written for real life.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="container-px mx-auto max-w-7xl pt-16">
        <a
          href="#"
          className="group grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-surface2 via-surface to-bg" />
            <div className="absolute inset-0 bg-teal-glow opacity-60" />
            <span className="absolute left-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-bg">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="flex items-center gap-3 text-xs text-muted2">
              <span className="font-semibold uppercase tracking-wider text-brand">
                Gospel
              </span>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight transition-colors group-hover:text-brand sm:text-3xl">
              The Gospel Is Not The Diving Board, It Is The Pool
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We treat grace as the entry point and effort as the rest. But
              Scripture tells a far better story — one where the gospel is not
              just how we begin, but how we keep going, all the way home.
            </p>
            <span className="mt-6 text-sm font-semibold text-brand">
              Read the article →
            </span>
          </div>
        </a>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <BlogGrid />
      </section>
    </>
  );
}
