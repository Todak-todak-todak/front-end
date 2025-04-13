import Button from '@/components/Button';
import SectionCard from './SectionCard';
import InfoList from './InfoList';
import { companyInfo, injuryInfo, jehaejaInfo } from './DocItem';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DocDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-[180px] bg-[#005BFF] text-white text-[28px] font-bold flex items-center justify-center rounded-b-[20px] leading-[32px] tracking-[-0.75px] mb-[24px]">
        {t('docDetail.completed')}
      </div>

      <div className="flex flex-col gap-[20px] px-[20px] pb-[100px]">
        <SectionCard title={t('docDetail.section.victim')}>
          <InfoList items={jehaejaInfo} />
        </SectionCard>

        <SectionCard title={t('docDetail.section.company')}>
          <InfoList items={companyInfo} />
        </SectionCard>

        <SectionCard title={t('docDetail.section.injury')}>
          <InfoList items={injuryInfo} />
        </SectionCard>

        <Button
          text={t('docDetail.back')}
          onClick={() => navigate('/doclist')}
        />
      </div>
    </>
  );
};

export default DocDetail;
