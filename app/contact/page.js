'use client';
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Check, ListChecks } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const doneRef = useRef(null);
  useEffect(() => { if (sent) doneRef.current?.focus(); }, [sent]);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return; setSent(true); };
  const field = 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 transition focus:border-fuchsia-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400';
  const label = 'mb-1.5 block text-sm font-medium text-white/80';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s work" accent="together." subtitle="Open for freelance & collaboration. Tell me about your project." />
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={MapPin} label="Location" value={profile.location} />
            <div className={`${glass} p-5`}>
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <ListChecks size={18} className="text-fuchsia-300" aria-hidden="true" /> A useful first note
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-white/60">
                <li>What you are making, and for whom.</li>
                <li>Which effects matter, and which can rest.</li>
                <li>A rough date, if there is one.</li>
              </ul>
            </div>
          </div>
          <div>
            {sent ? (
              <div className={`${glass} p-10 text-center`}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white"><Check size={28} aria-hidden="true" /></div>
                <h2 ref={doneRef} tabIndex={-1} className="mt-4 text-2xl font-bold text-white outline-none">Thanks for trying the form!</h2>
                <p className="mt-1 text-white/60">This is a portfolio template, {form.name}, so your message wasn’t actually sent. In a live version, it lands straight in the owner’s inbox.</p>
                <button type="button" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 min-h-11 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className={`${glass} space-y-4 p-6 md:p-8`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-name" className={label}>Name</label>
                    <input id="f-name" name="name" value={form.name} onChange={handle} autoComplete="name" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="f-email" className={label}>Email</label>
                    <input id="f-email" type="email" name="email" value={form.email} onChange={handle} autoComplete="email" required className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="f-message" className={label}>About the project</label>
                  <textarea id="f-message" name="message" value={form.message} onChange={handle} placeholder="What are you making, and when do you need it?" rows={6} required className={`${field} resize-none`} />
                </div>
                <button type="submit" className="min-h-12 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-3.5 font-semibold text-white transition hover:opacity-90">Send message</button>
                <p className="text-center text-xs text-white/50">Demo form: nothing is sent or stored.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 text-white"><Icon size={20} aria-hidden="true" /></span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{label}</p>
        <p className="mt-0.5 font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
