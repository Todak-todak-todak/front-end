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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 py-6 justify-center items-center h-[30%] bg-[#CADCFF] rounded-b-3xl ">
        <p className="font-bold text-xl">{t('docList.title')}</p>
        <button onClick={() => handleClick()}>
          <AddIcon width={80} />
        </button>
      </div>
      <div>
        <DocBox />
      </div>
    </div>
  );
};
export default DocList;
