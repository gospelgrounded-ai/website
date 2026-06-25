import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcast',
  description:
    'Honest, gospel-shaped conversations on faith, doubt, and everyday discipleship — the Gospel Grounded podcast.',
};

const episodes = [
  {
    number: 12,
    title: 'Holding On To Faith In A Hard Season',
    duration: '42 min',
    date: 'Jun 18, 2026',
    description:
      'What do you do when God feels distant? A conversation about perseverance, lament, and the faithfulness of God in the dark.',
  },
  {
    number: 11,
    title: 'Reading The Bible As One Story',
    duration: '38 min',
    date: 'Jun 4, 2026',
    description:
      'From Genesis to Revelation — how seeing the big picture changes the way you read every page.',
  },
  {
    number: 10,
    title: 'Why Church Still Matters',
    duration: '45 min',
    date: 'May 21, 2026',
    description:
      'Community is not optional extra to the Christian life. A look at why we were never meant to do this alone.',
  },
  {
    number: 9,
    title: 'Grace For The Perfectionist',
    duration: '36 min',
    date: 'May 7, 2026',
    description:
      'When trying harder becomes its own kind of bondage — and how the gospel sets striving people free.',
  },
  {
    number: 8,
    title: 'Talking About Jesus Without The Cringe',
    duration: '40 min',
    date: 'Apr 23, 2026',
    description:
      'Evangelism that feels natural, honest, and human. Practical encouragement for sharing your faith.',
  },
];

const platforms = ['Spotify', 'Apple Podcasts', 'YouTube', 'RSS'];

export default function Podcast() {
  return (
    <>
      {/* Hero with latest episode */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-16 pt-36 sm:pt-40">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            The Podcast
          </span>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
            Conversations that keep you grounded
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Honest, gospel-shaped conversations on faith, doubt, and everything
            in between. New episodes most weeks.
          </p>

          {/* Latest episode card */}
          <div className="mt-12 grid items-center gap-8 rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[auto_1fr]">
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-bg lg:w-56">
              <div className="absolute inset-0 bg-teal-glow opacity-70" />
              <span className="relative text-5xl font-extrabold text-brand">
                #{episodes[0].number}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Latest episode · {episodes[0].date}
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                {episodes[0].title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {episodes[0].description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M8 5v14l11-7L8 5Z" />
                  </svg>
                  Play episode
                </button>
                <span className="text-sm text-muted2">
                  {episodes[0].duration}
                </span>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted2">Listen on:</span>
            {platforms.map((p) => (
              <a
                key={p}
                href="#"
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-brand hover:text-brand"
              >
                {p}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Episode list */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          All episodes
        </h2>
        <div className="mt-8 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
          {episodes.map((ep) => (
            <a
              key={ep.number}
              href="#"
              className="group flex items-center gap-5 p-5 transition-colors hover:bg-surface2 sm:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-brand transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-bg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5">
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-muted2">
                  <span>Ep {ep.number}</span>
                  <span>·</span>
                  <span>{ep.date}</span>
                </div>
                <h3 className="mt-1 truncate text-base font-semibold transition-colors group-hover:text-brand sm:text-lg">
                  {ep.title}
                </h3>
                <p className="mt-1 hidden truncate text-sm text-muted sm:block">
                  {ep.description}
                </p>
              </div>
              <span className="shrink-0 text-sm text-muted2">{ep.duration}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
