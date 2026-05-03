import m1 from "@/assets/menu-1.jpg";
import m2 from "@/assets/menu-2.jpg";
import m3 from "@/assets/menu-3.jpg";
import m4 from "@/assets/menu-4.jpg";
import m5 from "@/assets/menu-5.jpg";
import m6 from "@/assets/menu-6.jpg";

const items = [
  { img: m1, name: "Infused Roasted Chicken", tag: "Signature", desc: "Our hero. Whole bird brined and deep-infused for hours, then slow fire-roasted till the juices sing. The reason guests keep coming back." },
  { img: m2, name: "Smoky Tandoor", tag: "Bestseller", desc: "Charred over live tandoor coals, finished with kasuri methi butter — smoky, juicy, unmistakably Indian." },
  { img: m3, name: "Cheese Jolokia", tag: "Fiery", desc: "Molten cheese stuffed inside roasted chicken, glazed with bhut jolokia chilli reduction. Bold, creamy, dangerously addictive." },
  { img: m4, name: "Tangy Herbs", tag: "Light & Fresh", desc: "Fresh thyme, rosemary, lemon zest and cracked pepper — clean, herby and the lightest way to enjoy roasted chicken." },
  { img: m5, name: "Guntur Nalla Karam", tag: "Andhra Soul", desc: "Tossed in fiery Guntur red chillies, curry leaves and roasted spices. A South-Indian punch you won't forget." },
  { img: m6, name: "Loaded Nachos", tag: "Sharer", desc: "Crisp nachos piled with shredded roasted chicken, melted cheese, jalapeños, salsa and sour cream." },
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-28 md:py-36 bg-brand-charcoal text-brand-cream overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <span className="font-impact tracking-[0.4em] text-brand-gold text-sm">SIGNATURE MENU</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
              Six infusions that <br />
              <span className="text-gradient-gold italic">built our name.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-brand-cream/70">
            From our hero Infused Roasted Chicken to fiery Cheese Jolokia and
            Andhra-soul Guntur Nalla Karam — every dish is roasted, never fried,
            and built around the juiciest bird on the block.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((it, i) => (
            <article
              key={it.name}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 hover:border-brand-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-fire`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-fire text-white text-xs font-semibold tracking-wider uppercase">
                  {it.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                  {it.name}
                </h3>
                <p className="mt-2 text-sm text-brand-cream/70 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
