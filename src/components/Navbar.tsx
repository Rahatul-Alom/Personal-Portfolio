import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { DEVELOPER_INFO as D, VISIBLE_JOURNEY } from '../data/portfolioData';

export const NAV = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Projects' },
  { id: 'stack', label: 'Tech stack' },
  ...(VISIBLE_JOURNEY.length ? [{ id: 'journey', label: 'Journey' }] : []),
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['hero', ...NAV.map((n) => n.id)].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? 'border-line bg-bg/85 backdrop-blur-lg' : 'border-transparent'}`}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center gap-2.5 font-semibold" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-accent font-mono text-xs text-accent-fg transition-transform hover:rotate-12">RA</span>
          <span>{D.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((l) => (
            <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${active === l.id ? 'bg-subtle font-medium text-fg' : 'text-muted hover:text-fg'}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <button onClick={toggleTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid size-9 place-items-center rounded-full border border-line bg-surface text-muted transition hover:text-fg">
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button> */}
          <a href="#contact" className="btn-primary hidden !py-2 sm:inline-flex">Let’s talk</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-full border border-line bg-surface md:hidden">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div aria-hidden className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-pink-500 to-cyan-500" style={{ width: `${progress * 100}%` }} />
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="animate-fade-in h-[calc(100dvh-4rem)] overflow-y-auto bg-bg px-5 py-6 md:hidden">
          {NAV.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-2xl font-semibold">{l.label}</a>
          ))}
          <p className="mt-8 flex items-center gap-2 text-sm text-muted"><span className="size-2 rounded-full bg-emerald-500" />{D.status}</p>
        </nav>
      )}
    </header>
  );
};
