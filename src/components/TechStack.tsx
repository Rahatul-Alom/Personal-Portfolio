import { Database, Layers, Server } from 'lucide-react';
import { TECH_ITEMS } from '../data/portfolioData';
import type { TechItem } from '../types';
import { Section } from './Section';
import { Reveal } from './Reveal';

const GROUPS: { key: TechItem['category']; title: string; sub: string; Icon: typeof Layers }[] = [
  { key: 'frontend', title: 'Frontend', sub: 'Interfaces & user interaction', Icon: Layers },
  { key: 'backend', title: 'Backend', sub: 'APIs, auth & business logic', Icon: Server },
  { key: 'database', title: 'Databases', sub: 'Relational & document storage', Icon: Database },
];

export const TechStack = () => (
  <Section id="stack" eyebrow="Tech stack" title="Tools I work with every day"
    intro="A practical stack across the client, the server and the database.">
    <div className="grid gap-6 lg:grid-cols-3">
      {GROUPS.map(({ key, title, sub, Icon }, gi) => (
        <Reveal key={key} delay={gi * 130} className="h-full"><div className="card card-hover h-full p-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent"><Icon className="size-5" /></span>
            <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-muted">{sub}</p></div>
          </div>
          <ul className="mt-5 divide-y divide-line">
            {TECH_ITEMS.filter((t) => t.category === key).map((t) => (
              <li key={t.name} className="py-3 transition hover:translate-x-1">
                <div className="flex items-center justify-between gap-3"><span className="font-medium">{t.name}</span><span className="chip">{t.tag}</span></div>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t.description}</p>
              </li>
            ))}
          </ul>
        </div></Reveal>
      ))}
    </div>
  </Section>
);
