import Header from '@/components/Header';
import ChatInput from './ChatInput';
import ChatBox from './ChatBox';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { sendMessage } from './api/chatApi';
import { getAccessToken } from '@/utils/authUtils';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );

  const accessToken = getAccessToken();

  const { mutate } = useMutation({
    mutationFn: (data: { question: string; accessToken: string }) =>
      sendMessage(data),
    onSuccess: (data) => {
      console.log('응답 데이터:', data);

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
        const formattedMessage = `
  ✅ 요약: ${summary}
  
  📊 산재 인정 확률: ${(predict.approve_prob * 100).toFixed(1)}%
  🏗️ 산업 분야: ${predict.industry}
  
  📌 유사 사례:
  ${related_industry_examples.map((ex: string) => `- ${ex}`).join('\n')}
        `.trim();

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: formattedMessage },
        ]);
      }
    },
    onError: (error) => {
      console.error('에러:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: 'bot',
          text: '⚠️ 서버에서 응답을 받는 데 실패했어요. 다시 시도해주세요.',
        },
      ]);
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
