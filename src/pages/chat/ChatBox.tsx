import { useEffect, useRef } from 'react';

const ChatBox = ({
  messages,
}: {
  messages: { sender: string; text: string }[];
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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
            className={`max-w-[70%] text-left px-3 py-2 rounded-xl text-sm ${
              msg.sender === 'user'
                ? 'bg-mainBlue text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {msg.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
