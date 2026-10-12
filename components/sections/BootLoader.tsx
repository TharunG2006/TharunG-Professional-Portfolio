"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootLoaderProps {
  onComplete?: () => void;
}

const emptySubscribe = () => () => {};

export const BootLoader = ({ onComplete }: BootLoaderProps) => {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [shouldRender, setShouldRender] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const completedRef = useRef(false);

  const completeLoading = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    try {
      sessionStorage.setItem("cybernexus_booted", "1");
    } catch {
      // safe fallback if storage is restricted
    }

    setIsExiting(true);
    setTimeout(() => {
      onComplete?.();
    }, 400);
  }, [onComplete]);

  useEffect(() => {
    if (!isClient) return;

    // Check sessionStorage
    let alreadyBooted = false;
    try {
      if (sessionStorage.getItem("cybernexus_booted") === "1") {
        alreadyBooted = true;
      }
    } catch {
      alreadyBooted = false;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyBooted || prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const renderTimeout = setTimeout(() => {
      setShouldRender(true);
    }, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        completeLoading();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Capped at 1.1s progress + 0.4s exit = 1.5s max
    const startTime = Date.now();
    const duration = 1100;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        completeLoading();
      }
    }, 30);

    const fallback = setTimeout(() => {
      completeLoading();
    }, 1500);

    return () => {
      clearTimeout(renderTimeout);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
      clearTimeout(fallback);
    };
  }, [isClient, completeLoading, onComplete]);

  if (!isClient || !shouldRender) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fdfbf7] dark:bg-[#0f172a] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full relative">
            {/* Soft floating blob */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                borderRadius: ["40%", "50%", "40%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-32 h-32 bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] blur-xl opacity-60 absolute"
            />

            {/* Glassmorphism Card */}
            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700 rounded-[30px] p-8 md:p-12 flex flex-col items-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-white font-heading mb-8 drop-shadow-sm">
                Tharun G
              </h1>

              {/* Soft Progress Bar */}
              <div className="w-48 h-3 bg-white/50 dark:bg-slate-700/50 rounded-full overflow-hidden shadow-inner border border-white/60 dark:border-slate-600 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#ffb5a7] to-[#a3cfcd] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-300 font-sans">
                Gathering Thoughts...
              </p>
            </div>
          </div>

          {/* Skip Button: Immediately visible from start */}
          <button
            onClick={completeLoading}
            className="absolute bottom-10 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 border border-white/80 dark:border-slate-700 text-xs font-bold font-sans text-slate-500 dark:text-slate-300 hover:text-[#ffb5a7] transition-all uppercase tracking-wider shadow-sm"
            aria-label="Skip intro animation"
          >
            Skip Intro (ESC)
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
