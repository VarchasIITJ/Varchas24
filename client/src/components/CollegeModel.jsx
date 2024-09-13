import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const CollegeModel = ({ url }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, url);
  const { raycaster } = useThree();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useFrame(() => {
    setRotation([rotation[0], rotation[1] - 0.002, rotation[2]]);
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
        scale={isMobile ? 0.5 : 1}
      />
    </group>
  );
};

const CollegeModelCanvas = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Canvas
      className="canvas"
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 50000,
        position: [110, 60, 50],
        rotation: [0, Math.PI / 4, 0],
      }}
      style={{ height: '100vh' }}
      onWheel={(event) => event.stopPropagation()}
    >
      <Suspense>
        <CollegeModel url="/public/clgmodel10.glb" setIsHovering={setIsHovering} />
        <OrbitControls
          enableZoom={isHovering}
          minDistance={120}
          maxDistance={180}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CollegeModelCanvas;