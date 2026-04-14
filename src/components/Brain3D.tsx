import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function BrainModel() {
  const { scene } = useGLTF("/models/brain.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Smooth Y-axis rotation
      ref.current.rotation.y += 0.008;
      // Gentle floating animation
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={ref} scale={[1.8, 1.8, 1.8]} rotation={[0.15, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/brain.glb");

const Brain3D = () => {
  return (
    <div className="w-full aspect-square max-w-[500px] mx-auto">
      <Canvas
        camera={{ position: [0, 0.3, 4], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#fff5f0" />
        <directionalLight position={[-3, 2, -2]} intensity={0.8} color="#ffd0d0" />
        <pointLight position={[0, 0, 3]} intensity={1.0} color="#ffe0e0" distance={8} />
        <pointLight position={[0, -2, 0]} intensity={0.5} color="#d0a0a0" distance={6} />

        <BrainModel />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default Brain3D;
