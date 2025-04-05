import SirenIcon from '@assets/images/Home/Siren.svg?react';
import EducationIcon from '@assets/images/Home/Education.svg?react';
import HospitalIcon from '@assets/images/Home/Hospital.svg?react';
import ConsultationIcon from '@assets/images/Home/Consultation.svg?react';
import ReportIcon from '@assets/images/Home/Report.svg?react';
import Box from '@/components/Box';

type Category = '주의사항' | '안전교육' | '의료기관' | '상담' | '신고';

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
          className="flex flex-col gap-2"
        >
          <Box
            className="flex w-14 h-14 bg-white rounded-xl justify-center items-center
            transition-transform duration-200 hover:scale-[1.2]"
            style={{
              border: isClicked === label ? '1.5px solid #0158FE' : 'none',
            }}
          >
            <Icon width={width} height={height} />
          </Box>
          <p
            className={`font-bold text-sm ${
              isClicked === label ? 'text-mainBlue' : 'text-mainGray'
            }`}
          >
            {label}
          </p>
        </button>
      ))}
    </div>
  );
};

export default InfoList;
