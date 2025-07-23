import ListBox from '../../components/feature/chatList/ListBox';
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
      <div>
        <div className="relative flex flex-col gap-8 py-6 justify-center items-center bg-gradient-to-b from-[#CADCFF] to-white rounded-b-3xl overflow-hidden">
          {/* 콘텐츠 */}
          <p className="font-bold text-xl z-10">
            {t('chatList.analysisPrompt')}
          </p>
          <div className="flex flex-col justify-center items-center ">
            <div className="z-10">
              <MessageIcon />
            </div>
            <button
              onClick={handleClick}
              className="text-mainBlue text-xl font-bold"
            >
              채팅 하러 가기
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
