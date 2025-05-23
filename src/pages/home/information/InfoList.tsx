import SirenIcon from '@assets/images/Home/Siren.svg?react';
import EducationIcon from '@assets/images/Home/Education.svg?react';
import HospitalIcon from '@assets/images/Home/Hospital.svg?react';
import ConsultationIcon from '@assets/images/Home/Consultation.svg?react';
import ReportIcon from '@assets/images/Home/Report.svg?react';
import Box from '@/components/Box';
import { useTranslation } from 'react-i18next';

type Category = '주의사항' | '안전교육' | '의료기관' | '상담' | '신고';
const categoryMap = {
  주의사항: 'category.caution',
  안전교육: 'category.safety',
  의료기관: 'category.hospital',
  상담: 'category.consult',
  신고: 'category.report',
} as const;
const icons: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: Category;
  width: number;
  height: number;
}[] = [
  { Icon: SirenIcon, label: '주의사항', width: 40, height: 40 },
  { Icon: EducationIcon, label: '안전교육', width: 38, height: 40 },
  { Icon: HospitalIcon, label: '의료기관', width: 36, height: 38 },
  { Icon: ConsultationIcon, label: '상담', width: 36, height: 40 },
  { Icon: ReportIcon, label: '신고', width: 36, height: 40 },
];

interface InfoListProps {
  isClicked: Category;
  setIsClicked: (label: Category) => void;
}

const InfoList = ({ isClicked, setIsClicked }: InfoListProps) => {
  const { t } = useTranslation();

  const handleClick = (label: Category) => {
    setIsClicked(label);
    console.log(isClicked);
  };

  return (
    <div className="flex flex-row justify-between">
      {icons.map(({ Icon, label, width, height }, index) => (
        <button
          onClick={() => handleClick(label)}
          key={index}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <Box
            className="flex  w-[3.5rem] h-[3.5rem] bg-white rounded-xl justify-center items-center
            transition-transform duration-200 hover:scale-[1.1]"
            style={{
              border: isClicked === label ? '1.5px solid #0158FE' : 'none',
            }}
          >
            <Icon width={width} height={height} />
          </Box>
          <p
            className={`flex font-bold text-sm justify-center items center ${
              isClicked === label ? 'text-mainBlue' : 'text-mainGray'
            }`}
          >
            {t(categoryMap[label])}
          </p>
        </button>
      ))}
    </div>
  );
};

export default InfoList;
