"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Maximize2 } from "lucide-react";
import { useEffect } from "react";

export interface LightboxImage {
  src: string;
  alt: string;
  title: string;
  badge?: string;
  description?: string;
}

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: LightboxImage | null;
}

export const ImageLightboxModal = ({
  isOpen,
  onClose,
  image,
}: ImageLightboxModalProps) => {
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

  if (!image) return null;

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
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[300]"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-5xl h-auto max-h-[92vh] z-[301] flex flex-col min-h-0"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <div className="clay-card relative w-full h-full flex flex-col bg-[#fdfbf7] dark:bg-[#0f172a] backdrop-blur-2xl border-2 border-white/80 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden min-h-0">
              
              {/* Header */}
              <div className="shrink-0 relative z-20 flex justify-between items-center p-4 sm:p-5 border-b border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md">
                <div className="flex items-center gap-3 pr-2 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] flex items-center justify-center text-white shadow-inner font-bold shrink-0">
                    <Maximize2 size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        id="lightbox-title"
                        className="text-lg sm:text-xl font-heading font-extrabold text-slate-800 dark:text-white truncate"
                      >
                        {image.title}
                      </h3>
                      {image.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-200">
                          {image.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      Architecture & System Architecture Diagram
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Open Raw / SVG in New Tab */}
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-3 rounded-full bg-white/80 dark:bg-slate-800/80 border border-white dark:border-slate-700 hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                    title="Open full diagram in new tab"
                  >
                    <ExternalLink size={14} />
                    <span>Open Raw</span>
                  </a>

                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 border border-white dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-rose-500 hover:scale-105 active:scale-95 transition-all shadow-sm"
                    aria-label="Close image preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Expanded Image Viewer Area */}
              <div className="flex-1 min-h-0 overflow-auto p-3 sm:p-5 flex items-center justify-center bg-slate-950/90 relative">
                <div className="relative max-h-[70vh] w-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10 transition-transform duration-200 hover:scale-[1.01]"
                  />
                </div>
              </div>

              {/* Bottom Caption Bar */}
              {image.description && (
                <div className="shrink-0 p-3 sm:p-4 border-t border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <p className="font-medium text-center sm:text-left">
                    {image.description}
                  </p>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 shrink-0">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-white/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-[10px]">ESC</kbd> or click outside to close
                  </span>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
