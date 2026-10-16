// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import MotionToggle from '@/components/MotionToggle';
import { profile, stats, services, projects, process } from '@/lib/data';

const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl';

export default function Home() {
  const [lead, ...rest] = projects;
  const side = rest.slice(0, 2);
  const more = rest.slice(2);

  return (
    <main>
      {/* Hero: tanpa animasi masuk berbasis JS supaya judul & foto tampil sejak HTML pertama */}
      <section className="px-6 pb-10 pt-28 md:pb-16 md:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/70 backdrop-blur">
              {profile.role}
            </span>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Immersive <span className="text-gradient">digital</span> experiences.
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/60">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90 active:scale-[0.97]">
                View Work <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 font-semibold text-white/80 transition hover:bg-white/5">
                Contact
              </Link>
            </div>
            <div className="mt-6">
              <MotionToggle />
            </div>
          </div>
          {/* Foto dekoratif hanya di layar lebar. Di ponsel <picture> memberi GIF 1px, jadi foto tidak diunduh
              dan judul tetap menjadi LCP; karya di bawahnya sudah membawa visual. */}
          <div className={`${glass} relative mx-auto hidden aspect-[4/5] w-full max-w-sm overflow-hidden p-2 md:block`}>
            <picture className="block h-full w-full overflow-hidden rounded-xl">
              <source media="(max-width: 767px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              <img src={profile.avatar} alt="" width={432} height={540} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
            </picture>
          </div>
        </div>
      </section>

      {/* Angka: satu pita kaca, bukan empat kotak terpisah */}
      <section className="px-6 py-6 md:py-10">
        <dl className={`${glass} mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4`}>
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col-reverse border-white/10 px-6 py-5 text-center md:py-7 ${i < 2 ? 'border-b md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r' : ''} ${i < 3 ? 'md:border-r' : ''}`}>
              <dt className="mt-1 text-sm text-white/50">{s.label}</dt>
              <dd className="text-3xl font-bold text-gradient md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Karya: bento, proyek utama besar + dua samping + ubin "semua" */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <Reveal><h2 className="text-3xl font-bold text-white md:text-4xl">Selected <span className="text-gradient">work</span>.</h2></Reveal>
            <Link href="/work" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-white/70 transition hover:text-white">All six <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:grid-rows-2 md:gap-5">
            <Reveal className="md:col-span-2 md:row-span-2">
              <Link href={`/work/${lead.slug}`} className={`${glass} group flex h-full flex-col overflow-hidden`}>
                <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:flex-1">
                  <Image src={lead.image} alt="" fill sizes="(max-width:768px) calc(100vw - 48px), 760px" className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" />
                </div>
                <div className="flex items-end justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/50">{lead.category} · {lead.year}</p>
                    <h3 className="mt-1 text-2xl font-bold text-white">{lead.title}</h3>
                    <p className="mt-1 max-w-md text-sm text-white/60">{lead.summary}</p>
                  </div>
                  <ArrowUpRight className="hidden shrink-0 text-white/50 transition group-hover:text-white sm:block" aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
            {side.map((p, i) => (
              <Reveal key={p.slug} delay={(i + 1) * 0.08}>
                <Link href={`/work/${p.slug}`} className={`${glass} group flex h-full flex-col overflow-hidden`}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image src={p.image} alt="" fill sizes="(max-width:768px) calc(100vw - 48px), 370px" className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{p.category} · {p.year}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {/* Tiga sisanya: daftar jujur, tiap nama menuju studi kasusnya */}
          <Reveal>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3 md:mt-5 md:gap-5">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className={`${glass} group flex min-h-14 items-center justify-between gap-3 px-5 py-4 transition hover:bg-white/10`}>
                    <span>
                      <span className="block font-semibold text-white">{p.title}</span>
                      <span className="block text-xs text-white/50">{p.client}</span>
                    </span>
                    <ArrowUpRight size={16} className="shrink-0 text-white/50 transition group-hover:text-white" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Layanan */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-bold text-white md:text-4xl">What I <span className="text-gradient">do</span>.</h2></Reveal>
          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className={`${glass} h-full p-6 transition hover:bg-white/10 md:p-7`}>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-white/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cara kerja: garis waktu bercahaya */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-bold text-white md:text-4xl">How I <span className="text-gradient">work</span>.</h2></Reveal>
          <div className="relative mt-8 md:mt-12">
          <span className="pointer-events-none absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-indigo-400/60 via-fuchsia-400/50 to-cyan-400/40 md:bottom-auto md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto md:bg-gradient-to-r" aria-hidden="true" />
          <ol className="grid gap-6 md:grid-cols-4 md:gap-8">
            {process.map((p, i) => (
              <li key={p.step} className="relative pl-10 md:pl-0 md:pt-10">
                <span className="absolute left-[5px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 shadow-[0_0_14px_rgba(192,132,252,0.7)] md:left-0 md:top-[5px]" aria-hidden="true" />
                <Reveal delay={i * 0.08}>
                  <p className="text-sm font-semibold text-gradient">{p.step}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
