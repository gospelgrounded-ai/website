import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Studies, courses, and resources to help you grow — from Gospel Grounded.',
};

const products = [
  {
    id: 'p1',
    name: 'The Gospel, Plainly',
    type: 'eBook',
    price: 'Free',
    description:
      'A short, clear introduction to the heart of the Christian message.',
    badge: 'Most popular',
  },
  {
    id: 'p2',
    name: '30 Days In The Gospels',
    type: 'Devotional',
    price: '$9',
    description:
      'A month-long guided reading plan through the life of Jesus, with daily reflections.',
  },
  {
    id: 'p3',
    name: 'Foundations: A Faith Course',
    type: 'Course',
    price: '$39',
    description:
      'Six sessions covering the essentials of the Christian faith — perfect for new believers.',
  },
  {
    id: 'p4',
    name: 'Reading The Bible Well',
    type: 'Workbook',
    price: '$15',
    description:
      'A practical workbook to build a Bible-reading habit that actually lasts.',
  },
  {
    id: 'p5',
    name: 'Grace Upon Grace',
    type: 'Book',
    price: '$22',
    description:
      'A deeper dive into the doctrine of grace and what it means for everyday life.',
  },
  {
    id: 'p6',
    name: 'Prayer Journal',
    type: 'Print',
    price: '$18',
    description:
      'A beautifully designed journal to guide and record your prayer life.',
  },
];

export default function Shop() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-teal-glow" />
        <div className="container-px relative mx-auto max-w-7xl pb-14 pt-36 sm:pt-40">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Shop
          </span>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tightest sm:text-5xl lg:text-6xl">
            Resources to help you grow
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Downloads, courses, and books designed to take you from inspired to
            equipped — and grounded.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-muted2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-surface2 via-surface to-bg" />
                <div className="absolute inset-0 bg-teal-glow opacity-50" />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-bg">
                    {p.badge}
                  </span>
                )}
                <span className="absolute right-4 top-4 rounded-full border border-line bg-bg/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                  {p.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-brand">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{p.price}</span>
                  <button
                    type="button"
                    className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                  >
                    {p.price === 'Free' ? 'Download' : 'Add to cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted2">
          Checkout is not wired up yet — these are placeholder products ready for
          your real catalogue.
        </p>
      </section>
    </>
  );
}
