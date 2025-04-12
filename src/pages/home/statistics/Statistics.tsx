import StatisticsIcon from '@assets/images/Home/Statistics.svg?react';
import Box from '@/components/Box';
import Pie from './Pie';

const Statistics = () => {
  return (
    <div className="flex flex-col px-8 gap-5 pt-2 ">
      <div className="flex gap-2 items-center">
        <StatisticsIcon />
        <p className="font-bold">제조업 위험 통계</p>
      </div>
      <div className="flex flex-row gap-4 h-44 ">
        <Box className="flex flex-col flex-[5] p-3 gap-1 ">
          <p className="font-bold text-mainBlue text-sm">사고유발 TOP3</p>
          <Pie />
        </Box>
        <Box className="flex flex-col flex-[5] p-3 gap-1 ">
          <p className="font-bold text-mainBlue text-sm">부상 TOP3</p>
          <Pie />
        </Box>
      </div>
    </div>
  );
};
export default Statistics;
