import type { Language } from "@/types";

type ProjectSpec = {
  label: string;
  text: string;
};

type TranslationSchema = {
  nav: {
    home: string;
    projects: string;
    stack: string;
    contact: string;
    repo: string;
  };
  telemetry: {
    status: string;
    statusLabel: string;
    latencyLabel: string;
    ipLabel: string;
    timeLabel: string;
  };
  hero: {
    badge: string;
    profileHeader: string;
    role: string;
    focus: string;
    checks: string[];
    statusLabel: string;
    statusValue: string;
    ctaEmail: string;
    ctaLinkedIn: string;
    stackLabel: string;
    terminal: {
      title: string;
      lines: { prompt: string; output: string }[];
    };
  };
  churn: {
    module: string;
    badges: string[];
    title: string;
    description: string;
    specs: ProjectSpec[];
    diagram: {
      source: string;
      pipeline: string;
      best: string;
      policy: string;
    };
    repo: string;
  };
  rag: {
    module: string;
    badges: string[];
    title: string;
    description: string;
    specs: ProjectSpec[];
    query: string;
    pipelineHeader: string;
    pipelineNodes: string[];
    metrics: {
      faithfulness: string;
      relevancy: string;
      precision: string;
      recall: string;
    };
    repo: string;
  };
  dataEng: {
    module: string;
    badges: string[];
    title: string;
    description: string;
    specs: ProjectSpec[];
    diagram: {
      source: string;
      airflow: string;
      dataflow: string;
      bigquery: string;
    };
    repo: string;
  };
  vision: {
    module: string;
    badges: string[];
    title: string;
    description: string;
    specs: ProjectSpec[];
    repo: string;
    statusAlert: string;
    ui: {
      engine: string;
      bbox: string;
      model: string;
      fps: string;
      state: string;
    };
  };
  stack: {
    header: string;
    cards: {
      title: string;
      items: string;
    }[];
  };
  contact: {
    module: string;
    channelsOpen: string;
    ctaEmail: string;
    ctaLinkedIn: string;
  };
  cta: {
    title: string;
    desc: string;
    email: string;
    linkedin: string;
  };
  footer: {
    tagline: string;
    yearText: string;
    links: {
      email: string;
      linkedin: string;
      github: string;
    };
  };
};

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      home: "[0] INICIO",
      projects: "[1] PROYECTOS",
      stack: "[2] STACK",
      contact: "[3] CONTACTO",
      repo: "[ REPO ]",
    },
    telemetry: {
      status: "DISPONIBLE",
      statusLabel: "STATUS",
      latencyLabel: "LATENCY",
      ipLabel: "USER_IP",
      timeLabel: "SYS_TIME",
    },
    hero: {
      badge: "Disponible para Contratación",
      profileHeader: "resumen.perfil & contacto",
      role: "Data Scientist & Machine Learning Engineer",
      focus:
        "Construyendo sistemas de IA end-to-end con experiencia en Computer Vision, NLP, LLMs/RAG y despliegues cloud production-grade. Enfoque transversal en MLOps, CI/CD y observabilidad de modelos.",
      checks: [
        "Sistemas ML de extremo a extremo en producción.",
        "Pipelines de datos escalables y cloud-native.",
        "Operación MLOps continua con CI/CD y monitoreo.",
      ],
      statusLabel: "STATUS",
      statusValue: "Disponible para Contratación",
      ctaEmail: "Enviar Correo",
      ctaLinkedIn: "Conectar en LinkedIn",
      stackLabel: "Stack en producción",
      terminal: {
        title: "bash - ssh bllancao@production",
        lines: [
          { prompt: "$ whoami", output: "Benjamín Llancao Mella" },
          {
            prompt: "$ cat role.txt",
            output: "Data Scientist & Machine Learning Engineer",
          },
          {
            prompt: "$ grep -i \"focus\" sys_profile.yaml",
            output:
              "Construyendo sistemas de IA end-to-end. Experiencia en soluciones multimodales y despliegue a infraestructura cloud production-grade.",
          },
        ],
      },
    },
    churn: {
      module: "01.a > ml.churn_intelligence",
      badges: [
        "Classical ML",
        "LangGraph",
        "ReAct Agent",
        "CatBoost",
        "SHAP",
        "MLflow",
        "FastAPI",
        "Streamlit",
      ],
      title: "Churn Intelligence System v3",
      description:
        "Sistema end-to-end que predice churn, explica cada predicción con SHAP, optimiza presupuesto de retención por ROI y expone capacidades vía agente ReAct con Gemini.",
      specs: [
        {
          label: "ML Pipeline",
          text: "4 modelos con tracking en MLflow, validación robusta y threshold óptimo por F1.",
        },
        {
          label: "Explicabilidad",
          text: "SHAP TreeExplainer, waterfall por cliente y selección de features orientada a desempeño.",
        },
        {
          label: "Policy Engine",
          text: "Estrategias de retención con optimización de presupuesto según ROI esperado.",
        },
        {
          label: "Serving",
          text: "LangGraph + Gemini, API con FastAPI y UI con Streamlit para operación real.",
        },
      ],
      diagram: {
        source: "CSV DATA",
        pipeline: "ML PIPELINE",
        best: "BEST MODEL",
        policy: "SHAP + POLICY",
      },
      repo: "[ REPO ]",
    },
    rag: {
      module: "01.b > nlp.rag_financiero",
      badges: [
        "RAG",
        "LLM",
        "GenAI",
        "Gemini 2.5",
        "ChromaDB",
        "Reranking",
        "Streamlit",
      ],
      title: "RAG Financiero - Memorias NCG 461",
      description:
        "Sistema RAG para consultar memorias anuales integradas del IPSA con evaluación comparativa mediante RAGAS.",
      specs: [
        {
          label: "Extracción",
          text: "PDF a Markdown con estructuración financiera y trazabilidad de fuentes.",
        },
        {
          label: "Retrieval",
          text: "Embeddings Gemini + ChromaDB con filtros por empresa y año.",
        },
        {
          label: "Reranking",
          text: "Batch scoring con Gemini 2.5 Flash para mejorar relevancia de contexto.",
        },
        {
          label: "Evaluación",
          text: "Pipeline reproducible con métricas de faithfulness, relevancy y precisión contextual.",
        },
      ],
      query: "¿Cuál es el ROE del Banco de Chile en 2023?",
      pipelineHeader: "pipeline completo",
      pipelineNodes: ["INGEST", "EMBED", "VECTOR STORE", "LLM RERANK", "GENERATE"],
      metrics: {
        faithfulness: "FAITHFULNESS",
        relevancy: "ANS. RELEVANCY",
        precision: "CTX. PRECISION",
        recall: "CTX. RECALL",
      },
      repo: "[ REPO ]",
    },
    dataEng: {
      module: "01.c > infraestructura.data_engineering",
      badges: ["GCP Dataflow", "Apache Airflow", "Terraform"],
      title: "Plataforma Datos E-Commerce OLIST",
      description:
        "Arquitectura ETL/ELT production-grade para procesamiento transaccional a escala sobre Google Cloud.",
      specs: [
        {
          label: "Orquestación",
          text: "DAGs en Airflow con control de dependencias complejas y SLAs.",
        },
        {
          label: "Procesamiento",
          text: "Pipelines batch y streaming distribuidos con Dataflow/Beam.",
        },
        {
          label: "Warehouse",
          text: "BigQuery con modelado analítico, particiones y optimización de consultas.",
        },
        {
          label: "IaC",
          text: "Infraestructura como código con Terraform bajo versionado y reproducibilidad.",
        },
      ],
      diagram: {
        source: "GCS / PUBSUB",
        airflow: "AIRFLOW",
        dataflow: "DATAFLOW",
        bigquery: "BIGQUERY",
      },
      repo: "[ REPO ]",
    },
    vision: {
      module: "01.d > modelos.computer_vision",
      badges: ["DINOv2 ViT", "ONNX", "Grafana"],
      title: "Detección de Anomalías Industriales",
      description:
        "Sistema de localización de defectos a nivel píxel usando embeddings visuales y despliegue optimizado para inferencia rápida.",
      specs: [
        {
          label: "Modelo",
          text: "Extracción profunda de features con DINOv2 ViT y scoring orientado a outliers.",
        },
        {
          label: "Despliegue",
          text: "Runtime ONNX con endpoints FastAPI paralelizables en entornos productivos.",
        },
        {
          label: "Observabilidad",
          text: "Monitoreo en tiempo real de latencia, throughput y estado operacional.",
        },
        {
          label: "CI/CD",
          text: "Pipelines automatizados para testing, validación y release continuo.",
        },
      ],
      repo: "[ REPO ]",
      statusAlert: "OUTLIER_DETECTED",
      ui: {
        engine: "motor_inferencia.exe",
        bbox: "PROB_DEFECTO: 0.998",
        model: "MODELO",
        fps: "FPS",
        state: "ESTADO",
      },
    },
    stack: {
      header: "02 > core.tech_stack",
      cards: [
        {
          title: "ML Frameworks",
          items: "PyTorch, TensorFlow, scikit-learn, HuggingFace, ONNX Runtime",
        },
        {
          title: "LLMs & RAG",
          items: "Gemini API, ChromaDB, LangGraph, RAGAS, Streamlit",
        },
        {
          title: "Ingeniería de Datos",
          items: "Apache Airflow, Apache Beam, BigQuery, Dataflow, Pandas",
        },
        {
          title: "MLOps & DevOps",
          items: "Docker, Terraform, GitHub Actions, Prometheus, Grafana",
        },
        {
          title: "Backend & DBs",
          items: "Python, FastAPI, PostgreSQL, MongoDB, Redis",
        },
      ],
    },
    contact: {
      module: "03 > net.contacto",
      channelsOpen: "Canales de comunicación abiertos:",
      ctaEmail: "Enviar Correo",
      ctaLinkedIn: "Conectar en LinkedIn",
    },
    cta: {
      title: "Disponible para nuevos proyectos",
      desc: "Abierto a roles de Data Scientist, ML Engineer o posiciones que involucren sistemas de IA en producción.",
      email: "Enviar mensaje",
      linkedin: "Ver LinkedIn",
    },
    footer: {
      tagline: "CONEXIÓN SEGURA // Fin del sistema.",
      yearText: "© 2026 Benjamín Llancao Mella",
      links: {
        email: "[ CORREO ]",
        linkedin: "[ LINKEDIN ]",
        github: "[ GITHUB ]",
      },
    },
  },
  en: {
    nav: {
      home: "[0] HOME",
      projects: "[1] PROJECTS",
      stack: "[2] STACK",
      contact: "[3] CONTACT",
      repo: "[ REPO ]",
    },
    telemetry: {
      status: "AVAILABLE",
      statusLabel: "STATUS",
      latencyLabel: "LATENCY",
      ipLabel: "USER_IP",
      timeLabel: "SYS_TIME",
    },
    hero: {
      badge: "Available for Hire",
      profileHeader: "profile.summary & contact",
      role: "Data Scientist & Machine Learning Engineer",
      focus:
        "Building end-to-end AI systems with strong experience in Computer Vision, NLP, LLMs/RAG, and production-grade cloud deployments. Cross-functional focus on MLOps, CI/CD, and model observability.",
      checks: [
        "End-to-end ML systems running in production.",
        "Scalable cloud-native data pipelines.",
        "Continuous MLOps operations with CI/CD and monitoring.",
      ],
      statusLabel: "STATUS",
      statusValue: "Available for Hire",
      ctaEmail: "Send Email",
      ctaLinkedIn: "Connect on LinkedIn",
      stackLabel: "Production stack",
      terminal: {
        title: "bash - ssh bllancao@production",
        lines: [
          { prompt: "$ whoami", output: "Benjamín Llancao Mella" },
          {
            prompt: "$ cat role.txt",
            output: "Data Scientist & Machine Learning Engineer",
          },
          {
            prompt: "$ grep -i \"focus\" sys_profile.yaml",
            output:
              "Building end-to-end AI systems with multimodal capabilities and production-grade cloud deployment experience.",
          },
        ],
      },
    },
    churn: {
      module: "01.a > ml.churn_intelligence",
      badges: [
        "Classical ML",
        "LangGraph",
        "ReAct Agent",
        "CatBoost",
        "SHAP",
        "MLflow",
        "FastAPI",
        "Streamlit",
      ],
      title: "Churn Intelligence System v3",
      description:
        "End-to-end churn prediction platform with SHAP explainability, ROI-aware retention optimization, and conversational ReAct interaction powered by Gemini.",
      specs: [
        {
          label: "ML Pipeline",
          text: "Four models with MLflow tracking, robust validation, and F1-oriented thresholding.",
        },
        {
          label: "Explainability",
          text: "SHAP TreeExplainer, per-customer waterfall analysis, and feature selection strategy.",
        },
        {
          label: "Policy Engine",
          text: "Retention actions optimized through expected ROI-based budget allocation.",
        },
        {
          label: "Serving",
          text: "LangGraph + Gemini, FastAPI API layer, and Streamlit interface for operators.",
        },
      ],
      diagram: {
        source: "CSV DATA",
        pipeline: "ML PIPELINE",
        best: "BEST MODEL",
        policy: "SHAP + POLICY",
      },
      repo: "[ REPO ]",
    },
    rag: {
      module: "01.b > nlp.rag_financial",
      badges: [
        "RAG",
        "LLM",
        "GenAI",
        "Gemini 2.5",
        "ChromaDB",
        "Reranking",
        "Streamlit",
      ],
      title: "Financial RAG - Annual Reports NCG 461",
      description:
        "RAG system for natural-language analysis of annual integrated reports, benchmarked with a reproducible RAGAS evaluation setup.",
      specs: [
        {
          label: "Extraction",
          text: "PDF to Markdown ingestion with structured financial entities and source grounding.",
        },
        {
          label: "Retrieval",
          text: "Gemini embeddings + ChromaDB vector search with company/year metadata filters.",
        },
        {
          label: "Reranking",
          text: "Single-call Gemini 2.5 Flash batch scoring to improve contextual relevance.",
        },
        {
          label: "Evaluation",
          text: "Reproducible RAGAS pipeline for faithfulness, relevancy, precision, and recall.",
        },
      ],
      query: "What is Banco de Chile's ROE in 2023?",
      pipelineHeader: "full pipeline",
      pipelineNodes: ["INGEST", "EMBED", "VECTOR STORE", "LLM RERANK", "GENERATE"],
      metrics: {
        faithfulness: "FAITHFULNESS",
        relevancy: "ANS. RELEVANCY",
        precision: "CTX. PRECISION",
        recall: "CTX. RECALL",
      },
      repo: "[ REPO ]",
    },
    dataEng: {
      module: "01.c > infrastructure.data_engineering",
      badges: ["GCP Dataflow", "Apache Airflow", "Terraform"],
      title: "OLIST E-Commerce Data Platform",
      description:
        "Production-grade ETL/ELT architecture for scalable transactional processing on Google Cloud.",
      specs: [
        {
          label: "Orchestration",
          text: "Airflow DAGs handling complex dependencies and SLA-driven scheduling.",
        },
        {
          label: "Processing",
          text: "Distributed batch and streaming pipelines built on Dataflow and Beam.",
        },
        {
          label: "Warehouse",
          text: "BigQuery analytical modeling with partitions and query-level optimizations.",
        },
        {
          label: "IaC",
          text: "Terraform-managed infrastructure with versioned, reproducible deployment.",
        },
      ],
      diagram: {
        source: "GCS / PUBSUB",
        airflow: "AIRFLOW",
        dataflow: "DATAFLOW",
        bigquery: "BIGQUERY",
      },
      repo: "[ REPO ]",
    },
    vision: {
      module: "01.d > models.computer_vision",
      badges: ["DINOv2 ViT", "ONNX", "Grafana"],
      title: "Industrial Anomaly Detection",
      description:
        "Pixel-level defect localization using visual embeddings and optimized runtime deployment for high-throughput inference.",
      specs: [
        {
          label: "Model",
          text: "Deep feature extraction with DINOv2 ViT and outlier-focused scoring.",
        },
        {
          label: "Deployment",
          text: "ONNX runtime wrapped by highly parallel FastAPI inference endpoints.",
        },
        {
          label: "Observability",
          text: "Real-time operational monitoring across latency, throughput, and health signals.",
        },
        {
          label: "CI/CD",
          text: "Automated pipelines for tests, validation gates, and release flow.",
        },
      ],
      repo: "[ REPO ]",
      statusAlert: "OUTLIER_DETECTED",
      ui: {
        engine: "inference_engine.exe",
        bbox: "DEFECT_PROB: 0.998",
        model: "MODEL",
        fps: "FPS",
        state: "STATE",
      },
    },
    stack: {
      header: "02 > core.tech_stack",
      cards: [
        {
          title: "ML Frameworks",
          items: "PyTorch, TensorFlow, scikit-learn, HuggingFace, ONNX Runtime",
        },
        {
          title: "LLMs & RAG",
          items: "Gemini API, ChromaDB, LangGraph, RAGAS, Streamlit",
        },
        {
          title: "Data Engineering",
          items: "Apache Airflow, Apache Beam, BigQuery, Dataflow, Pandas",
        },
        {
          title: "MLOps & DevOps",
          items: "Docker, Terraform, GitHub Actions, Prometheus, Grafana",
        },
        {
          title: "Backend & DBs",
          items: "Python, FastAPI, PostgreSQL, MongoDB, Redis",
        },
      ],
    },
    contact: {
      module: "03 > net.contact",
      channelsOpen: "Communication channels open:",
      ctaEmail: "Send Email",
      ctaLinkedIn: "Connect on LinkedIn",
    },
    cta: {
      title: "Available for new projects",
      desc: "Open to Data Scientist and ML Engineer roles, or positions involving production AI systems.",
      email: "Send message",
      linkedin: "View LinkedIn",
    },
    footer: {
      tagline: "SECURE CONNECTION // End of system.",
      yearText: "© 2026 Benjamín Llancao Mella",
      links: {
        email: "[ EMAIL ]",
        linkedin: "[ LINKEDIN ]",
        github: "[ GITHUB ]",
      },
    },
  },
};
