"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  geometry,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "torus" | "octahedron" | "sphere";
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15 * speed;
      meshRef.current.rotation.y += delta * 0.2 * speed;
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[0.8, 0.3, 8, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.9, 0]} />;
      case "sphere":
        return <sphereGeometry args={[0.7, 8, 8]} />;
    }
  }, [geometry]);

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {geo}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 80 }: { count?: number }) {
  const geoRef = useRef<THREE.BufferGeometry>(null!);
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useEffect(() => {
    if (geoRef.current) {
      geoRef.current.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    }
  }, [positions]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geoRef} />
      <pointsMaterial
        size={0.03}
        color="#34D399"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function MouseFollower() {
  const { camera } = useThree();

  useFrame(({ pointer }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.3, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <FloatingShape position={[-4, 2, -2]} geometry="icosahedron" color="#059669" speed={0.8} />
        <FloatingShape position={[4, -1, -3]} geometry="torus" color="#D97706" speed={1.2} />
        <FloatingShape position={[-2, -2, -1]} geometry="octahedron" color="#34D399" speed={0.6} />
        <FloatingShape position={[3, 2.5, -4]} geometry="sphere" color="#F59E0B" speed={1} />
        <FloatingShape position={[0, 3, -5]} geometry="icosahedron" color="#059669" speed={0.5} />

        <Particles count={100} />
        <MouseFollower />
      </Canvas>
    </div>
  );
}
