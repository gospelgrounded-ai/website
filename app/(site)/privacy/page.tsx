import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Gospel Grounded collects, uses, and protects your information.',
};

export default function Privacy() {
  return (
    <article className="container-px mx-auto max-w-3xl pb-24 pt-36 sm:pt-40">
      <h1 className="text-balance text-4xl font-extrabold tracking-tightest sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted2">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <p>
          Gospel Grounded (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
          privacy. This page explains what information we collect through
          gospelgrounded.com.au, why, and your choices. We only collect what we
          need to run the site and serve you well.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-white">
            Information we collect
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="text-white">Newsletter:</span> if you subscribe,
              we store your email address with our email provider (Kit) to send
              you updates. Unsubscribe anytime via the link in any email.
            </li>
            <li>
              <span className="text-white">Contact &amp; prayer requests:</span>{' '}
              the name, email, and message you submit are sent to us by our form
              provider (Formspree) so we can reply.
            </li>
            <li>
              <span className="text-white">Shop orders:</span> if you buy
              something, your name, address, and payment details are processed by
              our checkout and fulfilment partners (Snipcart, Stripe, and
              Printful) to take payment and ship your order. We never see or
              store your full card details.
            </li>
            <li>
              <span className="text-white">Analytics:</span> we use privacy-
              friendly, cookieless analytics (Vercel) to understand which pages
              are visited. This does not identify you personally.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">
            How we use your information
          </h2>
          <p className="mt-3">
            We use it only to send content you asked for, respond to your
            messages and prayer requests, fulfil orders, and improve the site. We
            do not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Third parties</h2>
          <p className="mt-3">
            The providers named above process data on our behalf under their own
            privacy policies. We only share what&apos;s necessary for each
            service to work.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Your choices</h2>
          <p className="mt-3">
            You can unsubscribe from emails at any time, and you can ask us to
            access or delete the information we hold about you by getting in
            touch through our{' '}
            <a href="/contact" className="text-brand hover:underline">
              contact page
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-muted2">
          This policy may be updated from time to time. Continued use of the site
          means you accept the current version.
        </p>
      </div>
    </article>
  );
}
