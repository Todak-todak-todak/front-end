import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDetailResult } from '@/apis/result';

interface CalculatorData {
  averageSalary: number;
  accidentType: string;
}

const DetailCalculation = () => {
  const { reportId } = useParams<{ reportId: string }>();
  const reportIdNum = reportId ? Number(reportId) : null;
  const { t } = useTranslation();

  const [calculation, setCalculation] = useState<CalculatorData | null>(null);

  useEffect(() => {
    if (!reportIdNum) return;

    const fetchCalculation = async () => {
      try {
        const res = await getDetailResult(reportIdNum);
        const calcData = res.data.calculator;
        setCalculation({
          averageSalary: calcData.averageSalary,
          accidentType: calcData.carIndustryType.accidentType,
        });
      } catch (err) {
        console.error('[계산 결과 조회 실패]', err);
      }
    };

    fetchCalculation();
  }, [reportIdNum]);

  if (!calculation) {
    return (
      <div className="p-6 text-center text-gray-500">
        {t('result.loading') || '불러오는 중입니다...'}
      </div>
    );
  }

  return (
    <div className="px-[25px] py-[20px]">
      <p
        className="text-[22px] leading-[120%] text-[#191B1C] font-normal mb-[10px] text-left"
        style={{
          WebkitTextStrokeWidth: '0.3px',
          WebkitTextStrokeColor: '#000',
        }}
      >
        {t('result.calculationResult') || '계산 결과'}
      </p>
      <div className="bg-white border border-[#DDD] rounded-[10px] p-4 shadow-sm">
        <div className="mb-3">
          <span className="font-semibold">평균 임금: </span>
          {calculation.averageSalary.toLocaleString()}원
        </div>
        <div>
          <span className="font-semibold">보상 항목: </span>
          {calculation.accidentType}
        </div>
      </div>
    </div>
  );
};

export default DetailCalculation;
