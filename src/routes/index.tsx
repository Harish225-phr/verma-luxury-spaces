import { createFileRoute, Link } from "@tanstack/react-router";
import heroLiving from "@/assets/hero-living.jpg";
import villa from "@/assets/project-villa.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import office from "@/assets/project-office.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import bath from "@/assets/project-bath.jpg";
import studio from "@/assets/about-studio.jpg";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { BeforeAfter } from "@/components/BeforeAfter";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verma Interior Studio — Luxury Interior Design in India" },
      { name: "description", content: "Cinematic luxury interiors for villas, apartments, hospitality and workspaces. Designing experiences that define lifestyle." },
      { property: "og:title", content: "Verma Interior Studio — Luxury Interior Design" },
      { property: "og:description", content: "Cinematic interiors for the world's most discerning clients." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { title: "Luxury Home Interiors", desc: "End-to-end residences with bespoke joinery, lighting and art curation.", img: heroLiving },
  { title: "Modular Kitchens", desc: "Italian-inspired modular kitchens engineered for chefs and entertainers.", img: kitchen },
  { title: "Villa Design", desc: "Architecture-led villa interiors balancing scale, light and material.", img: villa },
  { title: "Office Interiors", desc: "Workspaces with quiet authority, crafted in walnut, leather and brass.", img: office },
  { title: "Bedroom Sanctuaries", desc: "Layered, tactile retreats designed for rest and ritual.", img: bedroom },
  { title: "Restaurant & Hospitality", desc: "Atmospheric dining rooms, lounges and boutique hotels.", img: restaurant },
  { title: "False Ceiling & Lighting", desc: "Sculpted ceilings and lighting choreography that elevates every room.", img: bath },
  { title: "Smart Space Planning", desc: "Spatial strategy that turns square feet into lifestyle.", img: studio },
];

const projects = [
  { title: "The Aravalli Villa", category: "Modern Villa", img: villa, ratio: "aspect-[4/5]" },
  { title: "DLF Crest Penthouse", category: "Luxury Apartment", img: heroLiving, ratio: "aspect-[16/10]" },
  { title: "Chambers 22", category: "Office", img: office, ratio: "aspect-[3/4]" },
  { title: "Aurum Kitchen", category: "Kitchen", img: kitchen, ratio: "aspect-[3/4]" },
  { title: "Maison Noir", category: "Restaurant", img: restaurant, ratio: "aspect-[16/10]" },
  { title: "Suite 9 Master", category: "Bedroom", img: bedroom, ratio: "aspect-[4/5]" },
];

const why = [
  { t: "Premium Materials", d: "Sourced globally from marble, walnut, brass and bespoke fabric mills." },
  { t: "3D Visualization", d: "Photoreal walkthroughs before a single nail is hammered." },
  { t: "On-time Delivery", d: "Project-managed by senior designers with weekly milestone reviews." },
  { t: "Expert Designers", d: "A 24-strong studio of architects, stylists and craftsmen." },
  { t: "Personalized Design", d: "Every brief begins with how you live, not what's trending." },
  { t: "Turnkey Solutions", d: "From concept to keys — one accountable studio, zero handoff loss." },
];

const process = [
  { n: "01", t: "Consultation", d: "We listen. Lifestyle, rituals, references." },
  { n: "02", t: "Concept Design", d: "Mood, plan, palette and materiality." },
  { n: "03", t: "3D Visualization", d: "Photoreal renders to live the space." },
  { n: "04", t: "Material Selection", d: "Curated samples in our material library." },
  { n: "05", t: "Execution", d: "Senior-led site delivery, weekly reviews." },
  { n: "06", t: "Final Handover", d: "Styled, photographed, ready to live." },
];

const testimonials = [
  { name: "Rohan & Aanya Mehta", role: "Private Residence, Gurugram", quote: "They translated our scattered Pinterest dreams into a home that feels eternal. Every corner is photographed at least once a day." },
  { name: "Vikram Saluja", role: "Founder, Saluja Capital", quote: "The most disciplined creative studio we've worked with. Cinematic outcome, surgical project management." },
  { name: "Meera Iyer", role: "Maison Noir, Mumbai", quote: "Our restaurant became an experience. Footfall doubled in the first quarter — the design does the marketing." },
];

