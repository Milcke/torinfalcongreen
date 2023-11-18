"use client"
import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";


import { MathUtils, Mesh, BufferGeometry, ShaderMaterial, NormalBufferAttributes } from "three";
// import vertexShader from "./vertexShader";
// import fragmentShader from "./fragmentShader";


const BlobCanvas = () => {


  return (
    <div style={{ height: "1400px", width:"1400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      <Blob scale={[2, 2, 2]} />
    </Canvas>
  </div>

  );
};

export default BlobCanvas;
