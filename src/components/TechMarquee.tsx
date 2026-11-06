import { CORE_TECH_LIST, TECH_ITEMS } from '../data/portfolioData';

const ITEMS = [...new Set([...CORE_TECH_LIST, ...TECH_ITEMS.map((t) => t.name)])];

export const TechMarquee = () => (
  <div aria-hidden className="overflow-hidden border-y border-line bg-surface/60 py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
    <div className="marquee">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="mx-6 flex items-center gap-3 text-lg font-semibold text-muted"><span className="size-1.5 rounded-full bg-accent" />{t}</span>
      ))}
    </div>
  </div>
);
