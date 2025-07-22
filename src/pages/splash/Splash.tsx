import { useEffect, useState } from 'react';
import Logo from '@assets/images/Splash/MainLogo.svg?react';
import { motion } from 'framer-motion';
import GoogleLoginButton from '@/components/feature/splash/GoogleLogin';
import {
  ANIMATION_CONFIG,
  LOGO_ANIMATION,
  LOGIN_ANIMATION,
} from '@/constants/animations';

const MotionLogo = motion(Logo);

const Splash = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setShowLogin(true),
      ANIMATION_CONFIG.LOGO_SHOW_DELAY
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#fdfdfd] flex flex-col items-center justify-center bg-white overflow-hidden relative">
      <MotionLogo
        width={230}
        height={230}
        initial={LOGO_ANIMATION.initial}
        animate={LOGO_ANIMATION.animate(showLogin)}
        transition={LOGO_ANIMATION.transition}
        className="z-10"
      />

      {showLogin && (
        <motion.div
          initial={LOGIN_ANIMATION.initial}
          animate={LOGIN_ANIMATION.animate}
          transition={LOGIN_ANIMATION.transition}
          className="mt-4 w-full px-6 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-[7rem] h-px bg-mainBlue shrink-0" />
            <span className="text-[#828282] text-[0.8rem] font-bold font-['Noto_Sans'] text-center">
              간편 로그인
            </span>
            <div className="w-[7rem] h-px bg-mainBlue shrink-0" />
          </div>

          <GoogleLoginButton />
        </motion.div>
      )}
    </div>
  );
};

export default Splash;
