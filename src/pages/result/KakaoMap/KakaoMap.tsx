// KakaoMap.tsx
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address: string;
  onCoordinates?: (lat: number, lng: number) => void;
  markers?: { lat: number; lng: number; name: string }[];
}

const KakaoMap = ({ address, onCoordinates, markers }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadMap = () => {
      if (!mapRef.current || !window.kakao?.maps) return;

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      });
      mapInstanceRef.current = map;

      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const lat = parseFloat(result[0].y);
          const lng = parseFloat(result[0].x);
          const center = new window.kakao.maps.LatLng(lat, lng);

          map.setCenter(center);
          new window.kakao.maps.Marker({ map, position: center });

          if (onCoordinates) {
            onCoordinates(lat, lng);
          }
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
        if (window.kakao?.maps?.load) window.kakao.maps.load(loadMap);
      };
      document.head.appendChild(script);
    }
  }, [address]);

  return <div ref={mapRef} className="w-full h-[300px] rounded-xl shadow" />;
};

export default KakaoMap;
