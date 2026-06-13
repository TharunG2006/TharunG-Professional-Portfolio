"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MouseParallaxProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How much it moves. Default 20.
}

export const MouseParallax = ({ children, className, strength = 20 }: MouseParallaxProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Use springs for smooth movement
    const xSpring = useSpring(0, { stiffness: 100, damping: 20 });
    const ySpring = useSpring(0, { stiffness: 100, damping: 20 });

    useEffect(() => {
        // Only add listener on client to avoid huge overhead
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            // Calculate normalized position -0.5 to 0.5
            const x = (e.clientX - innerWidth / 2) / innerWidth;
            const y = (e.clientY - innerHeight / 2) / innerHeight;

            setPosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        xSpring.set(position.x * strength);
        ySpring.set(position.y * strength);
    }, [position, strength, xSpring, ySpring]);

    return (
        <motion.div
            style={{ x: xSpring, y: ySpring }}
            className={cn("relative will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
};
