import HomeIcon from '@assets/images/Footer/Home.svg?react';
import AccountIcon from '@assets/images/Footer/Account.svg?react';
import BookIcon from '@assets/images/Footer/Book.svg?react';
import BlueBookIcon from '@assets/images/Footer/BlueBook.svg?react';
import ChatBotIcon from '@assets/images/Footer/ChatBot.svg?react';
import BlueChatBotIcon from '@assets/images/Footer/BlueChatBot.svg?react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const currentPath = location.pathname;

  const handleClick = (menu: string) => {
    if (menu === 'home') {
      navigate('/home');
    } else if (menu === 'chatlist') {
      navigate('/chatlist');
    } else if (menu === 'doclist') {
      navigate('/doclist');
    } else if (menu === 'mypage') {
      navigate('/mypage');
    }
  };

  return (
    <div className="w-full max-w-[470px] h-20 flex justify-around items-center px-8 fixed bottom-0 bg-white rounded-t-3xl shadow-footer">
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleClick('home')}
      >
        <HomeIcon
          className="w-8 h-8"
          style={{
            fill: currentPath === '/home' ? '#275AEC' : '#B2B3B5',
          }}
        />
        <p
          className={`${
            currentPath === '/home' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          {t('footer.home')}
        </p>
      </button>
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleClick('chatlist')}
      >
        {currentPath.startsWith('/result') ||
        currentPath === '/chatlist' ||
        currentPath.startsWith('/detailresult') ||
        currentPath.startsWith('/hoslist') ? (
          <BlueChatBotIcon className="w-8 h-8" />
        ) : (
          <ChatBotIcon className="w-8 h-8" />
        )}

        <p
          className={`${
            currentPath.startsWith('/chatlist') ||
            currentPath.startsWith('/result') ||
            currentPath.startsWith('/detailresult') ||
            currentPath.startsWith('/hoslist')
              ? 'text-[#275AEC]'
              : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          {t('footer.chatbot')}
        </p>
      </button>
      <button
        className="flex flex-col gap-1  items-center"
        onClick={() => handleClick('doclist')}
      >
        {currentPath.startsWith('/doc') ? <BlueBookIcon /> : <BookIcon />}
        <p
          className={`${
            currentPath.startsWith('/doc') ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm pt-[1.5px]`}
        >
          {t('footer.doc')}
        </p>
      </button>
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleClick('mypage')}
      >
        <AccountIcon
          className="w-8 h-8"
          style={{
            fill: currentPath === '/mypage' ? '#275AEC' : '#B2B3B5',
          }}
        />
        <p
          className={`${
            currentPath === '/mypage' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          {t('footer.mypage')}
        </p>
      </button>
    </div>
  );
};

export default Footer;
