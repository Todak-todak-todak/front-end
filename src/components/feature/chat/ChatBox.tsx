import { useEffect, useRef } from 'react';
import ChatResponse from './ChatResponse';
import { Message } from '@/hooks/useSendMessage';

const ChatBox = ({ messages }: { messages: Message[] }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const renderMessage = (msg: Message) => {
    if (msg.type === 'chatResponse') {
      try {
        const data = JSON.parse(msg.text);
        return (
          <ChatResponse
            summary={data.summary}
            approveProb={data.approveProb}
            industry={data.industry}
            examples={data.examples}
          />
        );
      } catch {
        return '⚠️ 잘못된 응답 형식입니다.';
      }
    }
    return msg.text;
  };

  return (
    <div
      ref={scrollRef}
      className="flex flex-col overflow-y-auto flex-grow gap-2 px-4"
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === 'user' ? 'justify-end' : 'justify-start'
          } mb-2`}
        >
          <p
            className={`max-w-[75%] text-left px-3 py-2 rounded-xl text-sm ${
              msg.sender === 'user'
                ? 'bg-mainBlue text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {renderMessage(msg)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
