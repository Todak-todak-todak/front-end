import Box from '@/components/Box';
import LinkIcon from '@/assets/images/Home/Link.svg?react';
import ExclamationIcon from '@assets/images/Home/Exclamation.svg?react';
import MapIcon from '@/assets/images/Home/Map.svg?react';
import CallIcon from '@/assets/images/Home/Call.svg?react';
import InstroductionIcon from '@/assets/images/Home/Instroduction.svg?react';

const iconMap = {
  주의사항: ExclamationIcon,
  안전교육: LinkIcon,
  의료기관: MapIcon,
  상담: InstroductionIcon,
  신고: CallIcon,
} as const;
const InfoDetail = ({ isClicked }: { isClicked: keyof typeof iconMap }) => {
  const IconComponent = iconMap[isClicked];

  return (
    <div className="flex overflow-x-auto pb-4 custom-scrollbar whitespace-nowrap gap-4">
      {[...Array(4)].map((_, index) => (
        <Box
          key={index}
          className="flex flex-col w-36 h-40 px-4 py-6 justify-between flex-shrink-0"
        >
          <p className="flex items-start font-bold text-mg leading-[1.2] whitespace-normal">
            사다리를 이용한 작업 또는 통행
          </p>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <IconComponent />
              <p className="font-bold text-[11px]">{isClicked}</p>
            </div>
            <div className="bg-mainBlue rounded-xl p-2 ">
              <p className="text-white text-[12px] line-clamp-2 leading-[1.2] whitespace-normal ">
                3.5m 미만 작업 시 A자형 사다리만 사용(2인1조)
              </p>
            </div>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default InfoDetail;
