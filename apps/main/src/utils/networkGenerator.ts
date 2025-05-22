// src/utils/networkGenerator.ts
import * as THREE from 'three';

export interface NetworkConfig {
  numSpheres: number;
  volumeWidth: number;
  volumeHeight: number;
  volumeDepth: number;
  maxConnectionsPerSphere: number; // Max connections a single sphere can have
  minConnectionDistance: number; // Min distance for spheres to connect
  maxConnectionDistance: number; // Max distance for spheres to connect
  connectionProbability: number; // Chance to connect if distance criteria met (0.0 to 1.0)
}

export interface NetworkData {
  spheres: THREE.Vector3[];
  connections: [number, number][];
}

export function generateNetworkData(config: NetworkConfig): NetworkData {
  const spheres: THREE.Vector3[] = [];
  const connections: [number, number][] = [];
  const connectionCounts: number[] = new Array(config.numSpheres).fill(0);

  // 1. Generate sphere positions
  for (let i = 0; i < config.numSpheres; i++) {
    spheres.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * config.volumeWidth,
        (Math.random() - 0.5) * config.volumeHeight,
        (Math.random() - 0.5) * config.volumeDepth,
      ),
    );
  }

  // 2. Generate connections
  for (let i = 0; i < config.numSpheres; i++) {
    for (let j = i + 1; j < config.numSpheres; j++) {
      // Avoid self-connections and duplicate pairs
      if (
        connectionCounts[i] < config.maxConnectionsPerSphere &&
        connectionCounts[j] < config.maxConnectionsPerSphere
      ) {
        const dist = spheres[i].distanceTo(spheres[j]);
        if (dist > config.minConnectionDistance && dist < config.maxConnectionDistance) {
          if (Math.random() < config.connectionProbability) {
            connections.push([i, j]);
            connectionCounts[i]++;
            connectionCounts[j]++;
          }
        }
      }
    }
  }
  return { spheres, connections };
}
