import InfoList from './InfoList';
import InfoDetail from './InfoDetail';
import MegaphoneIcon from '@assets/images/Home/Megaphone.svg?react';
import { useState } from 'react';

const Information = () => {
  const [isClicked, setIsClicked] = useState('주의사항');

  return (
    <div className="flex flex-col px-8 gap-4 ">
      <div className="flex gap-2 items-center">
        <MegaphoneIcon />
        <p className="font-bold">hfidf님을 위한 정보</p>
      </div>
      <div>
        <InfoList isClicked={isClicked} setIsClicked={setIsClicked} />
        <InfoDetail isClicked={isClicked} />
      </div>
    </div>
  );
};
export default Information;
