const getCoordinatesFromAddress = async (address: string) => {
  return new Promise<{ latitude: number; longitude: number }>(
    (resolve, reject) => {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const lat = parseFloat(result[0].y);
          const lng = parseFloat(result[0].x);
          resolve({ latitude: lat, longitude: lng });
        } else {
          reject('주소를 위도/경도로 변환할 수 없습니다.');
        }
      });
    }
  );
};
