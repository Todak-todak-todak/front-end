import Header from '@/components/Header';
import KakaoMap from './KakaoMap';
import HosInfo from './HosInfo';

const HosList = () => {
  return (
    <>
      <Header title="산재 인정 병원" />
      <div className="pl-[25px] pr-[25px]">
        <KakaoMap />
        <HosInfo />
      </div>
    </>
  );
};

export default HosList;
