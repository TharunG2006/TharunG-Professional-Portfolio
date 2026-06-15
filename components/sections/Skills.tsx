"use client";

import { motion } from "framer-motion";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { MouseParallax } from "@/components/ui/MouseParallax";

const skills = {
    Cybersecurity: [
        "Network Security",
        "Web App Security",
        "Vulnerability Assessment",
        "Threat Modeling",
        "Ethical Hacking",
        "Burp Suite / Nmap"
    ],
    "AI/ML Engineering": [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Generative AI",
        "Data Preprocessing",
        "Model Deployment"
    ],
    "Remote Sensing & GIS": [
        "Spatial Analysis",
        "Earth Observation",
        "Satellite Imaging",
        "QGIS / ArcGIS",
        "GDAL",
        "Geospatial Modeling"
    ],
    "Programming & Tools": [
        "Python / TypeScript",
        "Next.js / Node.js",
        "AWS / Cloudflare",
        "SQL / MongoDB",
        "Linux (Kali/Ubuntu)",
        "Git & GitHub"
    ]
};

export const Skills = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 px-4 bg-white/20 backdrop-blur-[2px]">
            <ScrollSection className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-800 text-center mb-16 drop-shadow-sm">
                    Skill Matrix
                </h2>

                <MouseParallax strength={-5}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <ClayCard className="h-full flex flex-col items-center text-center p-6" hoverScale>
                                    <h3 className="text-lg font-heading font-bold text-[#a3cfcd] mb-6 w-full pb-4 border-b border-[#a3cfcd]/30">
                                        {category}
                                    </h3>
                                    <ul className="space-y-3 w-full">
                                        {items.map((skill) => (
                                            <li key={skill} className="flex items-center justify-center text-slate-600 font-sans font-semibold text-sm hover:text-[#ffb5a7] transition-colors">
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </ClayCard>
                            </motion.div>
                        ))}
                    </div>
                </MouseParallax>
            </ScrollSection>
        </section>
    );
};
