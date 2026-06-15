"use client";

import { motion } from "framer-motion";

export const LiquidBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
            {/* Soft primary blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-primary-soft to-accent-soft blur-[100px] opacity-60 dark:opacity-50"
            />
            
            {/* Soft secondary blob */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 0.9, 1],
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-secondary-soft to-accent-soft blur-[120px] opacity-40 dark:opacity-40"
            />

            {/* Warm center blob */}
            <motion.div
                animate={{
                    scale: [0.8, 1.1, 0.8],
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-accent-soft to-primary-soft blur-[140px] opacity-40 dark:opacity-40"
            />
            
            {/* Frosted glass overlay to blend it all softly */}
            <div className="absolute inset-0 bg-background/40 dark:bg-background/20 backdrop-blur-[50px] transition-colors duration-500" />
        </div>
    );
};
