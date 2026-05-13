import { createFileRoute, Link } from "@tanstack/react-router";
import studio from "@/assets/about-studio.jpg";
import villa from "@/assets/project-villa.jpg";
import heroLiving from "@/assets/hero-living.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Verma Interior Studio" },
      { name: "description", content: "Founded in 2012, Verma Interior Studio is a 24-strong design house crafting cinematic homes, hospitality and workspaces across India." },
      { property: "og:title", content: "About — Verma Interior Studio" },
      { property: "og:description", content: "The studio, the founder, the philosophy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { y: "2012", t: "Studio Founded", d: "Aarav Verma opens a 400 sq ft studio in Gurugram with three projects." },
  { y: "2015", t: "First AD Feature", d: "A Lutyens bungalow restoration is featured in Architectural Digest India." },
  { y: "2018", t: "Hospitality Expansion", d: "Studio takes on its first boutique hotel project in Goa." },
  { y: "2021", t: "Dubai Studio", d: "Second studio opens in Al Quoz to serve GCC clients." },
  { y: "2023", t: "AD100 List", d: "Named to Architectural Digest's AD100 list of India's best designers." },
  { y: "2025", t: "240+ Spaces", d: "Crossed 240 completed projects across 14 cities and 4 countries." },
];

const team = [
  { name: "Aarav Verma", role: "Founder & Creative Director" },
  { name: "Ishita Rao", role: "Principal Designer, Residential" },
  { name: "Karan Mehta", role: "Head of Hospitality" },
  { name: "Naina Kapoor", role: "Material & Styling Director" },
];

function About() {
  return (
    <>
      <section className="relative flex h-[80vh] items-end overflow-hidden">
        <img src={studio} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20">
          <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold animate-fade-up">— Our Story</div>
          <h1 className="max-w-4xl font-display text-6xl leading-[1] md:text-8xl animate-fade-up">
            A studio built on <em className="italic gradient-gold-text">restraint, ritual & material.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">— Founder's Letter</div>
          <h2 className="mt-3 font-display text-5xl leading-tight">Aarav Verma</h2>
          <div className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">Founder · Creative Director</div>
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
          <p className="font-display text-2xl italic text-foreground">"A home is not decorated. It is composed — like music."</p>
          <p>I started Verma Studio because I was tired of homes that looked like they were assembled from a catalogue. Real luxury isn't loud; it's specific. It's the weight of a brass handle, the way late afternoon light hits unpolished travertine, the silence of a well-detailed door.</p>
          <p>Twelve years later, our studio is twenty-four people strong. We've completed homes from Lutyens Delhi to Palm Jumeirah, and the brief is always the same: build something the client will still love in twenty years.</p>
          <p>Thank you for considering us. We'd love to hear about your space.</p>
        </Reveal>
      </section>

      <section className="bg-ink/50 py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-2">
          {[
            { t: "Our Mission", d: "To craft interiors that feel inevitable — spaces where every material, every line, every shadow earns its place." },
            { t: "Our Vision", d: "A world where Indian interior design sets the global standard for restraint, craft and storytelling." },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="glass-strong h-full rounded-sm p-12">
                <div className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">— {b.t}</div>
                <p className="font-display text-3xl leading-tight">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-32">
        <Reveal>
          <div className="mb-16">
            <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Studio Journey</div>
            <h2 className="font-display text-5xl leading-tight md:text-6xl">A timeline of <em className="italic gradient-gold-text">quiet milestones.</em></h2>
          </div>
        </Reveal>
        <div className="relative border-l border-border pl-10">
          {timeline.map((m, i) => (
            <Reveal key={m.y} delay={i * 80}>
              <div className="relative mb-14">
                <div className="absolute -left-[46px] top-1 grid h-7 w-7 place-items-center rounded-full bg-ink gold-border">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <div className="font-display text-3xl text-gold">{m.y}</div>
                <h3 className="mt-1 font-display text-2xl">{m.t}</h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink/50 py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— The Team</div>
                <h2 className="font-display text-5xl md:text-6xl">Twenty-four humans, one taste.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="img-zoom group relative aspect-[3/4] overflow-hidden rounded-sm gold-border">
                  <img src={[heroLiving, villa, bedroom, studio][i]} alt={m.name} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="font-display text-xl">{m.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{m.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-32">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Recognition</div>
            <h2 className="font-display text-5xl md:text-6xl">Awards & press.</h2>
          </div>
        </Reveal>
        <div className="grid gap-px bg-border/60 md:grid-cols-4">
          {[
            { y: 2024, t: "AD100 India", p: "Architectural Digest" },
            { y: 2023, t: "Best Hospitality Interior", p: "Elle Decor IDA" },
            { y: 2022, t: "Awwwards Honorable", p: "Studio Website" },
            { y: 2021, t: "Cover Feature", p: "House & Garden India" },
          ].map((a) => (
            <Reveal key={a.t}>
              <div className="bg-card p-10 text-center">
                <div className="font-display text-5xl gradient-gold-text"><Counter to={a.y} /></div>
                <div className="mt-4 font-display text-lg">{a.t}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{a.p}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img src={villa} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl">Let's design something <em className="italic gradient-gold-text">unforgettable.</em></h2>
          <Link to="/contact" className="mt-8 rounded-full bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-primary-foreground">
            Begin a Project
          </Link>
        </div>
      </section>
    </>
  );
}
