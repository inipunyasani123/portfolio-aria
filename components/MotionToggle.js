'use client';
import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const KEY = 'aria.motion';

// Sakelar aurora di beranda. Prinsip Aria: setiap efek punya tombol pause.
export default function MotionToggle() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    let p = false;
    try { p = localStorage.getItem(KEY) === 'paused'; } catch {}
    setPaused(p);
    document.documentElement.classList.toggle('motion-paused', p);
  }, []);
  const toggle = () => {
    const p = !paused;
    setPaused(p);
    document.documentElement.classList.toggle('motion-paused', p);
    try { localStorage.setItem(KEY, p ? 'paused' : 'on'); } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-white/70 backdrop-blur transition hover:bg-white/10 hover:text-white"
    >
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      {paused ? 'Play background motion' : 'Pause background motion'}
    </button>
  );
}
