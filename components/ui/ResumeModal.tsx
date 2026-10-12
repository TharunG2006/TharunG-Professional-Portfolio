"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { resumeOptions } from "@/components/sections/Resumes";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

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
            className="fixed inset-0 bg-slate-900/50 dark:bg-black/75 backdrop-blur-md z-[200]"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] max-w-4xl h-[88vh] max-h-[88vh] z-[201] flex flex-col min-h-0"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="clay-card relative w-full h-full flex flex-col bg-[#fdfbf7] dark:bg-[#121624] backdrop-blur-2xl border-2 border-white/80 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden min-h-0">
              
              {/* Top subtle highlight */}
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none rounded-t-3xl z-10" />

              {/* Header (fixed at top of modal) */}
              <div className="shrink-0 relative z-20 flex justify-between items-center p-5 sm:p-6 border-b border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] flex items-center justify-center text-white shadow-inner font-bold shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 id="modal-title" className="text-xl font-heading font-extrabold text-slate-800 dark:text-white leading-tight">
                      Curriculum Vitae Downloads
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Choose a domain-tailored resume PDF (5 tracks + 1 master CV)
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 border border-white dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-rose-500 hover:scale-105 active:scale-95 transition-all shadow-sm shrink-0"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Resumes List (flex-1 with min-h-0 and auto-overflow) */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 pb-8 space-y-4 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resumeOptions.map((res) => {
                    const Icon = res.icon;
                    return (
                      <div
                        key={res.id}
                        className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-white/90 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${res.badgeColor}`}>
                              {res.badge}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">PDF • 43 KB</span>
                          </div>
                          <h4 className="text-base font-bold font-heading text-slate-800 dark:text-white flex items-center gap-2 mb-1">
                            <Icon size={16} className="text-[#ffb5a7] shrink-0" />
                            <span>{res.title}</span>
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-sans">
                            {res.category}
                          </p>
                          <ul className="space-y-1.5 mb-4 text-[11px] text-slate-600 dark:text-slate-300">
                            {res.focus.slice(0, 2).map((f, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 leading-snug">
                                <CheckCircle size={12} className="text-[#a3cfcd] shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={res.path}
                          download={res.fileName}
                          className="clay-button text-xs w-full py-2.5 flex items-center justify-center gap-1.5 uppercase tracking-wider"
                        >
                          <Download size={14} />
                          <span>Download PDF</span>
                        </a>
                      </div>
                    );
                  })}
                </div>

                {/* Master General Resume Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-white/95 via-white/85 to-[#a3cfcd]/25 dark:from-slate-900/95 dark:via-slate-900/85 dark:to-[#a3cfcd]/25 border border-white dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 shadow-sm">
                  <div>
                    <div className="text-base font-bold font-heading text-slate-800 dark:text-white">
                      General Comprehensive CV (Master)
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      All-in-one comprehensive overview of all domains, projects, and academic coursework
                    </div>
                  </div>
                  <a
                    href="/resumes/Tharun_G_Resume.pdf"
                    download="Tharun_G_Resume.pdf"
                    className="clay-button text-xs py-2.5 px-6 shrink-0 flex items-center gap-2 uppercase tracking-wider"
                  >
                    <Download size={14} />
                    <span>Download Master PDF</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
