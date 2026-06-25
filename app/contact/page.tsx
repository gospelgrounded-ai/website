import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import NewsletterForm from '@/components/NewsletterForm';
import Reveal from '@/components/Reveal';
import { socials } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Gospel Grounded — questions, collaboration, prayer requests, and more.',
};

export default function Contact() {
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
            Contact
          </span>
          <h1
            className="mt-4 max-w-2xl animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '90ms' }}
          >
            Let&apos;s talk
          </h1>
          <p
            className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-muted"
            style={{ animationDelay: '180ms' }}
          >
            Whether it&apos;s a question, an invitation, or a prayer request —
            I&apos;d genuinely love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <Reveal className="rounded-3xl border border-line bg-surface/40 p-7 sm:p-9">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <p className="mt-1 text-sm text-muted">
              Fill this in and it&apos;ll come straight to my inbox.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>

          {/* Side */}
          <Reveal delay={120} className="space-y-8">
            {/* Prayer */}
            <div
              id="prayer"
              className="scroll-mt-24 rounded-3xl border border-line bg-surface p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 21s-6.7-4.3-9.3-8.1C.9 10.2 1.6 6.6 4.4 5.3 6.3 4.4 8.5 5 9.8 6.7L12 9.5l2.2-2.8c1.3-1.7 3.5-2.3 5.4-1.4 2.8 1.3 3.5 4.9 1.7 7.6C18.7 16.7 12 21 12 21Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Prayer requests</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Carrying something heavy? Choose &ldquo;Prayer request&rdquo; in
                the form and I&apos;ll pray for you personally. Nothing is too
                small.
              </p>
            </div>

            {/* Socials */}
            <div className="rounded-3xl border border-line bg-surface p-7">
              <h3 className="text-lg font-semibold">Find me online</h3>
              <ul className="mt-4 space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-line bg-bg px-4 py-3 transition-colors hover:border-brand"
                    >
                      <span className="text-sm font-medium text-white">
                        {s.label}
                      </span>
                      <span className="text-sm text-muted2">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div
              id="newsletter"
              className="scroll-mt-24 rounded-3xl border border-line bg-surface p-7"
            >
              <h3 className="text-lg font-semibold">Join the newsletter</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                One short, encouraging email a week. No spam, ever.
              </p>
              <div className="mt-5">
                <NewsletterForm variant="inline" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
