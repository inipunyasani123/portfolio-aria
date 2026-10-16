'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { nav } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : !!pathname && pathname.startsWith(href));
  const links = nav.slice(0, -1);

  // Esc menutup menu ponsel; pindah halaman juga menutupnya.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 py-2 pl-5 pr-2 backdrop-blur-xl md:py-3 md:pr-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
          Aria
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined} className={`text-sm font-medium transition ${isActive(l.href) ? 'text-white' : 'text-white/60 hover:text-white'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">
            Contact
          </Link>
        </div>

        <button type="button" className="grid h-11 w-11 place-items-center rounded-xl text-white transition hover:bg-white/10 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open} aria-controls="menu-ponsel">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
          <div
            id="menu-ponsel"
            className="menu-in mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c1c]/95 p-3 backdrop-blur-xl md:hidden"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? 'page' : undefined} className={`block rounded-lg px-3 py-3 text-base font-medium ${isActive(l.href) ? 'bg-white/5 text-white' : 'text-white/60 hover:bg-white/5'}`}>
                {l.label}
              </Link>
            ))}
          </div>
      )}
    </header>
  );
}
