import logo from "@/assets/tositos-logo.webp";
import heroImg from "@/assets/hero-chicken.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero grain"
    >
      {/* Backdrop */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Crispy fried chicken — Tositos India signature"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/60 to-brand-charcoal" />
      </div>

      {/* Floating accents */}
      <div className="absolute top-20 -left-24 w-72 h-72 rounded-full bg-brand-red/30 blur-3xl animate-float" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 rounded-full bg-brand-gold/25 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 text-center pt-24 pb-16">
        <div className="animate-hero-rise">
          <img
            src={logo}
            alt="Tositos India"
            className="mx-auto h-44 md:h-64 w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
          />
        </div>

        <p className="mt-6 text-brand-gold font-impact text-lg md:text-xl tracking-[0.4em] animate-hero-rise" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          INDIA'S FIRST INFUSED ROASTED CHICKEN QSR
        </p>

        <h1 className="mt-4 font-display font-black text-5xl md:text-7xl lg:text-8xl text-brand-cream leading-[1.05] animate-hero-rise" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
          Healthy. Juicy. <br />
          <span className="text-gradient-fire italic">Infused To Perfection.</span>
        </h1>

        <p className="mt-7 mx-auto max-w-2xl text-brand-cream/85 text-lg md:text-xl leading-relaxed animate-hero-rise" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
          The first Quick Service Restaurant serving healthy and juiciest
          Infused Roasted Chicken, alongside soulful Burgers, Wraps and Desserts —
          slow-marinated, fire-roasted, never fried.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-rise" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
          <a
            href="#story"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-8 py-4 text-base font-semibold text-white shadow-fire hover:scale-105 hover:-translate-y-0.5 transition-all"
          >
            Explore Our Story
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#franchise"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-gold/80 bg-brand-gold/10 backdrop-blur px-8 py-4 text-base font-semibold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all animate-pulse-glow"
          >
            Own a Franchise
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-brand-cream/60">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
