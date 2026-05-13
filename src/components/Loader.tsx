import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-ink transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="font-display text-5xl tracking-[0.3em] text-foreground">
          V<span className="text-gold">·</span>S
        </div>
        <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-border">
          <div className="h-full w-1/3 animate-[shimmer_1.4s_linear_infinite] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" style={{ backgroundSize: "200% 100%" }} />
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Verma Interior Studio</div>
      </div>
    </div>
  );
}
