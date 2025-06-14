
import React from "react";
import { Canvas } from "@react-three/fiber";

function RobotHead() {
  return (
    <group>
      {/* Head */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.5} metalness={0.6} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.4, 0.2, 0.91]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh position={[0.4, 0.2, 0.91]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* Antenna */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="#06b6d4" />
      </mesh>
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>
    </group>
  );
}

const HeroRobot3D: React.FC = () => (
  <div className="relative w-full h-[320px] md:h-[480px] flex items-center justify-center my-8 rounded-3xl overflow-hidden glass-dark border border-purple-900/20 shadow-[0_0_90px_30px_rgba(139,92,246,0.12)]">
    <Canvas
      camera={{ position: [0, 0, 3.2], fov: 40 }}
      className="w-full h-full"
      style={{ background: "linear-gradient(120deg, #1e293b 70%, #8b5cf6 100%)" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      {/* Floating/Spinning Model */}
      <group rotation={[0, 0, 0]}>
        <AnimatedRobot />
      </group>
    </Canvas>
    <span className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
      <span className="text-gradient font-bold text-xl md:text-2xl drop-shadow-lg select-none">[Interactive 3D Robot]</span>
    </span>
  </div>
);

// Simple animation using React state/raf - spins and floats the robot a bit
function AnimatedRobot() {
  const ref = React.useRef<THREE.Group>(null!);
  React.useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.75;
    ref.current.position.y = Math.sin(t * 1.5) * 0.12;
  });
  return <group ref={ref}><RobotHead /></group>;
}

export default HeroRobot3D;
