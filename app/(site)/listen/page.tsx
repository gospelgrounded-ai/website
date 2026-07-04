import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import SpotifyEmbed from '@/components/SpotifyEmbed';
import { getPlaylists } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Listen',
  description:
    'Gospel-centred Spotify playlists from Gospel Grounded — worship and music to keep you grounded.',
};

export const revalidate = 60;

export default async function Listen() {
  const playlists = await getPlaylists();

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
            Listen
          </span>
          <h1
            className="mt-4 max-w-2xl animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '90ms' }}
          >
            Playlists to keep you grounded
          </h1>
          <p
            className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-muted"
            style={{ animationDelay: '180ms' }}
          >
            Worship and music, gathered on Spotify — press play and let it fill
            the room.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        {playlists.length === 0 ? (
          <div className="rounded-3xl border border-line bg-surface p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Playlists coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              New playlists are on the way — check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {playlists.map((p, i) => (
              <Reveal key={p.spotifyUrl} delay={(i % 2) * 110}>
                <div className="rounded-3xl border border-line bg-surface p-5 sm:p-6">
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                  {p.description && (
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  )}
                  <div className="mt-4">
                    <SpotifyEmbed url={p.spotifyUrl} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
