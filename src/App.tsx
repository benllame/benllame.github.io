import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";
import { ImmersiveScene } from "@/components/ImmersiveScene";
import { translations } from "@/lib/i18n";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import BlockFeature from "@/components/ui/block-feature";

type Project = {
  module: string;
  title: string;
  description: string;
  badges: string[];
  specs: { label: string; text: string }[];
  category: string;
  visual: "churn" | "rag" | "data" | "vision";
  repoUrl: string;
};

function Portfolio() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const es = lang === "es";
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === null || saved === "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const projects: Project[] = [
    { ...t.churn, title: es ? "Predicción de churn" : "Churn Prediction", category: "Machine Learning", visual: "churn", repoUrl: "https://github.com/benllame/classical_ml_and_agents" },
    { ...t.rag, title: es ? "RAG aplicado a finanzas" : "RAG for Finance", category: "Generative AI", visual: "rag", repoUrl: "https://github.com/benllame/llm_y_rag" },
    { ...t.dataEng, title: es ? "Pipeline de datos" : "Data Pipeline", category: "Data Engineering", visual: "data", repoUrl: "https://github.com/benllame/Olist-E-Commerce-Data-Platform" },
    { ...t.vision, title: es ? "Detección de anomalías en imágenes" : "Image Anomaly Detection", category: "Computer Vision", visual: "vision", repoUrl: "https://github.com/benllame/Anomaly-Detector" },
  ];
  const cv = new URL("../CV_EN.pdf", import.meta.url).href;
  const links = [
    { id: "experience", name: es ? "Experiencia" : "Experience" },
    { id: "work", name: es ? "Proyectos" : "Projects" },
    { id: "about", name: es ? "Enfoque" : "Approach" },
    { id: "contact", name: es ? "Contacto" : "Contact" },
  ];

  return <div className="folio">
    <ImmersiveScene dark={dark} es={es} />
    <a className="skip-link" href="#main-content">{es ? "Saltar al contenido" : "Skip to content"}</a>
    <header className="folio-nav">
      <a className="wordmark" href="#home" aria-label="Benjamín Llancao — home">bllancao<span>®</span></a>
      <nav id="primary-navigation" className={menuOpen ? "folio-links is-open" : "folio-links"} aria-label={es ? "Navegación principal" : "Main navigation"}>
        {links.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>{link.name}</a>)}
      </nav>
      <div className="folio-nav-end">
        <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={dark ? (es ? "Activar modo claro" : "Switch to light mode") : (es ? "Activar modo oscuro" : "Switch to dark mode")} aria-pressed={dark}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
        <button className="language-toggle" type="button" onClick={toggleLang} aria-label={es ? "Switch to English" : "Cambiar a español"}>{lang.toUpperCase()}<span aria-hidden="true">↗</span></button>
        <a href="mailto:benjallancao@gmail.com" className="nav-contact">{es ? "Conversemos" : "Let's talk"}<ArrowUpRight size={16} aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? (es ? "Cerrar menú" : "Close menu") : (es ? "Abrir menú" : "Open menu")}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>

    <main id="main-content">
      <section id="home" className="folio-hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span>{es ? "PORTAFOLIO · 2026" : "PORTFOLIO · 2026"}</span>
          <span className="availability"><i aria-hidden="true" />{es ? "Disponible para nuevos desafíos" : "Open to new opportunities"}</span>
        </div>
        <div className="hero-composition">
          <div className="hero-headline">
            <p className="hero-name">BENJAMÍN LLANCAO</p>
            <h1 id="hero-title"><span>{es ? "De datos" : "From data"}</span><span className="hero-title-second">{es ? "a posibilidades" : "to possibilities"}<span className="hero-period">.</span></span></h1>
          </div>
          <aside className="hero-side">
            <p className="hero-role">Data Scientist <span>&</span><br />Machine Learning Engineer</p>
            <p className="hero-summary">{t.hero.focus}</p>
            <a href="#experience" className="hero-cta">{es ? "Explorar experiencia" : "Explore experience"}<ArrowDown size={16} aria-hidden="true" /></a>
          </aside>
        </div>
        <div className="hero-foot">
          <span>{es ? "Sistemas de inteligencia artificial, de la señal a la decisión." : "Artificial intelligence systems, from signal to decision."}</span>
          <a href="#experience" aria-label={es ? "Bajar a experiencia" : "Scroll to experience"}><span>01 — 04</span><ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <div className="discipline-strip" aria-label={es ? "Áreas de trabajo" : "Areas of work"}>
        <span>MACHINE LEARNING</span><i aria-hidden="true">✳</i><span>GENERATIVE AI</span><i aria-hidden="true">✳</i><span>DATA ENGINEERING</span><i aria-hidden="true">✳</i><span>COMPUTER VISION</span>
      </div>

      <ExperienceExplorer />

      <section id="work" className="work-section project-section" aria-labelledby="projects-title">
        <div className="section-label"><span>02 / {es ? "PROYECTOS SELECCIONADOS" : "SELECTED PROJECTS"}</span><span>2026</span></div>
        <div className="project-intro">
          <h2 id="projects-title">{es ? <>Explorar.<br /><em>Construir.</em></> : <>Explore.<br /><em>Build.</em></>}</h2>
          <div><p>{es ? "Proyectos que llevan modelos, búsqueda y datos a sistemas útiles." : "Projects that turn models, retrieval and data into useful systems."}</p><span>{es ? "CUATRO SISTEMAS · 4 REPOSITORIOS" : "FOUR SYSTEMS · FOUR REPOSITORIES"}</span></div>
        </div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card project-card--${project.visual}`} key={project.visual}>
            <ProjectArtwork type={project.visual} es={es} />
            <div className="project-card-content">
              <div className="project-card-meta"><span>{project.category}</span><span>{project.module}</span></div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <dl className="project-details">{project.specs.slice(0, 2).map(spec => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.text}</dd></div>)}</dl>
              <div className="project-tags" aria-label={es ? "Tecnologías principales" : "Core technologies"}>{project.badges.slice(0, 4).map(badge => <span key={badge}>{badge}</span>)}</div>
              <a className="project-repo" href={project.repoUrl} target="_blank" rel="noreferrer">{es ? "Ver repositorio" : "View repository"}<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </article>)}
        </div>
      </section>

      <section id="about" className="approach-section" aria-labelledby="approach-title">
        <div className="section-label"><span>03 / {es ? "ENFOQUE" : "APPROACH"}</span><span>{es ? "DE PRINCIPIO A FIN" : "END TO END"}</span></div>
        <div className="approach-intro">
          <div className="approach-title-block"><span className="approach-kicker">{es ? "CÓMO TRABAJO" : "HOW I WORK"}</span><h2 id="approach-title">{es ? <>De la pregunta<br /><em>a producción.</em></> : <>From question<br /><em>to production.</em></>}</h2></div>
          <div className="approach-summary"><p>{es ? "Conecto datos, modelos y software para resolver problemas concretos." : "I connect data, models and software to solve concrete problems."}</p><a href={cv} target="_blank" rel="noreferrer" className="text-link">{es ? "Descargar mi CV" : "Download my CV"}<ArrowUpRight size={17} aria-hidden="true" /></a></div>
        </div>
        <BlockFeature />
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="section-label"><span>04 / {es ? "SIGUIENTE CAPÍTULO" : "NEXT CHAPTER"}</span><span className="availability"><i aria-hidden="true" />{es ? "Conversemos" : "Let's connect"}</span></div>
        <a id="contact-title" className="contact-title" href="mailto:benjallancao@gmail.com">{es ? <>Construyamos<br /><em>lo que sigue.</em></> : <>Let's build<br /><em>what's next.</em></>}<ArrowUpRight aria-hidden="true" /></a>
        <div className="contact-bottom"><p>{t.cta.desc}</p><a href="mailto:benjallancao@gmail.com">benjallancao@gmail.com<ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </section>
    </main>

    <footer className="folio-footer">
      <a href="#home" className="wordmark">bllancao<span>®</span></a>
      <span>© {new Date().getFullYear()} Benjamín Llancao</span>
      <div><a href="https://www.linkedin.com/in/bllame/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/benllame" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#home">{es ? "Volver arriba ↑" : "Back to top ↑"}</a></div>
    </footer>
  </div>;
}

export default function App() {
  return <LanguageProvider><Portfolio /></LanguageProvider>;
}
