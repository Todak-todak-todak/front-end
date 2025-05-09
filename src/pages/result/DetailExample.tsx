import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getDetailResult } from '@/apis/result';

interface DetailExampleProps {
  reportId: number | null;
}

const DetailExample = ({ reportId }: DetailExampleProps) => {
  const { t } = useTranslation();

  const [examples, setExamples] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string>('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (!reportId) return;
    const fetchResult = async () => {
      try {
        const res = await getDetailResult(reportId);
        const safeExamples = res.data.chatResult.relatedIndustryExamples ?? [];
        setExamples(safeExamples);
        console.log();
        setIndustry(res.data.chatResult.industry);
        setName(res.data.chatResult.userName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResult();
  }, [reportId]);

  return (
    <div className="flex flex-col px-[25px] py-[20px] pb-[100px]">
      <p
        className="text-[22px] leading-[120%] text-[#191B1C] font-normal mb-[10px] text-left"
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
              className="relative min-w-[calc(50%-5px)] max-w-[calc(50%-5px)] h-[200px] flex-shrink-0 bg-white px-[14px] pt-[30px] pb-[30px] text-center flex flex-col justify-center items-center"
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

              <p className="text-[14px] text-[#191B1C] leading-[1.5] whitespace-pre-line">
                {content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailExample;
