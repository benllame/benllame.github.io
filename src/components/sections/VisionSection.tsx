import { AlertTriangle, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
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

  return (
    <section id="vision" className="scroll-mt-32">
      <div className="liquid-glass flex flex-wrap items-center justify-between gap-3 rounded-xl p-4">
        <p className="font-mono text-sm text-foreground">
          <span className="font-bold text-primary">01.d</span> &gt; {t.vision.module.split(" > ")[1]}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.vision.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1 text-xs text-cyan-100"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={fade.ref}
        className={cn("mt-6 grid items-start gap-12 lg:grid-cols-2", fade.className)}
      >
        <div className="liquid-glass rounded-2xl p-6">
          <p className="font-mono text-sm text-foreground">{t.vision.ui.engine}</p>

          <div className="camera-feed mt-4 rounded-xl border border-border/40 bg-black/60 p-4">
            <div className="scanline-element" />
            <div className="absolute inset-0 grid grid-cols-8 gap-2 px-6 py-8">
              {matrixRows.flatMap((row, rowIdx) =>
                row.map((cell, colIdx) => (
                  <span
                    key={`${rowIdx}-${colIdx}`}
                    className={cn(
                      "font-mono text-xs text-muted-foreground",
                      cell === "X" && "rounded bg-primary/10 text-primary"
                    )}
                  >
                    {cell}
                  </span>
                ))
              )}
            </div>

            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-dashed border-primary">
              <span className="absolute -top-6 left-0 rounded bg-primary/15 px-2 py-1 font-mono text-[10px] text-primary">
                {t.vision.ui.bbox}
              </span>
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
          <h2 className="font-sans text-2xl font-semibold text-foreground">{t.vision.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.vision.description}</p>

          <ul className="mt-6 space-y-4">
            {t.vision.specs.map((spec) => (
              <li key={spec.label} className="flex items-start gap-3 text-sm text-muted-foreground">
                <ChevronRight className="mt-1 h-4 w-4 text-primary" />
                <p>
                  <span className="font-semibold text-foreground">{spec.label}:</span> {spec.text}
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
    <div className={cn("liquid-glass rounded-xl p-3", alert && "border border-red-400/40")}>
      <p className="text-[10px] text-muted-foreground">{label}</p>
      <p
        className={cn(
          "mt-1 flex items-center gap-1 font-mono text-xs text-foreground",
          alert && "text-red-300"
        )}
      >
        {icon}
        {value}
      </p>
    </div>
  );
}
