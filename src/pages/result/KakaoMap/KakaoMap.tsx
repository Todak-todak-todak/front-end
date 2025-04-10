import { useEffect, useRef } from 'react';

const KakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      if (!mapRef.current || !window.kakao || !window.kakao.maps) {
        console.error('❌ mapRef 또는 kakao.maps가 없음');
        return;
      }

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      });

      new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(37.5665, 126.978),
      });

      console.log('✅ 지도와 마커 생성 완료');
    };

    if (document.getElementById('kakao-map-script')) {
      if (window.kakao?.maps?.load) {
        window.kakao.maps.load(() => {
          console.log('✅ maps.load 호출됨 (기존 스크립트)');
          loadMap();
        });
      } else {
        console.warn('⚠️ 스크립트는 있지만 kakao.maps.load 없음');
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'kakao-map-script';
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&autoload=false`;
    script.async = true;
    script.onload = () => {
      if (window.kakao?.maps?.load) {
        console.log('✅ SDK 로드 완료, maps.load 실행');
        window.kakao.maps.load(() => {
          loadMap();
        });
      } else {
        console.error('❌ SDK 로딩 후에도 kakao.maps 없음');
      }
    };
    document.head.appendChild(script);
  }, []);

  return <div ref={mapRef} className="w-full h-[300px] rounded-xl shadow" />;
};

export default KakaoMap;
