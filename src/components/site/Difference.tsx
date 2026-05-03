const features = [
  {
    icon: "🔥",
    title: "Roasted, Never Fried",
    body: "Every bird is slow fire-roasted to lock in juiciness — zero deep frying, zero compromise on flavour or health.",
  },
  {
    icon: "✦",
    title: "Deep Infusion Marinade",
    body: "Hour-long brines and signature spice infusions reach all the way to the bone. The juiciest bite you've ever had.",
  },
  {
    icon: "◆",
    title: "Sourced With Standards",
    body: "Farm-fresh, antibiotic-free chicken, cold-pressed oils and house-ground spice blends — clean ingredients, every time.",
  },
  {
    icon: "★",
    title: "Indian Flavours, Global Craft",
    body: "Smoky Tandoor meets Cheese Jolokia. Guntur Nalla Karam meets Tangy Herbs — bold Indian soul on a modern QSR menu.",
  },
  {
    icon: "❖",
    title: "Healthier QSR",
    body: "Roasting cuts oil, retains protein and keeps every bite light. Fast food that finally works for your body.",
  },
  {
    icon: "✺",
    title: "Built To Scale",
    body: "From 1 outlet to 4 across 2 countries in under 3 years — every recipe is engineered for consistency, kitchen to kitchen.",
  },
];

export default function Difference() {
  return (
    <section id="difference" className="relative py-28 md:py-36 bg-brand-charcoal text-brand-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(358 78% 42% / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, hsl(42 96% 55% / 0.3), transparent 50%)" }} />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="font-impact tracking-[0.4em] text-brand-gold text-sm">THE TOSITOS DIFFERENCE</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            Everyone fries. <br />
            <span className="text-gradient-gold italic">We infuse and roast.</span>
          </h2>
          <p className="mt-6 text-brand-cream/70 text-lg">
            Six reasons Tositos is India's first Infused Roasted Chicken QSR —
            and why guests call it the juiciest chicken they've ever had.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur hover:border-brand-gold/60 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-brand-red/10 to-brand-gold/10 pointer-events-none" />
              <div className="relative">
                <div className="text-4xl text-brand-gold mb-5">{f.icon}</div>
                <h3 className="font-display text-2xl font-bold text-brand-cream">{f.title}</h3>
                <p className="mt-3 text-brand-cream/70 leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
