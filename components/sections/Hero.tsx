"use client";

import { motion } from "framer-motion";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { MouseParallax } from "@/components/ui/MouseParallax";
import { MapPin, Briefcase, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen w-full flex items-center relative pt-32 pb-20 overflow-hidden">
      <ScrollSection className="z-10 w-full px-4 md:px-12 lg:px-24">
        <MouseParallax strength={-10}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Side: Text Hub */}
            <div className="flex flex-col items-start text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-full border border-white/60 dark:border-slate-700 shadow-sm"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb5a7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ffb5a7]"></span>
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-xs font-bold tracking-widest uppercase">
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-heading text-slate-800 dark:text-white tracking-tight leading-[1.1] drop-shadow-sm"
              >
                Tharun G
                <br />
                <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffb5a7,#a3cfcd,#a78bfa,#a3cfcd,#ffb5a7)] bg-[length:300%_auto] animate-gradient block mt-2">
                  Cybersecurity | AI/ML | Space &amp; Earth Observation
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
              >
                <p className="text-slate-600 dark:text-slate-300 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mt-4">
                  Third-year CSE student at National Engineering College, building security tooling, satellite-telemetry AI and geospatial systems.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
                className="flex flex-wrap items-center gap-4 pt-4 w-full z-50 pointer-events-auto"
              >
                <a
                  href="#resumes"
                  onClick={(e) => handleSmoothScroll(e, "#resumes")}
                  className="clay-button px-7 py-3.5 text-sm tracking-wider flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>

                <a
                  href="https://github.com/TharunG2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700 text-slate-700 dark:text-white font-bold hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all shadow-sm text-sm tracking-wider flex items-center gap-2"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/tharun-g-b5b53a260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700 text-slate-700 dark:text-white font-bold hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all shadow-sm text-sm tracking-wider flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="mailto:tarun.ganapathi2007@gmail.com"
                  className="px-6 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700 text-slate-700 dark:text-white font-bold hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all shadow-sm text-sm tracking-wider flex items-center gap-2"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </motion.div>
            </div>

            {/* Right Side: Floating Abstract Composition */}
            <div className="relative h-[400px] lg:h-[600px] hidden md:block">
              {/* Main Profile Image Pane */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 lg:w-80 lg:h-[400px] bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl border-4 border-white/80 dark:border-slate-700 rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] rotate-3 overflow-hidden"
              >
                <Image
                  src="/profile.jpg"
                  alt="Tharun Profile"
                  width={320}
                  height={400}
                  priority
                  className="w-full h-full object-cover scale-[1.02]"
                />
                <div className="absolute -bottom-6 -left-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white dark:border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e0fbfc] dark:bg-[#a3cfcd]/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#a3cfcd]" />
                  </div>
                  <span className="font-bold font-heading text-slate-800 dark:text-white">National Eng College</span>
                </div>
                <div className="absolute -top-6 -right-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white dark:border-slate-700 flex items-center gap-3">
                  <span className="font-bold font-heading text-slate-800 dark:text-white">Tamil Nadu, India</span>
                  <div className="w-10 h-10 bg-[#fcd5ce] dark:bg-[#ffb5a7]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#ffb5a7]" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7]/40 dark:from-[#0f172a]/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Decor Sphere */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 left-[20%] w-32 h-32 rounded-full bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] blur-2xl opacity-60 z-0"
              />
            </div>

          </div>
        </MouseParallax>
      </ScrollSection>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-50 pointer-events-auto"
      >
        <a
          href="#projects"
          onClick={(e) => handleSmoothScroll(e, "#projects")}
          className="text-[#a3cfcd] font-bold text-sm tracking-widest font-sans uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#a3cfcd] to-transparent"></div>
        </a>
      </motion.div>
    </section>
  );
};
