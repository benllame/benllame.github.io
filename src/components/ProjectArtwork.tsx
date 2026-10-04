import churn from "@/assets/art/churn.webp";
import churnSmall from "@/assets/art/churn-768.webp";
import rag from "@/assets/art/rag.webp";
import ragSmall from "@/assets/art/rag-768.webp";
import olist from "@/assets/art/olist.webp";
import olistSmall from "@/assets/art/olist-768.webp";
import anomaly from "@/assets/art/anomaly.webp";
import anomalySmall from "@/assets/art/anomaly-768.webp";
import "./project-art.css";

type ProjectArtworkType = "churn" | "rag" | "data" | "vision";

const artwork: Record<ProjectArtworkType, { image: string; small: string; alt: { es: string; en: string } }> = {
  churn: {
    image: churn,
    small: churnSmall,
    alt: {
      es: "Caminos de papel ramificados con pequeñas figuras, una imagen conceptual sobre decisiones de retención de clientes.",
      en: "Branching paper paths with small figures, a conceptual image about customer retention decisions.",
    },
  },
  rag: {
    image: rag,
    small: ragSmall,
    alt: {
      es: "Libros de informes abiertos y una página marcada, una imagen conceptual sobre búsqueda documental y revisión de fuentes.",
      en: "Open report books with a marked page, a conceptual image about document retrieval and source review.",
    },
  },
  data: {
    image: olist,
    small: olistSmall,
    alt: {
      es: "Paquetes en miniatura recorren varias cintas transportadoras, una imagen conceptual sobre un flujo de datos de comercio electrónico.",
      en: "Miniature parcels move along conveyor belts, a conceptual image about an e-commerce data pipeline.",
    },
  },
  vision: {
    image: anomaly,
    small: anomalySmall,
    alt: {
      es: "Un detalle de fibra resaltado sobre una tela tejida, una imagen conceptual sobre detección de anomalías industriales.",
      en: "A highlighted fiber detail on woven material, a conceptual image about industrial anomaly detection.",
    },
  },
};

export function ProjectArtwork({ type, es }: { type: ProjectArtworkType; es: boolean }) {
  const image = artwork[type];

  return (
    <div className="project-art">
      <img
        src={image.image}
        srcSet={`${image.small} 768w, ${image.image} 1536w`}
        sizes="(max-width: 700px) 90vw, (max-width: 1240px) 50vw, 620px"
        width={1536}
        height={1024}
        loading="lazy"
        decoding="async"
        alt={es ? image.alt.es : image.alt.en}
      />
    </div>
  );
}
