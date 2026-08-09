import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.8} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#1f1f23"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  // Performance optimizations: fallback for mobile & reduced motion
  const isMobile = useMemo(() => typeof window !== 'undefined' && window.innerWidth < 768, []);
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  if (isMobile || prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 p-4 transition-transform duration-300 hover:scale-110 shadow-lg">
        <img 
          src={icon} 
          alt={name || 'skill'} 
          className="w-12 h-12 object-contain" 
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
