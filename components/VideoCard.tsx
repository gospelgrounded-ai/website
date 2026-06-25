import Image from 'next/image';
import { type Video, youtubeThumb, youtubeWatchUrl } from '@/lib/videos';

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={youtubeWatchUrl(video.id)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
        <Image
          src={youtubeThumb(video.id)}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-90 transition-opacity group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-bg shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
        {video.title}
      </h3>
    </a>
  );
}
