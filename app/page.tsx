import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';
import VideoCard from '@/components/VideoCard';
import { videos as allVideos } from '@/lib/videos';
import { stats } from '@/lib/site';

const videos = allVideos.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-24 pt-36 sm:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Faith · Theology · Gospel teaching
            </span>
            <h1 className="mt-7 text-balance text-5xl font-extrabold leading-[1.05] tracking-tightest sm:text-6xl lg:text-7xl">
              Stay grounded in the{' '}
              <span className="text-brand">gospel</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
              Helping believers grow from spiritual milk to spiritual meat.
              Clear, daily teaching through Scripture — equipping the Body of
              Christ for maturity, not perpetual infancy.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/watch"
                className="w-full rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 sm:w-auto"
              >
                Start watching
              </Link>
              <Link
                href="/about"
                className="w-full rounded-full border border-line bg-surface px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-muted sm:w-auto"
              >
                About this ministry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-line bg-surface/40">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <div className="text-3xl font-extrabold tracking-tight text-white">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest videos */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest teaching
            </h2>
            <p className="mt-2 text-muted">
              Fresh videos to help you go deeper.
            </p>
          </div>
          <Link
            href="/watch"
            className="hidden shrink-0 text-sm font-semibold text-brand hover:underline sm:inline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
            <Image
              src="/webster.png"
              alt="Webster — founder of Gospel Grounded"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              About
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A war cry against perpetual infancy
            </h2>
            <p className="mt-5 text-balance leading-relaxed text-muted">
              Gospel Grounded was born from a single, unshakable conviction
              Webster found in Hebrews 5:12&ndash;14: the Body of Christ was made
              for maturity, not perpetual infancy.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              It grew into a burden — to equip the Body of Christ and raise up
              disciples who are spiritually mature, confident they will one day
              hear, &ldquo;Well done, good and faithful servant.&rdquo;
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-muted"
            >
              Read the full story
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10 text-center sm:p-16">
          <div className="absolute inset-0 bg-teal-glow opacity-70" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get the weekly email
            </h2>
            <p className="mt-3 text-muted">
              One short, encouraging email a week — new teaching, a thought worth
              keeping, and nothing else.
            </p>
            <div className="mt-8 flex justify-center">
              <NewsletterForm />
            </div>
            <p className="mt-4 text-xs text-muted2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Shop teaser */}
      <section className="border-t border-line">
        <div className="container-px mx-auto max-w-7xl py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Resources
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools to help you grow
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Studies, guides, and resources designed to take you from inspired to
            equipped.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Browse the shop
          </Link>
        </div>
      </section>
    </>
  );
}
