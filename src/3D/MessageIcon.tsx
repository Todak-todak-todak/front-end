import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

export default function MessageIcon() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 50,
      }}
    >
      <ambientLight intensity={1.5} /> {/* 전체적인 밝기 조절 */}
      <directionalLight position={[5, 2, 5]} intensity={1.5} />{' '}
      {/* 특정 방향에서 오는 빛 */}
      <Suspense fallback={null}>
        <MessageModel />
      </Suspense>
      <OrbitControls
        enableZoom={false} // 확대/축소 가능
        enablePan={false} // 카메라 이동(패닝) 비활성화 (모델이 중앙에 고정되도록)
        minPolarAngle={Math.PI / 2} // 카메라가 수평 아래로 내려가지 않도록 (정면 이하로)
        maxPolarAngle={Math.PI / 2} // 카메라가 수평 위로 올라가지 않도록 (정면 이상으로)
        minAzimuthAngle={-Math.PI / 4} // 좌우 회전 각도 제한 (원하는 만큼)
        maxAzimuthAngle={Math.PI / 4} // 좌우 회전 각도 제한 (원하는 만큼)
        // 여기에 타겟을 설정하여 카메라가 특정 지점을 바라보게 할 수 있습니다.
        target={[0, 14, 0]} // OrbitControls가 바라볼 중심점을 [0,0,0]으로 설정
      />
    </Canvas>
  );
}
function MessageModel() {
  const ref = useRef<THREE.Object3D | null>(null);
  const timeRef = useRef(0);
  const { scene } = useGLTF('/models/Message.glb');

  useFrame((_, delta) => {
    timeRef.current += delta;
    if (ref.current) {
      const scale = 20 + Math.sin(timeRef.current * 1.2) * 0.8; // 기본 크기 20에서 ±1.5 진동
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return <primitive ref={ref} object={scene} scale={20} position={[0, 0, 0]} />;
}
