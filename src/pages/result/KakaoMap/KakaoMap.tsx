import { useEffect, useRef } from 'react';

// any가 eslint가 뜨는데 도저히 처리가 안되네요...좀 더 생각해보겠습니다...일단 잘 작동해서 냅두겠습니다
declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address: string;
}

const KakaoMap = ({ address }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      if (!mapRef.current || !window.kakao || !window.kakao.maps) return;

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      });

      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(coords);
          new window.kakao.maps.Marker({ map, position: coords });
        }
      });
    };

    if (window.kakao?.maps?.load) {
      window.kakao.maps.load(loadMap);
    } else if (!document.getElementById('kakao-map-script')) {
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_API_KEY
      }&libraries=services&autoload=false`;
      script.async = true;
      script.onload = () => {
        if (window.kakao?.maps?.load) {
          window.kakao.maps.load(loadMap);
        }
      };
      document.head.appendChild(script);
    }
  }, [address]);

  return <div ref={mapRef} className="w-full h-[300px] rounded-xl shadow" />;
};

export default KakaoMap;
