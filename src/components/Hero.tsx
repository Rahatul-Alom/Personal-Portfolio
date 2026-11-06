import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { DEVELOPER_INFO as D, PROJECTS, SERVICES, TECH_ITEMS } from '../data/portfolioData';

const ROLES = ['Full-Stack Developer', 'Web Application Builder', 'Business Systems Engineer'];
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const Typewriter = () => {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  const still = reduced();
  useEffect(() => {
    if (still) return;
    const w = ROLES[i];
    const wait = !del && n === w.length ? 1600 : del ? 35 : 70;
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % ROLES.length); }
    }, wait);
    return () => clearTimeout(t);
  }, [i, n, del, still]);
  return <span>{still ? ROLES[0] : ROLES[i].slice(0, n)}<span className="blink ml-0.5 inline-block h-[1.1em] w-0.5 bg-accent align-middle" /></span>;
};

const Count = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) { setV(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const s = performance.now();
      const tick = (t: number) => { const p = Math.min((t - s) / 1400, 1); setV(Math.round(to * (1 - (1 - p) ** 3))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}</span>;
};

const STATS = [[PROJECTS.length, 'Featured projects'], [TECH_ITEMS.length, 'Technologies'], [SERVICES.length, 'Core services']] as const;
const FLOAT = ['-left-10 top-12', '-right-6 top-1/3', '-left-6 bottom-16'];

export const Hero = () => (
  <section id="hero" className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
    <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="animate-blob absolute -left-24 top-10 size-96 rounded-full bg-accent/25 blur-3xl" />
      <div className="animate-blob absolute right-0 top-32 size-80 rounded-full bg-pink-500/20 blur-3xl [animation-delay:-5s]" />
      <div className="animate-blob absolute bottom-0 left-1/3 size-72 rounded-full bg-cyan-500/20 blur-3xl [animation-delay:-10s]" />
    </div>

    <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-sm text-muted backdrop-blur">
          <span className="live-dot size-2 rounded-full bg-emerald-500" />{D.status}
        </p>
        <h1 className="rise mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl" style={d(100)}>
          {D.headlineLine1} {D.headlineLine2} <span className="grad-text">{D.headlineLine3}</span>
        </h1>
        <p className="rise mt-5 text-xl font-medium sm:text-2xl" style={d(200)}><Typewriter /></p>
        <p className="rise mt-5 max-w-xl text-lg leading-relaxed text-muted" style={d(300)}>{D.subheadline}</p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={d(400)}>
          <a href="#work" className="btn-primary group shadow-lg shadow-accent/30">View my work <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
          <a href="#contact" className="btn-ghost">Contact me</a>
        </div>
        <dl className="rise mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8" style={d(500)}>
          {STATS.map(([n, label]) => (
            <div key={label}><dt className="sr-only">{label}</dt><dd className="text-3xl font-semibold tracking-tight sm:text-4xl"><Count to={n} /></dd><p className="mt-1 text-sm text-muted">{label}</p></div>
          ))}
        </dl>
      </div>

      <div className="rise relative" style={d(300)}>
        {TECH_ITEMS.slice(0, 3).map((t, i) => (
          <span key={t.name} className={`animate-float absolute z-10 hidden items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium shadow-xl lg:flex ${FLOAT[i]}`} style={{ animationDelay: `${-i * 2}s` }}>
            <span className="size-2 rounded-full bg-accent" />{t.name}
          </span>
        ))}
        <aside className="animate-float card relative p-6 shadow-2xl shadow-accent/15 backdrop-blur sm:p-8" aria-label="Profile summary">
          <div className="flex items-center gap-4">
            <span className="relative grid size-16 shrink-0 place-items-center">
              <span className="animate-spin-slow absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,var(--accent),#ec4899,#06b6d4,var(--accent))]" />
              <span className="relative grid size-[58px] place-items-center rounded-[14px] bg-surface font-mono text-lg font-medium text-accent">RA</span>
            </span>
            <div><p className="text-lg font-semibold">{D.name}</p><p className="text-sm text-muted">{D.title}</p></div>
          </div>
          <div className="my-6 h-px bg-line" />
          <p className="text-sm font-medium">What I build</p>
          <ul className="mt-3 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.number} className="rounded-xl bg-subtle px-4 py-3 transition hover:translate-x-1 hover:bg-accent/10">
                <p className="text-sm font-medium">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted">{s.tagline}</p>
              </li>
            ))}
          </ul>
          <a href={`mailto:${D.email}`} className="mt-6 flex items-center gap-2 text-sm text-muted transition hover:text-accent"><Mail className="size-4" />{D.email}</a>
        </aside>
      </div>
    </div>
  </section>
);
