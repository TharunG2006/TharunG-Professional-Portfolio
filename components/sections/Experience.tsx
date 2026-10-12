"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Spatial Data Engineering Intern",
    organization: "Thazhal Geospatial",
    date: "June 2026",
    description:
      "Developed comprehensive branch location suitability analysis and geospatial data mapping systems for Federal Bank, leveraging high-resolution GIS layers and spatial evaluation techniques.",
    tech: ["Spatial Data Engineering", "GIS", "Spatial Analysis", "QGIS", "Python"],
  },
  {
    id: 2,
    type: "work",
    title: "Web Development Intern",
    organization: "Prodigy InfoTech",
    date: "August 2025",
    description:
      "Developed responsive, accessible web application components, modern interactive UI patterns, and asynchronous RESTful API integrations.",
    tech: ["Web Development", "React", "JavaScript", "HTML5 / CSS3", "REST APIs"],
  },
  {
    id: 3,
    type: "education",
    title: "B.E. in Computer Science & Engineering",
    organization: "National Engineering College",
    date: "2024 – 2028",
    description:
      "Third-year undergraduate studying core Computer Science principles, Data Structures & Algorithms, Cryptography, and applied AI/ML systems.",
    tech: ["Data Structures", "Algorithms", "Network Security", "Machine Learning"],
  },
];

const TimelineCard = ({ item, index }: { item: (typeof experienceData)[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const slideDistance = isEven ? -200 : 200;
  const rawX = useTransform(scrollYProgress, [0, 0.6], [slideDistance, 0]);
  const x = useSpring(rawX, { stiffness: 100, damping: 25 });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 25 });

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const dotScale = useSpring(rawScale, { stiffness: 200, damping: 20 });

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline Dot */}
      <motion.div
        style={{ scale: dotScale }}
        className="absolute left-[20px] md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-[#fdfbf7] dark:bg-slate-900 border-4 border-white dark:border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center z-20"
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            item.type === "work" ? "bg-[#ffb5a7] text-white" : "bg-[#a3cfcd] text-white"
          }`}
        >
          {item.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
        </div>
      </motion.div>

      {/* Content Card */}
      <div
        className={`w-full md:w-1/2 pl-16 md:pl-0 ${
          isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
        }`}
      >
        <motion.div style={{ x, opacity }}>
          <ClayCard className="p-6 md:p-8" hoverScale>
            <div
              className={`text-sm font-bold tracking-widest uppercase mb-2 ${
                item.type === "work" ? "text-[#ffb5a7]" : "text-[#a3cfcd]"
              }`}
            >
              {item.date}
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-800 dark:text-white mb-1">
              {item.title}
            </h3>
            <h4 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-4">
              {item.organization}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed mb-6">
              {item.description}
            </p>
            <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 border border-white/60 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 font-sans font-semibold text-xs shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </ClayCard>
        </motion.div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative w-full flex flex-col items-center py-32 px-4 overflow-hidden">
      <ScrollSection className="max-w-5xl w-full relative">
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-800 dark:text-white drop-shadow-sm mb-4 transition-colors">
            Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-sans text-lg">My professional and academic journey.</p>
        </div>

        <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto">
          {/* Center Line Track */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2 rounded-full" />

          {/* Animated Drawing Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ffb5a7] via-[#a3cfcd] to-[#a78bfa] md:-translate-x-1/2 rounded-full z-10"
          />

          <div className="space-y-12 md:space-y-24">
            {experienceData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </ScrollSection>
    </section>
  );
};
