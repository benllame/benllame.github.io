import { ChevronRight } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function RAGSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const moduleLabel = "RAG Financiero";

  return (
    <section id="rag" className="module fade-in-up">
      <div className="module-header alternate-3">
        <h2>
          <span className="index">01.b</span>
          <span className="module-name">· {moduleLabel}</span>
        </h2>
        <div className="module-badges">
          {t.rag.badges.map((badge) => (
            <span key={badge} className="tech-badge rag-color">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("module-content", fade.className)}>
        <div className="architecture-layout">
          <div>
            <h2 className="sys-title">{t.rag.title}</h2>
            <p className="sys-desc mt-4">{t.rag.description}</p>

            <ul className="specs-list mt-6 space-y-4">
              {t.rag.specs.map((spec) => (
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
                <a href="#">{t.rag.repo}</a>
              </Button>
            </div>
          </div>

          <div className="diagram-panel">
            <div className="rag-interface">
              <div className="interface-header">
                <Sparkles className="inline-block h-3.5 w-3.5" /> rag_chain.py - {t.rag.pipelineHeader}
              </div>

              <div className="rag-body">
                <div className="rag-query">
                  <span className="rag-label">QUERY</span>
                  <span className="rag-text">{t.rag.query}</span>
                </div>

                <div className="rag-pipeline-v">
                  {t.rag.pipelineNodes.map((node, index) => {
                    const isRerank = node.includes("RERANK");
                    return (
                      <div key={node}>
                        <div className="rag-row">
                          <div className={cn("rag-node", isRerank && "rerank-node")}>
                            <span className="rn-icon">•</span>
                            <div className="rn-info">
                              <span className="rn-title">{node}</span>
                              <span className="rn-sub">PIPELINE NODE</span>
                            </div>
                            {isRerank ? <span className="rn-badge">+0.414 relevancy</span> : null}
                          </div>
                        </div>
                        {index !== t.rag.pipelineNodes.length - 1 ? <div className="rag-vconnector">↓</div> : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="rag-metrics">
              <Metric title={t.rag.metrics.faithfulness} value="0.891" delta="↑ +0.022" />
              <Metric
                title={t.rag.metrics.relevancy}
                value="0.906"
                delta="↑ +0.414"
                highlight
              />
              <Metric title={t.rag.metrics.precision} value="0.716" delta="↑ +0.238" highlight />
              <Metric title={t.rag.metrics.recall} value="0.795" delta="↑ +0.498" highlight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  title,
  value,
  delta,
  highlight = false,
}: {
  title: string;
  value: string;
  delta: string;
  highlight?: boolean;
}) {
  return (
    <div className="rag-metric">
      <span className="metric-lbl">{title}</span>
      <span className={cn("metric-val", highlight && "rag-highlight")}>{value}</span>
      <span className="rag-delta">{delta}</span>
    </div>
  );
}
