import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import dockerLogo from "@/assets/technology/docker.svg";
import googleCloudLogo from "@/assets/technology/googlecloud.svg";
import pythonLogo from "@/assets/technology/python.svg";
import pytorchLogo from "@/assets/technology/pytorch.svg";
import scikitLearnLogo from "@/assets/technology/scikitlearn.svg";
import tensorflowLogo from "@/assets/technology/tensorflow.svg";
import "./block-feature.css";

const technologies = [
  { name: "Python", logo: pythonLogo, color: "#3776ab", begin: "0s" },
  { name: "PyTorch", logo: pytorchLogo, color: "#ee4c2c", begin: "-3.6667s" },
  { name: "TensorFlow", logo: tensorflowLogo, color: "#ff6f00", begin: "-7.3333s" },
  { name: "Google Cloud", logo: googleCloudLogo, color: "#4285f4", begin: "-11s" },
  { name: "Docker", logo: dockerLogo, color: "#2496ed", begin: "-14.6667s" },
  { name: "scikit-learn", logo: scikitLearnLogo, color: "#f7931e", begin: "-18.3333s" },
];

export default function BlockFeature() {
  const { lang } = useLanguage();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const root = document.documentElement;
    if (!svg) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const syncPlayback = () => {
      if (!visible || reducedMotion.matches || root.dataset.motion === "paused" || document.hidden) {
        svg.pauseAnimations();
      } else {
        svg.unpauseAnimations();
      }
    };
    const motionObserver = new MutationObserver(syncPlayback);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    motionObserver.observe(root, { attributes: true, attributeFilter: ["data-motion"] });
    visibilityObserver.observe(svg);
    reducedMotion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    syncPlayback();

    return () => {
      motionObserver.disconnect();
      visibilityObserver.disconnect();
      reducedMotion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  const es = lang === "es";

  return <div className="block-feature">
    <svg
      ref={svgRef}
      className="block-feature__canvas"
      viewBox="0 32 411 208"
      role="list"
      aria-label={es ? "Tecnologías documentadas en mis proyectos" : "Technologies documented across my projects"}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="block-feature-shadow" x="-45%" y="-45%" width="190%" height="210%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dy="8" />
          <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <path id="block-feature-path" d="M-40 172C20 172 55 112 185.5 112C316 112 351 172 411 172" />
      </defs>
      {technologies.map(technology => <g key={technology.name} className="block-feature__rider" role="listitem" aria-label={technology.name}>
        <title>{technology.name}</title>
        <rect x="-38" y="-38" width="76" height="76" rx="18" fill={technology.color} filter="url(#block-feature-shadow)" />
        <image className="block-feature__logo" href={technology.logo} x="-22" y="-22" width="44" height="44" preserveAspectRatio="xMidYMid meet" />
        <animateMotion dur="22s" begin={technology.begin} repeatCount="indefinite" rotate="auto" calcMode="paced">
          <mpath href="#block-feature-path" />
        </animateMotion>
      </g>)}
    </svg>
  </div>;
}
