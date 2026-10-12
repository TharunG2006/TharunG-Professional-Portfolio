"use client";

import { Download, FileText, Shield, Brain, Globe, Layers, Satellite, CheckCircle } from "lucide-react";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";

export interface ResumeOption {
  id: string;
  title: string;
  category: string;
  fileName: string;
  path: string;
  icon: typeof FileText;
  badge: string;
  badgeColor: string;
  iconBg: string;
  focus: string[];
}

export const resumeOptions: ResumeOption[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Specialist",
    category: "Information Security & AppSec",
    fileName: "Tharun_G_Cybersecurity_Resume.pdf",
    path: "/resumes/Tharun_G_Cybersecurity_Resume.pdf",
    icon: Shield,
    badge: "InfoSec Track",
    badgeColor: "bg-[#ffb5a7]/20 text-[#e07a5f] dark:text-[#ffb5a7]",
    iconBg: "from-[#ffb5a7] to-[#fcd5ce]",
    focus: [
      "GenCyS 2.0 CTF by UST: Prelims Winner & 39th Place in Finals (Trivandrum)",
      "Offensive Security & Web Exploitation (SSRF, JWT, Prototype Pollution)",
      "Autonomous SIEM & SOAR Assistant (Vector, Redpanda, OpenSearch, OCSF)",
      "CTF Handle: ragefrost | Challenge Author: crimsonCTF",
    ],
  },
  {
    id: "aiml",
    title: "AI / ML Engineer",
    category: "Deep Learning & Applied ML",
    fileName: "Tharun_G_AI-ML_Resume.pdf",
    path: "/resumes/Tharun_G_AI-ML_Resume.pdf",
    icon: Brain,
    badge: "AI/ML Track",
    badgeColor: "bg-[#d8b4fe]/20 text-[#9333ea] dark:text-[#d8b4fe]",
    iconBg: "from-[#d8b4fe] to-[#fbcfe8]",
    focus: [
      "PyTorch LSTM Multi-Channel Satellite Telemetry Anomaly Detection",
      "Local-First Hybrid RAG Architectures (FAISS + SQLite FTS5)",
      "Autonomous Agent Triage with LangGraph & Local Llama 3.1",
      "AWS AI & ML Scholar (Udacity 2026 Challenge Completion)",
    ],
  },
  {
    id: "geospatial",
    title: "Geospatial & GIS Specialist",
    category: "Earth Observation & Spatial Analysis",
    fileName: "Tharun_G_Geospatial-GIS_Resume.pdf",
    path: "/resumes/Tharun_G_Geospatial-GIS_Resume.pdf",
    icon: Globe,
    badge: "Geospatial Track",
    badgeColor: "bg-[#a3cfcd]/20 text-[#2b7a78] dark:text-[#a3cfcd]",
    iconBg: "from-[#a3cfcd] to-[#e0fbfc]",
    focus: [
      "Spatial Data Engineering Intern — Thazhal Geospatial",
      "Branch Location Suitability & Geospatial Mapping for Federal Bank",
      "Vector & Raster GIS processing, QGIS, GDAL, GeoPandas",
      "GeoForesight Remote Sensing Research Collaboration Platform",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Software Engineer",
    category: "Modern Web & Cloud Systems",
    fileName: "Tharun_G_Full-Stack_Resume.pdf",
    path: "/resumes/Tharun_G_Full-Stack_Resume.pdf",
    icon: Layers,
    badge: "Full-Stack Track",
    badgeColor: "bg-[#bae6fd]/30 text-[#0284c7] dark:text-[#7dd3fc]",
    iconBg: "from-[#7dd3fc] to-[#bae6fd]",
    focus: [
      "Next.js 16, TypeScript, Tailwind CSS, Node.js",
      "High-concurrency placement architecture with DynamoDB & AWS S3",
      "Client-side encryption with RSA & AES via Web Crypto API",
      "Web Development Intern — Prodigy InfoTech",
    ],
  },
  {
    id: "space-cyber",
    title: "Space & Cyber Systems",
    category: "Satellite Telemetry & Mission Security",
    fileName: "Tharun_G_Space-Cyber_Resume.pdf",
    path: "/resumes/Tharun_G_Space-Cyber_Resume.pdf",
    icon: Satellite,
    badge: "Space-Cyber Track",
    badgeColor: "bg-[#fcd5ce]/30 text-[#d48b7d] dark:text-[#fcd5ce]",
    iconBg: "from-[#fcd5ce] to-[#f8edeb]",
    focus: [
      "Astrovia: Explainable Satellite Anomaly Detection (SIH 2026, Waitlisted)",
      "SatNOGS live telemetry integration & NASA SMAP/MSL validation",
      "Prediction-error attribution & Z-score telemetry residual scoring",
      "Mission-critical telemetry stream security & operational dashboards",
    ],
  },
];

