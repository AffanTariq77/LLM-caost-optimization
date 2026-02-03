import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import logo from "@/assets/LLMpic.png";


function FloatingImage({ textureUrl }: { textureUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [texture] = useState(() => new THREE.TextureLoader().load(textureUrl));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Partial rotation - oscillates back and forth
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.4;
      // Smooth scale on hover
      const targetScale = hovered ? 1.15 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[2.5, 2.5]} />
      <meshStandardMaterial 
        map={texture} 
        transparent 
        opacity={1}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function Hero3DImage() {
  return (
    <div className="w-full h-[640px] md:h-[720px] flex items-center justify-center bg-white">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} style={{ background: 'white' }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 4, 2]} intensity={0.3} color="#ffffff" />
        <FloatingImage textureUrl= {logo} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
