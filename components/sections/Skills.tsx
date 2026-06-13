"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
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
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 px-4 bg-black/50 backdrop-blur-sm">
            <ScrollSection className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-neon-green text-center mb-16 text-glow-green">
                    &lt;SKILL_MATRIX /&gt;
                </h2>

                <MouseParallax strength={-10}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <TerminalWindow title={category} className="h-full bg-black/80 hover:border-white/40 transition-colors duration-300">
                                    <ul className="space-y-2">
                                        {items.map((skill) => (
                                            <li key={skill} className="flex items-center text-gray-300 hover:text-neon-cyan transition-colors">
                                                <span className="text-neon-green mr-2">➜</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </TerminalWindow>
                            </motion.div>
                        ))}
                    </div>
                </MouseParallax>
            </ScrollSection>
        </section>
    );
};
