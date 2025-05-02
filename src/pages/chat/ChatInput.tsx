import BottomSheet from './BottomSheet';
import { useState } from 'react';
import SendIcon from '@assets/images/Chat/Send.svg?react';
import ListIcon from '@assets/images/Chat/List.svg?react';
import { useTranslation } from 'react-i18next';

const ChatInput = ({
  isOpen,
  setIsOpen,
  onSend,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSend: (message: string) => void;
}) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const handleBottomSheetTextClick = (text: string) => {
    setInputValue(text);
    setIsOpen(false);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    onSend(inputValue);
    setInputValue('');
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col bottom-0">
      {isOpen && (
        <div className="flex justify-center">
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col items-start gap-4 px-2 ">
              <button
                className="text-sm"
                onClick={() =>
                  handleBottomSheetTextClick(
                    t('chatInput.bottomSheet.question1')
                  )
                }
              >
                {t('chatInput.bottomSheet.question1')}
              </button>
              <button
                className="text-sm"
                onClick={() =>
                  handleBottomSheetTextClick(
                    t('chatInput.bottomSheet.question2')
                  )
                }
              >
                {t('chatInput.bottomSheet.question2')}
              </button>
              <button
                className="text-sm"
                onClick={() =>
                  handleBottomSheetTextClick(
                    t('chatInput.bottomSheet.question3')
                  )
                }
              >
                {t('chatInput.bottomSheet.question3')}
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
          className="bg-[#F6F7F9] py-3 px-3 w-[80%] rounded-3xl placeholder-mainGray font-normal resize-none overflow-hidden focus:outline-none"
          placeholder={t('chatInput.placeholder')}
          rows={1}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSend}>
          <SendIcon width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
