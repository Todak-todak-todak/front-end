import Header from '@/components/header/Header';
import ChatInput from './component/ChatInput';
import ChatBox from './component/ChatBox';
import { useTranslation } from 'react-i18next';
import { useSendMessage } from '@/hooks/useSendMessage';
import { useState } from 'react';

const Chat = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const { messages, send } = useSendMessage();

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header title={t('header.chatTitle')} />
      <ChatBox messages={messages} />
      <ChatInput isOpen={isOpen} setIsOpen={setIsOpen} onSend={send} />
    </div>
  );
};

export default Chat;
