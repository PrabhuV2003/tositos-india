import { useRef } from "react";
import { useCounter } from "@/hooks/useScrollReveal";

function Stat({ value, suffix = "", label, icon }: { value: number; suffix?: string; label: string; icon: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCounter(ref, value);
  return (
    <div className="reveal-scale text-center group">
      <div className="text-5xl mb-4 text-brand-gold transition-transform group-hover:scale-110">{icon}</div>
      <div className="font-impact text-6xl md:text-7xl text-brand-cream leading-none">
        <span ref={ref}>0</span>
        <span className="text-brand-gold">{suffix}</span>
      </div>
      <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.3em] text-brand-cream/70">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-red-deep via-brand-charcoal to-brand-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-20 grain" />
      <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-brand-gold/30 blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-impact tracking-[0.4em] text-brand-gold text-sm">BY THE NUMBERS</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand-cream">
            A growth story written in <span className="text-gradient-gold italic">numbers</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          <Stat value={4} label="Outlets Live" icon="◉" />
          <Stat value={3} label="Cities Served" icon="✦" />
          <Stat value={2} label="Countries" icon="★" />
          <Stat value={25000} suffix="+" label="Birds Sold" icon="❖" />
        </div>
      </div>
    </section>
  );
}
