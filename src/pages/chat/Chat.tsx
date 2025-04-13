import Header from '@/components/Header';
import ChatInput from './ChatInput';
import ChatBox from './ChatBox';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header title={t('header.chatTitle')} />
      <ChatBox isOpen={isOpen} />
      <ChatInput isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Chat;
