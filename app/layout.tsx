import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

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
      </head>
      <body className="min-h-screen bg-bg font-sans tracking-tight text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
