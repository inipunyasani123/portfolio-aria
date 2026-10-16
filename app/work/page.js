'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl';
const MotionLink = motion.create(Link);

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const reduce = useReducedMotion();
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);
  const count = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length);

  return (
    <main>
      <PageHeader kicker="Work" title="Selected" accent="projects." subtitle="Six live demo sites: catalogues, event pages, and link pages. Each card opens a case study with a link to the site itself." />
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-2 md:mb-10" role="group" aria-label="Filter projects">
            {CATS.map((c) => (
              <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition ${cat === c ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white' : 'border border-white/15 text-white/70 hover:text-white'}`}>
                {c} <span className={`text-xs ${cat === c ? '' : 'text-white/50'}`}>{count(c)}</span>
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
          <motion.div layout={!reduce} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {list.map((p) => (
                <MotionLink key={p.slug} href={`/work/${p.slug}`} layout={!reduce} initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={reduce ? undefined : { opacity: 0, scale: 0.96 }} transition={{ duration: reduce ? 0 : 0.3 }} className={`${glass} group block overflow-hidden`}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image src={p.image} alt="" fill sizes="(max-width:640px) calc(100vw - 48px), (max-width:1024px) 50vw, 370px" className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 keep-white rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                      <span className="text-xs text-white/50">{p.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                  </div>
                </MotionLink>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
