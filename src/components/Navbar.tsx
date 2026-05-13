import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-700 ${
          scrolled ? "glass-strong rounded-full px-6 py-3" : ""
        }`}
        style={{ marginInline: scrolled ? "1rem" : "auto" }}
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full gold-border">
            <span className="font-display text-lg text-gold">V</span>
          </span>
          <span className="font-display text-lg tracking-[0.2em] text-foreground">
            VERMA<span className="text-gold"> · </span>STUDIO
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="underline-grow text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] lg:inline-block"
          >
            Book Consultation
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full gold-border lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className="relative flex h-full flex-col items-center justify-center gap-6 px-8">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-4xl tracking-tight text-foreground"
              style={{ animation: open ? `fade-up 0.6s ${i * 0.05}s both` : undefined }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-6 rounded-full bg-gold px-8 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground">
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
