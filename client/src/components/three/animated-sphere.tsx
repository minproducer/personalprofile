"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <motion.mesh
      ref={meshRef as any}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Sphere args={[1, 64, 64]}>
        <meshPhongMaterial
          color="hsl(var(--primary))"
          attach="material"
          shininess={60}
          specular={new THREE.Color(0x666666)}
        />
      </Sphere>
    </motion.mesh>
  );
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}