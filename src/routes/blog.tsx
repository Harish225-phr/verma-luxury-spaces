import { createFileRoute, Link } from "@tanstack/react-router";
import heroLiving from "@/assets/hero-living.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import villa from "@/assets/project-villa.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import office from "@/assets/project-office.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Verma Interior Studio" },
      { name: "description", content: "Interior trends, modern home ideas, space-saving tips, luxury décor and color theory from Verma Interior Studio." },
      { property: "og:title", content: "Journal — Verma Interior Studio" },
      { property: "og:description", content: "Reading from the studio." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { t: "The Quiet Luxury Of Unpolished Marble", c: "Materials", d: "Why honed and unfilled stone is replacing high-gloss in our 2025 projects.", img: heroLiving, date: "May 02, 2026", read: "6 min" },
  { t: "Designing Bedrooms For Better Sleep", c: "Residential", d: "A research-backed approach to lighting, palette and material in the master suite.", img: bedroom, date: "Apr 18, 2026", read: "8 min" },
  { t: "Inside The Modern Indian Kitchen", c: "Modular", d: "How modular kitchens have evolved past 'L-shape vs U-shape' debates.", img: kitchen, date: "Apr 03, 2026", read: "5 min" },
  { t: "What Makes A Villa Feel Like A Villa", c: "Architecture", d: "Five composition principles we apply to every villa brief.", img: villa, date: "Mar 21, 2026", read: "9 min" },
  { t: "The Office, Reimagined As A Library", c: "Workspaces", d: "Why our most loved offices feel more like reading rooms than open-plans.", img: office, date: "Mar 09, 2026", read: "4 min" },
  { t: "Mood, Light, Velvet: Designing A Restaurant", c: "Hospitality", d: "Notes from designing Maison Noir, Mumbai's quiet new dining destination.", img: restaurant, date: "Feb 26, 2026", read: "7 min" },
];

function Blog() {
  const [hero, ...rest] = posts;
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-40">
        <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Journal</div>
        <h1 className="font-display text-6xl leading-[1] md:text-8xl">Reading from <em className="italic gradient-gold-text">the studio.</em></h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">Notes, references and field studies from our designers — published when there's something worth saying.</p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <Reveal>
          <Link to="/blog" className="group grid gap-10 lg:grid-cols-12">
            <div className="img-zoom lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden rounded-sm gold-border">
                <img src={hero.img} alt={hero.t} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{hero.c} · {hero.date} · {hero.read} read</div>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{hero.t}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{hero.d}</p>
              <span className="mt-6 text-[11px] uppercase tracking-[0.25em] underline-grow inline-block w-fit">Read article →</span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <Link to="/blog" className="group block">
                <div className="img-zoom aspect-[4/5] overflow-hidden rounded-sm gold-border">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-gold">{p.c} · {p.read} read</div>
                <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-gold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink/50 py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">— Newsletter</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A quiet email, once a month.</h2>
            <p className="mt-4 text-sm text-muted-foreground">New essays, project reveals and material discoveries — no noise, no spam.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input type="email" required placeholder="you@domain.com" className="flex-1 rounded-full border border-border bg-card/40 px-6 py-3 text-sm outline-none focus:border-gold" />
              <button className="rounded-full bg-gold px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-primary-foreground">Subscribe</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
