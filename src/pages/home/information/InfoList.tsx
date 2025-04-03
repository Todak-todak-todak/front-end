import SirenIcon from '@assets/images/Home/Siren.svg?react';
import EducationIcon from '@assets/images/Home/Education.svg?react';
import HospitalIcon from '@assets/images/Home/Hospital.svg?react';
import ConsultationIcon from '@assets/images/Home/Consultation.svg?react';
import ReportIcon from '@assets/images/Home/Report.svg?react';
import Box from '@/components/Box';

const icons = [
  { Icon: SirenIcon, label: '주의사항', width: 40, height: 40 },
  { Icon: EducationIcon, label: '안전교육', width: 38, height: 40 },
  { Icon: HospitalIcon, label: '의료기관', width: 36, height: 38 },
  { Icon: ConsultationIcon, label: '상담', width: 36, height: 40 },
  { Icon: ReportIcon, label: '신고', width: 36, height: 40 },
];

interface InfoListProps {
  isClicked: string;
  setIsClicked: (label: string) => void;
}

const InfoList = ({ isClicked, setIsClicked }: InfoListProps) => {
  const handleCLick = (label: string) => {
    setIsClicked(label);
    console.log(isClicked);
  };

  return (
    <div className="flex flex-row justify-between">
      {icons.map(({ Icon, label, width, height }, index) => (
        <button
          onClick={() => handleCLick(label)}
          key={index}
          className="flex flex-col gap-2"
        >
          <Box
            className="flex w-16 h-16 bg-white rounded-xl justify-center items-center"
            style={{
              border: isClicked === label ? '1.5px solid #0158FE' : 'none', // 클릭된 버튼에만 테두리 추가
            }}
          >
            <Icon width={width} height={height} />
          </Box>
          <p
            className={`font-bold ${
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
