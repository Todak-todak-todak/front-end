export const compensationTypes = [
  { key: 'sickLeave', label: '휴업급여' },
  { key: 'pension', label: '상병보상연금' },
  { key: 'survivorPension', label: '유족연금' },
  { key: 'disability', label: '장해급여' },
  { key: 'survivorOneTime', label: '유족일시금' },
  { key: 'funeral', label: '장례비' },
];

export const disabilityCodeMap: Record<string, string> = {
  '1급': 'A',
  '2급': 'B',
  '3급': 'C',
  '4급': 'D',
  '5급': 'E',
  '6급': 'F',
  '7급': 'G',
  '8급': 'H',
  '9급': 'I',
  '10급': 'J',
  '11급': 'K',
  '12급': 'L',
  '13급': 'M',
  '14급': 'N',
};

export const pensionCodeMap: Record<string, string> = {
  제1급: 'A',
  제2급: 'B',
  제3급: 'C',
};

export const survivorPensionCodeMap: Record<string, string> = {
  '배우자 1인': 'A',
  '배우자 + 자녀 1인': 'B',
  '배우자 + 자녀 2인 이상': 'C',
  '자녀만 1인': 'D',
  '자녀만 2인 이상': 'E',
};

export const gradeMap: Record<string, string[]> = {
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

export const ruleMap: Record<string, string> = {
  sickLeave: '평균임금 × 70%',
  pension: '평균임금 × 중증요양상태 등급별 연금일수',
  survivorPension: '평균임금 × 365일 × 유족수별 지급비율',
  survivorOneTime: '평균임금 × 1300일 또는 1억 원 중 큰 금액',
  funeral: '평균임금 × 120일',
  disability: '평균임금 × 장해등급별 보상일수',
};
