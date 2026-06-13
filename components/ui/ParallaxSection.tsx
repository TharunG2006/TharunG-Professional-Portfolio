"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // 0 to 1 ideally, negative for reverse
}

export const ParallaxSection = ({ children, className, speed = 0.5 }: ParallaxSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={cn("relative", className)}>
            <motion.div style={{ y, opacity }}>
                {children}
            </motion.div>
        </div>
    );
};
