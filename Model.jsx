import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelComponent = ({ scene }) => {
  const modelRef = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "./src/hero-model/Steklo.jsx", // Замените на путь к вашей 3D модели
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );
  }, [scene]);

  return null;
};

export default ModelComponent;
