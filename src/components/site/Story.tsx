import founders from "@/assets/founders.jpg";

export default function Story() {
  return (
    <section id="story" className="relative py-28 md:py-36 bg-brand-cream overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative reveal-left">
          <div className="absolute -inset-4 bg-gradient-fire rounded-3xl rotate-3 opacity-30 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src={founders}
              alt="The four founders of Tositos India in their kitchen"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-fire text-white rounded-2xl px-6 py-5 shadow-fire rotate-3">
            <div className="font-impact text-4xl leading-none">25K+</div>
            <div className="text-xs tracking-widest uppercase mt-1">Birds roasted</div>
          </div>
        </div>

        <div className="reveal-right">
          <span className="inline-block font-impact tracking-[0.4em] text-brand-red text-sm">OUR STORY</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight">
            Two founders. <br />
            One <span className="text-gradient-fire italic">infused</span> obsession.
          </h2>

          <div className="mt-8 space-y-5 text-brand-charcoal/80 text-lg leading-relaxed">
            <p>
              Tositos India was born in 2022 from a simple, stubborn idea between two
              founders — that chicken in India deserved to be <em className="text-brand-red font-semibold">healthier, juicier and infinitely more flavourful</em>
              {" "}than what the fried-only QSR boom was serving.
            </p>
            <p>
              We pioneered the <em className="text-brand-red font-semibold">Infused Roasting</em> method —
              every bird is brined, deep-marinated for hours so flavour reaches the
              bone, then slow-roasted on open fire. No deep frying. No shortcuts. Just
              clean, juicy, fall-off-the-bone chicken.
            </p>
            <p>
              In four short years we've grown into India's first Infused Roasted Chicken
              QSR — 4 outlets across 3 cities and 2 countries, with over
              <strong> 25,000+ birds</strong> served and a community of guests who tell
              us it's simply the juiciest chicken they've ever had.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "Founders", v: "2" },
              { k: "Founded", v: "2022" },
              { k: "Birds sold", v: "25K+" },
            ].map((s) => (
              <div key={s.k} className="border-l-4 border-brand-gold pl-4">
                <div className="font-impact text-3xl text-brand-charcoal">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-brand-charcoal/60 mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
