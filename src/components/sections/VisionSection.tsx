import { AlertTriangle, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useGlowPulse } from "@/hooks/useGlowPulse";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const matrixRows = [
  ["0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "1", "1", "0", "0", "0", "0"],
  ["0", "1", "X", "X", "1", "0", "0", "0"],
  ["0", "0", "1", "1", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0"],
];

export function VisionSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const cardGlow = useGlowPulse<HTMLDivElement>();

  return (
    <section id="vision">
      <div className="module-header liquid-glass flex flex-wrap items-center justify-between gap-3 rounded-2xl border-[rgba(77,232,255,0.1)] p-4">
        <p className="font-mono text-sm text-[rgba(240,236,255,0.75)]">
          <span className="index">01.d</span> &gt; {t.vision.module.split(" > ")[1]}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.vision.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.07)] px-3 py-1 text-xs text-[#818cf8]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("mt-6 grid items-start gap-12 lg:grid-cols-2", fade.className)}>
        <div ref={cardGlow.ref} className="liquid-glass-violet rounded-2xl p-6">
          <p className="font-mono text-sm text-[rgba(240,236,255,0.85)]">{t.vision.ui.engine}</p>

          <div className="camera-feed mt-4 rounded-xl p-4">
            <div className="scanline-element" />
            <div className="pixel-matrix absolute inset-0 grid grid-cols-8 gap-2 px-6 py-8">
              {matrixRows.flatMap((row, rowIdx) =>
                row.map((cell, colIdx) => (
                  <span
                    key={`${rowIdx}-${colIdx}`}
                    className={cn("p font-mono text-xs", cell === "X" && "val")}
                  >
                    {cell}
                  </span>
                ))
              )}
            </div>

            <div className="bbox absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
              <span className="bbox-label absolute -top-6 left-0 rounded px-2 py-1">{t.vision.ui.bbox}</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <MetricCell label={t.vision.ui.model} value="ViT-B/14" />
            <MetricCell label={t.vision.ui.fps} value="64.2" />
            <MetricCell
              label={t.vision.ui.state}
              value={t.vision.statusAlert}
              alert
              icon={<AlertTriangle className="h-3 w-3" />}
            />
          </div>
        </div>

        <div>
          <h2 className="sys-title">{t.vision.title}</h2>
          <p className="sys-desc mt-4">{t.vision.description}</p>

          <ul className="specs-list mt-6 space-y-4">
            {t.vision.specs.map((spec) => (
              <li key={spec.label} className="flex items-start gap-3 text-sm">
                <ChevronRight className="mt-1 h-4 w-4 text-primary" />
                <p>
                  <strong>{spec.label}:</strong> {spec.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild variant="action">
              <a href="https://github.com/benllame/Anomaly-Detector" target="_blank" rel="noreferrer">
                [ REPO ]
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCell({
  label,
  value,
  alert = false,
  icon,
}: {
  label: string;
  value: string;
  alert?: boolean;
  icon?: ReactNode;
}) {
  return (
    <div className={cn("liquid-glass dash-item rounded-xl p-3", alert && "alert border border-red-400/40")}>
      <p className="text-[10px] text-[rgba(240,236,255,0.5)]">{label}</p>
      <p className={cn("dash-val mt-1 flex items-center gap-1 font-mono text-xs", alert && "text-red-400")}>
        {icon}
        {value}
      </p>
    </div>
  );
}