function Index() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img src={heroLiving} alt="Luxury living room" width={1920} height={1080} className="absolute inset-0 h-full w-full scale-110 object-cover" style={{ animation: "fade-up 1.4s ease-out both" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-28 md:justify-center md:pb-0">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold animate-fade-up">
              <span className="h-px w-10 bg-gold" /> Est. 2012 · Gurugram
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-[7.5rem] md:leading-[0.95]" style={{ animation: "fade-up 1.2s 0.2s both" }}>
              Designing <em className="italic gradient-gold-text">luxury</em> spaces
              <br /> that define lifestyle.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ animation: "fade-up 1.2s 0.5s both" }}>
              A multidisciplinary interior design studio crafting cinematic homes,
              hospitality and workspaces — for clients who collect experiences, not just rooms.
            </p>
            <div className="mt-10 flex flex-wrap gap-4" style={{ animation: "fade-up 1.2s 0.7s both" }}>
              <Link to="/projects" className="rounded-full bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
                View Projects
              </Link>
              <Link to="/contact" className="rounded-full glass px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground/10">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* floating stats */}
        <div className="absolute bottom-8 right-6 z-10 hidden gap-3 md:flex">
          {[
            { n: 12, s: "Years", suffix: "+" },
            { n: 240, s: "Projects", suffix: "+" },
            { n: 18, s: "Awards", suffix: "" },
          ].map((s) => (
            <div key={s.s} className="glass-strong animate-float rounded-sm px-6 py-4 text-center" style={{ animationDelay: `${Math.random() * 2}s` }}>
              <div className="font-display text-3xl text-gold"><Counter to={s.n} suffix={s.suffix} /></div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.s}</div>
            </div>
          ))}
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          Scroll
          <div className="mx-auto mt-2 h-10 w-px bg-border">
            <div className="h-3 w-px animate-[scroll-indicator_1.6s_ease-in-out_infinite] bg-gold" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-ink/40 py-6">
        <div className="marquee-mask overflow-hidden">
          <div className="flex animate-[shimmer_30s_linear_infinite] gap-16 whitespace-nowrap text-2xl font-display text-muted-foreground" style={{ width: "200%" }}>
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0 gap-16">
                {["Architectural Digest", "Elle Decor", "AD100", "Awwwards", "Behance Featured", "House & Garden", "Vogue Living"].map((x) => (
                  <span key={x} className="flex items-center gap-16">
                    {x} <span className="text-gold">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1400px] px-6 py-32">
        <Reveal>
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Capabilities</div>
              <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
                A studio for every <em className="italic gradient-gold-text">surface</em> of your life.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Eight design disciplines under one roof — so your space stays
              cohesive from floorplan to final styling.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-sm bg-border/60 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group relative h-full overflow-hidden bg-card p-6 transition-all duration-700 hover:bg-secondary">
                <div className="img-zoom mb-6 aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold">0{i + 1}</div>
                <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground underline-grow">
                  Explore →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative bg-ink/50 py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom aspect-[3/4] overflow-hidden rounded-sm gold-border">
                <img src={studio} alt="Studio" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-12 space-y-4">
                <div className="img-zoom aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={bedroom} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="img-zoom aspect-square overflow-hidden rounded-sm">
                  <img src={kitchen} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— The Studio</div>
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              We don't just design interiors — <em className="italic gradient-gold-text">we craft experiences.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Founded in 2012 by Aarav Verma, our studio blends architectural rigour
              with the emotional craft of interior styling. Every project begins as
              a quiet conversation about how you actually live — and ends as a
              cinematic home you'll never want to leave.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4 border-y border-border py-10">
              {[
                { n: 12, s: "Years", suffix: "+" },
                { n: 240, s: "Projects", suffix: "+" },
                { n: 1100, s: "Happy Clients", suffix: "+" },
              ].map((s) => (
                <div key={s.s}>
                  <div className="font-display text-4xl gradient-gold-text"><Counter to={s.n} suffix={s.suffix} /></div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.s}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="mt-10 inline-block rounded-full glass px-7 py-3 text-[11px] uppercase tracking-[0.25em]">
              Our Story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-[1400px] px-6 py-32">
        <Reveal>
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Selected Work</div>
              <h2 className="font-display text-5xl leading-tight md:text-6xl">Featured projects.</h2>
            </div>
            <Link to="/projects" className="text-[11px] uppercase tracking-[0.25em] underline-grow">
              View all 240 projects →
            </Link>
          </div>
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link to="/projects" className="group block">
                <div className={`img-zoom relative overflow-hidden rounded-sm gold-border ${p.ratio}`}>
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category}</div>
                    <div className="mt-1 font-display text-2xl">{p.title}</div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Before / After */}
        <Reveal>
          <div className="mt-24 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold">— Transformation</div>
              <h3 className="mt-3 font-display text-4xl leading-tight">From bare shell to <em className="italic gradient-gold-text">cinematic home.</em></h3>
              <p className="mt-6 text-sm text-muted-foreground">
                Drag the slider to compare a recent Gurugram penthouse — from
                builder-finish handover to Verma Studio's final styled reveal.
              </p>
            </div>
            <div className="lg:col-span-7">
              <BeforeAfter before={office} after={heroLiving} alt="Before and after" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY */}
      <section className="relative bg-ink/50 py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <div className="mb-16 max-w-3xl">
              <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Why Verma Studio</div>
              <h2 className="font-display text-5xl leading-tight md:text-6xl">
                Six standards we never <em className="italic gradient-gold-text">compromise</em> on.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-px bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 60}>
                <div className="group relative h-full bg-card p-10 transition-all duration-700 hover:bg-secondary">
                  <div className="font-display text-5xl text-gold/50 transition-colors group-hover:text-gold">0{i + 1}</div>
                  <h3 className="mt-6 font-display text-2xl">{w.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{w.d}</p>
                  <div className="absolute inset-x-10 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1400px] px-6 py-32">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Voices</div>
            <h2 className="font-display text-5xl leading-tight md:text-6xl">Loved by people who <em className="italic gradient-gold-text">notice everything.</em></h2>
          </div>
        </Reveal>
        <div className="relative mx-auto max-w-4xl">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`transition-all duration-1000 ${i === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}
            >
              <div className="glass-strong rounded-sm p-12 text-center">
                <div className="mb-6 text-gold tracking-[0.5em]">★ ★ ★ ★ ★</div>
                <p className="font-display text-2xl italic leading-relaxed text-foreground md:text-3xl">"{t.quote}"</p>
                <div className="mt-8">
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setActive(i)} className={`h-px transition-all ${i === active ? "w-12 bg-gold" : "w-6 bg-border"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-ink/50 py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <div className="mb-16">
              <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Process</div>
              <h2 className="font-display text-5xl leading-tight md:text-6xl">From first call to <em className="italic gradient-gold-text">final keys.</em></h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold to-transparent md:block" />
            <div className="grid gap-8 md:grid-cols-6">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 100}>
                  <div className="relative">
                    <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-ink gold-border font-display text-gold">{p.n}</div>
                    <div className="text-center">
                      <h3 className="font-display text-xl">{p.t}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-[1400px] px-6 py-32">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Gallery</div>
              <h2 className="font-display text-5xl leading-tight md:text-6xl">A moodboard of <em className="italic gradient-gold-text">moments.</em></h2>
            </div>
            <Link to="/gallery" className="text-[11px] uppercase tracking-[0.25em] underline-grow">All gallery →</Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[heroLiving, kitchen, bedroom, villa, restaurant, bath, office, studio].map((src, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className={`img-zoom overflow-hidden rounded-sm ${i % 3 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}>
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={villa} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Begin Today</div>
            <h2 className="font-display text-5xl leading-tight md:text-7xl">Transform your dream space <em className="italic gradient-gold-text">into reality.</em></h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">A 30-minute consultation with a senior designer — complimentary, candid, no commitment.</p>
            <Link to="/contact" className="mt-10 inline-block rounded-full bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
              Schedule Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
