import React from 'react';
import Box from '@/components/Box';
import NextIcon from '@assets/images/Chat/Next.svg?react';
import { useTranslation } from 'react-i18next';
import { useGetChatList } from '@/apis/chat';
import { useNavigate } from 'react-router-dom';

interface ChatProp {
  reportDate: string;
  reportId: number;
}

const ListBox: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useGetChatList();
  const navigate = useNavigate();

  const handleClick = (reportId: number) => {
    navigate(`/detailresult/${reportId}`);
  };

  const reversedData = data ? [...data].reverse() : [];

  return (
    <div className="flex flex-col gap-4 px-4">
      <p className="flex items-start text-xl font-bold px-4">
        {t('listBox.recentAnalysisResults')}
      </p>
      <div className="flex flex-col gap-4 px-4  pt-1 pb-2  ">
        {reversedData.map((chat: ChatProp) => (
          <Box key={chat.reportId} className="flex gap-4 h-16 items-center">
            <div className="flex flex-col h-20 flex-[7] items-start justify-center p-4">
              <p className="font-semibold text-[18px]">{chat.reportDate}</p>
            </div>
            <div className="flex flex-[3] h-20 p-4 justify-end items-center">
              <button onClick={() => handleClick(chat.reportId)}>
                <NextIcon width={16} height={16} />
              </button>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ListBox;
