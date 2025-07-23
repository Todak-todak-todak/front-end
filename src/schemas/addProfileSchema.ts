import z from 'zod';

export const addProfileSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  registerNumber: z.string().min(1, '외국인 등록번호를 입력해주세요'),
  phone: z.string().min(1, '전화번호를 입력해주세요'),
  address: z.string().min(1, '주소를 입력해주세요'),
  gender: z.enum(['여자', '남자']).refine((val) => val !== null, {
    message: '성별을 선택해주세요',
  }),
  industry: z.string().refine((val) => val !== null && val !== '', {
    message: '산업 분야를 선택해주세요',
  }),
});

export type AddProfileFormValues = z.infer<typeof addProfileSchema>;
