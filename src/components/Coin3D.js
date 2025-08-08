import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

export default function Coin3D({ scrollY }) {
  return (
    <div style={{ width: "750px", height: "750px", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />
        <directionalLight position={[-5, -5, -5]} intensity={1.2} />
        <pointLight position={[0, 0, 10]} intensity={1} />

        {/* Ortam ışığı (güzel yansımalar verir) */}
        <Environment preset="sunset" />
        <CoinModel scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
const INITIAL_ROTATION_Y = Math.PI / 2; // 90 derece
function CoinModel({ scrollY }) {
  const coinRef = useRef();
  const gltf = useGLTF("/bitcoin2.glb");

  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.y = scrollY / 100 - INITIAL_ROTATION_Y;
    }
  });

  return (
    <primitive
      ref={coinRef}
      object={gltf.scene}
      //   scale={0.03} // 🔧 küçültme
      position={[0, -0.3, 0]} // 🔧 aşağı alıyoruz
      rotation={[0, 0, 0]}
    />
  );
}
