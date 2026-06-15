"use client";

import { useState } from "react";
import { BootLoader } from "@/components/sections/BootLoader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <main className="relative min-h-screen text-foreground transition-colors duration-300">
      {!bootComplete && <BootLoader onComplete={() => setBootComplete(true)} />}

      <AnimatePresence>
        {bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Navbar />

            {/* Scrollable Content Overlay */}
            <div className="relative z-10 w-full flex flex-col">
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="experience"><Experience /></div>
              <div id="certifications"><Certifications /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
