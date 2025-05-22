import { Line } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'; // useFrame is correctly imported
import React, { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

import { generateNetworkData, NetworkConfig, NetworkData } from '@/utils/networkGenerator'; // Adjust path

import InteractiveSphere from './InteractiveSphere';

const networkConfig: NetworkConfig = {
  numSpheres: 30,
  volumeWidth: 8,
  volumeHeight: 6,
  volumeDepth: 8,
  maxConnectionsPerSphere: 3,
  minConnectionDistance: 0.5,
  maxConnectionDistance: 2.5,
  connectionProbability: 0.6,
};

// Helper component for group animation, to be rendered inside Canvas
const GroupLevelAnimator: React.FC<{ groupRef: React.RefObject<THREE.Group> }> = ({ groupRef }) => {
  // This useFrame call is now correctly inside a component that will be a child of Canvas
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05; // Slow rotation
      // groupRef.current.rotation.x += delta * 0.02; // Optional x-axis rotation
    }
  });
  return null; // This component does not render any visible elements itself
};

export function NetworkComposition() {
  const groupRef = useRef<THREE.Group>(null!);

  // Procedurally generate network data and memoize it
  // useMemo is a React hook, its placement here is fine.
  const { spheres, connections } = useMemo((): NetworkData => {
    return generateNetworkData(networkConfig);
  }, []);

  const groupPosition: THREE.Vector3Tuple = [3, 0, 0];

  return (
    <Canvas
      camera={{ position: [0, 0, 12] as THREE.Vector3Tuple, fov: 50 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 7]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="lightblue" />

      <group ref={groupRef} position={groupPosition}>
        {spheres.map((pos, index) => (
          <InteractiveSphere
            key={index}
            position={pos.toArray() as THREE.Vector3Tuple}
            animationSeed={index / spheres.length}
            size={0.2 + Math.random() * 0.2}
            color={new THREE.Color().setHSL(Math.random(), 0.7, 0.7)}
          />
        ))}

        <Suspense fallback={null}>
          {connections.map(([startIndex, endIndex], index) => {
            const startVec = spheres[startIndex];
            const endVec = spheres[endIndex];
            if (!startVec || !endVec) return null;
            return (
              <Line
                key={`line-${index}`}
                points={[startVec, endVec]}
                color="rgba(200, 200, 200, 0.5)"
                lineWidth={1.5}
              />
            );
          })}
        </Suspense>
      </group>

      {/* Render the GroupLevelAnimator component INSIDE the Canvas */}
      <GroupLevelAnimator groupRef={groupRef} />

      {/* <OrbitControls enableZoom={true} /> */}
    </Canvas>
  );
}
