import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { getBlogPosts } from '@/lib/cms';
import { urlForImage } from '@/sanity/lib/image';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Short, gospel-centred reads on faith, theology, and discipleship from Gospel Grounded.',
};

export const revalidate = 60;

function formatDate(iso?: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default async function Blog() {
  const posts = await getBlogPosts();

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
            Blog
          </span>
          <h1
            className="mt-4 max-w-2xl animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '90ms' }}
          >
            Short reads, long-lasting truth
          </h1>
          <p
            className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-muted"
            style={{ animationDelay: '180ms' }}
          >
            Articles to help you think clearly and live faithfully — grounded in
            Scripture, written for real life.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-line bg-surface p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Posts are on the way
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              The first articles are being written. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 110}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-muted2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg">
                    {p.coverImage ? (
                      <Image
                        src={urlForImage(p.coverImage).width(800).height(500).fit('crop').url()}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-teal-glow opacity-40" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted2">
                      {p.category && (
                        <span className="font-semibold uppercase tracking-wider text-brand">
                          {p.category}
                        </span>
                      )}
                      {p.category && p.publishedAt && <span>·</span>}
                      <span>{formatDate(p.publishedAt)}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
                      {p.title}
                    </h3>
                    {p.excerpt && (
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {p.excerpt}
                      </p>
                    )}
                    <span className="mt-4 text-sm font-semibold text-brand">
                      Read article →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
