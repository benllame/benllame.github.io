import "./experience.css";
import { useLanguage } from "@/context/LanguageContext";
import vidaArtwork from "@/assets/art/vida.webp";
import vidaArtworkMedium from "@/assets/art/vida-768.webp";
import eruidoArtwork from "@/assets/art/eruido.webp";
import eruidoArtworkMedium from "@/assets/art/eruido-768.webp";
import researchLabArtwork from "@/assets/art/research-lab.webp";
import researchLabArtworkMedium from "@/assets/art/research-lab-768.webp";

type Detail = [string, string];

function MoreDetails({
  label,
  hideLabel,
  details,
}: {
  label: string;
  hideLabel: string;
  details: Detail[];
}) {
  return (
    <details className="case-more">
      <summary>
        <span className="case-more-open">{label}</span>
        <span className="case-more-close">{hideLabel}</span>
        <span className="case-more-mark" aria-hidden="true">+</span>
      </summary>
      <dl>
        {details.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

export function ExperienceExplorer() {
  const { lang } = useLanguage();
  const es = lang === "es";

  const vidaDetails: Detail[] = es
    ? [
        ["Segmentación y campañas", "Desarrollo segmentos de asegurados y comunicaciones personalizadas para orientar demanda hacia un centro de salud; analizo campañas por estrato y las refino iterativamente."],
        ["Fuga individual y retención", "Analizo patrones y motivos de fuga individual; colaboro con Customer Experience en intervenciones proactivas y reactivas."],
        ["Prestaciones y centros", "Análisis causal para orientar prestaciones en centros específicos, incluidas relaciones asociadas a consultas de medicina general."],
        ["Gasto sanitario futuro", "Modelos de gasto y análisis de secuencias de prestaciones para identificar asegurados de alto costo y tendencias."],
      ]
    : [
        ["Segmentation and campaigns", "I develop policyholder segments and personalised communications to direct demand to a healthcare centre; I analyse campaign outcomes by stratum and refine them iteratively."],
        ["Individual churn and retention", "I analyse individual policyholder attrition patterns and reasons, and partner with Customer Experience on proactive and reactive interventions."],
        ["Services and care centres", "Causal analysis guides service-specific actions at selected centres, including relationships associated with general medicine consultations."],
        ["Future healthcare expenditure", "Expenditure models and service-sequence analysis identify high-cost policyholders and trends."],
      ];

  const eruidoDetails: Detail[] = es
    ? [
        ["Contexto", "Pesca industrial, construcción e infraestructura de transporte."],
        ["Solución", "Ingesta batch y streaming, preprocesamiento y clasificación de audio; integración con SQL Server y despliegue on-premise."],
        ["Operación", "Monitoreo de predicciones, pruebas A/B y reentrenamiento periódico para detectar anomalías antes y reducir tiempos de respuesta."],
      ]
    : [
        ["Context", "Industrial fishing, construction and transport infrastructure."],
        ["Solution", "Batch and streaming ingestion, audio preprocessing and classification; integrated with SQL Server and deployed on-premise."],
        ["Operations", "Prediction monitoring, A/B testing and periodic retraining to detect anomalies earlier and reduce response times."],
      ];

  const labDetails: Detail[] = es
    ? [
        ["Diseño", "Prototipo multimodal con MRI de múltiples secuencias y texto clínico para reportes radiológicos y apoyo a la caracterización de tumores cerebrales."],
        ["Explicabilidad", "Pipeline de SHAP, Grad-CAM/CAM e Integrated Gradients para mapas de atención y atribuciones por caso."],
      ]
    : [
        ["Design", "Multimodal prototype combining multi-sequence MRI and clinical text for radiology reports and support for brain tumour characterisation."],
        ["Explainability", "SHAP, Grad-CAM/CAM and Integrated Gradients pipeline for case-level attention maps and attributions."],
      ];

  return (
    <section id="experience" className="experience-field">
      <div className="experience-field-inner">
        <div className="experience-field-index">
          <span>01 / {es ? "EXPERIENCIA" : "EXPERIENCE"}</span>
          <span>{es ? "SISTEMAS APLICADOS" : "APPLIED SYSTEMS"}</span>
        </div>

        <header className="experience-field-header">
          <h2>
            {es ? "Ideas que llegan" : "Ideas that reach"}
            <br />
            <em>{es ? "a producción." : "production."}</em>
          </h2>
          <p>
            {es
              ? "Sistemas de clientes y acústica en operación, junto a prototipos de investigación multimodal."
              : "Customer and acoustic systems in operation, alongside multimodal research prototypes."}
          </p>
        </header>

        <article className="case-chapter case-vida">
          <div className="case-vida-copy">
            <div className="case-chapter-index">
              <span>01 — {es ? "ACTUAL" : "CURRENT"}</span>
              <span>{es ? "SEGUROS" : "INSURANCE"}</span>
            </div>
            <div className="case-heading-group">
              <p className="case-company">Vida Cámara</p>
              <p className="case-role">Data Scientist <span>/ {es ? "Junio 2026 — Actualidad" : "June 2026 — Present"}</span></p>
            </div>
            <h3>{es ? "Segmentar. Comunicar. Iterar." : "Segment. Communicate. Iterate."}</h3>
            <p className="case-summary">
              {es
                ? "Segmentación de asegurados y comunicaciones personalizadas orientan demanda hacia un centro de salud; las campañas se analizan por estrato y se refinan iterativamente."
                : "Policyholder segmentation and personalised communications direct demand to a healthcare centre; campaign outcomes are analysed by stratum and refined iteratively."}
            </p>
            <MoreDetails
              label={es ? "Ver detalles del trabajo" : "Explore the work"}
              hideLabel={es ? "Ocultar detalles" : "Hide details"}
              details={vidaDetails}
            />
          </div>

          <div className="case-visual case-vida-visual">
            <figure className="case-art case-vida-art">
              <img
                src={vidaArtwork}
                srcSet={`${vidaArtworkMedium} 768w, ${vidaArtwork} 1536w`}
                sizes="(max-width: 700px) 88vw, (max-width: 960px) 54vw, 650px"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
                alt={es
                  ? "Ilustración conceptual de cohortes de asegurados y comunicación personalizada; no representa clientes ni resultados reales."
                  : "Conceptual illustration of policyholder cohorts and personalised communication; no real customers or outcomes are represented."}
              />
              <figcaption className="case-visual-caption">
                {es ? "Ilustración conceptual · cohortes y comunicación" : "Conceptual illustration · cohorts and communication"}
              </figcaption>
            </figure>
            <div className="case-vida-satellites">
              <div>
                <strong>{es ? "Fuga individual" : "Individual churn"}</strong>
                <span>{es ? "Identificar fuga individual y proponer acciones de retención con Experiencia de Clientes." : "Identify individual churn risk and propose retention actions with Customer Experience."}</span>
              </div>
              <div>
                <strong>{es ? "Prestaciones y centros" : "Services and care centres"}</strong>
                <span>{es ? "Análisis causal para orientar acciones, incluidas las asociadas a medicina general" : "Causal analysis to guide actions, including those associated with general medicine"}</span>
              </div>
              <div>
                <strong>{es ? "Gasto sanitario futuro" : "Future healthcare expenditure"}</strong>
                <span>{es ? "Modelos y secuencias de prestaciones · alto costo · tendencias" : "Models and service sequences · high-cost policyholders · trends"}</span>
              </div>
            </div>
          </div>
        </article>

        <article className="case-chapter case-eruido">
          <div className="case-chapter-copy">
            <div className="case-chapter-index">
              <span>02 — {es ? "EXPERIENCIA ANTERIOR" : "PREVIOUS EXPERIENCE"}</span>
              <span>{es ? "INDUSTRIA" : "INDUSTRY"}</span>
            </div>
            <div className="case-heading-group">
              <p className="case-company">ERUIDO</p>
              <p className="case-role">Data Scientist <span>/ {es ? "Sistemas acústicos" : "Acoustic systems"}</span></p>
            </div>
            <h3>{es ? "Del sonido a la acción." : "From sound to action."}</h3>
            <p className="case-summary">
              {es
                ? "Audio industrial que se procesa y clasifica para monitoreo y operación en infraestructura local."
                : "Industrial audio processed and classified for monitoring and operation on local infrastructure."}
            </p>
            <MoreDetails
              label={es ? "Ver detalles del trabajo" : "Explore the work"}
              hideLabel={es ? "Ocultar detalles" : "Hide details"}
              details={eruidoDetails}
            />
          </div>

          <div className="case-visual case-eruido-visual">
            <div className="case-visual-topline">
              <span>{es ? "RUTA DEL AUDIO" : "AUDIO PATH"}</span>
              <span>{es ? "SENSOR ACÚSTICO" : "ACOUSTIC SENSOR"}</span>
            </div>
            <figure className="case-art case-eruido-art">
              <img
                src={eruidoArtwork}
                srcSet={`${eruidoArtworkMedium} 768w, ${eruidoArtwork} 1536w`}
                sizes="(max-width: 700px) 88vw, (max-width: 960px) 54vw, 650px"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
                alt={es
                  ? "Ilustración conceptual de un sensor acústico sobre maquinaria industrial; no es una fotografía de una instalación real."
                  : "Conceptual illustration of an acoustic sensor on industrial machinery; not a photograph of a real deployment."}
              />
              <figcaption className="case-visual-caption">
                {es ? "Ilustración conceptual" : "Conceptual illustration"}
              </figcaption>
            </figure>
            <div className="case-operation-strip">
              <span>Batch + streaming</span>
              <span>SQL Server</span>
              <span>{es ? "Infraestructura local" : "On-premise"}</span>
              <span>{es ? "Monitoreo · A/B · reentrenamiento" : "Monitoring · A/B · retraining"}</span>
            </div>
          </div>
        </article>

        <article className="case-chapter case-lab">
          <div className="case-visual case-lab-visual">
            <div className="case-visual-topline">
              <span>{es ? "MRI + TEXTO CLÍNICO" : "MRI + CLINICAL TEXT"}</span>
              <span>{es ? "INVESTIGACIÓN" : "RESEARCH"}</span>
            </div>
            <figure className="case-art case-lab-artwork">
              <img
                src={researchLabArtwork}
                srcSet={`${researchLabArtworkMedium} 768w, ${researchLabArtwork} 1536w`}
                sizes="(max-width: 700px) 88vw, (max-width: 960px) 54vw, 650px"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
                alt={es
                  ? "Ilustración conceptual de un modelo cerebral anatómico en capas junto a una página vacía; no muestra imágenes MRI ni reportes clínicos reales."
                  : "Conceptual illustration of a layered anatomical brain model beside a blank page; it shows no real MRI images or clinical reports."}
              />
              <figcaption className="case-visual-caption">
                {es ? "Ilustración conceptual" : "Conceptual illustration"}
              </figcaption>
            </figure>
          </div>

          <div className="case-chapter-copy case-lab-copy">
            <div className="case-chapter-index">
              <span>03 — {es ? "2023—2025" : "2023—2025"}</span>
              <span>{es ? "INVESTIGACIÓN" : "RESEARCH"}</span>
            </div>
            <div className="case-heading-group">
              <p className="case-company">{es ? "Laboratorio de investigación" : "Research laboratory"}</p>
              <p className="case-role">Research Engineer <span>/ {es ? "Multimodal" : "Multimodal"}</span></p>
            </div>
            <h3>{es ? "Ver. Interpretar. Explicar." : "See. Interpret. Explain."}</h3>
            <p className="case-summary">
              {es
                ? "Un prototipo conecta MRI y texto clínico para generar reportes radiológicos, con métodos de interpretabilidad por caso."
                : "A prototype connects MRI scans and clinical text for radiology reports, with case-level explainability methods."}
            </p>
            <MoreDetails
              label={es ? "Ver detalles de investigación" : "Explore the research"}
              hideLabel={es ? "Ocultar detalles" : "Hide details"}
              details={labDetails}
            />
          </div>
        </article>

        <div className="experience-field-end" aria-hidden="true">
          <span>BENJAMÍN LLANCAO</span>
          <span>01 — 03</span>
        </div>
      </div>
    </section>
  );
}
