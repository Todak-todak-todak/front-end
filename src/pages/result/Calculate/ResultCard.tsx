import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomSelect from '@/components/CustomSelect';
import { calculateAmount } from '@/utils/Calculate/calculateAmount';

interface ResultCardProps {
  inputs: Record<string, string>;
  onRetry: () => void;
}

const compensationTypes = [
  { key: 'sickLeave', label: '휴업급여' },
  { key: 'pension', label: '상병보상연금' },
  { key: 'survivorPension', label: '유족연금' },
  { key: 'disability', label: '장해급여' },
  { key: 'survivorOneTime', label: '유족일시금' },
  { key: 'funeral', label: '장례비' },
];

const gradeMap: Record<string, string[]> = {
  sickLeave: ['등급 없음'],
  pension: ['제1급', '제2급', '제3급'],
  survivorPension: [
    '배우자 1인',
    '배우자 + 자녀 1인',
    '배우자 + 자녀 2인 이상',
    '자녀만 1인',
    '자녀만 2인 이상',
  ],
  disability: Array.from({ length: 14 }, (_, i) => `${i + 1}급`),
  survivorOneTime: ['등급 없음'],
  funeral: ['등급 없음'],
};

const ruleMap: Record<string, string> = {
  sickLeave: '평균임금 × 70%',
  pension: '평균임금 × 중증요양상태 등급별 연금일수',
  survivorPension: '평균임금 × 365일 × 유족수별 지급비율',
  survivorOneTime: '평균임금 × 1300일 또는 1억 원 중 큰 금액',
  funeral: '평균임금 × 120일',
  disability: '평균임금 × 장해등급별 보상일수',
};

const ResultCard = ({ inputs, onRetry }: ResultCardProps) => {
  const { t } = useTranslation();
  const [type, setType] = useState('sickLeave');
  const [grade, setGrade] = useState(gradeMap['sickLeave'][0]);
  const ruleDescription = ruleMap[type] || t(`result.calculator.rule.${type}`);

  const average = Number(inputs.dailyWage || 0);
  const result = Math.floor(calculateAmount(type, grade, average));

  return (
    <div className="bg-white rounded-2xl shadow p-5 space-y-5">
      {/* 탭 메뉴 */}
      <div className="flex justify-between border-b pb-2 overflow-x-auto">
        {compensationTypes.map((c) => (
          <button
            key={c.key}
            onClick={() => {
              setType(c.key);
              setGrade(gradeMap[c.key][0]);
            }}
            className={`text-sm font-semibold whitespace-nowrap pb-1 ${
              type === c.key
                ? 'text-[#0076FF] border-b-2 border-[#0076FF]'
                : 'text-gray-400'
            }`}
          >
            {t(`result.tabs.${c.key}`)}
          </button>
        ))}
      </div>

      {/* 내용 */}
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

          <div className="text-[22px] font-bold text-[#0076FF] text-left">
            {result.toLocaleString()}원
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-2 mt-1 text-left">
          {ruleDescription}
        </p>

        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 py-2 bg-[#0076FF] text-white font-medium rounded-xl shadow-sm active:scale-[0.98] transition"
            onClick={() => {
              console.log('예측하기 클릭');
            }}
          >
            {t('result.calculator.calculate')}
          </button>

          <button
            className="flex-1 py-2 border border-[#0076FF] text-[#0076FF] font-medium rounded-xl"
            onClick={onRetry}
          >
            {t('result.calculator.retry')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
