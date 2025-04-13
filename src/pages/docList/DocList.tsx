import DocBox from './DocBox';
import AddIcon from '@assets/images/Chat/Add.svg?react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DocList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/doc');
  };
  const { t } = useTranslation();
  return (
    <div className="flex flex-col h-screen gap-4 w-full">
      <div className="w-full flex flex-col py-10 gap-4 justify-between items-center h-[30%] bg-[#CADCFF] rounded-b-3xl ">
        <p className="font-bold text-2xl">{t('docList.title')}</p>
        <button onClick={() => handleClick()}>
          <AddIcon width={90} />
        </button>
      </div>
      <DocBox />
    </div>
  );
};
export default DocList;
