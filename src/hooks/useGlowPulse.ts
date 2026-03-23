import { useEffect, useRef } from "react";

export function useGlowPulse<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let timeoutId: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.classList.add("glow-pulse");
        if (timeoutId !== null) {
          window.clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(() => {
          element.classList.remove("glow-pulse");
        }, 600);

        observer.unobserve(entry.target);
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return { ref };
}
