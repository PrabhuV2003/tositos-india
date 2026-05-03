import logo from "@/assets/tositos-logo.webp";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="relative bg-brand-charcoal text-brand-cream pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-fire" />
      <div className="container grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Tositos India" className="h-24 w-auto" />
          <p className="mt-4 max-w-md text-brand-cream/70 leading-relaxed">
            Tositos India — premium fried chicken, engineered with hospitality
            in mind. Now franchising selectively across India.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[<LuInstagram />, <LuFacebook />, <LuTwitter />, <LuLinkedin />].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center text-xs font-semibold hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-brand-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/75">
            {[
              ["Our Story", "#story"],
              ["The Difference", "#difference"],
              ["Journey", "#journey"],
              ["Menu", "#menu"],
              ["Franchise", "#franchise"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="hover:text-brand-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-brand-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/75">
            <li>franchise@tositos.in</li>
            <li>+91 80 4567 8900</li>
            <li>HQ — Indiranagar, Bengaluru</li>
          </ul>
          <a
            href="#franchise"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-fire text-white px-5 py-2.5 text-sm font-semibold hover:scale-105 transition-transform"
          >
            Apply for Franchise →
          </a>
        </div>
      </div>

      <div className="container mt-16 pt-6 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-cream/50">
        <div>© {new Date().getFullYear()} Tositos India. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}
