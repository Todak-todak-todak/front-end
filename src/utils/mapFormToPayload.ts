import { AddProfileFormValues } from '@/types/formTypes';
import { CompleteUserProfilePayload } from '@/apis/user/user.schema';
import {
  mapLangToKoreanLabel,
  mapIndustryLabelToKorean,
} from '@/utils/auth/mapLangToKoreanLabel';

export const mapFormToPayload = (
  form: AddProfileFormValues
): CompleteUserProfilePayload => {
  const lang = localStorage.getItem('lang') || 'ko';
  return {
    userName: form.name,
    userRegisterNm: form.registerNumber,
    userPhoneNm: form.phone,
    userGender: form.gender!,
    userLanguage: mapLangToKoreanLabel(lang),
    userAddress: form.address,
    industryName: mapIndustryLabelToKorean(form.industry!),
  };
};
