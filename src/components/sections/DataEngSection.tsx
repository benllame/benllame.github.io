import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useGlowPulse } from "@/hooks/useGlowPulse";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function DataEngSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const cardGlow = useGlowPulse<HTMLDivElement>();

  return (
    <section id="data-eng">
      <div className="module-header liquid-glass flex flex-wrap items-center justify-between gap-3 rounded-2xl border-[rgba(77,232,255,0.1)] p-4">
        <p className="font-mono text-sm text-[rgba(240,236,255,0.75)]">
          <span className="index">01.c</span> &gt; {t.dataEng.module.split(" > ")[1]}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.dataEng.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.06)] px-3 py-1 text-xs text-[#22d3ee]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("mt-6 grid items-start gap-12 lg:grid-cols-2", fade.className)}>
        <div>
          <h2 className="sys-title">{t.dataEng.title}</h2>
          <p className="sys-desc mt-4">{t.dataEng.description}</p>

          <ul className="specs-list mt-6 space-y-4">
            {t.dataEng.specs.map((spec) => (
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
              <a
                href="https://github.com/benllame/Olist-E-Commerce-Data-Platform"
                target="_blank"
                rel="noreferrer"
              >
                [ REPO ]
              </a>
            </Button>
          </div>
        </div>

        <div ref={cardGlow.ref} className="liquid-glass rounded-2xl p-6">
          <div className="arch-flow flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="node source">{t.dataEng.diagram.source}</div>
            <span className="flow-arrow">→</span>
            <div className="node processing relative">
              {t.dataEng.diagram.airflow}
              <span className="status-dot-neon absolute -right-1 -top-1 h-2 w-2 rounded-full" />
            </div>
            <span className="flow-arrow">→</span>
            <div className="node processing">
              {t.dataEng.diagram.dataflow}
              <div className="mt-1 flex justify-center gap-1">
                <span className="worker-dot h-1.5 w-1.5 rounded-full [animation-delay:0ms]" />
                <span className="worker-dot h-1.5 w-1.5 rounded-full [animation-delay:120ms]" />
                <span className="worker-dot h-1.5 w-1.5 rounded-full [animation-delay:240ms]" />
              </div>
            </div>
            <span className="flow-arrow">→</span>
            <div className="node destination">{t.dataEng.diagram.bigquery}</div>
          </div>

          <div className="code-snippet mt-6 rounded-xl p-4">
            <pre className="font-mono text-xs leading-6">
              <span className="cmd">terraform</span> <span className="arg">apply -auto-approve</span>
              {"\n"}
              <span className="output">Apply complete! Resources: 28 added, 0 changed, 0 destroyed.</span>
              {"\n"}
              <span className="output highlight">bigquery_dataset_id = "olist_analytics"</span>
              {"\n"}
              <span className="output">dataflow_bucket = "gs://olist-etl-...-bucket"</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
