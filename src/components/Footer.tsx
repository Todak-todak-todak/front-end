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
    } else if (menu === 'chatlist') {
      navigate('/chatlist');
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
        <p
          className={`${
            isClicked === 'home' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          홈
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
          산재챗봇
        </p>
      </button>
      <button
        className="flex flex-col gap-1  items-center"
        onClick={() => handleCLick('book')}
      >
        {isClicked === 'book' ? <BlueBookIcon /> : <BookIcon />}

        <p
          className={`${
            isClicked === 'book' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm pt-[1.5px]`}
        >
          산재처리
        </p>
      </button>
      <button
        className="flex flex-col gap-1 items-center"
        onClick={() => handleCLick('account')}
      >
        <AccountIcon
          className="w-8 h-8"
          style={{ fill: isClicked === 'account' ? '#275AEC' : '#B2B3B5' }} // 여기서 색상 변경
        />
        <p
          className={`${
            isClicked === 'account' ? 'text-[#275AEC]' : 'text-[#B2B3B5]'
          } font-bold text-sm`}
        >
          내정보
        </p>
      </button>
    </div>
  );
};

export default Footer;
