import { ArrowUp } from 'lucide-react';
import { DEVELOPER_INFO as D } from '../data/portfolioData';
import { NAV } from './Navbar';

export const Footer = () => (
  <footer className="border-t border-line py-10 text-sm text-muted">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
      <div><p className="font-semibold text-fg">{D.name}</p><p>{D.title}</p></div>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
        {NAV.map((l) => <a key={l.id} href={`#${l.id}`} className="hover:text-fg">{l.label}</a>)}
      </nav>
      <div className="flex items-center gap-4">
        <span>© {new Date().getFullYear()} {D.name}</span>
        <a href="#hero" className="btn-ghost !px-3.5 !py-2" aria-label="Back to top"><ArrowUp className="size-4" /></a>
      </div>
    </div>
  </footer>
);