export const Resumes = () => {
  return (
    <section
      id="resumes"
      aria-label="Targeted Resumes"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <ScrollSection>
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/80 dark:border-slate-700 shadow-sm text-xs font-bold text-[#a3cfcd] uppercase tracking-widest mb-4">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-800 dark:text-white drop-shadow-sm mb-4">
            Targeted Resumes
          </h2>
          <p className="text-slate-600 dark:text-slate-300 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            Domain-specific resumes tailored for Cybersecurity, AI/ML, Geospatial, Full-Stack, and Space Systems engineering.
          </p>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeOptions.map((res) => {
            const IconComponent = res.icon;
            return (
              <ClayCard
                key={res.id}
                className="p-7 flex flex-col justify-between"
                hoverScale
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${res.iconBg} flex items-center justify-center text-white shadow-inner`}
                    >
                      <IconComponent size={22} />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full ${res.badgeColor}`}
                    >
                      {res.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-white mb-1">
                    {res.title}
                  </h3>
                  <p className="text-xs font-bold text-[#ffb5a7] dark:text-[#ffb5a7] mb-4">
                    {res.category}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300 font-sans">
                    {res.focus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-[#a3cfcd] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Button */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
                  <a
                    href={res.path}
                    download={res.fileName}
                    className="clay-button w-full text-center flex items-center justify-center gap-2 text-xs py-3 uppercase tracking-wider"
                    aria-label={`Download ${res.title} PDF`}
                  >
                    <Download size={15} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </ClayCard>
            );
          })}

          {/* 6th Card: Master Resume */}
          <ClayCard
            className="p-7 flex flex-col justify-between bg-gradient-to-br from-white/95 via-white/80 to-[#a3cfcd]/20 dark:from-slate-900/95 dark:via-slate-900/80 dark:to-[#a3cfcd]/20 border-2 border-white/80 dark:border-slate-700"
            hoverScale
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffb5a7] via-[#a3cfcd] to-[#fcd5ce] flex items-center justify-center text-white shadow-inner">
                  <FileText size={22} />
                </div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#ffb5a7]/20 text-[#e07a5f] dark:text-[#ffb5a7]">
                  All-in-One
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-white mb-1">
                General Comprehensive CV
              </h3>
              <p className="text-xs font-bold text-[#a3cfcd] mb-4">
                Cross-Disciplinary Engineering Profile
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                Contains complete academic coursework at National Engineering College, full project portfolio across 7 systems, internship work records, and verified credentials.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
              <a
                href="/resumes/Tharun_G_Resume.pdf"
                download="Tharun_G_Resume.pdf"
                className="clay-button w-full text-center flex items-center justify-center gap-2 text-xs py-3 uppercase tracking-wider"
                aria-label="Download Tharun G Complete Master Resume PDF"
              >
                <Download size={15} />
                <span>Download Master PDF</span>
              </a>
            </div>
          </ClayCard>
        </div>
      </ScrollSection>
    </section>
  );
};
