import { useEffect, useRef } from 'react';
import './particleSlider.css';

const ParticleSliderComponent = () => {
  const scriptRef1 = useRef(null);
  const scriptRef2 = useRef(null);
  const psRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js';
      scriptRef1.current = script1;
      document.body.appendChild(script1);
      await new Promise((resolve) => script1.onload = resolve);

      const script2 = document.createElement('script');
      script2.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
      scriptRef2.current = script2;
      document.body.appendChild(script2);
      await new Promise((resolve) => script2.onload = resolve);

      init();
    };

    loadScripts();

    return () => {
      if (scriptRef1.current) {
        document.body.removeChild(scriptRef1.current);
      }
      if (scriptRef2.current) {
        document.body.removeChild(scriptRef2.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const init = () => {
    if (window.dat && window.ParticleSlider) {
      const gui = new window.dat.GUI();
      psRef.current = new window.ParticleSlider({
        ptlGap: 1,
        ptlSize: 2,
        width: window.innerWidth,
        height: window.innerHeight,
      });

      gui.add(psRef.current, 'ptlGap').min(0).max(5).step(1).onChange(() => {
        psRef.current.init(true);
      });
      gui.add(psRef.current, 'ptlSize').min(1).max(5).step(1).onChange(() => {
        psRef.current.init(true);
      });
      gui.add(psRef.current, 'restless');
      gui.addColor(psRef.current, 'color').onChange((value) => {
        psRef.current.monochrome = true;
        psRef.current.setColor(value);
        psRef.current.init(true);
      });

      window.addEventListener('mousemove', handleMouseMove);
      updateParticles();
    } else {
      console.error('Libraries not loaded yet.');
    }
  };

  const handleMouseMove = (event) => {
    mouseRef.current.x = event.clientX;
    mouseRef.current.y = event.clientY;
  };

  const updateParticles = () => {
    if (psRef.current && psRef.current.mouse) {
      psRef.current.mouse.x += (mouseRef.current.x - psRef.current.mouse.x) * 0.1;
      psRef.current.mouse.y += (mouseRef.current.y - psRef.current.mouse.y) * 0.1;
      psRef.current.update();
    }
    animationFrameRef.current = requestAnimationFrame(updateParticles);
  };

  return (
    <div id="particle-slider" className='bg-black'>
      <div className="slides">
        <div id="first-slide" className="slide" data-src="data:image/png;base64,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"></div>
      </div>
      <canvas className="draw"></canvas>
    </div>
  );
};

export default ParticleSliderComponent;