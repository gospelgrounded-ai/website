import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story and beliefs behind Gospel Grounded — faithful, gospel-centred teaching for everyday faith.',
};

const values = [
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

const beliefs = [
  'The Bible is the inspired, trustworthy word of God.',
  'There is one God, eternally Father, Son, and Holy Spirit.',
  'Jesus Christ is fully God and fully man, crucified and risen.',
  'Salvation is by grace alone, through faith alone, in Christ alone.',
  'The Holy Spirit indwells and transforms every believer.',
  'Jesus will return, and his kingdom has no end.',
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-16 pt-36 sm:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                About
              </span>
              <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
                From milk to meat
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Gospel Grounded is a teaching ministry built on a single
                conviction: the Body of Christ was made for maturity. This is a
                call to grow up into all that Christ has for you.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
              <Image
                src="/webster.png"
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
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Gospel Grounded exists to help believers grow from spiritual milk to
            spiritual meat. The ministry was born from a single, unshakable
            conviction —{' '}
            <span className="text-white">
              one Webster found waiting for him in Hebrews 5:12&ndash;14: the Body
              of Christ was made for maturity, not perpetual infancy.
            </span>
          </p>
          <p>
            That conviction soon grew into a burden: to equip the Body of Christ
            and raise up disciples who are spiritually mature.
          </p>
          <p>
            Gospel Grounded is not simply a nice moniker; it&apos;s a war cry
            against the forces of hell. It&apos;s a cry that exists to build
            believers who can be confident that they will one day hear the words,
            &ldquo;Well done, good and faithful servant.&rdquo;
          </p>
        </div>
      </section>

      {/* Core values */}
      <section className="border-y border-line bg-surface/30">
        <div className="container-px mx-auto max-w-7xl py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What drives this
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-bg p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-sm font-bold text-brand">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="container-px mx-auto max-w-3xl py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What we believe
        </h2>
        <p className="mt-3 text-muted">
          The historic, essential convictions of the Christian faith.
        </p>
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
