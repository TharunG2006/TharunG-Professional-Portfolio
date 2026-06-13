"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HolographicCard } from "@/components/ui/HolographicCard";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { MouseParallax } from "@/components/ui/MouseParallax";

export const About = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative py-12 md:py-20 px-4">
            <ScrollSection className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left: Holographic Profile */}
                <MouseParallax strength={20} className="w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <HolographicCard className="p-0 flex flex-col items-center text-center">
                            <div className="w-full h-64 bg-gradient-to-b from-neon-green/20 to-transparent relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-56 h-56 rounded-full border-2 border-neon-green shadow-[0_0_20px_rgba(0,255,65,0.5)] relative overflow-hidden bg-black">
                                        <Image
                                            src="/profile.jpg"
                                            alt="Tharun G"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 w-full">
                                <h3 className="text-2xl font-bold text-white mb-2">Tharun G</h3>
                                <p className="text-neon-cyan font-mono text-sm mb-4">CSE Undergraduate</p>

                                <div className="grid grid-cols-2 gap-4 text-left border-t border-white/10 pt-4">
                                    <div>
                                        <span className="text-gray-400 text-xs block">LEVEL</span>
                                        <span className="text-white font-mono">Student</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 text-xs block">STATUS</span>
                                        <span className="text-neon-green font-mono">Learning</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 text-xs block">LOCATION</span>
                                        <span className="text-white font-mono text-sm">Tirunelveli, Tamil Nadu</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 text-xs block">FOCUS</span>
                                        <span className="text-neon-pink font-mono">Cyber/ML/GIS</span>
                                    </div>
                                </div>
                            </div>
                        </HolographicCard>
                    </motion.div>
                </MouseParallax>

                {/* Right: Bio Terminal */}
                <MouseParallax strength={40} className="w-full">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <TerminalWindow title="USER_BIO.txt">
                            <p className="mb-4 text-gray-300">
                                <span className="text-neon-green">root@cybernexus:~$</span> cat description.txt
                            </p>
                            <p className="mb-4 leading-relaxed">
                                I’m Tharun G, a technologist operating at the intersection of Cybersecurity, AI/ML Engineering, and Remote Sensing & GIS.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                I specialize in building intelligent systems, analyzing spatial data, and ensuring these digital environments remain secure. My mission is to leverage machine learning and geospatial technologies to solve complex problems while fortifying them against emerging threats.
                            </p>
                            <p className="text-neon-cyan animate-pulse">
                                _ Connection established.
                            </p>
                        </TerminalWindow>
                    </motion.div>
                </MouseParallax>

            </ScrollSection>
        </section>
    );
};
