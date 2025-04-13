import { useState } from 'react';
import HomeIcon from '@assets/images/Footer/Home.svg?react';
import AccountIcon from '@assets/images/Footer/Account.svg?react';
import BookIcon from '@assets/images/Footer/Book.svg?react';
import BlueBookIcon from '@assets/images/Footer/BlueBook.svg?react';
import ChatBotIcon from '@assets/images/Footer/ChatBot.svg?react';
import BlueChatBotIcon from '@assets/images/Footer/BlueChatBot.svg?react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState('home');
  const { t } = useTranslation();

  const handleCLick = (menu: string) => {
    setIsClicked(menu);
    if (menu === 'home') {
      navigate('/');
    } else if (menu === 'chatlist') {
      navigate('/chatlist');
    } else if (menu === 'doclist') {
      navigate('/doclist');
    } else if (menu === 'mypage') {
      navigate('/mypage');
    }
  };

  return (
    <div
      className="w-full max-w-[470px] h-20 flex justify-around items-center px-8
      fixed bottom-0 bg-white rounded-t-3xl shadow-footer"
    >
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleCLick('home')}
      >
        <HomeIcon
          className="w-8 h-8"
          style={{ fill: isClicked === 'home' ? '#275AEC' : '#B2B3B5' }}
        />
        <p
          className={`${
            isClicked === 'home' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          {t('footer.home')}
        </p>
      </button>
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleCLick('chatlist')}
      >
        {isClicked === 'chatlist' ? (
          <BlueChatBotIcon className="w-8 h-8" />
        ) : (
          <ChatBotIcon className="w-8 h-8" />
        )}
        <p
          className={`${
            isClicked === 'chatlist' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          {t('footer.chatbot')}
        </p>
      </button>
      <button
        className="flex flex-col gap-1  items-center"
        onClick={() => handleCLick('doclist')}
      >
        {isClicked === 'doclist' ? <BlueBookIcon /> : <BookIcon />}

        <p
          className={`${
            isClicked === 'doclist' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm pt-[1.5px]`}
        >
          {t('footer.doc')}
        </p>
      </button>
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleCLick('mypage')}
      >
        <AccountIcon
          className="w-8 h-8"
          style={{ fill: isClicked === 'mypage' ? '#275AEC' : '#B2B3B5' }}
        />
        <p
          className={`${
            isClicked === 'mypage' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          {t('footer.mypage')}
        </p>
      </button>
    </div>
  );
};

export default Footer;
