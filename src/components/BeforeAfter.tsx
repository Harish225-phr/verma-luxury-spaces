import { useState, useRef, type MouseEvent, type TouchEvent } from "react";

export function BeforeAfter({ before, after, alt = "" }: { before: string; after: string; alt?: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-sm gold-border"
      onMouseMove={(e: MouseEvent) => dragging.current && update(e.clientX)}
      onMouseDown={(e: MouseEvent) => { dragging.current = true; update(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e: TouchEvent) => update(e.touches[0].clientX)}
    >
      <img src={after} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={alt} className="absolute inset-0 h-full w-full object-cover" style={{ width: `${ref.current?.clientWidth || 0}px`, maxWidth: "none" }} />
      </div>
      <div
        className="absolute inset-y-0 w-px bg-gold shadow-[0_0_20px_var(--gold)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-primary-foreground">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 5l-5 7 5 7M16 5l5 7-5 7"/></svg>
        </div>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">Before</span>
      <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground">After</span>
    </div>
  );
}
