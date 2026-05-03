import { useEffect, useState } from "react";
import logo from "@/assets/tositos-logo.webp";

const links = [
  { href: "#story", label: "Story" },
  { href: "#difference", label: "Difference" },
  { href: "#journey", label: "Journey" },
  { href: "#menu", label: "Menu" },
  { href: "#franchise", label: "Franchise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-charcoal/90 backdrop-blur-lg shadow-card py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Tositos India logo" className="h-12 w-auto md:h-14 drop-shadow-lg" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-brand-cream/90 hover:text-brand-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#franchise"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-fire px-5 py-2.5 text-sm font-semibold text-white shadow-fire hover:scale-105 transition-transform"
        >
          Own a Franchise
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-brand-cream p-2"
        >
          <div className={`w-6 h-0.5 bg-brand-cream mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-brand-cream mb-1.5 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-brand-cream transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <ul className="container flex flex-col gap-4 pb-6 bg-brand-charcoal/95 backdrop-blur-lg rounded-b-2xl pt-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block text-brand-cream hover:text-brand-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <a
            href="#franchise"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-full bg-gradient-fire px-5 py-2.5 text-sm font-semibold text-white"
          >
            Own a Franchise
          </a>
        </ul>
      </div>
    </header>
  );
}
