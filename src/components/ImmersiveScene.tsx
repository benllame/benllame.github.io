import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import "./atmosphere.css";

type Palette = { accent: string; ink: string; line: string; surface: string };
type Rail = { x1: number; y1: number; x2: number; y2: number; delay: number };

const rails: Rail[] = [
  { x1: 0.08, y1: 0.28, x2: 0.43, y2: 0.28, delay: 0 },
  { x1: 0.73, y1: 0.17, x2: 0.73, y2: 0.51, delay: 2.9 },
  { x1: 0.57, y1: 0.72, x2: 0.92, y2: 0.72, delay: 5.8 },
  { x1: 0.29, y1: 0.61, x2: 0.29, y2: 0.87, delay: 8.7 },
];

const fallback = (dark: boolean): Palette => dark
  ? { accent: "#e98cc3", ink: "#f4eff2", line: "rgba(244,239,242,.12)", surface: "rgba(244,239,242,.18)" }
  : { accent: "#bd6e96", ink: "#29252a", line: "rgba(74,52,65,.13)", surface: "rgba(244,239,242,.62)" };

const token = (style: CSSStyleDeclaration, name: string, defaultValue: string) =>
  style.getPropertyValue(name).trim() || defaultValue;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function ImmersiveScene({ dark, es }: { dark: boolean; es: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const elapsed = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const canvasElement = element;
    const context = canvasElement.getContext("2d");
    if (!context) return;
    const ctx = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const fallbackPalette = fallback(dark);
    function readPalette(): Palette {
      const rootStyle = getComputedStyle(document.documentElement);
      return {
        accent: token(rootStyle, "--field-accent", fallbackPalette.accent),
        ink: token(rootStyle, "--field-ink", fallbackPalette.ink),
        line: token(rootStyle, "--field-line", fallbackPalette.line),
        surface: token(rootStyle, "--field-surface", fallbackPalette.surface),
      };
    }
    let palette = readPalette();

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let previous = 0;
    let scroll = window.scrollY;
    let targetScroll = scroll;
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    function isRunning() {
      return !paused && !reducedMotion.matches && !document.hidden;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = 1;
      canvasElement.width = Math.round(width * dpr);
      canvasElement.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      scroll = targetScroll;
      if (!document.hidden) draw(!paused && !reducedMotion.matches);
    }

    function draw(animateSignals: boolean) {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - height);
      const section = clamp(scroll / maxScroll, 0, 1);
      const time = elapsed.current;
      const drift = Math.sin(time * 0.13) * 0.018;
      const parallaxX = finePointer.matches ? (pointer.x - 0.5) * 0.035 : 0;
      const parallaxY = finePointer.matches ? (pointer.y - 0.5) * 0.035 : 0;
      const focalX = width * (0.76 - section * 0.5 + drift + parallaxX);
      const focalY = height * (0.22 + section * 0.45 + parallaxY);

      // A broad, oblique wash and two offset halos give the field depth without
      // turning it into a decorative particle network.
      const wash = ctx.createLinearGradient(width * 0.08, height * 0.12, width * 0.92, height * 0.88);
      wash.addColorStop(0, "transparent");
      wash.addColorStop(0.42, palette.surface);
      wash.addColorStop(0.56, palette.accent);
      wash.addColorStop(1, "transparent");
      ctx.globalAlpha = dark ? 0.17 : 0.12;
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, width, height);

      const halo = ctx.createRadialGradient(focalX, focalY, 0, focalX, focalY, width * 0.62);
      halo.addColorStop(0, palette.accent);
      halo.addColorStop(0.23, palette.surface);
      halo.addColorStop(1, "transparent");
      ctx.globalAlpha = dark ? 0.19 : 0.13;
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      const counterX = width * (0.19 + section * 0.48 - drift * 0.7);
      const counterY = height * (0.82 - section * 0.3);
      const counter = ctx.createRadialGradient(counterX, counterY, 0, counterX, counterY, width * 0.48);
      counter.addColorStop(0, palette.surface);
      counter.addColorStop(0.38, palette.accent);
      counter.addColorStop(1, "transparent");
      ctx.globalAlpha = dark ? 0.105 : 0.095;
      ctx.fillStyle = counter;
      ctx.fillRect(0, 0, width, height);

      // Fine columns and a few moving horizontal rules echo the reference grid.
      const left = width * 0.055;
      const gridWidth = width - left * 2;
      ctx.globalAlpha = 0.48;
      ctx.strokeStyle = palette.line;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      for (let column = 0; column <= 6; column++) {
        const x = left + (gridWidth * column) / 6;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      const rowStep = width <= 700 ? 150 : 190;
      const rowOffset = -((scroll * 0.055) % rowStep);
      for (let y = rowOffset; y < height; y += rowStep) {
        ctx.moveTo(left, y);
        ctx.lineTo(width - left, y);
      }
      ctx.stroke();

      // Four long, straight rails carry occasional rose impulses.
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = palette.ink;
      ctx.lineWidth = 0.65;
      ctx.beginPath();
      rails.forEach(({ x1, y1, x2, y2 }, index) => {
        const shift = section * (index % 2 === 0 ? -0.1 : 0.1);
        const startX = x1 * width;
        const startY = (y1 + shift) * height;
        const endX = x2 * width;
        const endY = (y2 + shift) * height;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
      });
      ctx.stroke();

      if (animateSignals) {
        const cycle = 12.8;
        const age = time % cycle;
        rails.forEach(({ x1, y1, x2, y2, delay }, index) => {
          const progress = (age - delay) / 0.9;
          if (progress < 0 || progress > 1) return;
          const shift = section * (index % 2 === 0 ? -0.1 : 0.1);
          const startX = x1 * width;
          const startY = (y1 + shift) * height;
          const endX = x2 * width;
          const endY = (y2 + shift) * height;
          const head = clamp(progress, 0, 1);
          const tail = Math.max(0, head - 0.12);
          ctx.globalAlpha = dark ? 0.92 : 0.82;
          ctx.strokeStyle = palette.accent;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(startX + (endX - startX) * tail, startY + (endY - startY) * tail);
          ctx.lineTo(startX + (endX - startX) * head, startY + (endY - startY) * head);
          ctx.stroke();
        });
      }

      ctx.globalAlpha = 1;
    }

    function tick(now: number) {
      if (!isRunning()) return;
      const fps = width <= 700 ? 20 : 30;
      if (previous && now - previous < 1000 / fps) {
        frame = requestAnimationFrame(tick);
        return;
      }
      if (previous) elapsed.current += Math.min(now - previous, 100) / 1000;
      previous = now;
      pointer.x += (pointer.tx - pointer.x) * 0.045;
      pointer.y += (pointer.ty - pointer.y) * 0.045;
      scroll += (targetScroll - scroll) * 0.075;
      draw(true);
      frame = requestAnimationFrame(tick);
    }

    function refresh() {
      cancelAnimationFrame(frame);
      previous = 0;
      document.documentElement.dataset.motion = paused || reducedMotion.matches || document.hidden
        ? "paused"
        : "running";
      if (isRunning()) frame = requestAnimationFrame(tick);
      else if (!document.hidden) {
        scroll = targetScroll;
        draw(!paused && !reducedMotion.matches);
      }
    }

    function onScroll() { targetScroll = window.scrollY; }
    function onPointerMove(event: PointerEvent) {
      pointer.tx = event.clientX / Math.max(1, width);
      pointer.ty = event.clientY / Math.max(1, height);
    }

    const themeObserver = new MutationObserver(() => {
      palette = readPalette();
      refresh();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (finePointer.matches) window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", refresh);
    reducedMotion.addEventListener("change", refresh);
    resize();
    refresh();

    return () => {
      cancelAnimationFrame(frame);
      delete document.documentElement.dataset.motion;
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", refresh);
      reducedMotion.removeEventListener("change", refresh);
    };
  }, [dark, paused]);

  return <>
    <canvas ref={canvas} className="immersive-canvas" aria-hidden="true" />
    <button
      className="motion-control"
      onClick={() => setPaused(!paused)}
      aria-label={paused ? (es ? "Reanudar animación" : "Resume animation") : (es ? "Pausar animación" : "Pause animation")}
      aria-pressed={paused}
    >
      {paused ? <Play size={13} /> : <Pause size={13} />}
      <span>{es ? "Movimiento" : "Motion"}</span>
    </button>
  </>;
}
