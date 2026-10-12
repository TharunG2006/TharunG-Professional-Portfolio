"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const tracks = [
    "/bg_music/penguinmusic-future-abstract-219227.mp3",
    "/bg_music/the_mountain-piano-background-487020.mp3"
];

export const AudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [currentTrack, setCurrentTrack] = useState("");

    // Step 1: Pick a random track on mount
    useEffect(() => {
        const timeout = setTimeout(() => {
            setMounted(true);
            setCurrentTrack(tracks[Math.floor(Math.random() * tracks.length)]);
        }, 0);
        return () => clearTimeout(timeout);
    }, []);

    // Step 2: Try to play when the track is ready
    useEffect(() => {
        if (!currentTrack || !audioRef.current) return;

        const handleInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(e => console.log("Audio play failed:", e));
                
                // Cleanup listeners once it plays
                document.removeEventListener("click", handleInteraction);
                document.removeEventListener("keydown", handleInteraction);
                document.removeEventListener("scroll", handleInteraction);
                document.removeEventListener("mousemove", handleInteraction);
            }
        };

        // Try autoplaying immediately
        audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            console.log("Autoplay blocked. Adding invisible interaction listeners...");
            // If blocked, wait for literally ANY interaction
            document.addEventListener("click", handleInteraction);
            document.addEventListener("keydown", handleInteraction);
            document.addEventListener("scroll", handleInteraction);
            document.addEventListener("mousemove", handleInteraction);
        });

        return () => {
            document.removeEventListener("click", handleInteraction);
            document.removeEventListener("keydown", handleInteraction);
            document.removeEventListener("scroll", handleInteraction);
            document.removeEventListener("mousemove", handleInteraction);
        };
    }, [currentTrack]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    if (!mounted) return null;

    return (
        <>
            {currentTrack && (
                <audio ref={audioRef} src={currentTrack} loop muted={isMuted} />
            )}

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/50 backdrop-blur-xl border border-white/80 p-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
                <button 
                    onClick={togglePlay}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 text-slate-600 hover:text-[#ffb5a7] hover:bg-white transition-all shadow-sm active:scale-95"
                    title={isPlaying ? "Pause Music" : "Play Music"}
                >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                    onClick={toggleMute}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 text-slate-600 hover:text-[#a3cfcd] hover:bg-white transition-all shadow-sm active:scale-95"
                    title={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                
                {/* Optional visualizer bars */}
                <div className="flex items-center gap-1 h-4 pr-3 pl-1">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={isPlaying && !isMuted ? {
                                height: ["4px", "16px", "4px"],
                            } : {
                                height: "4px"
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }}
                            className="w-1 bg-gradient-to-t from-[#ffb5a7] to-[#a3cfcd] rounded-full opacity-80"
                        />
                    ))}
                </div>
            </motion.div>
        </>
    );
};
