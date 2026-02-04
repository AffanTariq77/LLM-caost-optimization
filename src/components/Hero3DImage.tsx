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
  const [isMobile, setIsMobile] = useState(false);

  useState(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Partial rotation - oscillates back and forth
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.4;
      // Smooth scale on hover (disabled on mobile)
      const targetScale = (!isMobile && hovered) ? 1.15 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => !isMobile && setHovered(true)}
      onPointerOut={() => !isMobile && setHovered(false)}
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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <div 
      className="w-full h-[400px] sm:h-[500px] md:h-[640px] lg:h-[720px] flex items-center justify-center bg-white"
      style={{ 
        touchAction: isMobile ? 'pan-y' : 'auto',
        pointerEvents: isMobile ? 'none' : 'auto'
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 40 }} 
        style={{ 
          background: 'white',
          touchAction: isMobile ? 'pan-y' : 'auto'
        }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 4, 2]} intensity={0.3} color="#ffffff" />
        <FloatingImage textureUrl= {logo} />
        {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
}
