import Box from '@/components/Box';
import { usePostChatReport } from '@/apis/chat';
import { useNavigate } from 'react-router-dom';

interface ChatResponseProps {
  summary: string;
  approveProb: number;
  industry: string;
  examples: string[];
}

const ChatResponse = ({
  summary,
  approveProb,
  industry,
  examples,
}: ChatResponseProps) => {
  const navigate = useNavigate();

  const { mutate } = usePostChatReport();

  const handleClickDetail = () => {
    mutate(
      {
        industry,
        relatedIndustryExamples: examples,
        reportProbability: approveProb.toFixed(1),
      },
      {
        onSuccess: (data) => {
          const chatResultId = data?.data?.chatResultId;
          if (chatResultId) {
            navigate(`/result/${chatResultId}`); // ← 여기!
          } else {
            alert('결과 저장에 실패했습니다.');
          }
        },
        onError: () => {
          alert('오류가 발생했습니다.');
        },
      }
    );
  };

  return (
    <div className="space-y-4">
      <div className="p-2 border-b border-gray-300">
        <div className="font-semibold mb-1">✅ 요약</div>
        <p>{summary}</p>
      </div>
      <div className="p-2 border-b border-gray-300">
        <div className="font-semibold mb-1">📊 산재 인정 확률</div>
        <p className="text-blue-600 font-bold text-lg">
          {approveProb.toFixed(1)}%
        </p>
      </div>
      <div className="p-2 border-b border-gray-300">
        <div className="font-semibold mb-1">🏗️ 산업 분야</div>
        <p>{industry}</p>
      </div>
      <div className="p-2 border-b border-gray-300">
        <div className="font-semibold mb-1">📌 유사 사례</div>
        <ul className="list-disc ml-5 space-y-1">
          {examples.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      </div>
      <button
        className="flex justify-center w-full"
        onClick={handleClickDetail}
      >
        <Box className="mb-2 w-[90%] py-2">🔍 분석결과 자세히 보기</Box>
      </button>
    </div>
  );
};

export default ChatResponse;
