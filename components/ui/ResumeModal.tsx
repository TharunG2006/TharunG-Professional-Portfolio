"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";
import { ClayCard } from "@/components/ui/ClayCard";
import { useEffect } from "react";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-5xl h-[90vh] z-[201] flex flex-col"
                    >
                        <ClayCard className="w-full h-full overflow-hidden bg-white/95 dark:bg-slate-900/95 p-0">
                            <div className="flex flex-col w-full h-full p-4 md:p-6">
                                {/* Header */}
                            <div className="flex justify-between items-center mb-6 px-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] flex items-center justify-center text-white shadow-inner">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-slate-800 dark:text-white">Tharun G</h3>
                                        <p className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">Curriculum Vitae</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href="/Tharun_G_Resume.docx" 
                                        download 
                                        className="clay-button hidden md:flex items-center gap-2 px-6 py-2.5 text-sm"
                                    >
                                        <Download size={18} />
                                        <span>Download .docx</span>
                                    </a>
                                    <button 
                                        onClick={onClose}
                                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Resume Viewer/Content */}
                            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">
                                
                                <div className="max-w-3xl mx-auto space-y-12 pb-12">
                                    
                                    {/* Summary section */}
                                    <section>
                                        <h4 className="text-lg font-bold font-heading text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Summary</h4>
                                        <p className="text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                                            A multidisciplinary engineer specializing in Cybersecurity, Artificial Intelligence, and Geospatial Science. Proven ability to architect secure, high-concurrency cloud systems and train bespoke machine learning models. Deeply passionate about building robust software that drives real-world impact and secures digital frontiers.
                                        </p>
                                    </section>

                                    {/* Experience section */}
                                    <section>
                                        <h4 className="text-lg font-bold font-heading text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Experience</h4>
                                        
                                        <div className="space-y-8">
                                            <div className="relative pl-6 border-l-2 border-[#ffb5a7]">
                                                <div className="absolute w-3 h-3 bg-[#ffb5a7] rounded-full -left-[7px] top-1.5" />
                                                <h5 className="text-xl font-bold text-slate-800 dark:text-white font-heading">Remote Sensing Intern</h5>
                                                <p className="text-[#a3cfcd] font-bold text-sm mb-2">Thazhal Geospatial | June 2026</p>
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    Developed comprehensive branch location analysis and geospatial data mapping systems to optimize network expansion and market penetration. Utilized advanced GIS techniques for spatial modeling.
                                                </p>
                                            </div>

                                            <div className="relative pl-6 border-l-2 border-[#a3cfcd]">
                                                <div className="absolute w-3 h-3 bg-[#a3cfcd] rounded-full -left-[7px] top-1.5" />
                                                <h5 className="text-xl font-bold text-slate-800 dark:text-white font-heading">Independent Cybersecurity Researcher</h5>
                                                <p className="text-[#ffb5a7] font-bold text-sm mb-2">Self-Driven Projects | 2024 - Present</p>
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    Actively exploring network vulnerabilities, participating in CTFs, and researching web application security to build robust defense mechanisms.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Education section */}
                                    <section>
                                        <h4 className="text-lg font-bold font-heading text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Education</h4>
                                        <div className="relative pl-6 border-l-2 border-slate-300 dark:border-slate-600">
                                            <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[7px] top-1.5" />
                                            <h5 className="text-xl font-bold text-slate-800 dark:text-white font-heading">B.E. in Computer Science & Engineering</h5>
                                            <p className="text-[#a3cfcd] font-bold text-sm mb-2">University Name | 2024 - 2028</p>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                Core coursework in Data Structures, Algorithms, Cryptography, and Object-Oriented Programming. Active member of technical clubs.
                                            </p>
                                        </div>
                                    </section>

                                    {/* Projects section */}
                                    <section>
                                        <h4 className="text-lg font-bold font-heading text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Projects</h4>
                                        <div className="space-y-8">
                                            <div className="relative pl-6 border-l-2 border-[#ffb5a7]">
                                                <div className="absolute w-3 h-3 bg-[#ffb5a7] rounded-full -left-[7px] top-1.5" />
                                                <h5 className="text-xl font-bold text-slate-800 dark:text-white font-heading">Aegis Toolkit & Prism</h5>
                                                <p className="text-[#a3cfcd] font-bold text-sm mb-2">Cybersecurity & E2E Encryption</p>
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    Developed a comprehensive toolkit for basic security assessments and a state-of-the-art Web Crypto-based encrypted messaging platform.
                                                </p>
                                            </div>

                                            <div className="relative pl-6 border-l-2 border-[#a3cfcd]">
                                                <div className="absolute w-3 h-3 bg-[#a3cfcd] rounded-full -left-[7px] top-1.5" />
                                                <h5 className="text-xl font-bold text-slate-800 dark:text-white font-heading">HireHub & GeoForesight</h5>
                                                <p className="text-[#ffb5a7] font-bold text-sm mb-2">Full-Stack & Cloud Architecture</p>
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    Architected a high-concurrency placement platform using Next.js/DynamoDB, and a remote sensing collaborative research platform with Cloudflare.
                                                </p>
                                            </div>

                                            <div className="relative pl-6 border-l-2 border-[#fcd5ce]">
                                                <div className="absolute w-3 h-3 bg-[#fcd5ce] rounded-full -left-[7px] top-1.5" />
                                                <h5 className="text-xl font-bold text-slate-800 dark:text-white font-heading">Orion AI</h5>
                                                <p className="text-[#a3cfcd] font-bold text-sm mb-2">Machine Learning & NLP</p>
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    Built an advanced, personalized AI assistant engine designed for intelligent automation and proactive task management.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Skills section */}
                                    <section>
                                        <h4 className="text-lg font-bold font-heading text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Technical Skills</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <h5 className="font-bold text-slate-800 dark:text-white mb-2 font-heading">Cybersecurity</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Network Security, Web App Security, Vulnerability Assessment, Threat Modeling, Ethical Hacking</p>
                                            </div>
                                            <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <h5 className="font-bold text-slate-800 dark:text-white mb-2 font-heading">AI / Machine Learning</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Machine Learning, Deep Learning, Computer Vision, Generative AI, Data Preprocessing</p>
                                            </div>
                                            <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <h5 className="font-bold text-slate-800 dark:text-white mb-2 font-heading">Remote Sensing & GIS</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Spatial Analysis, Earth Observation, QGIS / ArcGIS, GDAL, Geospatial Modeling</p>
                                            </div>
                                            <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <h5 className="font-bold text-slate-800 dark:text-white mb-2 font-heading">Development & Tools</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Python, TypeScript, Next.js, Node.js, AWS, Cloudflare, SQL, MongoDB, Git</p>
                                            </div>
                                        </div>
                                    </section>

                                </div>

                                {/* Mobile Download Button */}
                                <div className="md:hidden sticky bottom-4 left-0 w-full flex justify-center mt-8">
                                    <a 
                                        href="/Tharun_G_Resume.docx" 
                                        download 
                                        className="clay-button flex items-center gap-2 px-8 py-4 shadow-xl"
                                    >
                                        <Download size={20} />
                                        <span>Download Full Resume</span>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </ClayCard>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
