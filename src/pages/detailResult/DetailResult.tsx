import { useTranslation } from 'react-i18next';
import Header from '../../components/common/header/Header';
import DetailExample from '../../components/feature/result/DetailExample';
import Hospital from '../../components/feature/hosList/Hospital';
import DetailPercent from '../../components/feature/result/DetailPercent';
import { useParams } from 'react-router-dom';
import DetailCalculation from '../../components/feature/calculate/DetailCalculation';

const DetailResult = () => {
  const { t } = useTranslation();
  const { reportId } = useParams<{ reportId: string }>();

  const reportIdNum = reportId ? Number(reportId) : null;

  return (
    <>
      <Header title={t('result.title')} />
      <main className="flex-1 overflow-y-auto">
        <DetailPercent reportId={reportIdNum} />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <Hospital />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <DetailCalculation />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
      </main>
      <DetailExample reportId={reportIdNum} />
    </>
  );
};

export default DetailResult;
