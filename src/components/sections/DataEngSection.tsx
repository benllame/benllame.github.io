import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function DataEngSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const moduleLabel = "Data Engineering";

  return (
    <section id="data-eng" className="module fade-in-up">
      <div className="module-header alternate">
        <h2>
          <span className="index">01.c</span>
          <span className="module-name">· {moduleLabel}</span>
        </h2>
        <div className="module-badges">
          {t.dataEng.badges.map((badge) => (
            <span key={badge} className="tech-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("module-content", fade.className)}>
        <div className="architecture-layout">
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
                  {t.dataEng.repo}
                </a>
              </Button>
            </div>
          </div>

          <div className="diagram-panel">
            <div className="arch-flow">
              <div className="node source">{t.dataEng.diagram.source}</div>
              <span className="connector">→</span>
              <div className="node orchestration">
                {t.dataEng.diagram.airflow}
                <span className="status-dot pulsing" />
              </div>
              <span className="connector">→</span>
              <div className="node processing">
                {t.dataEng.diagram.dataflow}
                <div className="worker-pool">
                  <span className="worker w1" />
                  <span className="worker w2" />
                  <span className="worker w3" />
                </div>
              </div>
              <span className="connector">→</span>
              <div className="node destination">{t.dataEng.diagram.bigquery}</div>
            </div>

            <div className="code-snippet">
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
      </div>
    </section>
  );
}
