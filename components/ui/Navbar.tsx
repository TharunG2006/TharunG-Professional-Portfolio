"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { ResumeModal } from "@/components/ui/ResumeModal";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "CTF", href: "#ctf" },
    { name: "Resumes", href: "#resumes" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-4 w-full z-[100] flex justify-center px-4 transition-all duration-300"
      >
        <div
          className={cn(
            "flex justify-between items-center w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-500",
            scrolled
              ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/80 dark:border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
              : "bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/50 dark:border-slate-800/50"
          )}
        >
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="text-2xl font-heading font-bold text-slate-700 dark:text-white tracking-tight flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffb5a7] to-[#fcd5ce] shadow-inner flex items-center justify-center text-white text-sm font-bold">
              T
            </div>
            <span>Tharun</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-sans font-semibold text-slate-600 dark:text-slate-300 hover:text-[#ffb5a7] dark:hover:text-[#a3cfcd] transition-colors relative group text-sm lg:text-base"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffb5a7] dark:bg-[#a3cfcd] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions: Theme & Resume */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm hover:scale-110 active:scale-95 transition-transform"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Resume Button */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="clay-button hidden sm:flex items-center gap-2 px-5 py-2 text-sm"
              aria-label="Open Resumes"
            >
              <FileText size={16} />
              <span>Resumes</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/50 dark:bg-slate-800/50 border border-white/80 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-[99] p-6 rounded-3xl bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/80 dark:border-slate-800 shadow-2xl flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-heading font-bold text-lg text-slate-700 dark:text-slate-200 hover:text-[#ffb5a7] py-1"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsResumeOpen(true);
            }}
            className="clay-button w-full py-3 text-center flex items-center justify-center gap-2 text-sm"
          >
            <FileText size={16} />
            <span>Targeted Resumes (5)</span>
          </button>
        </div>
      )}

      {/* Render Modal globally */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};
