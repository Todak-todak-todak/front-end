export {};

declare global {
  namespace kakao.maps {
    interface LatLng {
      La: () => number;
      Ma: () => number;
    }

    interface MapOptions {
      center: LatLng;
      level: number;
    }

    interface Map {
      setCenter: (latlng: LatLng) => void;
    }

    interface MarkerOptions {
      map: Map;
      position: LatLng;
    }

    interface Marker {
      setMap: (map: Map | null) => void;
    }

    function load(callback: () => void): void;
    const Map: new (container: HTMLElement, options: MapOptions) => Map;
    const LatLng: new (lat: number, lng: number) => LatLng;
    const Marker: new (options: MarkerOptions) => Marker;
  }

  interface Window {
    kakao: {
      maps: typeof kakao.maps;
    };
  }
}
