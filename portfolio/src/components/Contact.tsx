import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Copy, Github, Linkedin, Mail, TriangleAlert } from 'lucide-react';
import { DEVELOPER_INFO as D } from '../data/portfolioData';
import { Section } from './Section';

type Status = 'idle' | 'sending' | 'sent' | 'opened' | 'error';
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
const EMPTY = { name: '', email: '', type: 'Web Application', message: '' };

export const Contact = () => {
  const [f, setF] = useState(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);
  const set = (k: keyof typeof EMPTY) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(D.email); setCopied(true); setTimeout(() => setCopied(false), 2500); }
    catch { window.location.href = `mailto:${D.email}`; }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ENDPOINT) {
      const body = `${f.message}\n\n— ${f.name} (${f.email})`;
      window.location.href = `mailto:${D.email}?subject=${encodeURIComponent(`${f.type} inquiry from ${f.name}`)}&body=${encodeURIComponent(body)}`;
      setStatus('opened');
      return;
    }
    setStatus('sending');
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: f.name, email: f.email, projectType: f.type, message: f.message }) });
      if (!r.ok) throw new Error(String(r.status));
      setStatus('sent'); setF(EMPTY);
    } catch { setStatus('error'); }
  };

  const social = [{ href: D.github, label: 'GitHub', Icon: Github }, { href: D.linkedin, label: 'LinkedIn', Icon: Linkedin }].filter((s) => s.href);
  const done = status === 'sent' || status === 'opened';

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let’s build something useful."
      intro="Have a project, product or business problem in mind? Tell me about it and let’s find a practical solution.">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <div className="card flex items-center justify-between gap-3 p-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Mail className="size-5" /></span>
              <div className="min-w-0"><p className="text-xs text-muted">Email</p><a href={`mailto:${D.email}`} className="block truncate text-sm font-medium hover:text-accent">{D.email}</a></div>
            </div>
            <button onClick={copyEmail} className="btn-ghost !px-3.5 !py-2" aria-live="polite">
              {copied ? <><CheckCircle2 className="size-4 text-emerald-500" />Copied</> : <><Copy className="size-4" />Copy</>}
            </button>
          </div>
          {!!social.length && (
            <div className="flex flex-wrap gap-3">
              {social.map(({ href, label, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Icon className="size-4" />{label}</a>)}
            </div>
          )}
        </div>

        <div className="card p-6 sm:p-8 lg:col-span-7">
          {done ? (
            <div className="py-10 text-center" role="status">
              <CheckCircle2 className="mx-auto size-12 text-emerald-500" />
              <h3 className="mt-4 text-2xl font-semibold">{status === 'sent' ? 'Message sent' : 'Almost there'}</h3>
              <p className="mx-auto mt-2 max-w-sm text-muted">{status === 'sent' ? 'Thanks for reaching out — I’ll reply to your email soon.' : 'Your email app should have opened with the message ready. Press send there to finish.'}</p>
              <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">Write another message</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label htmlFor="c-name" className="mb-1.5 block text-sm font-medium">Name</label>
                  <input id="c-name" className="field" required autoComplete="name" placeholder="Your name or company" value={f.name} onChange={set('name')} /></div>
                <div><label htmlFor="c-email" className="mb-1.5 block text-sm font-medium">Email</label>
                  <input id="c-email" type="email" className="field" required autoComplete="email" placeholder="you@company.com" value={f.email} onChange={set('email')} /></div>
              </div>
              <div><label htmlFor="c-type" className="mb-1.5 block text-sm font-medium">What do you need?</label>
                <select id="c-type" className="field" value={f.type} onChange={set('type')}>
                  <option value="Web Application">Web application (Next.js / React)</option>
                  <option value="SaaS / ERP System">Business system (Laravel / PHP)</option>
                  <option value="Backend / API">Backend & database (Express / MySQL / MongoDB)</option>
                  <option value="Full-Time Role">Full-time or contract role</option>
                  <option value="Other">Something else</option>
                </select></div>
              <div><label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea id="c-msg" rows={5} className="field resize-y" required minLength={10} placeholder="Tell me about your project, timeline or the problem you’re solving…" value={f.message} onChange={set('message')} /></div>
              {status === 'error' && (
                <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  <TriangleAlert className="mt-0.5 size-4 shrink-0" />Couldn’t send your message. Please try again or email {D.email} directly.
                </p>
              )}
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full !py-3">
                {status === 'sending' ? 'Sending…' : <>Send message <ArrowRight className="size-4" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};
