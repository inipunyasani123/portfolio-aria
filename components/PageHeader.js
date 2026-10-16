import Reveal from './ui/Reveal';

// Header halaman aria: dark + glow + judul gradien.
export default function PageHeader({ kicker, title, accent, subtitle }) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-28 md:pb-16 md:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[120px] light:bg-fuchsia-400/10" aria-hidden="true" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          {kicker && (
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/70 backdrop-blur">
              {kicker}
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {title} {accent && <span className="text-gradient">{accent}</span>}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/60">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
