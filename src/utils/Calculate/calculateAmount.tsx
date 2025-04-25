const disabilityDays: Record<string, number> = {
  '1급': 1474,
  '2급': 1309,
  '3급': 1155,
  '4급': 1012,
  '5급': 869,
  '6급': 737,
  '7급': 616,
  '8급': 495,
  '9급': 385,
  '10급': 297,
  '11급': 220,
  '12급': 154,
  '13급': 99,
  '14급': 55,
};

const pensionDays: Record<string, number> = {
  // 상병 보상 연금
  제1급: 329,
  제2급: 291,
  제3급: 257,
};

const survivorPensionRates: Record<string, number> = {
  '배우자 1인': 0.52,
  '배우자 + 자녀 1인': 0.6,
  '배우자 + 자녀 2인 이상': 0.67,
  '자녀만 1인': 0.4,
  '자녀만 2인 이상': 0.5,
};

export function calculateAmount(
  type: string,
  grade: string,
  average: number
): number {
  switch (type) {
    case 'sickLeave':
      return average * 0.7;

    case 'disability':
      return average * (disabilityDays[grade] || 0);

    case 'pension':
      return average * (pensionDays[grade] || 0);

    case 'survivorPension':
      return average * 365 * (survivorPensionRates[grade] || 0);

    case 'survivorOneTime': {
      const calculated = average * 1300;
      return Math.max(calculated, 100000000);
    }

    case 'funeral':
      return average * 120;

    default:
      return 0;
  }
}
