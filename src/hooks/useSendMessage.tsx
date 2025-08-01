import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { sendMessage } from '@/apis/chat/chat';
import { getAccessToken } from '@/utils/auth/authUtils';

export type Message = {
  sender: 'user' | 'bot';
  text: string;
  type?: 'normal' | 'chatResponse';
};

const STORAGE_KEY = 'chat_messages';
const LOADING_TEXT = '응답 생성 중...';
const ERROR_TEXT = '⚠️ 서버에서 응답을 받는 데 실패했어요. 다시 시도해주세요.';

function saveMessages(messages: Message[]) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

function loadMessages(): Message[] {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function useSendMessage() {
  const [messages, setMessages] = useState<Message[]>(() => loadMessages());
  const accessToken = getAccessToken();

  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages]);

  const removeLoadingMessage = (msgs: Message[]) => {
    if (msgs.length && msgs[msgs.length - 1].text === LOADING_TEXT) {
      return msgs.slice(0, -1);
    }
    return msgs;
  };

  const mutation = useMutation({
    mutationFn: (data: { question: string; accessToken: string }) =>
      sendMessage(data),

    onMutate: () => {
      setMessages((prev) => [...prev, { sender: 'bot', text: LOADING_TEXT }]);
    },

    onSuccess: (data) => {
      setMessages((prev) => {
        const cleaned = removeLoadingMessage(prev);

        if (data.followup_required) {
          return [
            ...cleaned,
            { sender: 'bot', text: data.message },
            ...data.followups.map((q: string) => ({
              sender: 'bot',
              text: `🧐 ${q}`,
            })),
          ];
        }

        // ChatResponse 컴포넌트에 들어갈 정보만 저장 (직렬화)
        const serializedText = JSON.stringify({
          summary: data.summary,
          approveProb: data.predict.approve_prob,
          industry: data.predict.industry,
          examples: data.related_industry_examples,
        });

        return [
          ...cleaned,
          { sender: 'bot', text: serializedText, type: 'chatResponse' },
        ];
      });
    },

    onError: () => {
      setMessages((prev) => {
        const cleaned = removeLoadingMessage(prev);
        return [...cleaned, { sender: 'bot', text: ERROR_TEXT }];
      });
    },
  });

  const send = (question: string) => {
    setMessages((prev) => [...prev, { sender: 'user', text: question }]);
    mutation.mutate({ question, accessToken });
  };

  return { messages, send, isPending: mutation.isPending };
}
