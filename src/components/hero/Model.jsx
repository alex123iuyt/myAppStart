import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF("/Model3.gltf");

  <OrbitControls />;
  return (
    <>
      <group ref={group} {...props} dispose={null} scale={10.8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial005.geometry}
          material={materials["01___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials["03___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial004.geometry}
          material={materials["07___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial002.geometry}
          material={materials["02___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial003.geometry}
          material={materials["08___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial001.geometry}
          material={materials["09___Default"]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/Model3.gltf");
