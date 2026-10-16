import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { profile, skills, experience, education } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'About', description: 'About Aria, a fictional creative developer: skills, tools, and ten years of moody, motion-rich websites that still pass contrast checks.', path: '/about' });
const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl';

export default function AboutPage() {
  return (
    <main>
      <PageHeader kicker="About" title="A bit about" accent="me." subtitle={profile.bioShort} />

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className={`${glass} relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden p-2`}>
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image src={profile.about} alt="" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Where design meets <span className="text-gradient">code</span>.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-white/60">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 text-sm font-semibold text-white transition hover:opacity-90">
              Ask for a CV <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-2xl font-bold text-white md:text-3xl">Skills &amp; Tools</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.1}>
                <div className={`${glass} h-full p-6`}>
                  <h3 className="mb-4 text-lg font-semibold text-white">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => <li key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-2xl font-bold text-white md:text-3xl">Experience</h2></Reveal>
          <div className="mt-10">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid gap-2 border-t border-white/10 py-7 md:grid-cols-[180px_1fr]">
                  <span className="text-sm font-medium text-gradient">{e.period}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{e.role} <span className="font-normal text-white/40">· {e.company}</span></h3>
                    <p className="mt-2 max-w-2xl text-white/60">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14"><h2 className="text-2xl font-bold text-white md:text-3xl">Education</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`${glass} p-6`}>
                  <span className="text-xs font-medium text-gradient">{e.period}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{e.degree}</h3>
                  <p className="text-sm text-white/60">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
