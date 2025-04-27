import { z } from 'zod';

//step1
export const consentSchema = z.object({
  personalAgreement: z.boolean().refine((val) => val === true, {
    message: '동의가 필요합니다.',
  }),
  agencyAgreement: z.boolean().refine((val) => val === true, {
    message: '동의가 필요합니다.',
  }),
});

// Step2
export const workerInfoSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  ssn: z.string().min(1, '외국인등록번호를 입력해주세요'),
  address: z.string().min(1, '거주지를 입력해주세요.'),
  phone: z.string().min(10, '전화번호를 입력해주세요.'),
  gender: z.union([z.literal('남'), z.literal('여')]),
  employmentType: z.string().min(1, '근로자유형을 알려주세요'),
});

// Step 3
export const businessInfoSchema = z.object({
  businessNumber: z.string().min(1, '사업장관리번호를 입력해주세요'),
  address: z.string().min(1, '사업장 주소를 입력해주세요.'),
  phone: z.string().min(1, '사업장 연락처를 입력해주세요'),
  name: z.string().min(1, '사업장명을 입력해주세요.'),
  businessName: z.string().min(1, '사업장명을 입력해주세요'),
});

// Step4
export const accidentInfoSchema = z.object({
  type: z.string().min(1, '유형을 선택해주세요'),
  date: z.string().min(1, '재해발생일시를 입력해주세요.'),
  details: z.string().min(1, '재해발생 경위를 알려주세요.'),
});

// Step5
export const treatmentInfoSchema = z.object({
  bodyPart: z.string().min(1, '다친 부위를 입력해주세요'),
  hospital: z.string().min(1, '의료기관을 입력해주세요.'),
  category: z.union([z.literal('입원'), z.literal('통원')]),
});

//Step6 제출용
export const fullFormSchema = z.object({
  // consent: consentSchema,
  workerInfo: workerInfoSchema,
  businessInfo: businessInfoSchema,
  accidentInfo: accidentInfoSchema,
  treatmentInfo: treatmentInfoSchema,
});
