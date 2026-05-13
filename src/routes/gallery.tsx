import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Verma Interior Studio" },
      { name: "description", content: "A visual archive of moments from Verma Interior Studio's residential, hospitality and workspace projects." },
      { property: "og:title", content: "Gallery — Verma Interior Studio" },
      { property: "og:description", content: "A visual archive of cinematic interiors." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = [
  { src: heroLiving, cat: "Living" },
  { src: kitchen, cat: "Kitchen" },
  { src: bedroom, cat: "Bedroom" },
  { src: villa, cat: "Exterior" },
  { src: restaurant, cat: "Hospitality" },
  { src: bath, cat: "Bath" },
  { src: office, cat: "Office" },
  { src: studio, cat: "Studio" },
  { src: heroLiving, cat: "Living" },
  { src: bedroom, cat: "Bedroom" },
  { src: kitchen, cat: "Kitchen" },
  { src: restaurant, cat: "Hospitality" },
];
const cats = ["All", "Living", "Kitchen", "Bedroom", "Bath", "Office", "Hospitality", "Exterior"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const list = filter === "All" ? images : images.filter((i) => i.cat === filter);
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-40">
        <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">— Visual Archive</div>
        <h1 className="font-display text-6xl leading-[1] md:text-8xl">Gallery.</h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                filter === c ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground hover:border-gold hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3 [&>*]:break-inside-avoid">
          {list.map((img, i) => (
            <Reveal key={i} delay={i * 30}>
              <button
                onClick={() => setLightbox(img.src)}
                className={`img-zoom relative block w-full overflow-hidden rounded-sm gold-border ${i % 4 === 0 ? "aspect-[3/4]" : i % 4 === 1 ? "aspect-square" : i % 4 === 2 ? "aspect-[4/5]" : "aspect-[3/4]"}`}
              >
                <img src={img.src} alt={img.cat} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 hover:bg-ink/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[80] grid place-items-center bg-ink/95 p-6 backdrop-blur-xl">
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] rounded-sm gold-border object-contain" style={{ animation: "fade-up 0.6s both" }} />
          <button className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full glass-strong text-foreground" aria-label="Close">✕</button>
        </div>
      )}
    </>
  );
}
