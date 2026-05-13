import { createFileRoute, Link } from "@tanstack/react-router";
import heroLiving from "@/assets/hero-living.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import villa from "@/assets/project-villa.jpg";
import office from "@/assets/project-office.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import bath from "@/assets/project-bath.jpg";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Verma Interior Studio" },
      { name: "description", content: "Selected residential, hospitality and workspace projects from Verma Interior Studio. Villas, apartments, offices, cafes and hotels." },
      { property: "og:title", content: "Projects — Verma Interior Studio" },
      { property: "og:description", content: "240+ cinematic interiors across 14 cities." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const all = [
  { title: "The Aravalli Villa", cat: "Modern Villa", loc: "Gurugram", year: 2025, img: villa, ratio: "aspect-[4/5]" },
  { title: "DLF Crest Penthouse", cat: "Luxury Apartment", loc: "Gurugram", year: 2024, img: heroLiving, ratio: "aspect-[16/10]" },
  { title: "Chambers 22", cat: "Office Space", loc: "Mumbai", year: 2024, img: office, ratio: "aspect-[3/4]" },
  { title: "Aurum Kitchen", cat: "Luxury Apartment", loc: "Delhi", year: 2024, img: kitchen, ratio: "aspect-[3/4]" },
  { title: "Maison Noir", cat: "Hotel Interior", loc: "Mumbai", year: 2023, img: restaurant, ratio: "aspect-[16/10]" },
  { title: "Suite 9 Master", cat: "Modern Villa", loc: "Goa", year: 2023, img: bedroom, ratio: "aspect-[4/5]" },
  { title: "Travertine Bath", cat: "Luxury Apartment", loc: "Bengaluru", year: 2024, img: bath, ratio: "aspect-[3/4]" },
  { title: "Studio Verma HQ", cat: "Office Space", loc: "Gurugram", year: 2022, img: office, ratio: "aspect-[16/10]" },
  { title: "Cafe Brut", cat: "Cafe Interior", loc: "Pune", year: 2023, img: restaurant, ratio: "aspect-[4/5]" },
];

const cats = ["All", "Modern Villa", "Luxury Apartment", "Office Space", "Cafe Interior", "Hotel Interior"];

function Projects() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? all : all.filter((p) => p.cat === active);
  return (
    <>
      <section className="relative flex h-[60vh] items-end overflow-hidden">
        <img src={villa} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Portfolio</div>
          <h1 className="font-display text-6xl leading-[1] md:text-8xl">Selected <em className="italic gradient-gold-text">work.</em></h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                active === c ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground hover:border-gold hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {list.map((p, i) => (
            <Reveal key={p.title + i} delay={i * 50}>
              <div className="group block">
                <div className={`img-zoom relative overflow-hidden rounded-sm gold-border ${p.ratio}`}>
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-700 group-hover:translate-y-0">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.cat} · {p.loc} · {p.year}</div>
                    <div className="mt-1 font-display text-2xl">{p.title}</div>
                    <div className="mt-3 max-h-0 overflow-hidden text-xs text-muted-foreground transition-all duration-700 group-hover:max-h-20">
                      Client requirement, design process, materials and final execution photographed by our in-house team.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink/50 py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <div className="mb-12 text-center">
              <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Transformation</div>
              <h2 className="font-display text-5xl md:text-6xl">Before & after.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <BeforeAfter before={office} after={heroLiving} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl">Want to see your space here next?</h2>
          <Link to="/contact" className="mt-10 inline-block rounded-full bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-primary-foreground">
            Start a Project
          </Link>
        </Reveal>
      </section>
    </>
  );
}
