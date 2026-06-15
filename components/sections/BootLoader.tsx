"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootLoaderProps {
    onComplete: () => void;
}

export const BootLoader = ({ onComplete }: BootLoaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const completedRef = useRef(false);

    const completeLoading = useCallback(() => {
        if (completedRef.current) return;
        completedRef.current = true;

        setIsExiting(true);
        setTimeout(() => {
            onComplete();
        }, 800);
    }, [onComplete]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + 2;
                if (next >= 100) {
                    clearInterval(interval);
                    completeLoading();
                    return 100;
                }
                return next;
            });
        }, 30);

        const fallback = setTimeout(() => {
            completeLoading();
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(fallback);
        };
    }, [completeLoading]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fdfbf7] overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center justify-center w-full h-full relative">
                        {/* Soft floating blob */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                borderRadius: ["40%", "50%", "40%"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-32 h-32 bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] blur-xl opacity-60 absolute"
                        />

                        {/* Glassmorphism Card */}
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[30px] p-8 md:p-12 flex flex-col items-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative z-10">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-700 font-heading mb-8 drop-shadow-sm">
                                Tharun G
                            </h1>

                            {/* Soft Progress Bar */}
                            <div className="w-48 h-3 bg-white/50 rounded-full overflow-hidden shadow-inner border border-white/60 relative">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#ffb5a7] to-[#a3cfcd] rounded-full"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                            </div>

                            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                                Gathering Thoughts...
                            </p>
                        </div>
                    </div>

                    {/* Subtle Skip Button */}
                    <button
                        onClick={completeLoading}
                        className="absolute bottom-10 text-xs font-bold font-sans text-slate-400 hover:text-[#ffb5a7] transition-all uppercase tracking-wider"
                    >
                        Skip
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
