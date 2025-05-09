import Header from '@/components/Header';
import KakaoMap from './KakaoMap';
import HosInfo from './HosInfo';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const HosList = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const hospitals = location.state?.hospitals ?? [];
  const address = location.state?.address ?? '서울';
  return (
    <>
      <Header title={t('result.hoslistTitle')} />
      <div className="pl-[25px] pr-[25px] pb-[100px]">
        <KakaoMap address={address} markers={hospitals} />
        <HosInfo hospitals={hospitals} />
      </div>
    </>
  );
};

export default HosList;
