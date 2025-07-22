export const ANIMATION_CONFIG = {
  LOGO_SHOW_DELAY: 1800,
  LOGO_OFFSET: -40,
  LOGIN_INITIAL_Y: 30,
};

interface LogoAnimation {
  initial: { y: number };
  animate: (showLogin: boolean) => { y: number };
  transition: {
    duration: number;
    ease: [number, number, number, number];
    type: string;
  };
}

export const LOGO_ANIMATION: LogoAnimation = {
  initial: { y: 0 },
  animate: (showLogin: boolean) => ({
    y: showLogin ? ANIMATION_CONFIG.LOGO_OFFSET : 0,
  }),
  transition: {
    duration: 1.4,
    ease: [0.25, 0.1, 0.25, 1],
    type: 'tween',
  },
};

export const LOGIN_ANIMATION = {
  initial: { opacity: 0, y: ANIMATION_CONFIG.LOGIN_INITIAL_Y },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: 0.6,
    duration: 0.6,
    ease: 'easeOut',
  },
};
