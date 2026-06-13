"use client";

import { useState } from "react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { MouseParallax } from "@/components/ui/MouseParallax";
import { Github, Linkedin, Mail, Instagram, FileText } from "lucide-react";

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
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    _subject: `New Portfolio Message from ${formState.name}`
                })
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
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 px-4">
            <ScrollSection className="max-w-4xl w-full">
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-neon-green text-center mb-16 text-glow-green">
                    &lt;CONTACT_INTERFACE /&gt;
                </h2>

                <MouseParallax strength={-10}>
                    <TerminalWindow title="COMMUNICATION_UPLINK" className="bg-black/90">
                        {status === "sent" ? (
                            <div className="text-center py-10">
                                <p className="text-neon-green text-xl mb-2">TRANSMISSION SUCCESSFUL</p>
                                <p className="text-gray-400">Your message has been securely delivered to my inbox.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-neon-cyan hover:underline text-sm"
                                >
                                    [SEND_ANOTHER]
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-neon-cyan text-xs font-mono mb-2 uppercase">Identity Handle</label>
                                    <input
                                        type="text"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all"
                                        placeholder="ENTER_NAME"
                                    />
                                </div>

                                <div>
                                    <label className="block text-neon-cyan text-xs font-mono mb-2 uppercase">Communication Node (Email)</label>
                                    <input
                                        type="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all"
                                        placeholder="ENTER_EMAIL"
                                    />
                                </div>

                                <div>
                                    <label className="block text-neon-cyan text-xs font-mono mb-2 uppercase">Data Packet (Message)</label>
                                    <textarea
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        required
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all resize-none"
                                        placeholder="ENTER_MESSAGE_CONTENT..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-neon-green/10 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 uppercase tracking-widest font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "ENCRYPTING & SENDING..." : "INITIATE TRANSMISSION"}
                                </button>
                            </form>
                        )}
                    </TerminalWindow>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-8 mt-16">
                        <a href="https://github.com/TharunG2006" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-cyan transition-colors flex flex-col items-center gap-2 group">
                            <Github className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(255,198,255,0.8)]" />
                            <span className="text-xs font-mono tracking-wider">[GITHUB]</span>
                        </a>
                        <a href="https://www.linkedin.com/in/tharun-g-b5b53a260/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-cyan transition-colors flex flex-col items-center gap-2 group">
                            <Linkedin className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(255,198,255,0.8)]" />
                            <span className="text-xs font-mono tracking-wider">[LINKEDIN]</span>
                        </a>
                        <a href="mailto:tarun.ganapathi2007@gmail.com" className="text-gray-500 hover:text-neon-cyan transition-colors flex flex-col items-center gap-2 group">
                            <Mail className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(255,198,255,0.8)]" />
                            <span className="text-xs font-mono tracking-wider">[EMAIL]</span>
                        </a>
                        <a href="https://www.instagram.com/_tharun_2006/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-cyan transition-colors flex flex-col items-center gap-2 group">
                            <Instagram className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(255,198,255,0.8)]" />
                            <span className="text-xs font-mono tracking-wider">[INSTAGRAM]</span>
                        </a>
                        <a href="/Tharun_G_Resume.docx" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-cyan transition-colors flex flex-col items-center gap-2 group">
                            <FileText className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(255,198,255,0.8)]" />
                            <span className="text-xs font-mono tracking-wider">[RESUME]</span>
                        </a>
                    </div>
                </MouseParallax>
            </ScrollSection>
        </section>
    );
};
