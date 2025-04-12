import InfoList from './InfoList';
import InfoDetail from './InfoDetail';
import MegaphoneIcon from '@assets/images/Home/Megaphone.svg?react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Category = '주의사항' | '안전교육' | '의료기관' | '상담' | '신고';

const categoryMap = {
  주의사항: 'category.caution',
  안전교육: 'category.safety',
  의료기관: 'category.hospital',
  상담: 'category.consult',
  신고: 'category.report',
} as const;

const Information = () => {
  const [isClicked, setIsClicked] = useState<Category>('주의사항');
  const { t } = useTranslation();
  const userName = 'hfidf'; // 이건 필요에 따라 props로 받을 수 있음

  return (
    <div className="flex flex-col px-8 gap-5 pt-8">
      <div className="flex gap-2 items-center">
        <MegaphoneIcon />
        <p className="font-bold">
          {t('information.title', { name: userName })}
        </p>
      </div>
      <div>
        <InfoList isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      <div>
        <InfoDetail isClicked={isClicked} />
      </div>
    </div>
  );
};

export default Information;
