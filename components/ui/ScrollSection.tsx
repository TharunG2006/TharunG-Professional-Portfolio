"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollSectionProps {
    children: ReactNode;
    className?: string;
}

export const ScrollSection = ({ children, className }: ScrollSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to the target element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to opacity and scale
    // 0 -> 0.2: Fade in
    // 0.2 -> 0.8: Visible
    // 0.8 -> 1.0: Fade out
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className={className ? `${className} relative` : "relative"}
        >
            {children}
        </motion.div>
    );
};
