import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-teal-glow" />
      <div className="relative text-center">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-lg font-extrabold text-bg">
            G
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Gospel<span className="text-brand">Grounded</span>
          </span>
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-brand">
          404
        </p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tightest sm:text-5xl">
          This page wandered off
        </h1>
        <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-muted">
          The page you&apos;re after doesn&apos;t exist — but there&apos;s plenty
          more worth staying grounded in.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 sm:w-auto"
          >
            Back home
          </Link>
          <Link
            href="/watch"
            className="w-full rounded-full border border-line bg-surface px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-muted sm:w-auto"
          >
            Watch teaching
          </Link>
        </div>
      </div>
    </main>
  );
}
