import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { getAboutContent } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story and beliefs behind Gospel Grounded — faithful, gospel-centred teaching for everyday faith.',
};

export const revalidate = 60;

const fallbackValues = [
  {
    title: 'Gospel-centred',
    body: 'Everything starts and ends with the finished work of Jesus. The gospel is not just the door — it is the whole house.',
  },
  {
    title: 'Bible-faithful',
    body: 'We take Scripture seriously: studied carefully, handled honestly, and trusted as the very word of God.',
  },
  {
    title: 'Clear, not clever',
    body: 'Deep truth does not have to be dense. We aim for clarity that serves you, not jargon that impresses.',
  },
  {
    title: 'For everyone',
    body: 'Lifelong believer or first-time seeker — there is room for your questions and a welcome for you here.',
  },
];

const fallbackBeliefs = [
  'The Bible is the inspired, trustworthy word of God.',
  'There is one God, eternally Father, Son, and Holy Spirit.',
  'Jesus Christ is fully God and fully man, crucified and risen.',
  'Salvation is by grace alone, through faith alone, in Christ alone.',
  'The Holy Spirit indwells and transforms every believer.',
  'Jesus will return, and his kingdom has no end.',
];

const fallbackBio = [
  'Gospel Grounded exists to help believers grow from spiritual milk to spiritual meat. The ministry was born from a single, unshakable conviction — one Webster found waiting for him in Hebrews 5:12–14: the Body of Christ was made for maturity, not perpetual infancy.',
  'That conviction soon grew into a burden: to equip the Body of Christ and raise up disciples who are spiritually mature.',
  'Gospel Grounded is not simply a nice moniker; it’s a war cry against the forces of hell. It’s a cry that exists to build believers who can be confident that they will one day hear the words, “Well done, good and faithful servant.”',
];

export default async function About() {
  const about = await getAboutContent();

  const heading = about?.heading || 'From milk to meat';
  const intro =
    about?.intro ||
    'Gospel Grounded is a teaching ministry built on a single conviction: the Body of Christ was made for maturity. This is a call to grow up into all that Christ has for you.';
  const bio = about?.bio?.length ? about.bio : fallbackBio;
  const values = about?.values?.length ? about.values : fallbackValues;
  const beliefs = about?.beliefs?.length ? about.beliefs : fallbackBeliefs;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-16 pt-36 sm:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span
                className="inline-block animate-fade-up text-xs font-semibold uppercase tracking-wider text-brand"
                style={{ animationDelay: '0ms' }}
              >
                About
              </span>
              <h1
                className="mt-4 animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl"
                style={{ animationDelay: '90ms' }}
              >
                {heading}
              </h1>
              <p
                className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted"
                style={{ animationDelay: '180ms' }}
              >
                {intro}
              </p>
            </div>
            <div
              className="relative aspect-[4/5] animate-fade-up overflow-hidden rounded-3xl border border-line bg-surface"
              style={{ animationDelay: '240ms' }}
            >
              <Image
                src="/webster.webp"
                alt="Webster — founder of Gospel Grounded"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="container-px mx-auto max-w-3xl py-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      {/* Core values */}
      <section className="border-y border-line bg-surface/30">
        <div className="container-px mx-auto max-w-7xl py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What drives this
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 2) * 110}
                className="rounded-2xl border border-line bg-bg p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-sm font-bold text-brand">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="container-px mx-auto max-w-3xl py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What we believe
          </h2>
          <p className="mt-3 text-muted">
            The historic, essential convictions of the Christian faith.
          </p>
        </Reveal>
        <ul className="mt-8 space-y-4">
          {beliefs.map((b) => (
            <li key={b} className="flex items-start gap-4">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs text-brand">
                ✓
              </span>
              <span className="leading-relaxed text-muted">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-3xl border border-line bg-surface p-8 text-center">
          <h3 className="text-xl font-semibold">Want to connect?</h3>
          <p className="mx-auto mt-2 max-w-md text-muted">
            Questions, encouragement, or a prayer request — I&apos;d love to hear
            from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
