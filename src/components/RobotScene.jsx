import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshWobbleMaterial } from '@react-three/drei';

function FuturisticMechanicalCore() {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.8;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.6;
      ringRef.current.rotation.x += delta * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
      {/* Center Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#00FFFF"
          wireframe
          emissive="#00FFFF"
          emissiveIntensity={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Glowing Sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <MeshWobbleMaterial
          color="#FF0080"
          emissive="#FF0080"
          emissiveIntensity={1}
          factor={0.4}
          speed={2}
        />
      </mesh>

      {/* Outer Gyro Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.1, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#9D00FF"
          emissive="#9D00FF"
          emissiveIntensity={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function RobotScene() {
  return (
    <div className="w-full h-full min-h-[280px] md:min-h-[350px] relative rounded-xl overflow-hidden border border-neonCyan/40 bg-gradient-to-b from-[#0c051a]/80 to-[#03030a]/90 backdrop-blur-md">
      {/* Neon Lights & R3F Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FFFF" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#FF0080" />
        <FuturisticMechanicalCore />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>

      {/* HUD Overlay text */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-neonCyan/80 pointer-events-none">
        <span>CORE_STATUS: ONLINE</span>
        <span className="text-hotPink animate-pulse">3D ROBOT CORE OPERATIONAL</span>
      </div>
    </div>
  );
}
