import InfoList from './InfoList';
import InfoDetail from './InfoDetail';
import MegaphoneIcon from '@assets/images/Home/Megaphone.svg?react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/doc';
import { InfoDetailData, CounselProp, DeclarationProp } from '@/types/home';

interface InformationProps {
  data: InfoDetailData;
  counsel: CounselProp[];
  declaration: DeclarationProp[];
}

type Category = '주의사항' | '안전교육' | '의료기관' | '상담' | '신고';

const Information = ({ data, counsel, declaration }: InformationProps) => {
  const [isClicked, setIsClicked] = useState<Category>('주의사항');
  const { t } = useTranslation();

  const { data: headerData } = useQuery({
    queryKey: ['header'],
    queryFn: getUserInfo,
  });

  const userName = headerData?.data.userName;

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
        <InfoDetail
          isClicked={isClicked}
          data={data}
          counsel={counsel}
          declaration={declaration}
        />
      </div>
    </div>
  );
};

export default Information;
