import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Loader from '../Loader';

const NodesNetwork = ({ nodeCount = 35, connectionDistance = 1.6 }) => {
  const groupRef = useRef();
  
  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Generate random node positions inside a sphere
  const nodes = useMemo(() => {
    const temp = [];
    const radius = 2.2;
    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius * Math.cbrt(Math.random()); // distribute evenly inside sphere
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, [nodeCount]);

  // Compute connections (pairs of indices)
  const connections = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < connectionDistance) {
          pairs.push(nodes[i], nodes[j]);
        }
      }
    }
    return pairs;
  }, [nodes, connectionDistance]);

  // slow rotation animation
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.08;
      groupRef.current.rotation.x = time * 0.04;
    }
  });

  // Material and geometry for lines and points
  const pointsGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(nodes);
  }, [nodes]);

  const linesGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(connections);
  }, [connections]);

  return (
    <group ref={groupRef}>
      {/* Node Points */}
      <points geometry={pointsGeometry}>
        <pointsMaterial 
          color="#06b6d4" 
          size={0.08} 
          sizeAttenuation={true} 
          transparent 
          opacity={0.8}
        />
      </points>

      {/* Connection Lines */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.35} 
          linewidth={1} 
        />
      </lineSegments>

      {/* Floating sphere in center */}
      <mesh scale={0.6}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial 
          color="#06b6d4" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>
    </group>
  );
};

const NetworkCanvas = () => {
  // Auto-detect performance capability (mobile vs desktop)
  const isMobile = window.innerWidth < 768;
  const nodeCount = isMobile ? 18 : 35; // Lower count on mobile for performance
  const connectionDistance = isMobile ? 1.9 : 1.6;

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[450px]">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
          <NodesNetwork nodeCount={nodeCount} connectionDistance={connectionDistance} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NetworkCanvas;
