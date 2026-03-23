import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: cn(
      "section-fade-base",
      isVisible ? "section-fade-visible" : "section-fade-hidden"
    ),
  };
}
