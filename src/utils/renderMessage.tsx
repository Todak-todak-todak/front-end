import React from 'react';
import ChatResponse from '@/components/feature/chat/ChatResponse';
import { Message } from '@/hooks/useSendMessage';

export function renderMessage(msg: Message) {
  if (msg.type === 'chatResponse') {
    let data;
    try {
      data = JSON.parse(msg.text);
    } catch {
      data = null;
    }
    if (!data) return '잘못된 데이터입니다.';

    return (
      <ChatResponse
        summary={data.summary}
        approveProb={data.approveProb}
        industry={data.industry}
        examples={data.examples}
      />
    );
  }

  // 일반 텍스트 메시지
  return msg.text;
}
