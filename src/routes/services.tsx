import { createFileRoute, Link } from "@tanstack/react-router";
import heroLiving from "@/assets/hero-living.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import villa from "@/assets/project-villa.jpg";
import office from "@/assets/project-office.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import bath from "@/assets/project-bath.jpg";
import studio from "@/assets/about-studio.jpg";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Verma Interior Studio" },
      { name: "description", content: "Eight design disciplines: residential, modular kitchens, villa design, offices, bedrooms, restaurants, false ceilings and space planning." },
      { property: "og:title", content: "Services — Verma Interior Studio" },
      { property: "og:description", content: "Eight disciplines under one studio." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { id: "homes", title: "Luxury Home Interiors", desc: "End-to-end residential design — from layout to the last cushion.", img: heroLiving, price: "From ₹4,500/sq.ft.", benefits: ["Architectural reworking", "Bespoke joinery design", "Lighting choreography", "Art & object curation"] },
  { id: "kitchen", title: "Modular Kitchens", desc: "Italian and German kitchens engineered for chefs and entertainers.", img: kitchen, price: "From ₹6.5 lakh", benefits: ["Hettich/Blum hardware", "Quartz & marble tops", "Hood & appliance integration", "5-year studio warranty"] },
  { id: "villa", title: "Villa Design", desc: "Architecture-led villa interiors that scale with light and material.", img: villa, price: "From ₹5,500/sq.ft.", benefits: ["Site & light study", "Landscape coordination", "Custom millwork", "Smart-home integration"] },
  { id: "office", title: "Office Interiors", desc: "Workspaces with quiet authority — walnut, leather, brass.", img: office, price: "From ₹3,800/sq.ft.", benefits: ["Acoustic strategy", "Ergonomic specification", "Brand-led palette", "Phased delivery"] },
  { id: "bedroom", title: "Bedroom Sanctuaries", desc: "Layered, tactile retreats designed for rest and ritual.", img: bedroom, price: "From ₹3.5 lakh", benefits: ["Custom headboards", "Walk-in wardrobe planning", "Mood-based lighting", "Soft furnishing curation"] },
  { id: "hospitality", title: "Restaurant & Hospitality", desc: "Atmospheric dining rooms, lounges and boutique hotels.", img: restaurant, price: "On request", benefits: ["FOH/BOH planning", "Brand storytelling", "Vendor coordination", "Pre-opening support"] },
  { id: "ceiling", title: "False Ceiling & Lighting", desc: "Sculpted ceilings and lighting that elevate every room.", img: bath, price: "From ₹220/sq.ft.", benefits: ["Layered lighting design", "Cove & profile detailing", "Acoustic integration", "Smart dimming"] },
  { id: "planning", title: "Smart Space Planning", desc: "Spatial strategy that turns square feet into lifestyle.", img: studio, price: "From ₹1.5 lakh", benefits: ["Layout optioneering", "Storage analysis", "Flow & ergonomics", "Furniture placement plans"] },
];

const faqs = [
  { q: "What's the typical project timeline?", a: "A 3-bedroom apartment averages 14–18 weeks from final drawings to handover. Villas typically run 6–9 months." },
  { q: "Do you take projects outside India?", a: "Yes — we currently service clients in Dubai, London, Singapore and Toronto from our Gurugram and Dubai studios." },
  { q: "How is pricing structured?", a: "We work on a fixed design fee plus a transparent execution rate per square foot. No vendor commissions, ever." },
  { q: "Can you work with my architect?", a: "Of course. About 40% of our projects are co-led with the client's architect or PMC." },
];

function Services() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="relative flex h-[70vh] items-end overflow-hidden">
        <img src={kitchen} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20">
          <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Capabilities</div>
          <h1 className="max-w-4xl font-display text-6xl leading-[1] md:text-8xl">Eight disciplines. <em className="italic gradient-gold-text">One studio.</em></h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] space-y-32 px-6 py-32">
        {services.map((s, i) => (
          <Reveal key={s.id}>
            <div className={`grid gap-12 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-last" : ""}`}>
              <div className="lg:col-span-7">
                <div className="img-zoom aspect-[16/11] overflow-hidden rounded-sm gold-border">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">— Service 0{i + 1}</div>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{s.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-8 space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-1.5 h-1 w-4 shrink-0 bg-gold" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Investment</div>
                    <div className="mt-1 font-display text-2xl text-gold">{s.price}</div>
                  </div>
                  <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-primary-foreground">
                    Enquire →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* FAQ */}
      <section className="bg-ink/50 py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">— FAQ</div>
            <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">Questions, candidly answered.</h2>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              Don't see your question? Schedule a 30-minute consultation — we'll
              answer everything in person.
            </p>
            <Link to="/contact" className="mt-8 inline-block rounded-full glass px-6 py-3 text-[11px] uppercase tracking-[0.25em]">
              Talk to a designer →
            </Link>
          </Reveal>
          <div className="lg:col-span-7">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="border-b border-border">
                  <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-7 text-left">
                    <span className="font-display text-xl md:text-2xl">{f.q}</span>
                    <span className={`text-gold transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid overflow-hidden transition-all duration-500 ${open === i ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
