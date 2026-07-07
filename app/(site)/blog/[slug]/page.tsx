import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PortableTextBody from '@/components/PortableTextBody';
import JsonLd from '@/components/JsonLd';
import { getBlogPost, getBlogSlugs } from '@/lib/cms';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: 'Post not found' };
  const images = post.coverImage
    ? [urlForImage(post.coverImage).width(1200).height(630).fit('crop').url()]
    : undefined;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images,
    },
    twitter: { card: 'summary_large_image', images },
  };
}

function formatDate(iso?: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: post.coverImage
      ? urlForImage(post.coverImage).width(1200).url()
      : undefined,
    author: { '@type': 'Person', name: 'Webster' },
    publisher: { '@type': 'Organization', name: 'Gospel Grounded' },
    mainEntityOfPage: `https://gospelgrounded.com.au/blog/${post.slug}`,
  };

  return (
    <article className="container-px mx-auto max-w-3xl pb-24 pt-36 sm:pt-40">
      <JsonLd data={jsonLd} />
      <Link
        href="/blog"
        className="text-sm font-medium text-muted transition-colors hover:text-white"
      >
        ← All articles
      </Link>

      <div className="mt-8 flex items-center gap-2 text-xs text-muted2">
        {post.category && (
          <span className="font-semibold uppercase tracking-wider text-brand">
            {post.category}
          </span>
        )}
        {post.category && post.publishedAt && <span>·</span>}
        <span>{formatDate(post.publishedAt)}</span>
      </div>

      <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.1] tracking-tightest sm:text-5xl">
        {post.title}
      </h1>

      {post.excerpt && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
      )}

      {post.coverImage ? (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-line">
          <Image
            src={urlForImage(post.coverImage).width(1400).height(788).fit('crop').url()}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <div className="mt-10 text-lg">
        <PortableTextBody value={post.body} />
      </div>
    </article>
  );
}
