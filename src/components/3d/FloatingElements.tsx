import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import { Mesh } from 'three';

export const FloatingElements = () => {
  const sphere1 = useRef<Mesh>(null);
  const sphere2 = useRef<Mesh>(null);
  const box1 = useRef<Mesh>(null);
  const torus1 = useRef<Mesh>(null);
  const octahedron1 = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphere1.current) {
      sphere1.current.rotation.x = time * 0.3;
      sphere1.current.rotation.y = time * 0.2;
    }
    
    if (sphere2.current) {
      sphere2.current.rotation.x = time * -0.2;
      sphere2.current.rotation.z = time * 0.3;
    }
    
    if (box1.current) {
      box1.current.rotation.x = time * 0.4;
      box1.current.rotation.y = time * 0.3;
    }
    
    if (torus1.current) {
      torus1.current.rotation.x = time * 0.5;
      torus1.current.rotation.y = time * -0.2;
    }
    
    if (octahedron1.current) {
      octahedron1.current.rotation.x = time * -0.3;
      octahedron1.current.rotation.y = time * 0.4;
    }
  });

  return (
    <>
      {/* Floating Sphere 1 */}
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphere1} args={[0.6, 32, 32]} position={[-4, 2, -2]}>
          <meshStandardMaterial 
            color="#8B5CF6" 
            metalness={0.8} 
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>

      {/* Floating Sphere 2 */}
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere ref={sphere2} args={[0.4, 32, 32]} position={[4, -1, -1]}>
          <meshStandardMaterial 
            color="#06B6D4" 
            metalness={0.9} 
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Floating Box */}
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <Box ref={box1} args={[0.8, 0.8, 0.8]} position={[3, 3, -3]}>
          <meshStandardMaterial 
            color="#F59E0B" 
            metalness={0.7} 
            roughness={0.3}
            transparent
            opacity={0.7}
          />
        </Box>
      </Float>

      {/* Floating Torus */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={2.5}>
        <Torus ref={torus1} args={[0.5, 0.2, 16, 32]} position={[-3, -2, -2]}>
          <meshStandardMaterial 
            color="#EF4444" 
            metalness={0.6} 
            roughness={0.4}
            transparent
            opacity={0.8}
          />
        </Torus>
      </Float>

      {/* Floating Octahedron */}
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.8}>
        <Octahedron ref={octahedron1} args={[0.7]} position={[2, -3, -4]}>
          <meshStandardMaterial 
            color="#10B981" 
            metalness={0.8} 
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </Octahedron>
      </Float>
    </>
  );
};