import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-ink/60">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-display text-4xl leading-tight">
            Designing <span className="gradient-gold-text">luxury</span> spaces
            <br /> that define lifestyle.
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Verma Interior Studio is a multidisciplinary design house crafting
            cinematic homes, hospitality and workspaces across India and abroad.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            Begin Your Project
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          <div>
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-gold">Studio</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="underline-grow">About</Link></li>
              <li><Link to="/projects" className="underline-grow">Projects</Link></li>
              <li><Link to="/blog" className="underline-grow">Journal</Link></li>
              <li><Link to="/contact" className="underline-grow">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-gold">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Residential</li>
              <li>Hospitality</li>
              <li>Workspaces</li>
              <li>Turnkey</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-gold">Visit</h4>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              22, Cabin Cross Road,<br />
              DLF Phase IV, Gurugram<br />
              India 122002<br /><br />
              <a href="mailto:hello@vermastudio.in" className="underline-grow text-foreground">hello@vermastudio.in</a><br />
              +91 98 7654 3210
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Verma Interior Studio</span>
          <span>Crafted with intent · Gurugram · Mumbai · Dubai</span>
        </div>
      </div>
    </footer>
  );
}
