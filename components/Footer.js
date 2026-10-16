import Link from 'next/link';
import { profile, nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/30 to-fuchsia-600/30 p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Let’s build something glowing.</h2>
              <p className="mt-2 text-white/70">Available for freelance & collaboration.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center rounded-full bg-white px-7 font-semibold text-[#0b0b1a] transition hover:bg-white/90">
              Start a project →
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" /> Aria
            </h3>
            <p className="mt-3 max-w-xs text-sm text-white/50">{profile.role} · {profile.location}.</p>
            <a href={`mailto:${profile.email}`} className="mt-2 inline-block py-1.5 text-sm font-semibold text-gradient">{profile.email}</a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">Navigation</p>
            <ul className="mt-2">
              {nav.map((l) => <li key={l.href}><Link href={l.href} className="inline-block py-1.5 text-sm text-white/60 transition hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">About this site</p>
            <p className="mt-3 text-sm text-white/60">A portfolio template with a fictional persona. Every project links to a live demo site; there are no real clients or testimonials here.</p>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">© {new Date().getFullYear()} Aria. All rights reserved.</p>
      </div>
    </footer>
  );
}
