'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type Video, youtubeThumb } from '@/lib/videos';

export default function FeaturedVideo({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="relative aspect-video bg-bg">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <Image
              src={youtubeThumb(video.id)}
              alt={video.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <span className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-bg shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8">
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center gap-3 p-5 sm:p-6">
        <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          Latest
        </span>
        <h2 className="text-lg font-semibold leading-snug sm:text-xl">
          {video.title}
        </h2>
      </div>
    </div>
  );
}
