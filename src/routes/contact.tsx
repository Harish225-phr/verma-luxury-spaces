import { createFileRoute } from "@tanstack/react-router";
import heroLiving from "@/assets/hero-living.jpg";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Verma Interior Studio" },
      { name: "description", content: "Book a complimentary 30-minute consultation with a senior designer at Verma Interior Studio. Studios in Gurugram and Dubai." },
      { property: "og:title", content: "Contact — Verma Interior Studio" },
      { property: "og:description", content: "Book a complimentary consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <img src={heroLiving} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/90 to-ink" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-20">
        <Reveal>
          <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Get in Touch</div>
          <h1 className="max-w-3xl font-display text-6xl leading-[1] md:text-8xl">Let's begin <em className="italic gradient-gold-text">your project.</em></h1>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="glass-strong rounded-sm p-8 md:p-12">
              {sent ? (
                <div className="py-20 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold text-primary-foreground">✓</div>
                  <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
                  <p className="mt-3 text-sm text-muted-foreground">A senior designer will reach out within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" />
                    <Field label="City" name="city" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Project type</label>
                    <select className="mt-2 w-full rounded-sm border border-border bg-card/40 px-4 py-3 text-sm outline-none focus:border-gold">
                      {["Residence", "Villa", "Apartment", "Office", "Restaurant / Hotel", "Other"].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tell us about your space</label>
                    <textarea rows={5} className="mt-2 w-full rounded-sm border border-border bg-card/40 px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Square footage, timeline, references…" />
                  </div>
                  <button className="rounded-full bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
                    Request Consultation
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-8 lg:col-span-5">
            <div className="glass-strong rounded-sm p-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Gurugram Studio</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">22, Cabin Cross Road, DLF Phase IV<br />Gurugram, India 122002</p>
              <a href="mailto:hello@vermastudio.in" className="mt-4 block text-sm text-foreground underline-grow">hello@vermastudio.in</a>
              <a href="tel:+919876543210" className="mt-1 block text-sm text-foreground underline-grow">+91 98 7654 3210</a>
            </div>
            <div className="glass-strong rounded-sm p-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Dubai Studio</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Warehouse 14, Al Quoz 1<br />Dubai, UAE</p>
              <a href="mailto:dubai@vermastudio.in" className="mt-4 block text-sm text-foreground underline-grow">dubai@vermastudio.in</a>
            </div>
            <div className="glass-strong rounded-sm p-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Follow</div>
              <div className="mt-4 flex gap-4 text-sm">
                {["Instagram", "Pinterest", "Behance", "LinkedIn"].map((s) => (
                  <a key={s} href="#" className="underline-grow text-muted-foreground transition-colors hover:text-foreground">{s}</a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 overflow-hidden rounded-sm gold-border">
            <iframe
              title="Verma Studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.0820,28.4640,77.1080,28.4860&layer=mapnik"
              className="h-[420px] w-full grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...props }: any) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <input {...props} className="mt-2 w-full rounded-sm border border-border bg-card/40 px-4 py-3 text-sm outline-none focus:border-gold" />
    </label>
  );
}
