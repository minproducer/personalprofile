
"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTheme } from "@/hooks/use-theme";

export function AnimatedSphere({ color = "#8352FD" }) {
  const sphereRef = useRef<any>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  const [sphereColor, setSphereColor] = useState(color);

  // Set mounted state after component mounts to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update color based on theme
  useEffect(() => {
    setSphereColor(theme === "dark" ? "#8352FD" : "#3B82F6");
  }, [theme]);

  // Animate the sphere
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) return null;

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <motion.mesh
        ref={sphereRef}
        animate={{
          y: [0, 0.5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Sphere args={[1, 32, 32]} scale={1.5}>
          <MeshDistortMaterial
            color={sphereColor}
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.5}
          />
        </Sphere>
      </motion.mesh>
    </>
  );
}
