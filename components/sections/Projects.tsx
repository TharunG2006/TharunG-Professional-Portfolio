"use client";

import { motion } from "framer-motion";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Aegis Toolkit",
        badge: "WIP",
        description: "A comprehensive toolkit for cybersecurity professionals.",
        problem: "Lack of unified tools for basic assessments.",
        solution: "Integrated Nmap, hash calc, and encoding tools in one UI.",
        tech: ["Python", "Tkinter", "Nmap"],
        github: "https://github.com/TharunG2006/Cyber-Toolkit",
        demo: "",
        color: "from-[#ffb5a7] to-[#fcd5ce]"
    },
    {
        title: "HireHub",
        badge: "WIP",
        description: "Full-stack placement management platform for campus recruitment.",
        problem: "Placement processes lacked secure, concurrent role-based management.",
        solution: "High-concurrency platform with RBAC, DynamoDB, and E2E encrypted messaging.",
        tech: ["Next.js", "Node.js", "DynamoDB", "AWS S3"],
        github: "https://github.com/AstraDev-Labs/HireHub.git",
        demo: "",
        color: "from-[#a3cfcd] to-[#e0fbfc]"
    },
    {
        title: "Orion AI",
        badge: "WIP",
        description: "An advanced, personalized AI assistant modeled after Jarvis.",
        problem: "Generic AI assistants lack deep personalization and workflow integration.",
        solution: "Custom-built AI engine designed for intelligent automation and proactive task management.",
        tech: ["Python", "Machine Learning", "NLP"],
        github: "https://github.com/AstraDev-Labs/Orion-AI.git",
        demo: "",
        color: "from-[#ffd6ff] to-[#e7c6ff]"
    },
    {
        title: "Prism",
        badge: "Completed",
        description: "State-of-the-art, end-to-end encrypted messaging platform.",
        problem: "Need for true privacy and secure communication without server-side decryption.",
        solution: "Implemented Web Crypto API for client-side RSA/AES encryption with real-time Socket.IO.",
        tech: ["Next.js", "Socket.IO", "MongoDB", "Web Crypto"],
        github: "https://github.com/TharunG2006/Prism",
        demo: "https://prism-woad.vercel.app",
        color: "from-[#fcd5ce] to-[#f8edeb]"
    },
    {
        title: "GeoForesight",
        badge: "Completed",
        description: "Remote Sensing & GIS Intelligence collaborative research platform.",
        problem: "Remote sensing teams lacked a unified platform for publishing and reviewing findings.",
        solution: "Built a collaborative platform with role-aware moderation, threaded comments, and Cloudflare storage.",
        tech: ["Next.js 16", "Cloudflare", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/AstraDev-Labs/GeoInsight",
        demo: "https://www.geoforesight.org/",
        color: "from-[#a3cfcd] to-[#ffb5a7]"
    }
];

export const Projects = () => {
    return (
        <section className="relative w-full flex flex-col items-center py-32 px-4">
            <ScrollSection className="max-w-5xl w-full">
                <div className="text-center mb-24 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-800 dark:text-white drop-shadow-sm mb-4">
                        Featured Works
                    </h2>
                    <p className="text-slate-500 dark:text-slate-300 font-sans text-lg">Scroll to explore my latest projects.</p>
                </div>

                <div className="relative mt-20 z-10 space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <div 
                            key={project.title}
                            className="sticky top-40 pt-4 transform-gpu"
                            style={{ zIndex: index + 1 }}
                        >
                            <div className="w-full">
                                <ClayCard className={`p-8 md:p-12 border-t-8 border-t-white/80 dark:border-t-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:!bg-slate-900/85`}>
                                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${project.color} opacity-20 pointer-events-none rounded-2xl`} />
                                    
                                    <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-800 dark:text-white tracking-tight">
                                                    {project.title}
                                                </h3>
                                                <span className="px-3 py-1 bg-white/60 dark:bg-white/10 border border-white dark:border-white/20 rounded-full text-xs font-bold text-slate-600 dark:text-slate-200 shadow-sm uppercase tracking-widest">
                                                    {project.badge}
                                                </span>
                                            </div>
                                            
                                            <p className="text-slate-600 dark:text-slate-200 font-sans text-lg md:text-xl font-medium mb-8">
                                                {project.description}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 p-6 rounded-2xl shadow-inner">
                                                <div>
                                                    <span className="text-slate-400 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-2 block">Problem</span>
                                                    <p className="text-slate-700 dark:text-white text-sm font-medium">{project.problem}</p>
                                                </div>
                                                <div>
                                                    <span className="text-slate-400 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-2 block">Solution</span>
                                                    <p className="text-slate-700 dark:text-white text-sm font-medium">{project.solution}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech.map(t => (
                                                    <span key={t} className="px-4 py-2 bg-white/60 dark:bg-white/10 border border-white dark:border-white/20 rounded-full text-xs font-bold text-slate-600 dark:text-slate-200 shadow-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-4">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="clay-button px-6 py-4 flex items-center gap-2 group w-full md:w-48 justify-center">
                                                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                    <span>Source Code</span>
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-2xl bg-white/60 dark:bg-white/10 border border-white dark:border-white/20 text-slate-700 dark:text-white font-bold shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white dark:hover:bg-white/20 transition-all flex items-center gap-2 group w-full md:w-48 justify-center text-sm uppercase tracking-widest">
                                                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </ClayCard>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollSection>
        </section>
    );
};
