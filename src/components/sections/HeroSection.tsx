import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useMarqueeLoop } from "@/hooks/useMarqueeLoop";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const stackItems = [
  {
    id: "python",
    name: "Python",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path
          d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v.958H6.545S2 8.8 2 16.005s4.013 6.96 4.013 6.96H8.33v-3.35s-.13-4.01 3.95-4.01h6.8s3.82.06 3.82-3.69V5.8s.58-3.7-6.985-3.7zm-3.772 2.14a1.24 1.24 0 110 2.48 1.24 1.24 0 010-2.48z"
          fill="#3776AB"
        />
        <path
          d="M16.115 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.752v-.958h9.441S30 23.2 30 15.995s-4.013-6.96-4.013-6.96H23.67v3.35s.13 4.01-3.95 4.01h-6.8s-3.82-.06-3.82 3.69v6.115s-.58 3.7 6.985 3.7zm3.772-2.14a1.24 1.24 0 110-2.48 1.24 1.24 0 010 2.48z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: "pytorch",
    name: "PyTorch",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#EE4C2C" opacity="0.15" />
        <path
          d="M16 4l-1.5 1.5L22 13l-1.5 1.5L22 16a6 6 0 11-12 0 6 6 0 016-6l1.5-1.5L16 4z"
          fill="none"
          stroke="#EE4C2C"
          strokeWidth="1.5"
        />
        <circle cx="20.5" cy="9.5" r="1.5" fill="#EE4C2C" />
        <path d="M10 16a6 6 0 0012 0 6 6 0 00-12 0z" fill="#EE4C2C" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: "sklearn",
    name: "sklearn",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <ellipse cx="16" cy="16" rx="12" ry="8" fill="none" stroke="#F7931E" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="8" ry="12" fill="none" stroke="#3499CD" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" fill="#3499CD" />
      </svg>
    ),
  },
  {
    id: "huggingface",
    name: "HuggingFace",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <circle cx="16" cy="16" r="12" fill="#FFD21E" opacity="0.15" />
        <text x="16" y="21" textAnchor="middle" fontSize="18" fill="#FFD21E">
          {"🤗"}
        </text>
      </svg>
    ),
  },
  {
    id: "onnx",
    name: "ONNX",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" rx="2" fill="#717199" />
        <rect x="18" y="4" width="10" height="10" rx="2" fill="#717199" />
        <rect x="4" y="18" width="10" height="10" rx="2" fill="#717199" />
        <rect x="18" y="18" width="10" height="10" rx="2" fill="#717199" opacity="0.4" />
        <line x1="9" y1="14" x2="9" y2="18" stroke="#717199" strokeWidth="1.5" />
        <line x1="23" y1="14" x2="23" y2="18" stroke="#717199" strokeWidth="1.5" />
        <line x1="14" y1="9" x2="18" y2="9" stroke="#717199" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "langgraph",
    name: "LangGraph",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <circle cx="16" cy="8" r="3" fill="#1A7F64" />
        <circle cx="8" cy="22" r="3" fill="#1A7F64" />
        <circle cx="24" cy="22" r="3" fill="#1A7F64" />
        <line x1="16" y1="11" x2="9" y2="19" stroke="#1A7F64" strokeWidth="1.5" />
        <line x1="16" y1="11" x2="23" y2="19" stroke="#1A7F64" strokeWidth="1.5" />
        <line x1="11" y1="22" x2="21" y2="22" stroke="#1A7F64" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "gemini",
    name: "Gemini",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path d="M16 4 L20 16 L16 28 L12 16 Z" fill="#4285F4" />
        <path d="M4 16 L16 12 L28 16 L16 20 Z" fill="#DB4437" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: "chromadb",
    name: "ChromaDB",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <ellipse cx="16" cy="10" rx="10" ry="4" fill="#FF6B35" />
        <path d="M6 10 Q6 22 16 22 Q26 22 26 10" fill="#FF6B35" opacity="0.5" />
        <line x1="6" y1="10" x2="6" y2="18" stroke="#FF6B35" strokeWidth="1.5" />
        <line x1="26" y1="10" x2="26" y2="18" stroke="#FF6B35" strokeWidth="1.5" />
        <ellipse cx="16" cy="18" rx="10" ry="4" fill="none" stroke="#FF6B35" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "gcp",
    name: "GCP",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path
          d="M19.5 9h-7l-5 5 5 5h7l5-5-5-5z"
          fill="none"
          stroke="#4285F4"
          strokeWidth="1.5"
        />
        <circle cx="16" cy="14" r="3" fill="#4285F4" opacity="0.6" />
        <path
          d="M10 22 Q8 26 12 27 Q16 28 16 28 Q16 28 20 27 Q24 26 22 22"
          fill="none"
          stroke="#34A853"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    id: "bigquery",
    name: "BigQuery",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <circle cx="16" cy="15" r="9" fill="none" stroke="#4285F4" strokeWidth="1.5" />
        <circle cx="16" cy="15" r="5" fill="#4285F4" opacity="0.3" />
        <line x1="22" y1="21" x2="27" y2="26" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "airflow",
    name: "Airflow",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path
          d="M16 6 L26 12 L26 20 L16 26 L6 20 L6 12 Z"
          fill="none"
          stroke="#017CEE"
          strokeWidth="1.5"
        />
        <circle cx="16" cy="16" r="4" fill="#017CEE" opacity="0.6" />
        <line x1="16" y1="6" x2="16" y2="26" stroke="#017CEE" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "terraform",
    name: "Terraform",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path d="M13 7 L13 19 L21 14.5 Z" fill="#7B42BC" />
        <path d="M22 10 L22 22 L30 17.5 Z" fill="#7B42BC" opacity="0.6" />
        <path d="M4 12.5 L4 24.5 L12 20 Z" fill="#7B42BC" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <rect x="4" y="14" width="4" height="4" rx="1" fill="#2496ED" />
        <rect x="9" y="14" width="4" height="4" rx="1" fill="#2496ED" />
        <rect x="14" y="14" width="4" height="4" rx="1" fill="#2496ED" />
        <rect x="9" y="9" width="4" height="4" rx="1" fill="#2496ED" opacity="0.6" />
        <rect x="14" y="9" width="4" height="4" rx="1" fill="#2496ED" opacity="0.6" />
        <path d="M19 16 Q24 16 26 20 Q30 16 28 12 L24 12 Z" fill="#2496ED" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "fastapi",
    name: "FastAPI",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <circle cx="16" cy="16" r="12" fill="none" stroke="#009688" strokeWidth="1.5" />
        <path d="M13 9 L13 16 L20 16 L19 23 L19 16 L12 16 Z" fill="#009688" />
      </svg>
    ),
  },
  {
    id: "grafana",
    name: "Grafana",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <circle cx="16" cy="16" r="11" fill="none" stroke="#F46800" strokeWidth="1.5" />
        <polyline
          points="6,20 10,14 14,17 18,10 22,13 26,8"
          fill="none"
          stroke="#F46800"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "gha",
    name: "GH Actions",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <circle cx="16" cy="16" r="11" fill="none" stroke="rgba(240,238,248,0.5)" strokeWidth="1.5" />
        <circle cx="16" cy="10" r="2.5" fill="rgba(240,238,248,0.7)" />
        <circle cx="10" cy="20" r="2.5" fill="rgba(240,238,248,0.7)" />
        <circle cx="22" cy="20" r="2.5" fill="rgba(240,238,248,0.7)" />
        <line x1="16" y1="12.5" x2="11" y2="17.5" stroke="rgba(240,238,248,0.4)" strokeWidth="1" />
        <line x1="16" y1="12.5" x2="21" y2="17.5" stroke="rgba(240,238,248,0.4)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "mlflow",
    name: "MLflow",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path
          d="M16 6 Q22 6 26 12 Q30 18 26 24 Q22 28 16 26"
          fill="none"
          stroke="#0194E2"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M16 26 Q10 26 6 20 Q2 14 6 8 Q10 4 16 6"
          fill="none"
          stroke="#0194E2"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="16" cy="16" r="3" fill="#0194E2" />
      </svg>
    ),
  },
  {
    id: "streamlit",
    name: "Streamlit",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
        <path d="M16 6 L28 20 L4 20 Z" fill="#FF4B4B" opacity="0.8" />
        <path d="M4 20 L16 26 L28 20" fill="#FF4B4B" opacity="0.4" />
      </svg>
    ),
  },
];

