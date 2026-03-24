import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
      "opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: cn("fade-in-base", isVisible && "fade-in-visible"),
  };
}
