import { Briefcase, Calendar } from 'lucide-react';
import { VISIBLE_JOURNEY, isDraftJourney } from '../data/portfolioData';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const Journey = () => {
  if (!VISIBLE_JOURNEY.length) return null;
  return (
    <Section id="journey" eyebrow="Journey" title="Experience & milestones" intro="A timeline of roles, deliveries and growth as a full-stack developer.">
      <ol className="ml-2 space-y-8 border-l border-line">
        {VISIBLE_JOURNEY.map((j) => (
          <li key={j.number} className="relative pl-8">
            <span className="absolute -left-[7px] top-7 size-3.5 rounded-full border-2 border-accent bg-bg" />
            <Reveal><div className={`card card-hover p-6 ${isDraftJourney(j) ? 'border-dashed' : ''}`}>
              {isDraftJourney(j) && <p className="mb-3 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-600 dark:text-amber-400">Draft placeholder — fill it in <code>portfolioData.ts</code>. Hidden in production until completed.</p>}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                <span className="flex items-center gap-1.5"><Calendar className="size-4 text-accent" />{j.date}</span>
                <span className="flex items-center gap-1.5"><Briefcase className="size-4 text-accent" />{j.company}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{j.role}</h3>
              <p className="mt-2 leading-relaxed text-muted">{j.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{j.technologies.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </div></Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
};
