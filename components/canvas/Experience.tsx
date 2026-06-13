"use client";

import { useFrame } from "@react-three/fiber";
import { Sphere, Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
    // Parallax logic
    useFrame((state) => {
        const { x, y } = state.pointer;
        // Smoothly interpolate camera position
        state.camera.position.lerp(
            new THREE.Vector3(x * 5, y * 5, 12), // Increased parallax range for space depth
            0.02
        );
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <color attach="background" args={['#050510']} />
            <ambientLight intensity={0.5} color="#4cc9f0" />
            <pointLight position={[10, 10, 10]} intensity={2} color="#f72585" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#4361ee" />

            {/* Deep Space Starfield */}
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />

            {/* Central Cyber Planet */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[2.5, 64, 64]} position={[0, 0, 0]}>
                    <MeshDistortMaterial
                        color="#1e1b4b"
                        attach="material"
                        distort={0.4} // Strength of distortion
                        speed={2} // Speed of distortion
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
                {/* Wireframe Overlay */}
                <Sphere args={[2.55, 32, 32]} position={[0, 0, 0]}>
                    <meshBasicMaterial
                        color="#4cc9f0"
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </Sphere>

                {/* Orbital Ring 1 */}
                <mesh rotation={[Math.PI / 3, 0, 0]}>
                    <torusGeometry args={[3.8, 0.05, 16, 100]} />
                    <meshBasicMaterial color="#f72585" transparent opacity={0.6} />
                </mesh>

                {/* Orbital Ring 2 */}
                <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
                    <torusGeometry args={[4.5, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#4361ee" transparent opacity={0.4} />
                </mesh>
            </Float>
        </>
    );
};
