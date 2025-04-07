import BottomSheet from './BottomSheet';
import { useState } from 'react';
import SendIcon from '@assets/images/Chat/Send.svg?react';
import ListIcon from '@assets/images/Chat/List.svg?react';

const ChatInput = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleBottomSheetTextClick = (text: string) => {
    setInputValue(text);
    setIsOpen(false);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    console.log('전송된 메시지:', inputValue);
    setInputValue('');
  };

  return (
    <div className="flex flex-col bottom-0 ">
      {isOpen && (
        <div className="flex justify-center">
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col items-start gap-4 px-2 ">
              <button
                className="text-sm"
                onClick={() =>
                  handleBottomSheetTextClick(
                    '출퇴근길 사고도 산재로 인정되나요?'
                  )
                }
              >
                출퇴근길 사고도 산재로 인정되나요?
              </button>
              <button
                className="text-sm"
                onClick={() =>
                  handleBottomSheetTextClick(
                    '산재 신청할 때 필요한 서류는 무엇인가요?'
                  )
                }
              >
                진단받고 퇴사하면 산재 보상 받을 수 있나요?
              </button>
              <button
                className="text-sm"
                onClick={() =>
                  handleBottomSheetTextClick(
                    '진단받고 퇴사하면 산재 보상 받을 수 있나요?'
                  )
                }
              >
                출퇴근길 사고도 산재로 인정되나요?
              </button>
            </div>
          </BottomSheet>
        </div>
      )}

      <div className="h-[5rem] flex items-center justify-between px-4 z-[1000] bg-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          <ListIcon width={20} height={28} />
        </button>
        <textarea
          className="bg-[#F6F7F9] py-3 px-3 w-[80%] rounded-3xl placeholder-mainGray  font-normal resize-none overflow-hidden focus:outline-none"
          placeholder="AI 챗봇에게 질문해주세요."
          rows={1}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={() => handleSend()}>
          <SendIcon width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
