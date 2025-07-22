export const GenderEnum = {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
} as const;

export type Gender = keyof typeof GenderEnum;

export const GenderToKorean = {
  FEMALE: '여자',
  MALE: '남자',
} as const;

export const getKoreanGender = (g: Gender): string => GenderToKorean[g];
