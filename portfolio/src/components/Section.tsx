import type { ReactNode } from 'react';

interface Props { id: string; eyebrow: string; title: string; intro?: string; alt?: boolean; children: ReactNode }

export const Section = ({ id, eyebrow, title, intro, alt, children }: Props) => (
  <section id={id} className={`border-t border-line py-20 sm:py-28 ${alt ? 'bg-subtle/60' : ''}`}>
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      </header>
      {children}
    </div>
  </section>
);
