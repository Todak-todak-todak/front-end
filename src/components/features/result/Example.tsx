import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getResult } from '@/apis/result';

interface ExampleProps {
  chatResultId: number | null;
}

const Example = ({ chatResultId }: ExampleProps) => {
  const { t } = useTranslation();

  const [examples, setExamples] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string>('');
  const [name, setName] = useState('');
  const [modalContent, setModalContent] = useState<string | null>(null);

  useEffect(() => {
    if (!chatResultId) return;
    // 산업 & 예시 불러오기
    const fetchResult = async () => {
      try {
        const res = await getResult(chatResultId);
        setExamples(res.data.relatedIndustryExamples);
        setIndustry(res.data.industry);
        setName(res.data.userName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResult();
  }, [chatResultId]);

  return (
    <div className="flex flex-col px-[25px] py-[20px]">
      <p
        className="text-xl leading-[120%] text-[#191B1C] font-normal mb-[10px] text-left"
        style={{
          WebkitTextStrokeWidth: '0.3px',
          WebkitTextStrokeColor: '#000',
        }}
      >
        {t('result.similarCase', { name })}
      </p>

      <div className="overflow-x-auto no-scrollbar w-full">
        <div className="flex gap-[20px] pt-[40px] pl-[5px] pr-[10px]">
          {examples.map((content, i) => (
            <div
              key={i}
              className="relative min-w-[calc(50%-5px)] max-w-[calc(50%-5px)]  flex-shrink-0 bg-white px-[14px] pt-[30px] pb-[30px] text-center flex flex-col justify-center items-center"
              style={{
                border: '1px solid #0158FE',
                borderRadius: '0px 10px 10px 10px',
              }}
            >
              <div className="absolute -top-[35px] left-[0px] z-10">
                <div className="bg-[#0076FF] text-white text-[14px] font-semibold px-[12px] py-[6px] rounded-t-[10px] border border-[#0076FF]">
                  {industry}
                </div>
              </div>

              <button
                onClick={() => content && setModalContent(content)}
                className="text-[14px] line-clamp-4 text-[#191B1C] leading-[1.5] whitespace-pre-line"
              >
                {content}
              </button>
            </div>
          ))}
        </div>
      </div>
      {modalContent && (
        <div className="fixed inset-0 z-[100000] bg-black bg-opacity-50 flex items-center justify-center p-10">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              &times;
            </button>
            <p className="text-sm whitespace-pre-wrap ">{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Example;
