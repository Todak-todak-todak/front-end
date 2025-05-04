import Box from '@/components/Box';
import NextIcon from '@assets/images/Chat/Next.svg?react';
import { useTranslation } from 'react-i18next';
import { useGetChatList } from '@/apis/chat';
import { useNavigate } from 'react-router-dom';

interface chatProp {
  reportDate: string;
  reportId: number;
}

const ListBox = () => {
  const { t } = useTranslation();
  const { data } = useGetChatList();
  const navigate = useNavigate();

  const handleClick = (reportId: number) => {
    console.log('채팅분석페이지 이동');
    navigate(`/detailresult/${reportId}`);
    console.log(reportId);
  };

  return (
    <div className="flex flex-col gap-4 px-4 h-screen">
      <p className="flex items-start text-xl font-bold px-4">
        {t('listBox.recentAnalysisResults')}
      </p>
      <div className="flex flex-col gap-4 px-4 h-[22rem] overflow-y-auto pb-2 pt-1">
        {data &&
          data.map((chat: chatProp) => (
            <Box key={chat?.reportId} className="flex gap-4 h-20">
              <div className="flex flex-col flex-[7] items-start justify-center p-4">
                <p className="font-semibold text-[18px]">{chat?.reportDate}</p>
              </div>
              <div className="flex flex-[3] p-4 justify-end items-center">
                <button onClick={() => handleClick(chat?.reportId)}>
                  <NextIcon />
                </button>
              </div>
            </Box>
          ))}
      </div>
    </div>
  );
};
export default ListBox;
