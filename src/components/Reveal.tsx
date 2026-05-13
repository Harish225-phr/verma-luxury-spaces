import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, as: As = "div", className = "" }: {
  children: ReactNode; delay?: number; as?: any; className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As ref={ref as any} className={`reveal ${className}`}>
      {children}
    </As>
  );
}
