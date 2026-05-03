import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Only digits and +-() allowed"),
  email: z.string().trim().email("Enter a valid email").max(120),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  investment: z.string().min(1, "Select an investment range"),
  message: z.string().trim().max(800).optional(),
});

const ranges = [
  "₹45L – ₹75L",
  "₹75L – ₹1.2Cr",
  "₹1.2Cr – ₹2Cr",
  "₹2Cr +",
  "Multi-unit / Master Franchise",
];

export default function FranchiseForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    investment: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    // UI-only: simulate submission
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Inquiry received — our franchise team will be in touch within 48 hours.");
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-brand-charcoal text-brand-cream p-10 md:p-14 shadow-card text-center reveal-scale in-view">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-fire flex items-center justify-center text-3xl shadow-fire">
          ✓
        </div>
        <h3 className="mt-6 font-display text-3xl md:text-4xl font-bold">
          Welcome to the <span className="text-gradient-gold italic">Tositos</span> family.
        </h3>
        <p className="mt-4 text-brand-cream/75 max-w-md mx-auto">
          Your inquiry is in. A member of our franchise development team will
          reach out to <strong className="text-brand-gold">{values.email}</strong>{" "}
          within 48 hours with next steps.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setValues({ name: "", phone: "", email: "", city: "", investment: "", message: "" });
          }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold/60 text-brand-gold px-6 py-3 text-sm font-semibold hover:bg-brand-gold hover:text-brand-navy transition-all"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3.5 text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-colors";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl bg-brand-charcoal text-brand-cream p-8 md:p-10 shadow-card border border-white/5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="f-name" className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Full Name</label>
          <input id="f-name" type="text" value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" className={field} maxLength={80} />
          {errors.name && <p className="mt-1.5 text-xs text-brand-gold-soft">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="f-phone" className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Phone</label>
          <input id="f-phone" type="tel" value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98XXX XXXXX" className={field} maxLength={20} />
          {errors.phone && <p className="mt-1.5 text-xs text-brand-gold-soft">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="f-email" className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Email</label>
          <input id="f-email" type="email" value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" className={field} maxLength={120} />
          {errors.email && <p className="mt-1.5 text-xs text-brand-gold-soft">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="f-city" className="block text-xs uppercase tracking-widest text-brand-gold mb-2">City</label>
          <input id="f-city" type="text" value={values.city} onChange={(e) => update("city", e.target.value)} placeholder="Mumbai, Bengaluru, etc." className={field} maxLength={60} />
          {errors.city && <p className="mt-1.5 text-xs text-brand-gold-soft">{errors.city}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="f-inv" className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Investment Range</label>
          <select
            id="f-inv"
            value={values.investment}
            onChange={(e) => update("investment", e.target.value)}
            className={`${field} appearance-none cursor-pointer bg-[length:14px] bg-[right_1rem_center] bg-no-repeat`}
            style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23F5C443'><path d='M5 8l5 5 5-5z'/></svg>\")" }}
          >
            <option value="" className="bg-brand-charcoal">Select your investment capacity</option>
            {ranges.map((r) => (
              <option key={r} value={r} className="bg-brand-charcoal">{r}</option>
            ))}
          </select>
          {errors.investment && <p className="mt-1.5 text-xs text-brand-gold-soft">{errors.investment}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="f-msg" className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Tell us about yourself <span className="text-brand-cream/40 normal-case tracking-normal">(optional)</span></label>
          <textarea
            id="f-msg"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Share your background, locations of interest, and timeline."
            className={`${field} resize-none`}
            maxLength={800}
          />
          <div className="mt-1 text-right text-[11px] text-brand-cream/40">{values.message.length}/800</div>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire text-white py-4 font-semibold shadow-fire hover:scale-[1.02] active:scale-100 transition-transform disabled:opacity-70 disabled:hover:scale-100"
      >
        {submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending your inquiry…
          </>
        ) : (
          <>
            Submit Franchise Inquiry
            <span>→</span>
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-brand-cream/50">
        By submitting, you agree to be contacted by the Tositos India franchise team.
      </p>
    </form>
  );
}
