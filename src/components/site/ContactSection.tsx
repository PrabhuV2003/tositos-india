import FranchiseForm from "./FranchiseForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-gradient-to-br from-brand-red-deep via-brand-red-deep/40 to-brand-gold-soft overflow-hidden">
      <div className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-red/25 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-14 items-start">
        <div className="reveal-left text-brand-cream lg:sticky lg:top-28">
          <span className="font-impact tracking-[0.4em] text-brand-gold text-sm">FRANCHISE INQUIRY</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            Let's build the <br />
            <span className="text-gradient-gold italic">next outlet</span> together.
          </h2>
          <p className="mt-6 text-lg text-brand-cream/75 leading-relaxed max-w-md">
            Tell us a little about yourself. Our franchise development team
            personally responds to every qualified inquiry within 48 hours —
            no call centres, no autoresponders.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              ["Personal call with a Tositos director", "No sales reps. Founders and senior leadership only."],
              ["Detailed unit economics shared upfront", "Real numbers from real outlets — not projections."],
              ["End-to-end launch support", "From site selection to opening day, we handle it with you."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-fire flex items-center justify-center text-sm font-bold shadow-fire">✓</div>
                <div>
                  <div className="font-display font-bold text-brand-cream text-lg">{t}</div>
                  <div className="text-sm text-brand-cream/65">{d}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <div className="text-xs uppercase tracking-widest text-brand-gold">Email</div>
              <div className="mt-1 text-brand-cream">franchise@tositos.in</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-brand-gold">Phone</div>
              <div className="mt-1 text-brand-cream">+91 80 4567 8900</div>
            </div>
          </div>
        </div>

        <div className="reveal-right">
          <FranchiseForm />
        </div>
      </div>
    </section>
  );
}
