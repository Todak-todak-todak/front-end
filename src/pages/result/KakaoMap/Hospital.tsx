import KakaoMap from './KakaoMap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hospital = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/hoslist');
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
        <KakaoMap />
      </div>
    </div>
  );
};

export default Hospital;
