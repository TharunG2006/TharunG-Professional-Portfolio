import { motion } from "framer-motion";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { LampContainer } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";
import { MouseParallax } from "@/components/ui/MouseParallax";

export const Hero = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <LampContainer className="min-h-screen w-full overflow-hidden relative pt-20 sm:pt-0">
            <Meteors number={20} className="absolute inset-0 z-0" />
            <ScrollSection className="z-10 text-center mix-blend-difference w-full">
                <MouseParallax strength={-20}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h2 className="text-neon-cyan/80 font-mono tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
                            Digital Dreamscape
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-mono text-white text-glow-cyan mb-6 relative z-50 mt-4 sm:mt-8 tracking-tight leading-tight sm:leading-none"
                    >
                        THARUN G
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="relative"
                    >
                        <p className="text-base sm:text-lg md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
                            <span className="text-neon-cyan">&lt;</span>
                            Cybersecurity  •  AI/ML Engineering  •  Remote Sensing & GIS
                            <span className="text-neon-cyan">/&gt;</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-50 pointer-events-auto"
                    >
                        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="px-6 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 font-mono text-sm uppercase tracking-wider">
                            [ VIEW_PROJECTS ]
                        </a>
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="px-6 py-3 bg-transparent border border-gray-500 text-gray-300 hover:border-neon-green hover:text-neon-green transition-all duration-300 font-mono text-sm uppercase tracking-wider">
                            [ INITIATE_CONTACT ]
                        </a>
                    </motion.div>
                </MouseParallax>
            </ScrollSection>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="relative mt-20 animate-bounce z-50"
            >
                <span className="text-neon-blue text-xs font-mono tracking-widest">SCROLL TO EXPLORE</span>
            </motion.div>
        </LampContainer>
    );
};
