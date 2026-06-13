"use client";

import { motion } from "framer-motion";
import { HolographicCard } from "@/components/ui/HolographicCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { MouseParallax } from "@/components/ui/MouseParallax";

const projects = [
    {
        title: "Aegis Toolkit (WIP)",
        description: "A comprehensive toolkit for cybersecurity professionals.",
        problem: "Lack of unified tools for basic assessments.",
        solution: "Integrated Nmap, hash calc, and encoding tools in one UI.",
        tech: ["Python", "Tkinter", "Nmap"],
        github: "https://github.com/TharunG2006/Cyber-Toolkit",
        demo: ""
    },
    {
        title: "HireHub (WIP)",
        description: "Full-stack placement management platform for campus recruitment.",
        problem: "Placement processes lacked secure, concurrent role-based management.",
        solution: "High-concurrency platform with RBAC, DynamoDB, and E2E encrypted messaging.",
        tech: ["Next.js", "Node.js", "DynamoDB", "AWS S3"],
        github: "https://github.com/AstraDev-Labs/HireHub.git",
        demo: ""
    },
    {
        title: "Orion AI (WIP)",
        description: "An advanced, personalized AI assistant modeled after Jarvis.",
        problem: "Generic AI assistants lack deep personalization and workflow integration.",
        solution: "Custom-built AI engine designed for intelligent automation and proactive task management.",
        tech: ["Python", "Machine Learning", "NLP"],
        github: "https://github.com/AstraDev-Labs/Orion-AI.git",
        demo: ""
    },
    {
        title: "Prism",
        description: "State-of-the-art, end-to-end encrypted messaging platform.",
        problem: "Need for true privacy and secure communication without server-side decryption.",
        solution: "Implemented Web Crypto API for client-side RSA/AES encryption with real-time Socket.IO.",
        tech: ["Next.js", "Socket.IO", "MongoDB", "Web Crypto"],
        github: "https://github.com/TharunG2006/Prism",
        demo: "https://prism-woad.vercel.app"
    },
    {
        title: "GeoForesight",
        description: "Remote Sensing & GIS Intelligence collaborative research platform.",
        problem: "Remote sensing teams lacked a unified platform for publishing and reviewing findings.",
        solution: "Built a collaborative platform with role-aware moderation, threaded comments, and Cloudflare D1/R2 storage.",
        tech: ["Next.js 16", "Cloudflare", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/AstraDev-Labs/GeoInsight",
        demo: "https://www.geoforesight.org/"
    }
];

export const Projects = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 px-4">
            <ScrollSection className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-white text-center mb-16">
                    &lt;PROJECT_LOGS /&gt;
                </h2>

                <MouseParallax strength={-10}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <HolographicCard className="h-full flex flex-col justify-between group cursor-pointer hover:bg-neon-green/5 transition-colors">
                                    <div>
                                        <h3 className="text-xl font-bold text-neon-green mb-2 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-start">
                                                <span className="text-neon-cyan text-xs font-mono w-16 uppercase">Problem:</span>
                                                <span className="text-gray-300 text-xs flex-1">{project.problem}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="text-neon-cyan text-xs font-mono w-16 uppercase">Solution:</span>
                                                <span className="text-gray-300 text-xs flex-1">{project.solution}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase font-mono text-neon-green">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex items-center gap-4 mt-6">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-gray-400 hover:text-neon-cyan transition-colors pointer-events-auto z-10 relative">
                                                [SOURCE_CODE]
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-gray-400 hover:text-neon-cyan transition-colors pointer-events-auto z-10 relative">
                                                [LIVE_DEMO]
                                            </a>
                                        )}
                                    </div>
                                </HolographicCard>
                            </motion.div>
                        ))}
                    </div>
                </MouseParallax>
            </ScrollSection>
        </section>
    );
};
