import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { snipcartPublicKey } from '@/lib/site';

const SNIPCART_VERSION = 'v3.7.1';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gospelgrounded.com.au'),
  title: {
    default: 'Gospel Grounded — Faith, Theology & Gospel Teaching',
    template: '%s · Gospel Grounded',
  },
  description:
    'Gospel-centred teaching, theology, and conversations. Watch, read, and listen — content that keeps you grounded in the gospel.',
  keywords: [
    'gospel',
    'theology',
    'christian',
    'faith',
    'bible teaching',
    'podcast',
    'discipleship',
  ],
  openGraph: {
    title: 'Gospel Grounded',
    description:
      'Gospel-centred teaching, theology, and conversations. Watch, read, and listen.',
    url: 'https://gospelgrounded.com.au',
    siteName: 'Gospel Grounded',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gospel Grounded',
    description: 'Gospel-centred teaching, theology, and conversations.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* Mark the document as JS-enabled before paint so scroll-reveal
            elements start hidden only when animation can actually run. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href={`https://cdn.snipcart.com/themes/${SNIPCART_VERSION}/default/snipcart.css`}
        />
      </head>
      <body className="min-h-screen bg-bg font-sans tracking-tight text-white">
        <Nav />
        <main>{children}</main>
        <Footer />

        {/* Snipcart — cart, checkout, and payments. The public key is safe to
            expose here; it only enables the storefront widget. */}
        <div hidden id="snipcart" data-api-key={snipcartPublicKey} data-config-modal-style="side" />
        <Script
          src={`https://cdn.snipcart.com/themes/${SNIPCART_VERSION}/default/snipcart.js`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
