import Header from '@/components/Header';
import ChatInput from './ChatInput';
import ChatBox from './ChatBox';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { sendMessage } from './api/chatApi';
import { getAccessToken } from '@/utils/authUtils';
import ChatResponse from './ChatResponse';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();
  const [messages, setMessages] = useState<
    { sender: string; text: React.ReactNode }[]
  >([]);

  const accessToken = getAccessToken();

  const { mutate } = useMutation({
    mutationFn: (data: { question: string; accessToken: string }) =>
      sendMessage(data),
    onMutate: () => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: '응답 생성 중...' },
      ]);
    },
    onSuccess: (data) => {
      console.log('응답 데이터:', data);

      // 마지막 메시지가 로딩이면 제거
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        if (
          newMessages.length > 0 &&
          newMessages[newMessages.length - 1].text === '응답 생성 중...'
        ) {
          newMessages.pop();
        }
        return newMessages;
      });

      if (data.followup_required) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: data.message },
          ...data.followups.map((q: string) => ({
            sender: 'bot',
            text: `🧐 ${q}`,
          })),
        ]);
      } else {
        const { summary, predict, related_industry_examples } = data;

        const botMessage = (
          <ChatResponse
            summary={summary}
            approveProb={predict.approve_prob}
            industry={predict.industry}
            examples={related_industry_examples}
          />
        );
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: botMessage },
        ]);
      }
    },
    onError: (error) => {
      console.error('에러:', error);
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        if (
          newMessages.length > 0 &&
          newMessages[newMessages.length - 1].text === '응답 생성 중...'
        ) {
          newMessages.pop();
        }
        return [
          ...newMessages,
          {
            sender: 'bot',
            text: '⚠️ 서버에서 응답을 받는 데 실패했어요. 다시 시도해주세요.',
          },
        ];
      });
    },
  });

  const handleSendMessage = (question: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: question },
    ]);

    mutate({ question, accessToken });
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header title={t('header.chatTitle')} />
      <ChatBox messages={messages} />
      <ChatInput
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default Chat;
