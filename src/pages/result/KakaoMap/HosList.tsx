import Header from '@/components/Header';
import KakaoMap from './KakaoMap';
import HosInfo from './HosInfo';
import { useTranslation } from 'react-i18next';

const HosList = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t('result.hoslistTitle')} />
      <div className="pl-[25px] pr-[25px]">
        <KakaoMap />
        <HosInfo />
      </div>
    </>
  );
};

export default HosList;
