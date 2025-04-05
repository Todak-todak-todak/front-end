import InfoList from './InfoList';
import InfoDetail from './InfoDetail';
import MegaphoneIcon from '@assets/images/Home/Megaphone.svg?react';
import { useState } from 'react';

type Category = '주의사항' | '안전교육' | '의료기관' | '상담' | '신고';

const Information = () => {
  const [isClicked, setIsClicked] = useState<Category>('주의사항');

  return (
    <div className="flex flex-col px-8 gap-4 ">
      <div className="flex gap-2 items-center">
        <MegaphoneIcon />
        <p className="font-bold">hfidf님을 위한 정보</p>
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
