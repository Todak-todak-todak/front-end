import StatisticsIcon from '@assets/images/Home/Statistics.svg?react';
import Box from '@/components/Box';

const Statistics = () => {
  return (
    <div className="flex flex-col px-8 gap-4 ">
      <div className="flex gap-2 items-center">
        <StatisticsIcon />
        <p className="font-bold">제조업 위험 통계</p>
      </div>
      <div className="flex flex-row ">
        <Box className="w-40">사고유발</Box>
        <Box className="w-40">부상 TOP3</Box>
      </div>
    </div>
  );
};
export default Statistics;
