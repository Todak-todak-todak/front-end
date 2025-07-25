import ListBox from '../../components/features/chatList/ListBox';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import MessageIcon from '@/3D/MessageIcon';

const ChatList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = () => {
    navigate('/chat');
  };
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-4">
        <div className="relative flex flex-col gap-4 py-6 justify-center items-center bg-gradient-to-b from-[#CADCFF] to-white rounded-b-3xl overflow-hidden">
          <p className="font-bold text-xl z-10">
            {t('chatList.analysisPrompt')}
          </p>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <button onClick={handleClick} className="z-10">
              <MessageIcon />
            </button>
            <button
              onClick={handleClick}
              className="relative flex items-center justify-center gap-2 w-full py-2 rounded-full bg-gradient-to-r from-mainBlue to-inputBlue text-white text-lg font-semibold shadow-md"
            >
              {t('chatList.chat')}
              <span className="inline-block animate-bounce-x-repeat"> →</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <ListBox />
        </div>
      </div>
    </div>
  );
};
export default ChatList;
