"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

// Brand Colors
const NAVY_BLUE = "#0B1E45";
const GOLD = "#F0A500";

// Generate points for a world map-like distribution
function generateWorldMapPoints(count: number) {
    const points = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        // Create a more concentrated distribution around "continents"
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        // Add some clustering to simulate continents
        const cluster = Math.floor(Math.random() * 6);
        const clusterOffsets = [
            { theta: 0, phi: Math.PI / 2 }, // North America
            { theta: Math.PI / 6, phi: Math.PI / 2 }, // Europe
            { theta: Math.PI / 3, phi: Math.PI / 2.5 }, // Asia
            { theta: -Math.PI / 4, phi: Math.PI / 1.8 }, // South America
            { theta: Math.PI / 2, phi: Math.PI / 2.2 }, // Africa
            { theta: Math.PI * 1.2, phi: Math.PI / 1.5 }, // Australia
        ];

        const offset = clusterOffsets[cluster];
        const finalTheta = theta * 0.3 + offset.theta;
        const finalPhi = phi * 0.3 + offset.phi;

        const radius = 2.5;
        const x = radius * Math.sin(finalPhi) * Math.cos(finalTheta);
        const y = radius * Math.sin(finalPhi) * Math.sin(finalTheta);
        const z = radius * Math.cos(finalPhi);

        points[i * 3] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;
    }
    return points;
}

// Floating document/passport icon
function FloatingDocument({ position, delay }: { position: [number, number, number]; delay: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[0.3, 0.4, 0.05]} />
            <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.5} />
        </mesh>
    );
}

// Floating Graduation Cap (for study abroad)
function FloatingGraduationCap({ position, delay }: { position: [number, number, number]; delay: number }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + delay) * 0.25;
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.3 + delay;
        }
    });

    return (
        <group ref={groupRef} position={position}>
            {/* Cap base (flat square) */}
            <mesh position={[0, 0.1, 0]}>
                <boxGeometry args={[0.4, 0.02, 0.4]} />
                <meshStandardMaterial color={NAVY_BLUE} emissive={NAVY_BLUE} emissiveIntensity={0.3} />
            </mesh>
            {/* Cap top (small pyramid) */}
            <mesh position={[0, 0, 0]}>
                <coneGeometry args={[0.15, 0.15, 4]} />
                <meshStandardMaterial color={NAVY_BLUE} emissive={NAVY_BLUE} emissiveIntensity={0.3} />
            </mesh>
            {/* Tassel */}
            <mesh position={[0.15, 0.1, 0]}>
                <sphereGeometry args={[0.03, 8, 8]} />
                <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.8} />
            </mesh>
        </group>
    );
}

// Floating Book (for study abroad)
function FloatingBook({ position, delay }: { position: [number, number, number]; delay: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.2;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2 + delay) * 0.1;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[0.25, 0.35, 0.08]} />
            <meshStandardMaterial color={NAVY_BLUE} emissive={NAVY_BLUE} emissiveIntensity={0.4} />
        </mesh>
    );
}

// Animated connection line between two points
function ConnectionLine({ start, end, progress }: { start: THREE.Vector3; end: THREE.Vector3; progress: number }) {
    const points = useMemo(() => {
        const curve = new THREE.QuadraticBezierCurve3(
            start,
            new THREE.Vector3(
                (start.x + end.x) / 2,
                (start.y + end.y) / 2 + 1,
                (start.z + end.z) / 2
            ),
            end
        );
        return curve.getPoints(50);
    }, [start, end]);

    const visiblePoints = points.slice(0, Math.floor(points.length * progress));

    if (visiblePoints.length < 2) return null;

    return (
        <Line
            points={visiblePoints}
            color={NAVY_BLUE}
            lineWidth={1}
            transparent
            opacity={0.6}
        />
    );
}

// Location marker
function LocationMarker({ position }: { position: THREE.Vector3 }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={1} />
        </mesh>
    );
}

export default function WorldMap(props: any) {
    const groupRef = useRef<THREE.Group>(null);
    const worldPoints = useMemo(() => generateWorldMapPoints(3000), []);
    const progressRef = useRef(0);

    // Define key locations (immigration destinations)
    const locations = useMemo(() => [
        new THREE.Vector3(1.5, 0.8, 1.5),   // North America
        new THREE.Vector3(-0.5, 0.5, 2.3),  // Europe
        new THREE.Vector3(-1.8, 0.3, 1.5),  // Asia
        new THREE.Vector3(1.2, -1.5, 1.2),  // Australia
    ], []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slow rotation
            groupRef.current.rotation.y += delta * 0.1;

            // Smooth mouse interaction
            const targetRotationY = state.pointer.x * 0.3;
            const targetRotationX = -state.pointer.y * 0.3;

            groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y % (Math.PI * 2)) * delta * 0.5;
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, delta * 0.5);
        }

        // Animate connection lines
        progressRef.current = (Math.sin(state.clock.elapsedTime * 0.5) + 1) / 2;
    });

    return (
        <group {...props}>
            <group ref={groupRef}>
                {/* World Map Points */}
                <Points positions={worldPoints} stride={3} frustumCulled={false}>
                    <PointMaterial
                        transparent
                        color={NAVY_BLUE}
                        size={0.015}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.8}
                    />
                </Points>

                {/* Location Markers */}
                {locations.map((pos, i) => (
                    <LocationMarker key={i} position={pos} />
                ))}

                {/* Connection Lines between locations */}
                <ConnectionLine start={locations[0]} end={locations[1]} progress={progressRef.current} />
                <ConnectionLine start={locations[1]} end={locations[2]} progress={progressRef.current} />
                <ConnectionLine start={locations[2]} end={locations[3]} progress={progressRef.current} />
                <ConnectionLine start={locations[3]} end={locations[0]} progress={progressRef.current} />

                {/* Floating Documents */}
                <FloatingDocument position={[2, 1, 0]} delay={0} />
                <FloatingDocument position={[-2, 0.5, 1]} delay={1} />
                <FloatingDocument position={[0, -1.5, 2]} delay={2} />

                {/* Floating Graduation Caps (Study Abroad) */}
                <FloatingGraduationCap position={[-1.5, 1.2, 0.5]} delay={0.5} />
                <FloatingGraduationCap position={[1.8, -0.8, 1.5]} delay={1.5} />

                {/* Floating Books (Study Abroad) */}
                <FloatingBook position={[0.5, 1.5, 1.8]} delay={0.8} />
                <FloatingBook position={[-1.2, -1, 1.2]} delay={2.2} />
                <FloatingBook position={[2.2, 0.3, -0.5]} delay={1.2} />
            </group>

            {/* Ambient particles for depth */}
            <Points positions={generateWorldMapPoints(500)} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={GOLD}
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.3}
                />
            </Points>
        </group>
    );
}
