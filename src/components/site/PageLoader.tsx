import { useEffect, useState } from "react";
import logo from "@/assets/tositos-logo.webp";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setHidden(true);
        setTimeout(() => setDone(true), 800);
      }
    };
    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (hidden) {
      const t = setTimeout(() => {
        document.body.style.overflow = "";
      }, 700);
      return () => clearTimeout(t);
    }
  }, [hidden]);

  if (done) return null;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-hero transition-all duration-700 ${
        hidden ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-red/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-gold/25 blur-3xl animate-pulse" />

      {/* Logo with shimmer ring */}
      <div className="relative">
        <div className="absolute inset-0 -m-6 rounded-full border border-brand-gold/40 animate-pulse-glow" />
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-brand-cream/95 flex items-center justify-center shadow-fire animate-float">
          <img src={logo} alt="Tositos India" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
        </div>
      </div>

      {/* Brand wordmark */}
      <div className="mt-10 text-center relative">
        <div className="font-impact tracking-[0.5em] text-brand-gold text-xs md:text-sm">
          TOSITOS INDIA
        </div>
        <div className="mt-2 font-display italic text-brand-cream/80 text-base md:text-lg">
          Crafting the next bite…
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-10 w-56 md:w-72">
        <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-fire transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[10px] tracking-[0.3em] text-brand-cream/50 font-impact">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
