import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <span className="my-8 block overflow-hidden rounded-2xl border border-line">
          <Image
            src={urlForImage(value).width(1400).fit('max').url()}
            alt={value.alt || ''}
            width={1400}
            height={900}
            className="h-auto w-full"
          />
        </span>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed text-muted">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-bold tracking-tight text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-semibold text-white">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-brand pl-5 text-lg italic text-white">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-muted">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-muted">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand underline underline-offset-2 hover:opacity-80"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextBody({ value }: { value: unknown }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />;
}
