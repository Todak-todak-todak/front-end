import ListBox from './ListBox';
import AddIcon from '@assets/images/Chat/Add.svg?react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ChatList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = () => {
    navigate('/chat');
  };
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2 py-6 justify-center items-center  bg-[#CADCFF] rounded-b-3xl ">
        <p className="font-bold text-xl">{t('chatList.analysisPrompt')}</p>
        <button onClick={() => handleClick()}>
          <AddIcon width={80} />
        </button>
      </div>
      <div className="flex flex-col">
        <ListBox />
      </div>
    </div>
  );
};
export default ChatList;
