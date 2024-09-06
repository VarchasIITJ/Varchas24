import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/fragment.glsl';
import gsap from 'gsap';
import '../index.css';

const ThreeScene = () => {
  const canvasRef = useRef(null);

  // Define sports and images
  const sports = [
    { name: 'Cricket', image: './public/EventsGallery/first.jpg' },
    { name: 'Basketball', image: './public/EventsGallery/second.jpg' },
    { name: 'Football', image: './public/EventsGallery/third.jpg' },
    { name: 'Lawn Tennis', image: './public/EventsGallery/fourth.jpg' },
    { name: 'Badminton', image: './public/EventsGallery/first.jpg' },
    { name: 'Chess', image: './public/EventsGallery/second.jpg' },
    { name: 'Kabaddi', image: './public/EventsGallery/third.jpg' },
    { name: 'VolleyBall', image: './public/EventsGallery/fourth.jpg' },
    { name: 'Athletics', image: './public/EventsGallery/first.jpg' },
    { name: 'TableTennis', image: './public/EventsGallery/second.jpg' },
    { name: 'Hockey', image: './public/EventsGallery/third.jpg' },
    { name: 'Squash', image: './public/EventsGallery/fourth.jpg' },
    { name: 'BGMI', image: './public/EventsGallery/first.jpg' },
    { name: 'Clash-Royale', image: './public/EventsGallery/second.jpg' },
    { name: 'Valorant', image: './public/EventsGallery/third.jpg' },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 50, 2000);
    camera.position.z = 150;
    camera.fov = 2 * Math.atan(window.innerHeight / 2 / 200) * (180 / Math.PI);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const textures = sports.map(sport => textureLoader.load(sport.image));

    const uniforms = {
      uTime: { value: 0 },
      uTimeline: { value: 0.2 },
      uStartIndex: { value: 0 },
      uEndIndex: { value: 1 },
      uImage1: { value: textures[0] },
      uImage2: { value: textures[1] },
      uImage3: { value: textures[2] },
      uImage4: { value: textures[3] }
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: uniforms,
      transparent: true,
      glslVersion: THREE.GLSL3,
    });

    // Initialize geometry and mesh
    const geometry = new THREE.PlaneGeometry(window.innerWidth / 8, window.innerHeight / 4);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(width / 4, height / 2);
    };

    window.addEventListener("resize", resize);

    const hoverOverLinks = () => {
      const links = document.querySelectorAll(".links a");
      links.forEach((link, i) => {
        link.addEventListener("mouseover", () => {
          uniforms.uTimeline.value = 0.0;
          gsap.to(uniforms.uTimeline, {
            value: 4.0,
            duration: 2,
            onStart: () => {
              uniforms.uStartIndex.value = uniforms.uEndIndex.value;
              uniforms.uEndIndex.value = i;
            }
          });
        });
      });
    };

    hoverOverLinks();

    const animate = () => {
      uniforms.uTime.value += 0.1;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    };
  }, [sports]); // Depend on sports state to update Three.js

  return (
    <div className="app w-full h-screen flex bg-zinc-900 text-white flex-row items-center justify-between">
      <div className="canvas w-1/2 h-2/3 relative flex flex-row items-center justify-center">
        <canvas ref={canvasRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="links flex flex-col gap-10">
          {sports.map((sport, i) => (
            <a
              key={i}
              href="#"
              className="lowercase transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-6xl"
            >
              <small className="text-xl tracking-normal">{`0${i + 1}.`}</small>
              {sport.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeScene;
