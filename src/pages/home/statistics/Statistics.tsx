import StatisticsIcon from '@assets/images/Home/Statistics.svg?react';
import Box from '@/components/Box';
import Pie from './Pie';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation();
  const industry = '제조업'; // 산업명도 나중에 다국어 필요하면 번역 키로 만들기 가능

  return (
    <div className="flex flex-col px-8 gap-5 pt-2 ">
      <div className="flex gap-2 items-center">
        <StatisticsIcon />
        <p className="font-bold">
          {industry}
          <span> {t('statistics.title')}</span>
        </p>
      </div>
      <div className="flex flex-row gap-4 h-44 ">
        <Box className="flex flex-col flex-[5] p-3 gap-1 ">
          <p className="font-bold text-mainBlue text-sm">
            {t('statistics.accidentTop3')}
          </p>
          <Pie />
        </Box>
        <Box className="flex flex-col flex-[5] p-3 gap-1 ">
          <p className="font-bold text-mainBlue text-sm">
            {t('statistics.injuryTop3')}
          </p>
          <Pie />
        </Box>
      </div>
    </div>
  );
};

export default Statistics;
