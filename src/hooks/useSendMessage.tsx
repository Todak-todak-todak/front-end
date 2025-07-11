import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { sendMessage } from '@/pages/chat/api/chat';
import { getAccessToken } from '@/utils/authUtils';
import ChatResponse from '@/pages/chat/component/ChatResponse';

// 메시지 타입 정의: user 또는 bot이 보낸 메시지이고, 텍스트는 string 또는 ReactNode (JSX) 가능
type Message = { sender: 'user' | 'bot'; text: string | React.ReactNode };

// 로딩 중 표시할 텍스트
const LOADING_TEXT = '응답 생성 중...';

// 에러 발생 시 표시할 텍스트
const ERROR_TEXT = '⚠️ 서버에서 응답을 받는 데 실패했어요. 다시 시도해주세요.';

export function useSendMessage() {
  // 메시지 배열 상태 관리
  const [messages, setMessages] = useState<Message[]>([]);
  // 인증 토큰을 가져옴 (로컬 저장소 등에서)
  const accessToken = getAccessToken();

  // 현재 메시지 배열에서 마지막이 로딩 메시지면 제거하는 함수
  const removeLoadingMessage = (msgs: Message[]) => {
    if (msgs.length && msgs[msgs.length - 1].text === LOADING_TEXT) {
      return msgs.slice(0, -1); // 마지막 메시지 제거
    }
    return msgs;
  };

  // React Query의 useMutation으로 API 호출 관리
  const mutation = useMutation({
    // 실제 메시지 전송 API 호출 함수
    mutationFn: (data: { question: string; accessToken: string }) =>
      sendMessage(data),

    // API 호출 직전에 실행되는 함수: 로딩 메시지를 추가
    onMutate: () => {
      setMessages((prev) => [...prev, { sender: 'bot', text: LOADING_TEXT }]);
    },

    // API 호출 성공 시 실행되는 함수
    onSuccess: (data) => {
      setMessages((prev) => {
        // 우선 로딩 메시지를 제거
        const cleaned = removeLoadingMessage(prev);

        // 만약 후속 질문이 필요한 경우, 메시지를 여러 개 추가
        if (data.followup_required) {
          return [
            ...cleaned,
            { sender: 'bot', text: data.message },
            ...data.followups.map((q: string) => ({
              sender: 'bot',
              text: `🧐 ${q}`, // 후속 질문 앞에 아이콘 추가
            })),
          ];
        }

        // 후속 질문이 없으면 ChatResponse 컴포넌트를 메시지로 추가
        const botMessage = (
          <ChatResponse
            summary={data.summary}
            approveProb={data.predict.approve_prob}
            industry={data.predict.industry}
            examples={data.related_industry_examples}
          />
        );

        return [...cleaned, { sender: 'bot', text: botMessage }];
      });
    },

    // API 호출 실패 시 실행되는 함수
    onError: () => {
      setMessages((prev) => {
        // 로딩 메시지 제거 후 에러 메시지 추가
        const cleaned = removeLoadingMessage(prev);
        return [...cleaned, { sender: 'bot', text: ERROR_TEXT }];
      });
    },
  });

  // 사용자가 메시지를 보낼 때 호출하는 함수
  const send = (question: string) => {
    // 먼저 사용자 메시지를 상태에 추가
    setMessages((prev) => [...prev, { sender: 'user', text: question }]);
    // 그리고 API 호출 시작
    mutation.mutate({ question, accessToken });
  };

  // 현재까지의 메시지 배열과 send 함수를 반환
  return { messages, send };
}
