import { motion, useMotionValue, PanInfo } from 'framer-motion';
import React from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) {
  // y 값을 직접 제어하기 위한 MotionValue 생성
  const y = useMotionValue(0);

  // 드래그 중 호출되는 함수
  const handleDrag = (_event: MouseEvent | TouchEvent, info: PanInfo) => {
    // 만약 위로 드래그되고 있다면 (offset.y가 음수)
    if (info.offset.y < 0) {
      // y 값을 0으로 강제 설정하여 위로 올라가지 못하게 고정
      y.set(0);
    }
    // 아래로 드래그되는 경우는 y MotionValue가 자유롭게 움직이도록 둡니다.
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => onClose()} />
          <motion.div
            className="absolute bottom-[4rem] w-full max-w-[470px]
              bg-white rounded-t-2xl p-4 z-50 max-h-[80vh]
              overflow-y-auto shadow-footer"
            drag="y" // Y축 드래그 허용 (위아래)
            style={{ y }} // y MotionValue를 motion.div의 y 속성에 연결
            onDrag={handleDrag} // 드래그 중 y 값 제어
            onDragEnd={(_event, info) => {
              // 아래로 100px 이상 드래그하면 닫기 함수 호출
              if (info.offset.y > 100) {
                onClose();
              } else {
                // 충분히 아래로 드래그되지 않았으면 다시 제자리(y=0)로 돌아오도록 애니메이션
                y.set(0);
              }
            }}
            initial={{ y: '100%' }} // 초기 위치: 화면 아래에 숨겨진 상태
            animate={{ y: 0 }} // 열릴 때 애니메이션: 화면 안으로 올라옴
            exit={{ y: '100%' }} // 닫힐 때 애니메이션: 화면 아래로 다시 내려감
            transition={{ type: 'spring', stiffness: 100, damping: 30 }} // 부드러운 스프링 애니메이션
          >
            <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
            {children}
          </motion.div>
        </>
      )}
    </>
  );
}
