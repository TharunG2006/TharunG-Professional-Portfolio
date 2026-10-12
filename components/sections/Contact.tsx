"use client";

import { useState } from "react";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { MouseParallax } from "@/components/ui/MouseParallax";
import { Github, Linkedin, Mail, FileText, Crosshair } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/tarun.ganapathi2007@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Message from ${formState.name}`,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center relative py-28 px-4 overflow-hidden">
      <ScrollSection className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Massive Text & Socials */}
          <div className="flex flex-col space-y-12 pr-0 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-800 dark:text-white leading-[1.1] tracking-tight drop-shadow-sm mb-6">
                Let&apos;s build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb5a7] to-[#a3cfcd]">
                  beautiful
                </span>{" "}
                together.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-sans text-xl leading-relaxed">
                Whether it&apos;s a new opportunity, research collaboration, or just a friendly chat about space systems and security—my inbox is always open.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            >
              <div className="flex space-x-6 flex-wrap gap-y-4">
                <a
                  href="https://github.com/TharunG2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-300 hover:text-[#ffb5a7] transition-colors flex flex-col items-center gap-2 group"
                >
                  <div className="p-4 bg-white/40 dark:bg-white/5 rounded-full border border-white/60 dark:border-white/10 shadow-sm group-hover:-translate-y-2 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase font-heading">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/tharun-g-b5b53a260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-300 hover:text-[#a3cfcd] transition-colors flex flex-col items-center gap-2 group"
                >
                  <div className="p-4 bg-white/40 dark:bg-white/5 rounded-full border border-white/60 dark:border-white/10 shadow-sm group-hover:-translate-y-2 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase font-heading">LinkedIn</span>
                </a>

                <a
                  href="mailto:tarun.ganapathi2007@gmail.com"
                  className="text-slate-500 dark:text-slate-300 hover:text-[#ffb5a7] transition-colors flex flex-col items-center gap-2 group"
                >
                  <div className="p-4 bg-white/40 dark:bg-white/5 rounded-full border border-white/60 dark:border-white/10 shadow-sm group-hover:-translate-y-2 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase font-heading">Email</span>
                </a>

                <a
                  href="https://tryhackme.com/p/Ragefrost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-300 hover:text-[#ffb5a7] transition-colors flex flex-col items-center gap-2 group"
                >
                  <div className="p-4 bg-white/40 dark:bg-white/5 rounded-full border border-white/60 dark:border-white/10 shadow-sm group-hover:-translate-y-2 transition-transform">
                    <Crosshair className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase font-heading">TryHackMe</span>
                </a>

                <a
                  href="#resumes"
                  className="text-slate-500 dark:text-slate-300 hover:text-[#a3cfcd] transition-colors flex flex-col items-center gap-2 group"
                >
                  <div className="p-4 bg-white/40 dark:bg-white/5 rounded-full border border-white/60 dark:border-white/10 shadow-sm group-hover:-translate-y-2 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase font-heading">Resumes</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Floating Form Card */}
          <div className="perspective-[1000px] w-full">
            <MouseParallax strength={-15}>
              <motion.div
                initial={{ opacity: 0, rotateY: 15, x: 50 }}
                whileInView={{ opacity: 1, rotateY: -5, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
                className="w-full transform-gpu"
              >
                <ClayCard className="w-full p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-2 border-white/80 dark:border-white/10">
                  {status === "sent" ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-[#a3cfcd]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-10 h-10 text-[#a3cfcd]" />
                      </div>
                      <p className="text-slate-800 dark:text-white font-heading font-bold text-2xl mb-2">Message Sent!</p>
                      <p className="text-slate-500 dark:text-slate-300 font-sans mb-8">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="text-[#ffb5a7] font-bold hover:underline transition-all"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-slate-500 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                          Name
                        </label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                          className="w-full bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 p-4 rounded-xl text-slate-700 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ffb5a7] transition-all resize-none shadow-inner"
                          placeholder="Elena Rostova"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-500 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                          className="w-full bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 p-4 rounded-xl text-slate-700 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ffb5a7] transition-all resize-none shadow-inner"
                          placeholder="elena@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-500 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                          Message
                        </label>
                        <textarea
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          required
                          rows={4}
                          className="w-full bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 p-4 rounded-xl text-slate-700 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ffb5a7] transition-all resize-none shadow-inner"
                          placeholder="Hello Tharun, I'd like to discuss..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="clay-button w-full py-4 text-center mt-4 text-sm uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-transform"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </ClayCard>
              </motion.div>
            </MouseParallax>
          </div>

        </div>
      </ScrollSection>
    </section>
  );
};
