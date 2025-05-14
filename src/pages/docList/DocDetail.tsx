import Button from '@/components/Button';
import SectionCard from './SectionCard';
import InfoList from './InfoList';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDocDetail } from '@/apis/doc';
import { useQuery } from '@tanstack/react-query';

const DocDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { documentId } = useParams<{ documentId: string }>();

  const { data } = useQuery({
    queryKey: ['docDetail', documentId],
    queryFn: () => getDocDetail(documentId!),
    enabled: !!documentId,
  });

  const detail = data?.data;

  const mappedVictimInfo = detail
    ? [
        { label: 'docDetail.label.name', value: detail.userName },
        { label: 'docDetail.label.id', value: detail.userRegisterNm },
        { label: 'docDetail.label.phone', value: detail.docCompanyPhoneNm },
        {
          label: 'docDetail.label.gender',
          value: detail.userGender === 'MALE' ? '남자' : '여자',
        },
        { label: 'docDetail.label.workerType', value: detail.docType },
        {
          label: 'docDetail.label.address',
          value: detail.userAddress,
        },
      ]
    : [];

  const mappedCompanyInfo = detail
    ? [
        { label: 'docDetail.label.companyName', value: detail.docCompanyNm },
        { label: 'docDetail.label.address', value: detail.docCompanyAddress },
        { label: 'docDetail.label.phone', value: detail.docCompanyPhoneNm },
        { label: 'docDetail.label.ceo', value: detail.docOwnerName },
        {
          label: 'docDetail.label.businessType',
          value: detail.docBusinessName,
        },
      ]
    : [];

  const mappedInjuryInfo = detail
    ? [
        { label: 'docDetail.label.type', value: detail.disaster },
        { label: 'docDetail.label.date', value: detail.docDisasterDate },
        { label: 'docDetail.label.part', value: detail.docInjury },
        { label: 'docDetail.label.hospital', value: detail.docHospital },
        { label: 'docDetail.label.treatmentType', value: detail.therapy },
        {
          label: 'docDetail.label.detail',
          value: detail.docReason,
        },
      ]
    : [];

  return (
    <>
      <div
        className={`w-full h-[180px] ${
          detail?.docWhether ? 'bg-[#005BFF]' : 'bg-gray-400'
        } text-white text-[28px] font-bold flex items-center justify-center rounded-b-[20px] leading-[32px] tracking-[-0.75px] mb-[24px]`}
      >
        {detail?.docWhether
          ? t('docDetail.completed')
          : t('docDetail.inProgress')}
      </div>

      <div className="flex flex-col gap-[20px] px-[20px] pb-[100px]">
        <SectionCard title={t('docDetail.section.victim')}>
          <InfoList items={mappedVictimInfo} />
        </SectionCard>

        <SectionCard title={t('docDetail.section.company')}>
          <InfoList items={mappedCompanyInfo} />
        </SectionCard>

        <SectionCard title={t('docDetail.section.injury')}>
          <InfoList items={mappedInjuryInfo} />
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
