import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { snipcartPublicKey } from '@/lib/site';

const SNIPCART_VERSION = 'v3.7.1';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gospel Grounded',
  url: 'https://gospelgrounded.com.au',
  logo: 'https://gospelgrounded.com.au/apple-icon',
  sameAs: [
    'https://www.youtube.com/@GospelGrounded',
    'https://www.instagram.com/gospelgrounded/',
    'https://www.facebook.com/profile.php?id=100089835280726',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gospel Grounded',
  url: 'https://gospelgrounded.com.au',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <link
        rel="stylesheet"
        href={`https://cdn.snipcart.com/themes/${SNIPCART_VERSION}/default/snipcart.css`}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />

      {/* Snipcart — cart, checkout, and payments. The public key is safe to
          expose here; it only enables the storefront widget. */}
      <div
        hidden
        id="snipcart"
        data-api-key={snipcartPublicKey}
        data-config-modal-style="side"
      />
      <Script
        src={`https://cdn.snipcart.com/themes/${SNIPCART_VERSION}/default/snipcart.js`}
        strategy="afterInteractive"
      />
    </>
  );
}
