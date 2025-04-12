import { useEffect, useState } from 'react';
import Logo from '@assets/images/Splash/MainLogo.svg?react';
import { motion } from 'framer-motion';
import GoogleLoginButton from '@/pages/splash/GoogleLogin';

const MotionLogo = motion(Logo);

const Splash = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogin(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#fdfdfd] flex flex-col items-center justify-center bg-white overflow-hidden relative">
      {/* 로고 애니메이션 */}
      <MotionLogo
        width={230}
        height={230}
        initial={{ y: 0 }}
        animate={{ y: showLogin ? -40 : 0 }}
        transition={{
          duration: 1.4,
          ease: [0.25, 0.1, 0.25, 1],
          type: 'tween',
        }}
        className="z-10"
      />

      {/* 로그인 UI 영역 */}
      {showLogin && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 w-full px-6 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-[7rem] h-px bg-mainBlue shrink-0" />
            <span className="text-[#828282] text-[0.8rem] font-bold font-['Noto_Sans'] text-center">
              간편 로그인
            </span>
            <div className="w-[7rem] h-px bg-mainBlue shrink-0" />
          </div>

          {/* 구글 로그인 버튼 컴포넌트 */}
          <GoogleLoginButton />
        </motion.div>
      )}
    </div>
  );
};

export default Splash;
