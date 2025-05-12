import StatisticsIcon from '@assets/images/Home/Statistics.svg?react';
import Box from '@/components/Box';
import Pie from './Pie';
import { useTranslation } from 'react-i18next';
import { InfoDetailData } from '@/types/home';

interface statisticsProps {
  data: InfoDetailData;
}
const Statistics = ({ data }: statisticsProps) => {
  const { t } = useTranslation();
  const industry = data?.industry;

  const accidents = data?.accidents.map((item) => ({
    name: item.accidentName,
    probability: item.accidentProbability,
  }));

  const injuries = data?.injuries.map((item) => ({
    name: item.injuryName,
    probability: item.injuryProbability,
  }));
  return (
    <div className="flex flex-col px-8 gap-5 pt-2 ">
      <div className="flex gap-2 items-center">
        <StatisticsIcon />
        <p className="font-bold">
          {industry}
          <span> {t('statistics.title')}</span>
        </p>
      </div>
      <div className="flex flex-row gap-4  ">
        <Box className="flex flex-col flex-[5] p-3 gap-1 ">
          <p className="font-bold text-mainBlue text-sm">
            {t('statistics.accidentTop3')}
          </p>
          <Pie data={accidents} />
        </Box>
        <Box className="flex flex-col flex-[5] p-3 gap-1 ">
          <p className="font-bold text-mainBlue text-sm">
            {t('statistics.injuryTop3')}
          </p>
          <Pie data={injuries} />
        </Box>
      </div>
    </div>
  );
};

export default Statistics;
