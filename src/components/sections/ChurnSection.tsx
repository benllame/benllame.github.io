import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ChurnSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  const moduleLabel = "Churn Intelligence System";

  return (
    <section id="churn" className="module fade-in-up">
      <div className="module-header">
        <h2>
          <span className="index">01.a</span>
          <span className="module-name">· {moduleLabel}</span>
        </h2>
        <div className="module-badges">
          {t.churn.badges.map((badge) => (
            <span key={badge} className="tech-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={fade.ref} className={cn("module-content", fade.className)}>
        <div className="architecture-layout">
          <div>
            <h2 className="sys-title">{t.churn.title}</h2>
            <p className="sys-desc mt-4">{t.churn.description}</p>

            <ul className="specs-list mt-6 space-y-4">
              {t.churn.specs.map((spec) => (
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
                  href="https://github.com/benllame/classical_ml_and_agents"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.churn.repo}
                </a>
              </Button>
            </div>
          </div>

          <div className="diagram-panel">
            <div className="arch-flow">
              <div className="node source">{t.churn.diagram.source}</div>
              <span className="connector">→</span>
              <div className="node orchestration">
                {t.churn.diagram.pipeline}
                <span className="status-dot pulsing" />
              </div>
              <span className="connector">→</span>
              <div className="node processing">{t.churn.diagram.best}</div>
              <span className="connector">→</span>
              <div className="node destination">
                {t.churn.diagram.policy}
                <div className="worker-pool">
                  <span className="worker w1" />
                  <span className="worker w2" />
                  <span className="worker w3" />
                </div>
              </div>
            </div>

            <div className="code-snippet">
              <pre className="font-mono text-xs leading-6">
                <span className="cmd">catboost</span> <span className="arg">best_model</span> · all_features
                {"\n"}
                <span className="output highlight">ROC-AUC : 0.847 ± 0.012</span>
                {"\n"}
                <span className="output">F1-Macro: 0.743 ± 0.011</span>
                {"\n"}
                <span className="output">ReAct Agent → Gemini 2.5 Flash</span>
                {"\n"}
                <span className="output">Tools: predict | explain | policy | budget</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
