import { useState } from 'react';
import HomeIcon from '@assets/images/Footer/Home.svg?react';
import AccountIcon from '@assets/images/Footer/Account.svg?react';
import BookIcon from '@assets/images/Footer/Book.svg?react';
import BlueBookIcon from '@assets/images/Footer/BlueBook.svg?react';
import ChatBotIcon from '@assets/images/Footer/ChatBot.svg?react';
import BlueChatBotIcon from '@assets/images/Footer/BlueChatBot.svg?react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState('home');

  const handleCLick = (menu: string) => {
    setIsClicked(menu);
    if (menu === 'home') {
      navigate('/');
    } else if (menu === 'chat') {
      navigate('/chat');
    } else if (menu === 'book') {
      navigate('/book');
    } else if (menu === 'account') {
      navigate('/account');
    }
  };

  return (
    <div
      className="w-[470px] h-20 flex justify-around items-center px-8
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
        <div
          className={`${
            isClicked === 'home' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          홈
        </div>
      </button>
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleCLick('chat')}
      >
        {isClicked === 'chat' ? (
          <BlueChatBotIcon className="w-8 h-8" />
        ) : (
          <ChatBotIcon className="w-8 h-8" />
        )}
        <div
          className={`${
            isClicked === 'chat' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          산재챗봇
        </div>
      </button>
      <button
        className="flex flex-col gap-1  items-center"
        onClick={() => handleCLick('book')}
      >
        {isClicked === 'book' ? <BlueBookIcon /> : <BookIcon />}

        <div
          className={`${
            isClicked === 'book' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm `}
        >
          산재처리
        </div>
      </button>
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleCLick('account')}
      >
        <AccountIcon
          className="w-8 h-8"
          style={{ fill: isClicked === 'account' ? '#275AEC' : '#B2B3B5' }} // 여기서 색상 변경
        />
        <div
          className={`${
            isClicked === 'account' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          내정보
        </div>
      </button>
    </div>
  );
};

export default Footer;
