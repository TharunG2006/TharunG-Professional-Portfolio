"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ClayCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverScale?: boolean;
}

export const ClayCard = ({ children, className, hoverScale = false, ...props }: ClayCardProps) => {
    return (
        <motion.div
            whileHover={hoverScale ? { scale: 1.02, y: -5 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "clay-card p-6 md:p-8 relative overflow-hidden",
                className
            )}
            {...props}
        >
            {/* Optional inner subtle glow */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none rounded-t-3xl" />
            
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};
