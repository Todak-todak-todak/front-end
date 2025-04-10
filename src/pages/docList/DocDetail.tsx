import Button from '@/components/Button';
import SectionCard from './SectionCard';
import InfoList from './InfoList';
import { companyInfo, injuryInfo, jehaejaInfo } from './DocItem';

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

export default DocDetail;
