import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'Blog', description: 'Short articles by Aria on pausing slideshows, routing a viewing day, and keeping dark themes readable in both colour schemes.', path: '/blog' });

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Blog" title="Thoughts &" accent="writing." subtitle="Notes on creative development, motion, and design." />
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <Link href={`/blog/${p.slug}`} className="group flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10 sm:flex-row sm:items-center md:p-8">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs text-white/50">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-medium text-white/80">{p.category}</span>
                    <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white md:text-2xl">{p.title}</h2>
                  <p className="mt-2 text-white/60">{p.excerpt}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="hidden shrink-0 text-white/40 transition group-hover:translate-x-1 group-hover:text-white sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
