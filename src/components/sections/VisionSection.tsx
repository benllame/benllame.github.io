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

  const moduleLabel = t.vision.module.includes(" > ") ? t.vision.module.split(" > ")[1] : t.vision.module;

  return (
    <section id="vision" className="module fade-in-up">
      <div className="module-header alternate-2">
        <h2>
          <span className="index">01.d</span> &gt; {moduleLabel}
        </h2>
        <div className="module-badges">
          {t.vision.badges.map((badge) => (
            <span key={badge} className="tech-badge anomaly-color">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("module-content", fade.className)}>
        <div className="vision-layout">
          <div className="vision-interface">
            <div className="interface-header">{t.vision.ui.engine}</div>
            <div className="interface-body">
              <div className="camera-feed">
                <div className="scanline" />
                <div className="part-matrix">
                  {matrixRows.flatMap((row, rowIdx) =>
                    row.map((cell, colIdx) => (
                      <span
                        key={`${rowIdx}-${colIdx}`}
                        className={cn("p", cell === "X" && "val")}
                      >
                        {cell}
                      </span>
                    ))
                  )}
                </div>

                <div className="bounding-box">
                  <span className="bbox-label">{t.vision.ui.bbox}</span>
                </div>
              </div>

              <div className="metrics-dashboard">
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
                  {t.vision.repo}
                </a>
              </Button>
            </div>
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
    <div className={cn("dash-item", alert && "alert")}>
      <span className="dash-lbl">{label}</span>
      <span className={cn("dash-val", alert && "text-red-400")}>
        {icon}
        {value}
      </span>
    </div>
  );
}
