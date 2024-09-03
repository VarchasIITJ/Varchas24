import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useState, useRef } from 'react';
import * as THREE from 'three';

function Model({ url, setIsHovering }) {
  const gltf = useLoader(GLTFLoader, url);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const groupRef = useRef();

  useFrame(() => {
    setRotation([rotation[0], rotation[1] - 0.002, rotation[2]]);
  });

  const { raycaster, camera } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      const intersects = raycaster.intersectObject(groupRef.current, true);
      setIsHovering(intersects.length > 0);
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[100, 100, 50]} intensity={1} />
      <directionalLight position={[-100, 100, 50]} intensity={1} />
      <directionalLight position={[100, -100, 50]} intensity={1} />
      <directionalLight position={[-100, -100, 50]} intensity={1} />
      <primitive
        object={gltf.scene}
        rotation={rotation}
      />
    </group>
  );
}

export default function CollegeModel() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Canvas
      style={{ height: '100vh' }}
      color="black"
      className='bg-black'
      camera={{
        far: 50000,
        position: [170, 100, 100],
        rotation: [0, Math.PI / 4, 0],
      }}
      onWheel={(event) => event.stopPropagation()}
    >
      <Model url="assets/clg model8.glb" setIsHovering={setIsHovering} />
      <OrbitControls
        enableZoom={isHovering}
        minDistance={125}
        maxDistance={180}
      />
    </Canvas>
  );
}