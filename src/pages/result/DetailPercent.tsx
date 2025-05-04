import Circle from '@/assets/images/Result/Circle.svg?react';
import MiniCircle from '@/assets/images/Result/MiniCircle.svg?react';
import Allow from '@assets/images/Result/Allow-right.svg?react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getResult } from '@/apis/result';
import { useState } from 'react';

interface DetailPercentProps {
  chatResultId: number | null;
}

const DetailPercent = ({ chatResultId }: DetailPercentProps) => {
  const [probability, setProbability] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/doclist');
  };

  useEffect(() => {
    if (!chatResultId) return;
    // 산재 처리 가능성 % 불러오기
    const fetchResult = async () => {
      try {
        const data = await getResult(chatResultId);
        setProbability(data.data.reportProbability);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResult();
  }, [chatResultId]);

  return (
    <div className="flex flex-col p-0 pr-[25px] pb-[21px] pl-[25px]">
      <p
        className="text-[22px] leading-[120%] text-[#191B1C] font-normal mb-[17px] text-left"
        style={{
          WebkitTextStrokeWidth: '0.3px',
          WebkitTextStrokeColor: '#000',
        }}
      >
        {t('result.possibility')}
      </p>

      <div className="relative w-full h-[233px] flex flex-col justify-center items-center flex-shrink-0 rounded-[16px] bg-[#EBEEFD] shadow-[4px_4px_10px_rgba(0,0,0,0.08)] pt-[17px] pr-[28px] pl-[28px] pb-[14px]">
        <div className="relative w-fit h-fit mb-[11px]">
          <Circle />
          <MiniCircle className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
        </div>

        <span className="absolute top-[38%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[32px] font-bold text-[#333]">
          {probability ? `${probability}%` : '--%'}
        </span>

        <button
          className="w-full h-[45px] rounded-[10px] bg-[#fff] cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-center gap-2">
            <p className="text-[18px] text-[#0158FE] font-normal">
              {t('result.goToDoc')}
            </p>
            <Allow />
          </div>
        </button>
      </div>
    </div>
  );
};

export default DetailPercent;
