import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { snipcartPublicKey } from '@/lib/site';

const SNIPCART_VERSION = 'v3.7.1';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <link
        rel="stylesheet"
        href={`https://cdn.snipcart.com/themes/${SNIPCART_VERSION}/default/snipcart.css`}
      />

      <Nav />
      <main>{children}</main>
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
