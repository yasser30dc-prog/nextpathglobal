"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WorldMap from "./WorldMap";
import { Suspense } from "react";

export default function HeroScene() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <pointLight position={[-5, -5, -5]} intensity={0.4} color="#F0A500" />
                <Suspense fallback={null}>
                    <WorldMap />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
                </Suspense>
            </Canvas>
        </div>
    );
}
