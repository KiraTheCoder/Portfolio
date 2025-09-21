import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingElements } from './FloatingElements';
import { ParticleField } from './ParticleField';

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff"
          castShadow
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[10, -10, -5]} intensity={0.5} color="#06B6D4" />
        
        {/* Environment */}
        <Environment preset="night" />
        
        <Suspense fallback={null}>
          <FloatingElements />
          <ParticleField />
        </Suspense>
        
        {/* Controls (disabled interaction since it's background) */}
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};