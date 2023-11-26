import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Blob from "./Blob";

const BlobCanvas = ({ rotateBlob } ) => {
 

  return (
    <div className="h-screen w-full" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Scene rotateBlob={rotateBlob} />
      </Canvas>
    </div>
  );
};

const Scene = ({ rotateBlob }) => {
  const { camera } = useThree();
  const blobRef = useRef();
  const [rotation, setRotation] = useState(0);

  // Custom easing function (cubic easeInOut)
  const easeInOutCubic = t => (t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2);

  useFrame((state, delta) => {
    if (rotateBlob) {
      // Update camera position to move diagonally around the blob
      const radius = 8.0;
      const rotationSpeed = 0.02; // You can adjust the speed of rotation here
      const targetRotation = 270;

      if (rotation < targetRotation) {
        const deltaRotation = rotationSpeed * (180 / Math.PI); // Convert radians to degrees
        setRotation(rotation + deltaRotation);

        const easedRotation = easeInOutCubic(rotation / targetRotation) * targetRotation;

        const theta = (easedRotation * Math.PI) / 180; // Convert degrees to radians
        const x = radius * Math.sin(theta);
        const z = radius * Math.cos(theta);

        // Smooth zooming out and in
        const zoomFactor = 1 - Math.sin((easedRotation / targetRotation) * Math.PI) * 0.5; // Adjust the zoom factor
        const zoomedRadius = radius * zoomFactor;

        camera.position.set(x, 0, z);
        camera.lookAt(0, 0, 0); // Look at the center of the scene
        camera.zoom = zoomFactor;
        camera.updateProjectionMatrix();
      }
    }
  });

  return (
    <>
      <Blob scale={[2, 2, 2]} />
      <OrbitControls target={[0, 0, 0]} enableZoom={false} />
    </>
  );
};

export default BlobCanvas;
