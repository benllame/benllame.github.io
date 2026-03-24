import { useEffect } from "react";

export function useMarqueeLoop(id: string) {
  useEffect(() => {
    const inner = document.getElementById(id);
    if (!inner || inner.dataset.duplicated === "true") return;

    const clone = inner.innerHTML;
    inner.innerHTML = clone + clone;
    inner.dataset.duplicated = "true";
  }, [id]);
}
