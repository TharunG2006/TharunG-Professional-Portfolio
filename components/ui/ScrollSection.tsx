"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  noScale?: boolean;
}

export const ScrollSection = ({ children, className }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth, lightweight opacity transition without expensive scale recalculation
  const rawOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0.7, 1, 1, 0.7]);
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={className ? `${className} relative` : "relative"}
    >
      {children}
    </motion.div>
  );
};
