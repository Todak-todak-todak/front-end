import Button from '@/components/Button';
import { ReactNode } from 'react';

interface DocItem {
  label: string;
  value: string | ReactNode;
}

const jehaejaInfo: DocItem[] = [
  { label: '이름', value: '김성헌' },
  { label: '외국인등록번호', value: '111111-111111' },
  { label: '연락처', value: '010-1111-1111' },
  { label: '성별', value: '남자' },
  { label: '근로자유형', value: '근로자' },
  {
    label: '거주지',
    value: (
      <>
        서울특별시 광진구 <br />
        화양동 10-29
      </>
    ),
  },
];

const companyInfo: DocItem[] = [
  { label: '사업장관리번호', value: '김성헌' },
  { label: '주소', value: '11111-111111' },
  { label: '연락처', value: '010-1111-1111' },
  { label: '사업주명', value: '남자' },
  { label: '사업장명', value: '근로자' },
  {
    label: '주소',
    value: (
      <>
        서울특별시 광진구 <br />
        화양동 10-29
      </>
    ),
  },
];

const injuryInfo: DocItem[] = [
  { label: '유형', value: '업무상 사고' },
  { label: '발생일시', value: '25.02.21' },
  { label: '다친 부위', value: '010-1111-1111' },
  { label: '의료기관', value: '서울병원' },
  { label: '치료 구분', value: '통원' },
  {
    label: '재해발생 경위',
    value: (
      <>
        서울특별시 광진구 <br />
        화양동 10-29
      </>
    ),
  },
];

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-[16px] px-[20px] py-[24px] w-full border-2 border-[#005BFF] shadow-[0_0_0_4px_rgba(0,91,255,0.1)]">
    <p className="text-[20px] font-semibold text-[#191b1c] mb-[16px]">
      {title}
    </p>
    {children}
  </div>
);

const DocDetail = () => {
  return (
    <>
      <div className="w-full h-[180px] bg-[#005BFF] text-white text-[28px] font-bold flex items-center justify-center rounded-b-[20px] leading-[32px] tracking-[-0.75px] mb-[24px]">
        처리완료
      </div>

      <div className="flex flex-col gap-[20px] px-[20px] pb-[100px]">
        <SectionCard title="재해자 정보">
          <InfoList items={jehaejaInfo} />
        </SectionCard>

        <SectionCard title="사업장 정보">
          <InfoList items={companyInfo} />
        </SectionCard>

        <SectionCard title="재해 및 치료 정보">
          <InfoList items={injuryInfo} />
        </SectionCard>

        <Button text="이전으로" />
      </div>
    </>
  );
};

const InfoList = ({ items }: { items: DocItem[] }) => (
  <div className="flex flex-col gap-[20px] text-[17px] leading-[22px]">
    {items.map((item, idx) => (
      <div key={idx} className="flex justify-between items-start">
        <span className="text-[#005BFF] font-medium whitespace-nowrap">
          {item.label}
        </span>
        <span className="text-[#191B1C] text-right max-w-[70%] break-words">
          {item.value}
        </span>
      </div>
    ))}
  </div>
);

export default DocDetail;
