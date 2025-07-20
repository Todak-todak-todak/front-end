import { useState } from 'react';
import InfoCard from './InfoCard';
import LinkIcon from '@/assets/images/Home/Link.svg?react';
import ExclamationIcon from '@assets/images/Home/Exclamation.svg?react';
import MapIcon from '@/assets/images/Home/Map.svg?react';
import CallIcon from '@/assets/images/Home/Call.svg?react';
import InstroductionIcon from '@/assets/images/Home/Instroduction.svg?react';
import { useTranslation } from 'react-i18next';
import { InfoDetailData, CounselProp, DeclarationProp } from '@/types/home';

const iconMap = {
  주의사항: ExclamationIcon,
  안전교육: LinkIcon,
  의료기관: MapIcon,
  상담: InstroductionIcon,
  신고: CallIcon,
} as const;

const categoryMap = {
  주의사항: 'category.caution',
  안전교육: 'category.safety',
  의료기관: 'category.hospital',
  상담: 'category.consult',
  신고: 'category.report',
} as const;

interface InfoDetailProps {
  isClicked: keyof typeof iconMap;
  data: InfoDetailData;
  counsel: CounselProp[];
  declaration: DeclarationProp[];
}

const InfoDetail = ({
  isClicked,
  data,
  counsel,
  declaration,
}: InfoDetailProps) => {
  const IconComponent = iconMap[isClicked];
  const { t } = useTranslation();

  const [modalContent, setModalContent] = useState<string | null>(null);

  let list: { title: string; description?: string; url?: string }[] = [];
  switch (isClicked) {
    case '주의사항':
      list = (data?.warnings ?? []).map((item) => ({
        title: item.warningName,
        description: item.warningDescription,
      }));
      break;
    case '안전교육':
      list = (data?.educations ?? []).map((item) => ({
        title: item.educationName,
        url: item.educationUrl,
      }));
      break;
    case '의료기관':
      list = (data?.hospitals ?? []).map((item) => ({
        title: item.hospitalName,
        description: item.hospitalAddress,
      }));
      break;
    case '상담':
      list = (counsel ?? []).map((item) => ({
        title: item.counselorName,
        description: item.counselorIntrodution,
      }));
      break;
    case '신고':
      list = (declaration ?? []).map((item) => ({
        title: item.declarationName,
        description: item.declarationPhoneNm,
      }));
      break;
  }

  return (
    <>
      <div className="flex overflow-x-auto pb-4 custom-scrollbar whitespace-nowrap gap-4">
        {list.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
            icon={IconComponent}
            categoryLabel={t(categoryMap[isClicked])}
            onClick={(text) => setModalContent(text)}
          />
        ))}
      </div>

      {modalContent && (
        <div className="fixed inset-0 z-[100000] bg-black bg-opacity-50 flex items-center justify-center p-10">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              &times;
            </button>
            <p className="text-sm whitespace-pre-wrap ">{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoDetail;
