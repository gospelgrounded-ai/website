import type { Metadata } from 'next';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/lib/videos';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Watch',
  description:
    'Watch gospel-centred teaching from Gospel Grounded — daily walks through Scripture, verse by verse.',
};

export default function Watch() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-14 pt-36 sm:pt-40">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Watch
          </span>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
            Teaching you can watch, anytime
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            New teaching most days — working through Scripture passage by
            passage, drawing out the gospel from every page. Here are the latest.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-surface p-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            There&apos;s plenty more where this came from
          </h2>
          <p className="max-w-md text-muted">
            Hundreds of teachings, with new ones added most days. Subscribe on
            YouTube so you never miss one.
          </p>
          <a
            href={site.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
            </svg>
            Visit the channel
          </a>
        </div>
      </section>
    </>
  );
}
