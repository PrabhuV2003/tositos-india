const perks = [
  { t: "Proven Unit Economics", d: "Average payback period of 18–24 months across our operating outlets." },
  { t: "End-to-End Setup", d: "Site selection, design, fit-out, licensing — handled by the Tositos team." },
  { t: "Centralised Supply", d: "Spice blends, marinades and packaging shipped from our central commissary." },
  { t: "Marketing Engine", d: "National brand campaigns, local launch playbooks and a dedicated growth team." },
  { t: "Operations Mastery", d: "21-day on-site training, SOPs perfected over five years, ongoing audits." },
  { t: "Tech Stack Included", d: "POS, inventory, CRM and delivery aggregator integrations from day one." },
];

export default function Franchise() {
  return (
    <section id="franchise" className="relative py-28 md:py-36 bg-brand-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/10 to-transparent" />
      <div className="container relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 reveal-left">
          <span className="font-impact tracking-[0.4em] text-brand-red text-sm">FRANCHISE OPPORTUNITY</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight">
            Build the brand <br />
            <span className="text-gradient-fire italic">India is hungry for.</span>
          </h2>
          <p className="mt-6 text-lg text-brand-charcoal/75 leading-relaxed">
            Tositos is selectively expanding across India through a structured
            franchise program. We partner with operators who share our standards —
            and we hand them a playbook engineered for success.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-brand-charcoal text-brand-cream p-6 shadow-card">
              <div className="text-xs uppercase tracking-widest text-brand-gold">Investment from</div>
              <div className="mt-2 font-impact text-4xl">₹45L</div>
              <div className="text-xs text-brand-cream/60 mt-1">All-in, turnkey</div>
            </div>
            <div className="rounded-2xl bg-gradient-fire text-white p-6 shadow-fire">
              <div className="text-xs uppercase tracking-widest opacity-90">Avg. payback</div>
              <div className="mt-2 font-impact text-4xl">18–24 mo</div>
              <div className="text-xs opacity-80 mt-1">Across live outlets</div>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-charcoal text-brand-cream px-8 py-4 font-semibold hover:bg-brand-red transition-all hover:scale-105 group"
          >
            Apply Now
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {perks.map((p, i) => (
            <div
              key={p.t}
              className={`reveal reveal-delay-${(i % 3) + 1} group p-6 rounded-2xl bg-white border border-brand-charcoal/10 hover:border-brand-red hover:shadow-fire transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-fire flex items-center justify-center text-white font-bold mb-4 group-hover:rotate-6 transition-transform">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-charcoal">{p.t}</h3>
              <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
