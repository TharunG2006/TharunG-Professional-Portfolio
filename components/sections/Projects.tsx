"use client";

import { useState } from "react";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import Image from "next/image";
import { ImageLightboxModal, LightboxImage } from "@/components/ui/ImageLightboxModal";

const projects = [
  {
    title: "Astrovia: Explainable Satellite Anomaly Detection",
    badge: "SIH 2026, Waitlisted",
    description: "Deep learning telemetry anomaly detection framework for operational low Earth orbit satellites.",
    problem: "Satellite sensor streams produce massive multi-channel time-series data where orbital anomalies risk permanent mission failure.",
    solution: "PyTorch LSTM per-channel forecasting, z-score residual scoring, prediction-error explainability, SatNOGS live telemetry, NASA SMAP/MSL validation, and Streamlit/Plotly dashboard.",
    tech: ["PyTorch", "LSTM", "SatNOGS API", "NASA SMAP/MSL", "Plotly", "Streamlit", "Python"],
    github: "https://github.com/TharunG2006/Astrovia",
    demo: "https://astrovia.streamlit.app",
    color: "from-[#a3cfcd] to-[#e0fbfc]",
    image: "/projects/astrovia.svg",
    imageAlt: "Astrovia satellite telemetry anomaly detection architecture",
  },
  {
    title: "SentinelAI: Autonomous SIEM & SOAR Assistant",
    badge: "Security AI",
    description: "Autonomous security operations platform for event streaming, detection engineering, and incident response.",
    problem: "Security analysts face alert fatigue and fragmented tooling when triaging high-volume distributed logs across cloud environments.",
    solution: "Vector + Redpanda to OpenSearch with OCSF normalization, Sigma rules compiled to queries, LangGraph + local Llama 3.1 triage with allow-listed playbooks (TheHive, Shuffle).",
    tech: ["Vector", "Redpanda", "OpenSearch", "OCSF", "Sigma Rules", "LangGraph", "Llama 3.1", "TheHive", "Shuffle"],
    github: "https://github.com/TharunG2006/SentinelAI",
    demo: "https://github.com/TharunG2006/SentinelAI#architecture",
    color: "from-[#ffb5a7] to-[#fcd5ce]",
    image: "/projects/sentinelai.svg",
    imageAlt: "SentinelAI SIEM and SOAR pipeline architecture",
  },
  {
    title: "Orion AI: Local-First Offline Assistant",
    badge: "Desktop AI",
    description: "Privacy-centric, local-first offline personal AI assistant engineered for desktop cross-platform execution.",
    problem: "Cloud-dependent AI assistants expose sensitive personal data and require continuous internet connectivity to operate.",
    solution: "Local-first architecture built with Python and Rust via PyO3, Tauri 2, React, Three.js, FAISS + SQLite FTS5 hybrid RAG, and sandboxed agents.",
    tech: ["Python", "Rust (PyO3)", "Tauri 2", "React", "Three.js", "FAISS", "SQLite FTS5"],
    github: "https://github.com/AstraDev-Labs/Orion-AI",
    demo: "https://orion-ai-lac.vercel.app/",
    color: "from-[#ffd6ff] to-[#e7c6ff]",
    image: "/projects/orion-ai.svg",
    imageAlt: "Orion AI local desktop UI with hybrid vector RAG",
  },
  {
    title: "Prism: End-to-End Encrypted Messenger",
    badge: "Completed",
    description: "State-of-the-art, end-to-end encrypted messaging suite ensuring zero server-side plaintext access.",
    problem: "Modern messaging platforms often decrypt communications on central servers, creating centralized data privacy vulnerabilities.",
    solution: "Client-side Web Crypto API RSA keypair generation and AES-GCM session payload encryption over real-time Socket.IO with MongoDB persistence.",
    tech: ["Web Crypto API", "RSA/AES", "Next.js", "Socket.IO", "MongoDB", "TypeScript"],
    github: "https://github.com/TharunG2006/Prism",
    demo: "https://prism-woad.vercel.app",
    color: "from-[#fcd5ce] to-[#f8edeb]",
    image: "/projects/prism.svg",
    imageAlt: "Prism encrypted messaging interface",
  },
  {
    title: "GeoForesight: Remote Sensing Platform",
    badge: "Completed",
    description: "Remote sensing & Earth observation collaborative research platform connecting GIS investigators worldwide.",
    problem: "Earth observation teams lacked a unified platform for peer moderation, coordinate-linked discussion, and high-performance raster sharing.",
    solution: "Built a collaborative research platform featuring role-aware peer moderation, threaded geospatial discussions, and Cloudflare distributed spatial asset storage.",
    tech: ["Next.js 16", "Cloudflare", "TypeScript", "Tailwind CSS", "GIS", "Spatial Analytics"],
    github: "https://github.com/AstraDev-Labs/GeoInsight",
    demo: "https://www.geoforesight.org/",
    color: "from-[#a3cfcd] to-[#ffb5a7]",
    image: "/projects/geoforesight.svg",
    imageAlt: "GeoForesight remote sensing collaboration platform",
  },
  {
    title: "Aegis Toolkit",
    badge: "In progress",
    description: "Unified workstation toolkit for cybersecurity practitioners conducting network reconnaissance and assessment.",
    problem: "Security auditors must juggle disparate terminal scripts for network port scans, hash analysis, and payload encoding.",
    solution: "Integrated automated Nmap network scanning, multi-algorithm hash identification, and binary payload encode/decode modules in one GUI.",
    tech: ["Python", "Tkinter", "Nmap", "Cryptography", "Network Recon"],
    github: "https://github.com/TharunG2006/Cyber-Toolkit",
    demo: "https://github.com/TharunG2006/Cyber-Toolkit#readme",
    color: "from-[#ffb5a7] to-[#fcd5ce]",
    image: "/projects/aegis-toolkit.svg",
    imageAlt: "Aegis Toolkit workstation UI",
  },
  {
    title: "HireHub",
    badge: "In progress",
    description: "Full-stack placement management architecture engineered for high-concurrency campus recruitment workflows.",
    problem: "Institutional placement drives lack secure, concurrent role-based record verification and real-time candidate notifications.",
    solution: "High-concurrency platform featuring role-based access control (RBAC), DynamoDB data pipelines, AWS S3 document verification, and encrypted messaging.",
    tech: ["Next.js", "Node.js", "DynamoDB", "AWS S3", "RBAC", "TypeScript"],
    github: "https://github.com/AstraDev-Labs/HireHub.git",
    demo: "https://github.com/AstraDev-Labs/HireHub#readme",
    color: "from-[#a3cfcd] to-[#e0fbfc]",
    image: "/projects/hirehub.svg",
    imageAlt: "HireHub placement management dashboard",
  },
];

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);

  return (
    <section id="projects" className="relative w-full flex flex-col items-center py-28 px-4 sm:px-6">
      <ScrollSection className="max-w-5xl w-full">
        {/* Section Heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-800 dark:text-white drop-shadow-sm mb-4">
            Featured Works
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-sans text-lg">
            Scroll to explore my latest projects in AI, cybersecurity, and geospatial systems.
          </p>
        </div>

        {/* Stacking Overlay Animation: Cards smoothly overlay on scroll with zero lag */}
        <div className="relative mt-8 z-10 space-y-36 md:space-y-48 pb-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="sticky top-20 md:top-24 pt-2 transform-gpu"
              style={{ zIndex: index + 1 }}
            >
              <ClayCard className="p-6 md:p-8 border-t-8 border-t-white/90 dark:border-t-white/20 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] !bg-[#fdfbf7] dark:!bg-[#0f172a] border border-white/90 dark:border-slate-800">
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${project.color} opacity-20 pointer-events-none rounded-2xl`}
                />

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Top Row: Title, Badge, Description, and Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-800 dark:text-white tracking-tight">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-white/80 dark:bg-white/10 border border-white dark:border-white/20 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm uppercase tracking-widest font-heading">
                          {project.badge}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 font-sans text-sm md:text-base font-medium leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="clay-button px-4 py-2 flex items-center gap-2 group text-xs uppercase tracking-wider"
                        >
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-2xl bg-white/80 dark:bg-white/10 border border-white dark:border-white/20 text-slate-700 dark:text-white font-bold shadow-sm hover:bg-white dark:hover:bg-white/20 transition-all flex items-center gap-2 group text-xs uppercase tracking-wider"
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Architecture Preview Image with interactive click-to-expand */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setSelectedImage({
                        src: project.image,
                        alt: project.imageAlt,
                        title: project.title,
                        badge: project.badge,
                        description: project.description,
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedImage({
                          src: project.image,
                          alt: project.imageAlt,
                          title: project.title,
                          badge: project.badge,
                          description: project.description,
                        });
                      }
                    }}
                    aria-label={`Click to expand architecture diagram for ${project.title}`}
                    className="group/img relative w-full aspect-[2.4/1] sm:aspect-[2.8/1] max-h-[220px] rounded-xl overflow-hidden border border-white/60 dark:border-white/10 bg-slate-950/90 shadow-inner cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffb5a7]"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 950px"
                      className="object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.02]"
                    />

                    {/* Hover Expand Overlay Badge */}
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover/img:opacity-100 transition-all duration-200 transform translate-y-2 group-hover/img:translate-y-0 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold font-heading shadow-xl flex items-center gap-2">
                        <Maximize2 size={13} className="text-[#ffb5a7]" />
                        <span>Click to expand view</span>
                      </div>
                    </div>

                    {/* Subtle corner badge visible at all times */}
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-slate-900/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover/img:text-white group-hover/img:bg-slate-900 transition-all shadow-sm">
                      <Maximize2 size={12} />
                    </div>
                  </div>

                  {/* Problem & Solution Bento Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 p-4 md:p-5 rounded-xl shadow-inner">
                    <div>
                      <span className="text-slate-400 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1 block font-heading">
                        Problem
                      </span>
                      <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium font-sans leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1 block font-heading">
                        Solution
                      </span>
                      <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium font-sans leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/80 dark:bg-white/10 border border-white/80 dark:border-white/20 rounded-full text-[11px] font-bold text-slate-600 dark:text-slate-200 shadow-sm font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ClayCard>
            </div>
          ))}
        </div>
      </ScrollSection>

      {/* Expanded Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </section>
  );
};
