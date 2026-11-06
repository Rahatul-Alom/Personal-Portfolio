import { ArrowUpRight, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { Section } from './Section';

const Bars = ({ n, cls }: { n: number; cls: string }) => <>{Array.from({ length: n }, (_, i) => <div key={i} className={cls} />)}</>;

const Preview = ({ type }: { type: Project['mockupType'] }) => (
  <div aria-hidden className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
    <div className="flex items-center gap-1.5 border-b border-line bg-subtle px-3 py-2.5">
      <Bars n={3} cls="size-2.5 rounded-full bg-line" /><span className="ml-3 h-4 max-w-48 flex-1 rounded-full bg-line/70" />
    </div>
    <div className="h-48 p-4 sm:h-60">
      {type === 'erp' && (
        <div className="flex h-full gap-3">
          <div className="w-1/5 space-y-2"><div className="h-3 rounded bg-accent" /><Bars n={4} cls="h-3 rounded bg-line" /></div>
          <div className="flex-1 space-y-3">
            <div className="grid grid-cols-3 gap-2"><Bars n={3} cls="h-14 rounded-lg border border-line bg-subtle" /></div>
            <Bars n={4} cls="h-5 rounded bg-subtle" />
          </div>
        </div>
      )}
      {type === 'ecommerce' && (
        <div className="grid h-full grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-2"><div className="flex-1 rounded-lg bg-subtle" /><div className="h-3 w-3/4 rounded bg-line" /><div className="h-3 w-1/3 rounded bg-accent/70" /></div>
          ))}
        </div>
      )}
      {type === 'webapp' && (
        <div className="grid h-full grid-cols-3 gap-3">
          {[3, 2, 1].map((n, i) => (
            <div key={i} className="space-y-2 rounded-lg bg-subtle p-2"><div className="h-3 w-1/2 rounded bg-line" /><Bars n={n} cls="h-10 rounded-md border border-line bg-surface" /></div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export const Projects = () => (
  <Section id="work" alt eyebrow="Selected work" title="Products & systems I’ve built"
    intro="Case studies covering client interfaces, backend logic and data design.">
    <div className="space-y-20 sm:space-y-28">
      {PROJECTS.map((p, i) => {
        const links = [
          { href: p.liveUrl, label: 'Live site', Icon: ExternalLink },
          { href: p.repoUrl, label: 'Source code', Icon: Github },
          { href: p.caseStudyUrl, label: 'Case study', Icon: ArrowUpRight },
        ].filter((l) => l.href);
        return (
          <article key={p.id} id={`project-${p.id}`} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
              <p className="text-sm text-muted"><span className="font-medium text-accent">Project {p.number}</span> · {p.category}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-5 space-y-2">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />{h}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">{p.technologies.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <div className="mt-6 flex flex-wrap gap-3">
                {links.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Icon className="size-4" />{label}</a>
                ))}
                {!links.length && <a href="#contact" className="btn-primary">Discuss a similar project <ArrowUpRight className="size-4" /></a>}
              </div>
              <details className="group mt-6 rounded-xl border border-line bg-surface px-4 py-3 text-sm">
                <summary className="cursor-pointer font-medium marker:text-accent">Architecture & data model</summary>
                <p className="mt-3 leading-relaxed text-muted">{p.architectureDetails}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">{p.databaseSchema.map((t) => <code key={t} className="rounded bg-subtle px-2 py-0.5 font-mono text-xs">{t}</code>)}</div>
              </details>
            </div>
            <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-1' : ''}`}><Preview type={p.mockupType} /></div>
          </article>
        );
      })}
    </div>
  </Section>
);
