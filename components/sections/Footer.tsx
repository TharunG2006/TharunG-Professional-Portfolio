"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";

export const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full pt-20 pb-10 px-4 overflow-hidden bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm border-t border-white/30 dark:border-slate-800/50 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                {/* Availability Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-full mb-12">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-widest">
                        Available for new opportunities
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 md:gap-8 mb-16 text-center md:text-left">
                    {/* Brand & Copyright */}
                    <div className="flex flex-col items-center md:items-start justify-center">
                        <div className="text-2xl font-heading font-extrabold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] flex items-center justify-center text-white text-sm shadow-inner">
                                T
                            </div>
                            Tharun G
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm max-w-xs">
                            Building secure, intelligent, and deeply interactive digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start justify-center">
                        <h4 className="font-heading font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-widest text-sm">Navigation</h4>
                        <div className="space-y-3 flex flex-col items-center md:items-start">
                            {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                                <a 
                                    key={link} 
                                    href={`#${link.toLowerCase()}`}
                                    className="text-slate-500 dark:text-slate-400 hover:text-[#ffb5a7] dark:hover:text-[#a3cfcd] font-sans text-sm transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-start justify-center">
                        <h4 className="font-heading font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-widest text-sm">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/TharunG2006" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#ffb5a7] hover:text-white hover:border-[#ffb5a7] dark:hover:bg-[#ffb5a7] transition-all hover:-translate-y-1 shadow-sm">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#a3cfcd] hover:text-white hover:border-[#a3cfcd] dark:hover:bg-[#a3cfcd] transition-all hover:-translate-y-1 shadow-sm">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:tharun@example.com" className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#fcd5ce] hover:text-slate-800 hover:border-[#fcd5ce] dark:hover:bg-[#fcd5ce] transition-all hover:-translate-y-1 shadow-sm">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-slate-400 dark:text-slate-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Tharun G. All rights reserved.
                    </p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 font-bold shadow-sm hover:scale-105 active:scale-95 transition-all"
                    >
                        <span>Back to Top</span>
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                            <ArrowUp size={16} className="group-hover:text-[#ffb5a7] transition-colors" />
                        </motion.div>
                    </button>
                </div>
            </div>
        </footer>
    );
};
