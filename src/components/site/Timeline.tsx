const milestones = [
  { year: "2022", title: "The Idea", body: "Two founders set out to build India's first QSR around healthy, juicy Infused Roasted Chicken — not deep-fried." },
  { year: "2022", title: "Flagship Opens", body: "The first Tositos outlet opens its doors. The Infused Roasted Chicken sells out in the very first week." },
  { year: "2023", title: "Menu Evolves", body: "Smoky Tandoor, Cheese Jolokia, Tangy Herbs and Guntur Nalla Karam join the menu — a flavour line for every palate." },
  { year: "2024", title: "Multi-City", body: "Tositos expands to 3 cities with a tight, repeatable kitchen playbook and a growing fanbase." },
  { year: "2025", title: "Goes International", body: "Crosses borders into a second country. 4 outlets live, 25,000+ birds roasted and counting." },
  { year: "2026", title: "Franchise Era", body: "Tositos opens its franchise program to handpicked partners — scaling Infused Roasted Chicken across India and beyond." },
];

export default function Timeline() {
  return (
    <section id="journey" className="relative py-28 md:py-36 bg-brand-cream overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="font-impact tracking-[0.4em] text-brand-red text-sm">THE JOURNEY</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-brand-charcoal">
            From a single recipe <br />
            to a <span className="text-gradient-fire italic">national obsession.</span>
          </h2>
        </div>

        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Spine */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold via-brand-red to-brand-red-deep md:-translate-x-1/2 rounded-full" />

          <div className="space-y-14">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[22px] md:left-[48.7%] -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-fire ring-4 ring-brand-cream shadow-fire z-10 reveal-scale" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-1/2" />

                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${left ? "md:pl-12" : "md:pr-12 md:text-right"} ${
                      left ? "reveal-right" : "reveal-left"
                    }`}
                  >
                    <div className="inline-block font-impact text-5xl text-gradient-fire">{m.year}</div>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold text-brand-charcoal">{m.title}</h3>
                    <p className="mt-2 text-brand-charcoal/70 leading-relaxed">{m.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
