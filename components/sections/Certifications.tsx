"use client";

import { motion } from "framer-motion";
import { ClayCard } from "@/components/ui/ClayCard";
import { Award } from "lucide-react";

const certifications = [
    // AI/ML & Cloud
    { title: "AWS AI & ML Scholar — 2026 Challenge Completion", issuer: "Udacity", date: "2026" },
    { title: "AWS Scholars: Analyze Data using AI with PartyRock", issuer: "Udacity", date: "2026" },
    { title: "AWS Scholars: Build Your First AI Productivity App", issuer: "Udacity", date: "2026" },
    // Cybersecurity
    { title: "Cybersecurity Bootcamp: Software Security & Vulnerability Assessment", issuer: "IIITDM Kancheepuram", date: "2026" },
    { title: "APISEC|CON FEB 2026 — API Security Training", issuer: "APIsec University", date: "2026" },
    // NPTEL Elite Certifications
    { title: "Introduction to Internet of Things (IoT) — Elite", issuer: "IIT Kharagpur (NPTEL)", date: "2025" },
    { title: "Technical English for Engineers — Elite", issuer: "IIT Madras (NPTEL)", date: "2025" },
    { title: "The Joy of Computing using Python — Elite", issuer: "IIT Madras (NPTEL)", date: "2025" },
    // Hackathons & Competitions
    { title: "MythX: National-Level Cybersecurity CTF Challenge", issuer: "KIET Group of Institutions", date: "2026" },
    { title: "SMART MAKE-A-THON, SMART Maker Festival 2024", issuer: "IEM", date: "2024" },
    { title: "CodeHub Inter-College Competition, KRIYA 2025", issuer: "PSG College of Technology", date: "2025" },
    { title: "Tata Imagination Challenge 2025", issuer: "Unstop", date: "2025" },
];

export const Certifications = () => {
    // Duplicate the array to create a seamless infinite loop
    const duplicatedCerts = [...certifications, ...certifications];

    return (
        <section className="relative w-full py-24 overflow-hidden bg-white/20 dark:bg-slate-900/20 border-y border-white/40 dark:border-slate-800/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-10">
                <h2 className="text-4xl font-heading font-extrabold text-slate-800 dark:text-white drop-shadow-sm mb-4">
                    Licenses & Certifications
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-sans text-lg">Continuous learning and professional verification.</p>
            </div>

            <div className="relative flex overflow-x-hidden w-full group">
                {/* Left Gradient Mask */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fdfbf7] dark:from-[#0f172a] to-transparent z-10 pointer-events-none" />
                
                <motion.div
                    className="flex gap-6 py-4 px-4 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed here
                    }}
                >
                    {duplicatedCerts.map((cert, index) => (
                        <ClayCard 
                            key={`${cert.title}-${index}`} 
                            className="w-[300px] md:w-[350px] shrink-0 p-6 flex flex-col justify-center items-start"
                            hoverScale
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a3cfcd] to-[#fcd5ce] flex items-center justify-center text-white mb-4 shadow-inner">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-white mb-2 leading-tight">
                                {cert.title}
                            </h3>
                            <div className="flex justify-between items-center w-full mt-auto">
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{cert.issuer}</span>
                                <span className="text-xs font-bold px-2 py-1 bg-white/60 dark:bg-slate-800 border border-white dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300">
                                    {cert.date}
                                </span>
                            </div>
                        </ClayCard>
                    ))}
                </motion.div>

                {/* Right Gradient Mask */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fdfbf7] dark:from-[#0f172a] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};
