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
    <div className="flex flex-col h-screen gap-4">
      <div className="flex flex-col py-10 gap-4 justify-between items-center h-[30%] bg-[#CADCFF] rounded-b-3xl ">
        <p className="font-bold text-2xl">{t('chatList.analysisPrompt')}</p>
        <button onClick={() => handleClick()}>
          <AddIcon width={90} />
        </button>
      </div>
      <ListBox />
    </div>
  );
};
export default ChatList;
