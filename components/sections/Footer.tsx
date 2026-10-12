"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp, Mail, FileText, Crosshair } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "CTF & Security", href: "#ctf" },
    { name: "Resumes", href: "#resumes" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative w-full pt-20 pb-10 px-4 overflow-hidden bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm border-t border-white/40 dark:border-slate-800/50 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100/60 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-full mb-12 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-widest font-heading">
            Available for new opportunities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 md:gap-8 mb-16 text-center md:text-left">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="text-2xl font-heading font-extrabold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] flex items-center justify-center text-white text-sm shadow-inner font-bold">
                T
              </div>
              <span>Tharun G</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm max-w-xs leading-relaxed">
              Third-year CSE student at National Engineering College. Building security tooling, satellite-telemetry AI and geospatial systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <h4 className="font-heading font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-widest text-sm">
              Navigation
            </h4>
            <div className="space-y-2.5 flex flex-col items-center md:items-start">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 dark:text-slate-400 hover:text-[#ffb5a7] dark:hover:text-[#a3cfcd] font-sans text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <h4 className="font-heading font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-widest text-sm">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/TharunG2006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#ffb5a7] hover:text-white hover:border-[#ffb5a7] dark:hover:bg-[#ffb5a7] transition-all hover:-translate-y-1 shadow-sm"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/tharun-g-b5b53a260/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#a3cfcd] hover:text-white hover:border-[#a3cfcd] dark:hover:bg-[#a3cfcd] transition-all hover:-translate-y-1 shadow-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://tryhackme.com/p/Ragefrost"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TryHackMe Profile (Ragefrost)"
                className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#ffb5a7] hover:text-white hover:border-[#ffb5a7] dark:hover:bg-[#ffb5a7] transition-all hover:-translate-y-1 shadow-sm"
              >
                <Crosshair size={18} />
              </a>
              <a
                href="mailto:tarun.ganapathi2007@gmail.com"
                aria-label="Direct Email"
                className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#fcd5ce] hover:text-slate-800 hover:border-[#fcd5ce] dark:hover:bg-[#fcd5ce] transition-all hover:-translate-y-1 shadow-sm"
              >
                <Mail size={18} />
              </a>
              <a
                href="#resumes"
                aria-label="Targeted Resumes"
                className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#a3cfcd] hover:text-white hover:border-[#a3cfcd] dark:hover:bg-[#a3cfcd] transition-all hover:-translate-y-1 shadow-sm"
              >
                <FileText size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200/70 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tharun G. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 font-bold shadow-sm hover:scale-105 active:scale-95 transition-all text-sm font-heading"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <motion.div
              animate={{ y: [0, -4, 0] }}
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
