import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

export default function MessageIcon() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4], // 카메라를 정면 (X=0, Y=0)으로 놓고 Z축으로 5만큼 떨어뜨려 모델을 바라보게 합니다.
        fov: 50, // Field of View를 조정하여 원근감을 조절할 수 있습니다. (기본값 50)
      }}
    >
      <ambientLight intensity={0.7} /> {/* 전체적인 밝기 조절 */}
      <directionalLight position={[1, 1, 1]} intensity={1.2} />{' '}
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

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={20} // 초기값, 애니메이션에 의해 덮어씌워짐
      position={[0, 0, 0]}
    />
  );
}
