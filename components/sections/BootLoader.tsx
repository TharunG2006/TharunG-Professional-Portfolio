"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// --- Types ---
interface BootLoaderProps {
    onComplete: () => void;
}

// --- 3D Components ---
function CozyOrb() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[0, 0, -2]}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#b8c0ff"
                    emissive="#c8b6ff"
                    emissiveIntensity={0.2}
                    roughness={0.1}
                    metalness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

function Fireflies() {
    const pointsRef = useRef<THREE.Points>(null);

    // Generate particles once using useState lazy initializer to satisfy purity rules
    const [particles] = useState(() => {
        const count = 100;
        const arr = new Float32Array(count * 3);
        const random = () => Math.random(); // Local reference
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (random() - 0.5) * 10;
            arr[i * 3 + 1] = (random() - 0.5) * 10;
            arr[i * 3 + 2] = (random() - 0.5) * 10;
        }
        return arr;
    });

    useFrame((state) => {
        if (pointsRef.current) {
            // Gentle floating using time
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#ffd6ff"
                transparent
                opacity={0.6}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </points>
    );
}

function Scene() {
    return (
        <>
            <color attach="background" args={["#0c0a1f"]} />
            <fog attach="fog" args={["#0c0a1f", 2, 8]} />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#e7c6ff" />
            <CozyOrb />
            <Fireflies />
        </>
    );
}

// --- Main Component ---
export const BootLoader = ({ onComplete }: BootLoaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const completedRef = useRef(false);

    const completeLoading = useCallback(() => {
        if (completedRef.current) return;
        completedRef.current = true;

        setIsExiting(true);
        setTimeout(() => {
            onComplete();
        }, 1000); // Slower, relaxed exit
    }, [onComplete]);

    useEffect(() => {
        // Gentle Loading Simulation
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + 1; // Slower, steady pace
                if (next >= 100) {
                    clearInterval(interval);
                    completeLoading();
                    return 100;
                }
                return next;
            });
        }, 30);

        // Max Wait time: 3.5s
        const fallback = setTimeout(() => {
            completeLoading();
        }, 3500);

        return () => {
            clearInterval(interval);
            clearTimeout(fallback);
        };
    }, [completeLoading]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0c0a1f] overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(20px)" }} // Dreamy exit
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {/* 3D Background */}
                    <div className="absolute inset-0 z-0">
                        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
                            <Scene />
                        </Canvas>
                    </div>

                    {/* Aesthetic UI Overlay */}
                    <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
                        {/* Glassmorphism Card */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center shadow-2xl">
                            <h1 className="text-xl md:text-2xl font-light text-white/90 tracking-[0.2em] font-sans mb-6">
                                CYBERNEXUS
                            </h1>

                            {/* Thin Progress Bar */}
                            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-300 to-purple-300"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                            </div>

                            <p className="mt-4 text-[10px] uppercase tracking-widest text-white/40 font-mono">
                                Loading Experience
                            </p>
                        </div>
                    </div>

                    {/* Subtle Skip Button */}
                    <button
                        onClick={completeLoading}
                        className="absolute bottom-8 right-8 z-50 text-[10px] font-sans text-white/20 hover:text-white/80 transition-all uppercase tracking-widest cursor-pointer hover:underline"
                    >
                        Enter System
                    </button>

                </motion.div>
            )}
        </AnimatePresence>
    );
};
