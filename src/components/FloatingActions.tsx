import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.7_0.18_150)] text-ink shadow-[var(--shadow-elevated)] transition-transform hover:scale-110"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.18-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a10 10 0 0 1-5.1-1.4l-.36-.22-3.67.96.98-3.58-.24-.37A10 10 0 1 1 22 12c0 5.52-4.48 10-10 10zm5.5-7.5c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.18 8.18 0 0 1-2.4-1.48 9.06 9.06 0 0 1-1.67-2.07c-.18-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.21 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
      </a>
      <a
        href="tel:+919876543210" aria-label="Call"
        className="grid h-12 w-12 place-items-center rounded-full bg-gold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-110"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
      <Link
        to="/contact" aria-label="Consultation"
        className="hidden h-12 items-center gap-2 rounded-full glass-strong px-4 text-[11px] uppercase tracking-[0.22em] text-foreground md:flex"
      >
        Book Now
      </Link>
    </div>
  );
}
