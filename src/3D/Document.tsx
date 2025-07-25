import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

export default function DocumentIcon() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 50,
      }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 2, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <DocumentModel />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={true} target={[0, 18, 0]} />
    </Canvas>
  );
}

function DocumentModel() {
  const ref = useRef<THREE.Object3D | null>(null);
  const { scene } = useGLTF('/models/Document.glb');

  useFrame(({ clock }) => {
    if (ref.current) {
      // Y축: 고정값에 진폭 0.05로 흔들림 추가
      ref.current.rotation.y =
        -Math.PI / 2.3 + Math.sin(clock.elapsedTime * 2) * 0.05;

      // X축 좌우 흔들림 (진폭 0.1 라디안)
      ref.current.rotation.x =
        Math.PI / 1.1 + Math.sin(clock.elapsedTime * Math.PI) * 0.1;

      // Z축 좌우 흔들림 (진폭 0.05 라디안)
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 1.5) * 0.05;

      // 위아래 움직임 유지 (진폭 0.1)
      ref.current.position.y =
        24 + Math.sin(clock.elapsedTime * (Math.PI / 2)) * 0.1;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.55}
      position={[0, 24, 0]} // 기본 위치, useFrame에서 y 위치 변동
      rotation={[Math.PI / 1.1, -Math.PI / 2.3, 0]}
    />
  );
}
