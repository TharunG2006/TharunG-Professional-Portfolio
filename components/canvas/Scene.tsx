"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 10], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    );
}
