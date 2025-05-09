import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import KakaoMap from './KakaoMap';
import { getAddress } from '@/apis/result';
import { postNearbyHospitals } from '@/apis/hospital';
import { useNavigate } from 'react-router-dom';

const Hospital = () => {
  const { t } = useTranslation();
  const [address, setAddress] = useState('');
  const [markers, setMarkers] = useState<
    { lat: number; lng: number; name: string }[]
  >([]);
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState<any[]>([]);

  // 주소 가져오기
  useEffect(() => {
    const fetchAddress = async () => {
      const res = await getAddress(); // 사용자 주소 불러오기 API
      setAddress(res.data.userAddress);
    };
    fetchAddress();
  }, []);

  const handleCoordinates = async (lat: number, lng: number) => {
    try {
      const res = await postNearbyHospitals({
        latitude: lat,
        longitude: lng,
        distance: 2,
      });

      const hospitalsRaw = res.data?.data?.hospitals ?? [];

      const fullHospitalData = hospitalsRaw
        .filter(
          (h: any) =>
            h.latitude &&
            h.longitude &&
            h.hospitalName &&
            h.address &&
            h.phoneNumber
        )
        .map((h: any) => ({
          lat: h.latitude,
          lng: h.longitude,
          name: h.hospitalName,
          address: h.address,
          phoneNumber: h.phoneNumber,
        }));

      setMarkers(fullHospitalData);
      setHospitals(fullHospitalData);
    } catch (error) {
      console.error('❌ 병원 조회 실패:', error);
    }
  };

  const handleClick = () => {
    navigate('/hoslist', {
      state: {
        hospitals,
        address,
      },
    });
  };

  return (
    <div className="flex flex-col pt-[15px] pr-[25px] pb-[20px] pl-[25px]">
      <div className="flex justify-between items-center">
        <p
          className="text-[22px] leading-[120%] text-[#191B1C] font-normal text-left"
          style={{
            WebkitTextStrokeWidth: '0.3px',
            WebkitTextStrokeColor: '#000',
          }}
        >
          {t('result.hospitalTitle')}
        </p>
        <span
          className="text-[#999] text-[14px] cursor-pointer"
          onClick={handleClick}
        >
          {t('result.more')}
        </span>
      </div>
      <div className="mt-[14px]">
        {address && (
          <KakaoMap
            address={address}
            onCoordinates={handleCoordinates}
            markers={markers}
          />
        )}
      </div>
    </div>
  );
};

export default Hospital;
