import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Marker {
  lat: number;
  lng: number;
  name: string;
}

interface KakaoMapProps {
  address: string;
  onCoordinates?: (lat: number, lng: number) => void;
  markers?: Marker[];
}

const KakaoMap = ({ address, onCoordinates, markers = [] }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // 지도 인스턴스
  const markerRef = useRef<any[]>([]); // 마커 목록

  // 1️⃣ 지도 로드 및 사용자 위치 마커
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

          // 사용자 위치 마커
          new window.kakao.maps.Marker({ map, position: center });

          // 위도/경도 전달
          if (onCoordinates) onCoordinates(lat, lng);
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

  // 2️⃣ 병원 마커 렌더링
  useEffect(() => {
    if (!window.kakao?.maps || !mapInstanceRef.current) return;

    // 기존 마커 제거
    markerRef.current.forEach((marker) => marker.setMap(null));
    markerRef.current = [];

    markers.forEach(({ lat, lng, name }) => {
      const position = new window.kakao.maps.LatLng(lat, lng);
      const marker = new window.kakao.maps.Marker({
        map: mapInstanceRef.current,
        position,
        title: name,
      });

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:13px;">🏥 ${name}</div>`,
      });

      window.kakao.maps.event.addListener(marker, 'click', () => {
        infowindow.open(mapInstanceRef.current, marker);
      });

      markerRef.current.push(marker);
    });
  }, [markers]);

  return <div ref={mapRef} className="w-full h-[300px] rounded-xl shadow" />;
};

export default KakaoMap;
