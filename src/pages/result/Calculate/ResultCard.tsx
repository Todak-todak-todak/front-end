import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomSelect from '@/components/CustomSelect';
import { calculateAmount } from '@/utils/Calculate/calculateAmount';
import { postResult } from '@/apis/result';
import { ResultRequestBody } from '@/apis/result';
import { Dispatch, SetStateAction } from 'react';
import {
  compensationTypes,
  disabilityCodeMap,
  pensionCodeMap,
  survivorPensionCodeMap,
  gradeMap,
  ruleMap,
} from './CompensationMap';

interface ResultCardProps {
  inputs: Record<string, string>;
  onRetry: () => void;
  setCalculatorId: Dispatch<SetStateAction<number | null>>;
  setChatResultId: Dispatch<SetStateAction<number | null>>;
}

const ResultCard = ({
  inputs,
  onRetry,
  setCalculatorId,
  setChatResultId,
}: ResultCardProps) => {
  const { t } = useTranslation();
  const [type, setType] = useState('sickLeave');
  const [grade, setGrade] = useState(gradeMap['sickLeave'][0]);
  const ruleDescription = ruleMap[type] || t(`result.calculator.rule.${type}`);
  const [showResult, setShowResult] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState<number | null>(null);

  const average = Number(inputs.dailyWage || 0);

  const handlePost = () => {
    const calculated = Math.floor(calculateAmount(type, grade, average));
    setCalculatedResult(calculated);
    setShowResult(true);

    const body: ResultRequestBody = {
      accidentType: t(`result.tabs.${type}`),
      averageSalary: calculated,
    };

    if (type === 'disability') {
      body.disabilityType = disabilityCodeMap[grade] || grade;
    } else if (type === 'pension') {
      body.severeType = pensionCodeMap[grade] || grade;
    } else if (type === 'survivorPension') {
      body.familyType = survivorPensionCodeMap[grade] || grade;
    }

    console.log('[POST 전송 바디]', body);

    postResult(body)
      .then((res) => {
        console.log('[POST 성공 응답]', res);
        setCalculatorId(res.data.calculatorId);
        setChatResultId(res.data.reportId);
        setCalculatedResult(calculated);
        setShowResult(true);
      })
      .catch((err) => {
        console.error('[POST 실패]', err);
      });
  };

  return (
    <div className="bg-white rounded-2xl shadow p-5 space-y-5">
      <div className="flex justify-between border-b pb-2 overflow-x-auto gap-x-2 scrollbar-hide">
        {compensationTypes.map((c) => (
          <button
            key={c.key}
            onClick={() => {
              setType(c.key);
              setGrade(gradeMap[c.key][0]);
            }}
            className={`relative text-sm font-semibold whitespace-nowrap ${
              type === c.key
                ? 'text-[#0076FF] after:content-[""] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[2px] after:bg-[#0076FF]'
                : 'text-gray-400'
            }`}
          >
            {t(`result.tabs.${c.key}`)}
          </button>
        ))}
      </div>

      <div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold whitespace-nowrap">
              {t(`result.tabs.${type}`)}
            </h2>
            <div className="min-w-[140px]">
              <CustomSelect
                value={grade}
                options={gradeMap[type]}
                onChange={setGrade}
              />
            </div>
          </div>

          {showResult && (
            <div className="text-xl font-bold text-[#0076FF] text-left">
              {calculatedResult?.toLocaleString()} {t(`result.won`)}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-2 mt-1 text-left">
          {ruleDescription}
        </p>

        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 py-2 bg-[#0076FF] text-white font-medium rounded-xl shadow-sm active:scale-[0.98] transition"
            onClick={handlePost}
          >
            {t('result.calculator.calculate')}
          </button>

          <button
            className="flex-1 py-2 border border-[#0076FF] text-[#0076FF] font-medium rounded-xl"
            onClick={() => {
              setShowResult(false);
              onRetry();
            }}
          >
            {t('result.calculator.retry')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
