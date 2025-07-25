import i18n from '@/i18n';

export const compensationTypes = [
  { key: 'sickLeave', label: i18n.t('compensation.sickLeave') },
  { key: 'pension', label: i18n.t('compensation.pension') },
  { key: 'survivorPension', label: i18n.t('compensation.survivorPension') },
  { key: 'disability', label: i18n.t('compensation.disability') },
  { key: 'survivorOneTime', label: i18n.t('compensation.survivorOneTime') },
  { key: 'funeral', label: i18n.t('compensation.funeral') },
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
  sickLeave: [i18n.t('compensation.grade.none')],
  pension: [
    i18n.t('compensation.grade.pension.A'),
    i18n.t('compensation.grade.pension.B'),
    i18n.t('compensation.grade.pension.C'),
  ],
  survivorPension: [
    i18n.t('compensation.grade.survivorPension.A'),
    i18n.t('compensation.grade.survivorPension.B'),
    i18n.t('compensation.grade.survivorPension.C'),
    i18n.t('compensation.grade.survivorPension.D'),
    i18n.t('compensation.grade.survivorPension.E'),
  ],
  disability: Object.values(disabilityCodeMap).map((code) =>
    i18n.t(`compensation.grade.disability.${code}`)
  ),
  survivorOneTime: [i18n.t('compensation.grade.none')],
  funeral: [i18n.t('compensation.grade.none')],
};

export const ruleMap: Record<string, string> = {
  sickLeave: i18n.t('compensation.rule.sickLeave'),
  pension: i18n.t('compensation.rule.pension'),
  survivorPension: i18n.t('compensation.rule.survivorPension'),
  survivorOneTime: i18n.t('compensation.rule.survivorOneTime'),
  funeral: i18n.t('compensation.rule.funeral'),
  disability: i18n.t('compensation.rule.disability'),
};
