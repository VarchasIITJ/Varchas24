import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useState } from 'react';

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame(() => {
    setRotation([rotation[0], rotation[1] - 0.002, rotation[2]]);
  });

  return (
    <group ref={(ref) => {
      if (ref) {
        // Get the model's position
        const modelPosition = ref.position;
        // Position the lights relative to the model's position
        ref.children[1].position.set(modelPosition.x + 100, modelPosition.y + 100, modelPosition.z + 50);
        ref.children[2].position.set(modelPosition.x - 100, modelPosition.y + 100, modelPosition.z + 50);
        ref.children[3].position.set(modelPosition.x + 100, modelPosition.y - 100, modelPosition.z + 50);
        ref.children[4].position.set(modelPosition.x - 100, modelPosition.y - 100, modelPosition.z + 50);
      }
    }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 0]} intensity={1} />
      <directionalLight position={[0, 0, 0]} intensity={1} />
      <directionalLight position={[0, 0, 0]} intensity={1} />
      <directionalLight position={[0, 0, 0]} intensity={1} />
      <primitive
        object={gltf.scene}
        rotation={rotation}
      />
    </group>
  );
}

export default function CollegeModel() {
  return (
    <Canvas 
      style={{ height: '100vh'}}
      color="black"
      className='bg-black'
      camera={{
        far: 50000,
        position: [100, 100,100],
        rotation: [0, Math.PI / 4, 0], 
      }}
      onWheel={(event) => event.stopPropagation()}
    >
      <Model url="assets\clg model6.glb" />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

