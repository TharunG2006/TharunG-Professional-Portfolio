"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const HolographicCard = ({ children, className, hoverEffect = true }: HolographicCardProps) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { scale: 1.02, y: -5 } : undefined}
            className={cn(
                "relative p-6 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group",
                "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]", // Soft glass shadow
                className
            )}
        >
            {/* Space Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Cyan Border Glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-neon-green/50 transition-colors duration-500" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
