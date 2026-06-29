import { useEffect } from "react";

/**
 * Observa elementos com o seletor (default `[data-animate]`) e
 * adiciona a classe `in-view` quando entram no viewport.
 *
 * Use junto das utilities `scroll-animate`, `scroll-animate-left`,
 * `scroll-animate-right` ou `scroll-animate-zoom`.
 *
 * @example
 * useScrollAnimate();
 * <h2 data-animate className="scroll-animate">Título</h2>
 * <p data-animate className="scroll-animate" style={{ ['--scroll-delay' as any]: '150ms' }}>...</p>
 */
export function useScrollAnimate(
  selector: string = "[data-animate]",
  options: { once?: boolean; threshold?: number; rootMargin?: string } = {},
) {
  const { once = true, threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = options;

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const els = document.querySelectorAll<HTMLElement>(selector);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold, rootMargin },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, once, threshold, rootMargin]);
}
