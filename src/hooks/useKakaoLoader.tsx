import { useEffect } from 'react';

export {};

declare global {
  interface Window {
    kakao: unknown;
  }
}

export const useKakaoLoader = () => {
  useEffect(() => {
    const kakao = window.kakao as { maps?: { load: (cb: () => void) => void } };

    if (kakao?.maps) return;

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&autoload=false`;

    script.async = true;
    script.onload = () => {
      const kakao = window.kakao as {
        maps?: { load: (cb: () => void) => void };
      };
      kakao?.maps?.load(() => {
        console.log('✅ Kakao map loaded');
      });
    };
    document.head.appendChild(script);
  }, []);
};
