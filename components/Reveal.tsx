'use client';

import { useEffect, useRef } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in view on mount (or no observer support) → show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={
        delay
          ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
