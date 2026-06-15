"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { MouseParallax } from "@/components/ui/MouseParallax";

const skills = {
    Cybersecurity: ["Network Security", "Web App Security", "Vulnerability Assessment", "Threat Modeling", "Ethical Hacking"],
    "AI/ML": ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "Data Preprocessing"],
    "Remote Sensing & GIS": ["Spatial Analysis", "Earth Observation", "QGIS / ArcGIS", "GDAL", "Geospatial Modeling"],
    "Dev & Tools": ["Python / TypeScript", "Next.js / Node.js", "AWS / Cloudflare", "SQL / MongoDB", "Git & GitHub"]
};

export const About = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 px-4">
            <ScrollSection className="max-w-6xl w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white drop-shadow-sm mb-4">
                        About &amp; Expertise
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-sans text-lg">A glimpse into my world and what I do.</p>
                </div>

                <MouseParallax strength={-5}>
                    {/* Bento Box Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[auto]">
                        
                        {/* Profile Image - Spans 1 Col, Tall */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="md:col-span-1 md:row-span-2"
                        >
                            <ClayCard className="h-full p-0 flex flex-col overflow-hidden" hoverScale>
                                <div className="w-full flex-1 relative min-h-[240px]">
                                    <img
                                        src="/profile.jpg"
                                        alt="Tharun G"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                                </div>
                                <div className="p-6 pt-2 text-center">
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white font-heading mb-1">Tharun G</h3>
                                    <p className="text-[#ffb5a7] font-sans font-bold text-sm tracking-wide">CSE Undergraduate</p>
                                </div>
                            </ClayCard>
                        </motion.div>

                        {/* Bio / Main Intro - Spans 2 Cols */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                            className="md:col-span-2 lg:col-span-2"
                        >
                            <ClayCard className="h-full flex flex-col justify-center p-8 md:p-10" hoverScale>
                                <p className="leading-relaxed text-slate-600 dark:text-slate-200 font-sans text-lg md:text-xl font-medium mb-6">
                                    I’m a passionate technologist operating at the bleeding edge of innovation. My work resides at the complex intersection of <span className="text-[#ffb5a7] font-bold">Cybersecurity</span>, <span className="text-[#a3cfcd] font-bold">Artificial Intelligence</span>, and <span className="text-[#fcd5ce] font-bold">Geospatial Science (GIS)</span>.
                                </p>
                                <p className="leading-relaxed text-slate-600 dark:text-slate-200 font-sans font-medium text-base md:text-lg">
                                    From developing secure, high-concurrency cloud architectures to training bespoke Machine Learning models that predict and protect, my mission is to build robust software that drives real-world impact. I specialize in engineering highly intelligent, scalable systems that can analyze vast amounts of spatial data while maintaining uncompromising security against sophisticated emerging threats.
                                </p>
                            </ClayCard>
                        </motion.div>

                        {/* Location Badge - Spans 1 Col */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="md:col-span-1"
                        >
                            <ClayCard className="h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-white/60 dark:from-white/10 to-white/40 dark:to-white/5" hoverScale>
                                <div className="text-4xl mb-2">🌍</div>
                                <span className="text-slate-400 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Base of Operations</span>
                                <span className="text-slate-700 dark:text-white font-sans font-bold">Tamil Nadu, India</span>
                            </ClayCard>
                        </motion.div>

                        {/* Skills Bento Cells */}
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 + (index * 0.1) }}
                                className="md:col-span-1 lg:col-span-1"
                            >
                                <ClayCard className="h-full flex flex-col p-6" hoverScale>
                                    <h3 className="text-sm font-heading font-bold text-[#a3cfcd] mb-4 uppercase tracking-wider">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <span key={skill} className="px-3 py-1.5 bg-white/50 dark:bg-white/10 border border-white/60 dark:border-white/20 rounded-md text-slate-600 dark:text-slate-200 font-sans font-semibold text-sm shadow-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </ClayCard>
                            </motion.div>
                        ))}
                    </div>
                </MouseParallax>
            </ScrollSection>
        </section>
    );
};
