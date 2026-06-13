"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "#hero" },
        { name: "ABOUT", href: "#about" },
        { name: "SKILLS", href: "#skills" },
        { name: "PROJECTS", href: "#projects" },
        { name: "CONTACT", href: "#contact" },
    ];

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
                scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <a href="#hero" onClick={(e) => handleSmoothScroll(e, "#hero")} className="text-xl font-mono font-bold text-white group">
                    <span className="text-neon-cyan group-hover:text-neon-green transition-colors">&gt;_</span>
                    THARUN
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className="font-mono text-xs tracking-widest text-gray-400 hover:text-neon-cyan transition-colors"
                        >
                            <span className="text-neon-cyan/50 mr-1">0{index + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Navigation (Basic placeholder) */}
                <div className="md:hidden">
                    <button className="text-neon-cyan font-mono text-xs">
                        [ MENU ]
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
