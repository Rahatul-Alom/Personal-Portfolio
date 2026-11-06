import { ArrowRight, Mail } from 'lucide-react';
import { CORE_TECH_LIST, DEVELOPER_INFO as D, SERVICES } from '../data/portfolioData';

export const Hero = () => (
  <section id="hero" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-accent/15 blur-3xl" />
    <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted">
          <span className="size-2 rounded-full bg-emerald-500" />{D.status}
        </p>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          {D.headlineLine1} {D.headlineLine2} <span className="text-accent">{D.headlineLine3}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{D.subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary">View my work <ArrowRight className="size-4" /></a>
          <a href="#contact" className="btn-ghost">Contact me</a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Core technologies">
          {CORE_TECH_LIST.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
      </div>

      <aside className="card p-6 sm:p-8" aria-label="Profile summary">
        <div className="flex items-center gap-4">
          <span className="grid size-14 place-items-center rounded-2xl bg-accent font-mono text-lg font-medium text-accent-fg">RA</span>
          <div><p className="text-lg font-semibold">{D.name}</p><p className="text-sm text-muted">{D.title}</p></div>
        </div>
        <div className="my-6 h-px bg-line" />
        <p className="text-sm font-medium">What I build</p>
        <ul className="mt-3 space-y-2.5">
          {SERVICES.map((s) => (
            <li key={s.number} className="rounded-xl bg-subtle px-4 py-3">
              <p className="text-sm font-medium">{s.title}</p>
              <p className="mt-0.5 text-sm text-muted">{s.tagline}</p>
            </li>
          ))}
        </ul>
        <a href={`mailto:${D.email}`} className="mt-6 flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <Mail className="size-4" />{D.email}
        </a>
      </aside>
    </div>
  </section>
);
