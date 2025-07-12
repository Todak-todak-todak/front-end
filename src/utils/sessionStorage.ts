export type PersistedMessage = {
  sender: 'user' | 'bot';
  text: string; // 무조건 문자열
  type?: 'normal' | 'chatResponse';
};

const STORAGE_KEY = 'chat_messages';

export function saveMessagesToSession(messages: PersistedMessage[]) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export function loadMessagesFromSession(): PersistedMessage[] {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}
