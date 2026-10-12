import { BootLoader } from "@/components/sections/BootLoader";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { CTFSecurity } from "@/components/sections/CTFSecurity";
import { Resumes } from "@/components/sections/Resumes";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground bg-background selection:bg-[#ffb5a7]/30 selection:text-slate-800 dark:selection:text-white">
      {/* Intro Loader Overlay: Caps at 1.5s, visible Skip immediately, checks sessionStorage & prefers-reduced-motion */}
      <BootLoader />

      {/* Primary Floating Cozy Navbar */}
      <Navbar />

      <main id="main-content" className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <CTFSecurity />
        <Resumes />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
