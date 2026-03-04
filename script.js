document.addEventListener('DOMContentLoaded', () => {

    // ─────────────────────────────────────────────────────────
    // TRANSLATIONS
    // ─────────────────────────────────────────────────────────
    const translations = {
        es: {
            'nav.home':           '[0] INICIO',
            'nav.projects':       '[1] PROYECTOS',
            'nav.stack':          '[2] STACK',
            'nav.contact':        '[3] CONTACTO',
            'telemetry.status':   'DISPONIBLE',
            'hero.role':          'Data Scientist & Machine Learning Engineer',
            'hero.focus':         'Construyendo sistemas de IA end-to-end. Experiencia en soluciones multimodales (Computer Vision, NLP, LLMs/RAG) y despliegue a infraestructura cloud production-grade. Enfoque transversal en MLOps, CI/CD y observabilidad de modelos.',
            'profile.header':     'resumen.perfil & contacto',
            'profile.li1.strong': 'Sistemas ML End-to-end:',
            'profile.li1.text':   'Del prototipo a producción.',
            'profile.li2.strong': 'Data Pipelines:',
            'profile.li2.text':   'Escalables, robustos y cloud-native.',
            'profile.li3.strong': 'MLOps & CI/CD:',
            'profile.li3.text':   'Operación continua y observabilidad.',
            'profile.status':     'Disponible para Contratación',
            'profile.email':      'Enviar Correo',
            'profile.linkedin':   'Conectar en LinkedIn',
            // RAG
            'rag.title':          'RAG Financiero — Memorias NCG 461',
            'rag.desc':           'Sistema RAG para consultar en lenguaje natural las Memorias Anuales Integradas de empresas del IPSA chileno. Implementa y evalúa cuatro configuraciones comparables con métricas RAGAS sobre 34 preguntas con ground truth manual.',
            'rag.li1.strong':     'Extracción:',
            'rag.li1.text':       'MarkItDown (PDF → Markdown) + LangExtract para entidades estructuradas ASG/financieras con source grounding.',
            'rag.li2.strong':     'Retrieval:',
            'rag.li2.text':       'gemini-embedding-001 (768d MRL) con task_type dual; ChromaDB con filtros de metadatos por empresa y año.',
            'rag.li3.strong':     'Reranking:',
            'rag.li3.text':       'Batch scoring LLM con Gemini 2.5 Flash en una sola llamada → <strong>+0.414</strong> Answer Relevancy vs baseline similarity.',
            'rag.li4.strong':     'Evaluación:',
            'rag.li4.text':       'Pipeline RAGAS reproducible: Faithfulness, Answer Relevancy, Context Precision y Context Recall.',
            'rag.diagram.header': 'pipeline completo',
            'rag.query':          '¿Cuál es el ROE del Banco de Chile en 2023?',
            // OLIST
            'olist.title':        'Plataforma Datos E-Commerce OLIST',
            'olist.desc':         'Arquitectura ETL/ELT production-grade que procesa datos transaccionales reales. Diseñado para escalabilidad y alta disponibilidad utilizando servicios de Google Cloud.',
            'olist.li1.strong':   'Orquestación:',
            'olist.li1.text':     'DAGs de Apache Airflow manejando dependencias complejas y SLAs.',
            'olist.li2.strong':   'Procesamiento:',
            'olist.li2.text':     'Transformaciones distribuidas tanto Batch como Streaming en GCP Dataflow (Apache Beam).',
            'olist.li3.strong':   'Warehouse:',
            'olist.li3.text':     'Tablas analíticas en BigQuery con particionamiento y clustering para queries optimizadas.',
            'olist.li4.strong':   'IaC:',
            'olist.li4.text':     '28 recursos desplegados automáticamente bajo control de versiones mediante Terraform.',
            'olist.node.source':  '(Ingesta)',
            'olist.node.airflow': '(Orquestación)',
            // Computer Vision
            'cv.title':           'Detección de Anomalías Industriales',
            'cv.desc':            'Sistema de localización de defectos a nivel píxel utilizando features del modelo fundacional de Meta (DINOv2) y k-NN. Reescrito sin dependencia directa a PyTorch para un despliegue optimizado.',
            'cv.li1.strong':      'Modelo:',
            'cv.li1.text':        'Extracción profunda de features usando DINOv2.',
            'cv.li2.strong':      'Despliegue:',
            'cv.li2.text':        'Empaquetado vía ONNX Runtime y envuelto en endpoints HTTP altamente paralelizables con FastAPI.',
            'cv.li3.strong':      'Observabilidad:',
            'cv.li3.text':        'Monitoreado en tiempo real con Prometheus y Grafana (latencia del endpoint, tamaño del pool).',
            'cv.li4.strong':      'CI/CD:',
            'cv.li4.text':        'Testing y validación automatizada mediante pipelines en GitHub Actions.',
            // Stack
            'stack.data.title':    'Ingeniería de Datos',
            'stack.backend.title': 'Backend & Bases de Datos',
            // Contact
            'contact.channels':   'Canales de comunicación abiertos:',
            'contact.email':      'Enviar Correo',
            'contact.linkedin':   'Conectar en LinkedIn',
            // Footer
            'footer.status':      'CONEXIÓN SEGURA // Fin del sistema.',
            'footer.email':       '[ CORREO ]',
        },
        en: {
            'nav.home':           '[0] HOME',
            'nav.projects':       '[1] PROJECTS',
            'nav.stack':          '[2] STACK',
            'nav.contact':        '[3] CONTACT',
            'telemetry.status':   'AVAILABLE',
            'hero.role':          'Data Scientist & Machine Learning Engineer',
            'hero.focus':         'Building end-to-end AI systems. Experience in multimodal solutions (Computer Vision, NLP, LLMs/RAG) and deployment to production-grade cloud infrastructure. Cross-functional focus on MLOps, CI/CD and model observability.',
            'profile.header':     'profile.summary & contact',
            'profile.li1.strong': 'End-to-end ML Systems:',
            'profile.li1.text':   'From prototype to production.',
            'profile.li2.strong': 'Data Pipelines:',
            'profile.li2.text':   'Scalable, robust and cloud-native.',
            'profile.li3.strong': 'MLOps & CI/CD:',
            'profile.li3.text':   'Continuous operation and observability.',
            'profile.status':     'Available for Hire',
            'profile.email':      'Send Email',
            'profile.linkedin':   'Connect on LinkedIn',
            // RAG
            'rag.title':          'RAG Financial — Annual Reports NCG 461',
            'rag.desc':           'RAG system to query Chilean IPSA companies\' Integrated Annual Reports in natural language. Implements and evaluates four comparable configurations with RAGAS metrics over 34 manually ground-truthed questions.',
            'rag.li1.strong':     'Extraction:',
            'rag.li1.text':       'MarkItDown (PDF → Markdown) + LangExtract for structured ESG/financial entities with source grounding.',
            'rag.li2.strong':     'Retrieval:',
            'rag.li2.text':       'gemini-embedding-001 (768d MRL) with dual task_type; ChromaDB with metadata filters by company and year.',
            'rag.li3.strong':     'Reranking:',
            'rag.li3.text':       'LLM batch scoring with Gemini 2.5 Flash in a single call → <strong>+0.414</strong> Answer Relevancy vs similarity baseline.',
            'rag.li4.strong':     'Evaluation:',
            'rag.li4.text':       'Reproducible RAGAS pipeline: Faithfulness, Answer Relevancy, Context Precision and Context Recall.',
            'rag.diagram.header': 'full pipeline',
            'rag.query':          'What is Banco de Chile\'s ROE in 2023?',
            // OLIST
            'olist.title':        'OLIST E-Commerce Data Platform',
            'olist.desc':         'Production-grade ETL/ELT architecture processing real transactional data. Designed for scalability and high availability using Google Cloud services.',
            'olist.li1.strong':   'Orchestration:',
            'olist.li1.text':     'Apache Airflow DAGs handling complex dependencies and SLAs.',
            'olist.li2.strong':   'Processing:',
            'olist.li2.text':     'Distributed Batch and Streaming transformations on GCP Dataflow (Apache Beam).',
            'olist.li3.strong':   'Warehouse:',
            'olist.li3.text':     'Analytical tables in BigQuery with partitioning and clustering for optimized queries.',
            'olist.li4.strong':   'IaC:',
            'olist.li4.text':     '28 resources automatically deployed under version control with Terraform.',
            'olist.node.source':  '(Ingestion)',
            'olist.node.airflow': '(Orchestration)',
            // Computer Vision
            'cv.title':           'Industrial Anomaly Detection',
            'cv.desc':            'Pixel-level defect localization system using features from Meta\'s foundation model (DINOv2) and k-NN. Rewritten without direct PyTorch dependency for optimized deployment.',
            'cv.li1.strong':      'Model:',
            'cv.li1.text':        'Deep feature extraction using DINOv2.',
            'cv.li2.strong':      'Deployment:',
            'cv.li2.text':        'Packaged via ONNX Runtime and wrapped in highly parallelizable HTTP endpoints with FastAPI.',
            'cv.li3.strong':      'Observability:',
            'cv.li3.text':        'Real-time monitoring with Prometheus and Grafana (endpoint latency, pool size).',
            'cv.li4.strong':      'CI/CD:',
            'cv.li4.text':        'Automated testing and validation via GitHub Actions pipelines.',
            // Stack
            'stack.data.title':    'Data Engineering',
            'stack.backend.title': 'Backend & Databases',
            // Contact
            'contact.channels':   'Communication channels open:',
            'contact.email':      'Send Email',
            'contact.linkedin':   'Connect on LinkedIn',
            // Footer
            'footer.status':      'SECURE CONNECTION // End of system.',
            'footer.email':       '[ EMAIL ]',
        }
    };

    // ─────────────────────────────────────────────────────────
    // APPLY LANGUAGE
    // ─────────────────────────────────────────────────────────
    let currentLang = localStorage.getItem('lang') || 'es';

    function applyLang(lang) {
        const t = translations[lang];

        // textContent nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key] !== undefined) el.textContent = t[key];
        });

        // innerHTML nodes (may contain HTML tags)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        // html lang attribute
        document.documentElement.lang = lang;

        // Toggle button label shows the OTHER language (what you'd switch to)
        document.getElementById('lang-label').textContent = lang === 'es' ? 'EN' : 'ES';

        currentLang = lang;
        localStorage.setItem('lang', lang);
    }

    // ─────────────────────────────────────────────────────────
    // 1. Dynamic Telemetry (Time & Ping)
    // ─────────────────────────────────────────────────────────
    const timeEl = document.getElementById('sys-time');
    const pingEl = document.getElementById('ping-sim');

    function updateTelemetry() {
        const now = new Date();
        timeEl.textContent = `SYS_TIME: ${now.toTimeString().split(' ')[0]}`;
        const currentPing = parseInt(pingEl.textContent);
        const jitter = Math.floor(Math.random() * 5) - 2;
        let newPing = currentPing + jitter;
        if (newPing < 5) newPing = 5;
        if (newPing > 45) newPing = 45;
        pingEl.textContent = newPing;
    }

    updateTelemetry();
    setInterval(updateTelemetry, 1000);

    // ─────────────────────────────────────────────────────────
    // 2. Apply saved language BEFORE typewriter reads the DOM
    // ─────────────────────────────────────────────────────────
    if (currentLang !== 'es') applyLang(currentLang);

    // ─────────────────────────────────────────────────────────
    // 3. Terminal Typewriter Effect (Hero)
    // ─────────────────────────────────────────────────────────
    const terminalBody = document.getElementById('hero-typewriter');
    const lines = terminalBody.innerHTML.split('<br>');
    terminalBody.innerHTML = '';
    let currentLine = 0;

    function renderNextLine() {
        if (currentLine < lines.length) {
            terminalBody.innerHTML += lines[currentLine] + '<br>';
            currentLine++;
            setTimeout(renderNextLine, Math.floor(Math.random() * 500) + 100);
        }
    }
    setTimeout(renderNextLine, 500);

    // ─────────────────────────────────────────────────────────
    // 4. Language Toggle Button
    // ─────────────────────────────────────────────────────────
    document.getElementById('lang-toggle').addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        applyLang(newLang);

        // Update terminal body directly without typewriter re-run
        const t = translations[newLang];
        terminalBody.innerHTML =
            `<span class="prompt">$</span> whoami<br>` +
            `<span class="output highlight">Benjamín Llancao Mella</span><br>` +
            `<span class="prompt">$</span> cat role.txt<br>` +
            `<span class="output" data-i18n="hero.role">${t['hero.role']}</span><br>` +
            `<span class="prompt">$</span> grep -i &quot;focus&quot; sys_profile.yaml<br>` +
            `<span class="output" data-i18n="hero.focus">${t['hero.focus']}</span><br>` +
            `<span class="prompt blink">_</span><br>`;
    });

    // ─────────────────────────────────────────────────────────
    // 5. Tab Navigation State
    // ─────────────────────────────────────────────────────────
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const modules = document.querySelectorAll('.module, footer.console-footer');

    window.addEventListener('scroll', () => {
        let current = '';
        modules.forEach(section => {
            if (scrollY >= (section.offsetTop - 150)) current = section.getAttribute('id');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('href').includes(current)) tab.classList.add('active');
        });
    });

    // ─────────────────────────────────────────────────────────
    // 6. Scroll Reveal Animations
    // ─────────────────────────────────────────────────────────
    const reveals = document.querySelectorAll('.fade-in-up, .fade-in-right, .fade-in-left');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => revealObserver.observe(el));
});

