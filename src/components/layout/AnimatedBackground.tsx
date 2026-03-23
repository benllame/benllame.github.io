import { useEffect, useRef } from "react";

type Beam = {
  x: number;
  width: number;
  opacity: number;
  color: string;
  phase: number;
  speed: number;
};

const beamColors = ["77, 232, 255", "6, 182, 212", "124, 58, 237", "168, 85, 247"];

function createBeams(canvasWidth: number) {
  const beamCount = 18 + Math.floor(Math.random() * 5);
  const spacing = canvasWidth / beamCount;

  return Array.from({ length: beamCount }, (_, index) => {
    const jitter = (Math.random() - 0.5) * spacing * 0.6;
    return {
      x: spacing * (index + 0.5) + jitter,
      width: 1.5 + Math.random() * 4.5,
      opacity: 0.03 + Math.random() * 0.15,
      color: beamColors[index % beamColors.length],
      phase: Math.random() * Math.PI * 2,
      speed: 0.0003 + Math.random() * 0.0007,
    } satisfies Beam;
  });
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

    let beams: Beam[] = [];
    let rafId = 0;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      beams = createBeams(width);
    };

    const drawOrb = (x: number, y: number, radius: number, start: string, end: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, start);
      gradient.addColorStop(1, end);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.fillStyle = "#03010a";
      ctx.fillRect(0, 0, width, height);

      drawOrb(
        width * 0.5,
        height * 0.15,
        width * 0.4,
        "rgba(77, 232, 255, 0.06)",
        "rgba(77, 232, 255, 0)"
      );
      drawOrb(
        width * 0.2,
        height * 0.6,
        width * 0.3,
        "rgba(168, 85, 247, 0.05)",
        "rgba(168, 85, 247, 0)"
      );
      drawOrb(
        width * 0.8,
        height * 0.4,
        width * 0.25,
        "rgba(34, 211, 238, 0.04)",
        "rgba(34, 211, 238, 0)"
      );

      beams.forEach((beam) => {
        const pulse = (Math.sin(time * beam.speed + beam.phase) + 1) / 2;
        const currentOpacity = beam.opacity * (0.6 + pulse * 0.4);
        const gradient = ctx.createLinearGradient(beam.x, 0, beam.x, height);

        gradient.addColorStop(0, `rgba(${beam.color}, 0)`);
        gradient.addColorStop(0.2, `rgba(${beam.color}, ${currentOpacity * 0.6})`);
        gradient.addColorStop(0.45, `rgba(${beam.color}, ${currentOpacity})`);
        gradient.addColorStop(0.7, `rgba(${beam.color}, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, `rgba(${beam.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(beam.x - beam.width / 2, 0, beam.width, height);
      });

      if (!mediaQuery.matches) {
        rafId = window.requestAnimationFrame(draw);
      }
    };

    const onMotionPrefChange = () => {
      window.cancelAnimationFrame(rafId);
      draw(performance.now());
    };

    resize();
    draw(performance.now());

    window.addEventListener("resize", resize);
    mediaQuery.addEventListener("change", onMotionPrefChange);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", onMotionPrefChange);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="animated-bg-canvas" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="holo-edges" aria-hidden="true" />
    </>
  );
}
