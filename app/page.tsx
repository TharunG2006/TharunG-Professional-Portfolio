"use client";

import { useState } from "react";
import Scene from "@/components/canvas/Scene";
import { BootLoader } from "@/components/sections/BootLoader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white">
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
            <Scene />

            {/* Scrollable Content Overlay */}
            <div className="relative z-10 w-full">
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="skills"><Skills /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
