const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Regular Guest",
    quote:
      "I've stopped ordering fried chicken altogether. The Infused Roasted Chicken at Tositos is juicier, lighter and somehow more flavourful — my whole family is hooked.",
  },
  {
    name: "Priya Iyer",
    role: "Food Blogger",
    quote:
      "Cheese Jolokia is unreal — molten cheese, slow-roasted bird, that bhut jolokia kick. Tositos is doing roasted chicken like nobody else in India right now.",
  },
  {
    name: "Arjun Kapoor",
    role: "Repeat Customer",
    quote:
      "Guntur Nalla Karam took me straight back to Andhra. The marinade actually goes to the bone. You can taste the hours of work in every bite.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-gradient-to-br from-brand-cream via-brand-cream to-brand-gold/15">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-impact tracking-[0.4em] text-brand-red text-sm">VOICES OF TOSITOS</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand-charcoal">
            What our partners <br />
            <span className="text-gradient-fire italic">and guests say.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-delay-${i + 1} relative bg-white rounded-3xl p-8 shadow-card hover:-translate-y-2 hover:shadow-fire transition-all duration-500`}
            >
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-gradient-fire flex items-center justify-center text-white text-3xl font-display shadow-fire">
                "
              </div>
              <blockquote className="mt-4 text-brand-charcoal/85 text-lg leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-brand-charcoal/10">
                <div className="font-display font-bold text-brand-charcoal text-lg">{t.name}</div>
                <div className="text-sm text-brand-red font-medium">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
