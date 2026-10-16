import { pageMeta, SITE_NAME } from '@/lib/seo';

// Judul pakai { default, template } supaya studi kasus di bawahnya tetap berakhiran " — Aria".
const meta = pageMeta({ title: 'Work', description: 'Six case studies by Aria: catalogues, event pages, and link pages, each with the problem, what was built, and a link to the live demo.', path: '/work' });
export const metadata = { ...meta, title: { default: 'Work', template: `%s — ${SITE_NAME}` } };

export default function Layout({ children }) {
  return children;
}
