import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = "0";
    element.style.transform = "translateY(1.5rem) scale(0.98)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0) scale(1)";
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
      "fade-in-base",
      isVisible && "fade-in-visible"
    ),
  };
}
