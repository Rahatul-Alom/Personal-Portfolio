import { Code, Compass, Cpu, Database } from 'lucide-react';
import { DEVELOPER_INFO as D } from '../data/portfolioData';
import { Section } from './Section';
import { Reveal } from './Reveal';

const SKILLS = [
  { title: 'Frontend', text: 'Precise interfaces with React, Next.js and modern CSS.', Icon: Code },
  { title: 'Backend', text: 'Robust pipelines with Express.js, PHP and Laravel MVC.', Icon: Cpu },
  { title: 'Database', text: 'Relational modeling in MySQL and flexible MongoDB documents.', Icon: Database },
  { title: 'Problem solving', text: 'Turning real business requirements into maintainable software.', Icon: Compass },
];
const FACTS = [['Name', D.name], ['Role', D.title], ['Location', 'Global / Remote'], ['Focus', 'Web apps · Business systems · APIs'], ['Status', D.status]];

export const About = () => (
  <Section id="about" alt eyebrow="About" title={D.introHeadline} intro={D.introDescription}>
    <div className="grid gap-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-7"><div>
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          <p>My work centers on turning complex operational challenges into intuitive, high-performance web applications. I believe software should be fast, reliable and straightforward to maintain over its entire lifecycle.</p>
          <p>By connecting responsive frontend components to solid server logic and structured data, I make sure applications don’t just look good — they hold up in production and deliver real business value.</p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Principles">
          {D.philosophyWords.map((w) => <li key={w} className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">{w}</li>)}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SKILLS.map(({ title, text, Icon }) => (
            <div key={title} className="card card-hover p-5">
              <div className="flex items-center gap-2.5"><Icon className="size-4 text-accent" /><h3 className="font-semibold">{title}</h3></div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div></Reveal>
      <Reveal delay={150} className="lg:col-span-5"><aside>
        <div className="card card-hover p-6 sm:p-8">
          <h3 className="font-semibold">Quick facts</h3>
          <dl className="mt-4 divide-y divide-line text-sm">
            {FACTS.map(([k, v]) => <div key={k} className="flex justify-between gap-6 py-3"><dt className="text-muted">{k}</dt><dd className="text-right font-medium">{v}</dd></div>)}
          </dl>
          <p className="mt-4 rounded-xl bg-subtle px-4 py-3 text-sm text-muted">{D.philosophySecondary}</p>
        </div>
      </aside></Reveal>
    </div>
  </Section>
);
