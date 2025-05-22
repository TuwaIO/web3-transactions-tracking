import { Sphere } from '@react-three/drei';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import React, { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

interface InteractiveSphereProps {
  position: THREE.Vector3Tuple;
  color?: THREE.ColorRepresentation;
  hoverColor?: THREE.ColorRepresentation;
  size?: number;
  animationSeed?: number; // For varied continuous animation
}

const InteractiveSphere: React.FC<InteractiveSphereProps> = ({
  position,
  color = 'mediumpurple',
  hoverColor = 'hotpink',
  size = 0.3,
  animationSeed = 0,
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState<boolean>(false);

  // Store initial position for relative animation
  const initialPosition = useMemo(() => new THREE.Vector3().fromArray(position), [position]);

  // Continuous animation for each sphere
  useFrame((state, delta) => {
    if (meshRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      const speedFactor = 0.3 + animationSeed * 0.4; // Vary speed based on seed
      const amplitudeFactor = 0.05 + animationSeed * 0.1; // Vary amplitude

      // Gentle bobbing/drifting animation
      meshRef.current.position.x =
        initialPosition.x + Math.sin(elapsedTime * speedFactor + animationSeed * Math.PI * 2) * amplitudeFactor;
      meshRef.current.position.y =
        initialPosition.y +
        Math.cos(elapsedTime * speedFactor * 1.2 + animationSeed * Math.PI * 1.5) * amplitudeFactor * 1.5;
      meshRef.current.position.z =
        initialPosition.z + Math.sin(elapsedTime * speedFactor * 0.8 + animationSeed * Math.PI) * amplitudeFactor * 0.8;

      // Hover effect (e.g., scaling)
      const targetScale = hovered ? size * 1.5 : size;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHover(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    setHover(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <Sphere
      ref={meshRef}
      args={[size, 24, 24]} // Slightly fewer segments for performance with more spheres
      // Set initial position via the mesh itself, not a prop, if animating from origin
      // For this setup, initial position is set by the parent group.
      // position={position} // Already handled by the parent group + procedural generation
    >
      <meshStandardMaterial
        color={hovered ? hoverColor : color}
        emissive={hovered ? hoverColor : color}
        emissiveIntensity={hovered ? 0.6 : 0.2}
        roughness={0.4}
        metalness={0.2}
        transparent // If colors have alpha or for smoother look
        opacity={0.9}
      />
    </Sphere>
  );
};

export default InteractiveSphere;