export function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const fade = useFadeIn<HTMLDivElement>();
  useMarqueeLoop("stack-marquee");
  const projectsLabel = lang === "es" ? "Ver proyectos" : "View projects";
  const cvLabel = lang === "es" ? "Descargar CV" : "Download CV";

  return (
    <section id="init" className="module hero-module fade-in-up">
      <div
        ref={fade.ref}
        className={cn(
          "module-content hero-content fade-in-up",
          fade.className
        )}
      >
        <div className="hero-badge-wrap">
          <span className="hero-badge-dot" aria-hidden="true" />
          <span>
            <span className="grad-text">⚡</span> {t.hero.badge}
          </span>
        </div>

        <div className="hero-intro">
          <h1 className="hero-name">Benjamín Llancao</h1>
          <p className="hero-role grad-text">{t.hero.role}</p>
          <div className="hero-actions">
            <Button asChild variant="primary">
              <a href="#projects">{projectsLabel}</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://www.linkedin.com/in/bllame/" target="_blank" rel="noreferrer">
                {cvLabel}
              </a>
            </Button>
          </div>
        </div>

        <div className="stack-marquee-section">
          <div className="stack-marquee-label">{t.hero.stackLabel}</div>
          <div className="stack-marquee-track">
            <div className="stack-marquee-inner" id="stack-marquee">
              {stackItems.map((item) => (
                <div className="stack-logo-item" key={item.id} title={item.name}>
                  <div className="stack-logo-circle">{item.svg}</div>
                  <span className="stack-logo-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
