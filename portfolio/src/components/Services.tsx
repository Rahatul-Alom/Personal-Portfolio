import { CheckCircle2, Code2, Cpu, Database } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Section } from './Section';

const ICONS = [Code2, Cpu, Database];

export const Services = () => (
  <Section id="services" eyebrow="What I do" title="Services & capabilities"
    intro="Focused expertise across modern frontend, reliable backends and well-structured data.">
    <div className="grid gap-6 md:grid-cols-3">
      {SERVICES.map((s, i) => {
        const Icon = ICONS[i] ?? Code2;
        return (
          <article key={s.number} className="card flex flex-col p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent"><Icon className="size-5" /></span>
            <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{s.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
            <ul className="mt-5 space-y-2">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />{d}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
              {s.technologies.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        );
      })}
    </div>
  </Section>
);
