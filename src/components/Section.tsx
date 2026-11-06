import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface Props { id: string; eyebrow: string; title: string; intro?: string; alt?: boolean; children: ReactNode }

export const Section = ({ id, eyebrow, title, intro, alt, children }: Props) => (
  <section id={id} className={`relative overflow-hidden border-t border-line py-20 sm:py-28 ${alt ? 'bg-subtle/60' : ''}`}>
    <div aria-hidden className="pointer-events-none absolute -right-32 top-10 size-72 rounded-full bg-accent/10 blur-3xl" />
    <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal className="mb-12 max-w-2xl">
        <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-accent" />{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);
