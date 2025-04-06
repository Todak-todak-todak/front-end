import Header from '@/components/Header';
import ChatInput from './ChatInput';
import ChatBox from './ChatBox';
import { useState } from 'react';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header title="AI 챗봇이 바로 답변드려요" />
      <ChatBox isOpen={isOpen} />
      <ChatInput isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Chat;
