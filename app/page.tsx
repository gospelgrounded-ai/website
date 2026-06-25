import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

const stats = [
  { value: '120+', label: 'Teachings published' },
  { value: '50K+', label: 'Hours watched' },
  { value: 'Weekly', label: 'New content' },
  { value: '1', label: 'Gospel, unchanging' },
];

const videos = [
  {
    id: 'placeholder1',
    title: 'Who Is Jesus, Really? A Gospel Primer',
    duration: '18:24',
    category: 'Teaching',
  },
  {
    id: 'placeholder2',
    title: 'Grace That Goes All The Way Down',
    duration: '24:10',
    category: 'Theology',
  },
  {
    id: 'placeholder3',
    title: 'How To Read Your Bible And Actually Enjoy It',
    duration: '15:47',
    category: 'Discipleship',
  },
];

const posts = [
  {
    slug: 'placeholder-a',
    title: 'The Gospel Is Not The Diving Board, It Is The Pool',
    excerpt:
      'We treat grace as the entry point and effort as the rest. Scripture tells a better story.',
    category: 'Theology',
    readTime: '6 min',
  },
  {
    slug: 'placeholder-b',
    title: 'Three Habits That Quietly Shape Your Faith',
    excerpt:
      'Discipleship is rarely dramatic. It is the small, repeated things that form us most.',
    category: 'Discipleship',
    readTime: '4 min',
  },
  {
    slug: 'placeholder-c',
    title: 'What The Cross Says About Your Worth',
    excerpt:
      'Your value was never up for debate. Calvary settled the question once for all.',
    category: 'Gospel',
    readTime: '5 min',
  },
];

function YouTubeThumb({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-surface2 to-bg" />
      <div className="absolute inset-0 bg-teal-glow opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-bg transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6">
            <path d="M8 5v14l11-7L8 5Z" />
          </svg>
        </span>
      </div>
      <span className="absolute bottom-3 right-3 rounded-md bg-bg/80 px-2 py-1 text-xs font-medium text-white backdrop-blur">
        {duration}
      </span>
    </div>
  );
}

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
              Clear, gospel-centred teaching for everyday faith. Watch, read, and
              listen to content that points back to Jesus — wherever you are in
              the journey.
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
            <Link key={v.id} href="/watch" className="group block">
              <YouTubeThumb title={v.title} duration={v.duration} />
              <div className="mt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {v.category}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
                  {v.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog grid */}
      <section className="border-t border-line bg-surface/30">
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-muted">
                Short reads, long-lasting truth.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden shrink-0 text-sm font-semibold text-brand hover:underline sm:inline"
            >
              Read more →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href="/blog"
                className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-muted2"
              >
                <div className="flex items-center gap-3 text-xs text-muted2">
                  <span className="font-semibold uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <span>·</span>
                  <span>{p.readTime} read</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <span className="mt-4 text-sm font-semibold text-brand">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="absolute inset-0 bg-gradient-to-br from-surface2 via-surface to-bg" />
            <div className="absolute inset-0 bg-teal-glow-tr opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-muted2">Headshot placeholder</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              About
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ordinary words about an extraordinary God
            </h2>
            <p className="mt-5 text-balance leading-relaxed text-muted">
              Gospel Grounded exists to make the riches of the gospel clear,
              accessible, and applicable. No hype, no shortcuts — just faithful
              teaching that takes Scripture seriously and takes you seriously.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you&apos;ve walked with Jesus for decades or you&apos;re
              asking your very first questions, there&apos;s a place for you here.
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

      {/* Podcast teaser */}
      <section className="border-y border-line bg-surface/30">
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-line bg-bg p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                The podcast
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Conversations on faith, doubt, and everything in between
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                New episodes most weeks. Honest, gospel-shaped conversations you
                can take with you on the commute, the walk, or the dishes.
              </p>
            </div>
            <Link
              href="/podcast"
              className="shrink-0 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Listen now
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
