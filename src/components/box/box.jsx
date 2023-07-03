import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, light;

    const init = () => {
      // Создание сцены
      scene = new THREE.Scene();

      // Создание камеры
      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.offsetWidth / containerRef.current.offsetHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Создание рендерера
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      // Создание источника света
      light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 0, 2);
      scene.add(light);

      // Загрузка модели
      const loader = new GLTFLoader();
      loader.load(
        "./Model3.gltf",
        (gltf) => {
          scene.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error("Error loading model:", error);
        }
      );

      // Анимация
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    return () => {
      //   renderer.dispose();
      renderer.render(scene, camera, renderer, light);
    };
  }, []);

  return (
    <canvas ref={containerRef} style={{ width: "500px", height: "500px" }} />
  );
};

export default Model;
