
"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

// Brand Colors
const NAVY_BLUE = "#0B1E45";
const GOLD = "#F0A500"; // The "Orange"

function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

function AirplaneMesh() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Simple airplane silhouette
    s.moveTo(0, 0.5); // Nose
    s.lineTo(0.2, 0.1); // Right wing start
    s.lineTo(0.8, -0.2); // Right wing tip
    s.lineTo(0.2, -0.1); // Right wing back
    s.lineTo(0.1, -0.4); // Tail start
    s.lineTo(0.3, -0.6); // Tail tip
    s.lineTo(0, -0.5); // Tail center
    s.lineTo(-0.3, -0.6); // Left tail tip
    s.lineTo(-0.1, -0.4); // Left tail start
    s.lineTo(-0.2, -0.1); // Left wing back
    s.lineTo(-0.8, -0.2); // Left wing tip
    s.lineTo(-0.2, 0.1); // Left wing start
    s.lineTo(0, 0.5); // Back to nose
    return s;
  }, []);

  return (
    <mesh rotation={[0, 0, -Math.PI / 2]} scale={[0.3, 0.3, 0.3]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial color={NAVY_BLUE} side={THREE.DoubleSide} />
    </mesh>
  );
}

function DynamicTrail({ points }: { points: THREE.Vector3[] }) {
  if (points.length < 2) return null;

  return (
    <Line
      points={points}
      color={NAVY_BLUE}
      lineWidth={2}
      transparent
      opacity={0.8}
    />
  );
}

function OrbitingAirplane({ radius, speed }: { radius: number; speed: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const airplaneRef = useRef<THREE.Group>(null);
  const trailPoints = useRef<THREE.Vector3[]>([]);
  const [points, setPoints] = useState<THREE.Vector3[]>([]);
  const maxTrailLength = 150; // Maximum number of points in the trail
  const frameCounter = useRef(0);
  const pointsPerSecond = 30; // How many trail points to add per second
  const initialized = useRef(false);

  useFrame((state, delta) => {
    if (groupRef.current && airplaneRef.current) {
      // Rotate the entire group to orbit
      groupRef.current.rotation.z -= delta * speed;

      // Add a slight wobble for realism
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + (Math.PI / 3);
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;

      // Calculate airplane's current position in world space
      const airplaneWorldPos = new THREE.Vector3();
      airplaneRef.current.getWorldPosition(airplaneWorldPos);

      // Check if the airplane is in a valid position (not at origin)
      // Wait a bit for the scene to initialize properly
      if (!initialized.current) {
        if (airplaneWorldPos.length() > 0.1 && state.clock.elapsedTime > 0.1) {
          initialized.current = true;
        } else {
          return; // Skip this frame
        }
      }

      // Only add points at controlled intervals (not every frame)
      frameCounter.current++;
      const framesPerPoint = Math.max(1, Math.floor(60 / pointsPerSecond));

      if (frameCounter.current >= framesPerPoint) {
        frameCounter.current = 0;

        // Add new point to trail
        trailPoints.current.push(airplaneWorldPos.clone());

        // Limit trail length
        if (trailPoints.current.length > maxTrailLength) {
          trailPoints.current.shift();
        }

        // Update points for rendering
        setPoints([...trailPoints.current]);
      }
    }
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 3, 0, 0]}>
      {/* Dynamic Trail Line */}
      <DynamicTrail points={points} />

      {/* The Code-Generated Airplane */}
      <group rotation={[0, 0, Math.PI / 2 + 0.2 + (Math.PI * 1.5)]}>
        <group ref={airplaneRef} position={[radius, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <AirplaneMesh />
        </group>
      </group>
    </group>
  );
}

export default function Globe(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  // Generate points for the minimalist core
  const spherePoints = useMemo(() => generateSpherePoints(8500, 1.6), []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto-rotation of the globe itself
      groupRef.current.rotation.y += delta * 0.02;

      // Mouse interaction (smooth lerp)
      const targetRotationY = state.pointer.x * 0.2;
      const targetRotationX = -state.pointer.y * 0.2;

      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y % (Math.PI * 2)) * delta;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, delta);
    }
  });

  return (
    <group {...props}>
      {/* The Globe */}
      <group ref={groupRef}>
        <Points positions={spherePoints} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color={GOLD} // Orange Globe
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.9}
          />
        </Points>
        {/* Inner Sphere for depth */}
        <mesh>
          <sphereGeometry args={[1.55, 32, 32]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.08} />
        </mesh>
      </group>

      {/* Orbiting Airplane */}
      <OrbitingAirplane radius={2.2} speed={0.5} />
    </group>
  );
}
