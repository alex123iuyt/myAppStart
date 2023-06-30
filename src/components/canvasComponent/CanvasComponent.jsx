import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import BackgroundEffect from "../background-effect/BackgroundEffect";

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    canvasRef.current.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);

      // Обновление сцены для 3D модели
      renderer.clear();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Освободите ресурсы, если это необходимо
    };
  }, []);

  return (
    <div ref={canvasRef}>
      {/* <ModelComponent /> */}
      <BackgroundEffect scene={sceneRef.current} />
    </div>
  );
};

export default CanvasComponent;
