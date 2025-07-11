import { useForm, FormProvider } from 'react-hook-form';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import InputSection from './InputSection';
import GenderSelector from '@/pages/add/GenderSelector';
import IndustryDropdown from '@/pages/add/IndustryDropdown';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { completeUserProfile } from '@/apis/user';
import { mapLangToKoreanLabel } from '@/utils/auth/mapLangToKoreanLabel';
import { mapIndustryLabelToKorean } from '@/utils/auth/mapLangToKoreanLabel';

export type FormValues = {
  name: string;
  registerNumber: string;
  phone: string;
  address: string;
  gender: 'FEMALE' | 'MALE' | null;
  industry: string | null;
};

const Add = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    console.log('선택된 언어', savedLang);
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      registerNumber: '',
      phone: '',
      address: '',
      gender: null,
      industry: null,
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    const langCode = localStorage.getItem('lang') || 'ko';
    const userLanguage = mapLangToKoreanLabel(langCode);
    const payload = {
      userName: data.name,
      userRegisterNm: data.registerNumber,
      userPhoneNm: data.phone,
      userGender: data.gender!,
      userLanguage,
      userAddress: data.address,
      industryName: mapIndustryLabelToKorean(data.industry!),
    };

    Object.entries(payload).forEach(([key, value]) =>
      console.log(`  ${key}: ${value}`)
    );

    try {
      const res = await completeUserProfile(payload);
      console.log('제출 성공:', res);
      navigate('/home');
    } catch (err) {
      console.error('제출 실패:', err);
    }
  };

  return (
    <div className="overflow-y-auto">
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-[30px] pb-[23px] flex flex-col justify-between"
        >
          <div className="">
            <div className="text-[#111111] text-[24px] font-semibold leading-[34px] tracking-[-0.6px] text-left pb-[30px]">
              <p>{t('form.informationTitle')}</p>
            </div>

            <div className="flex flex-col gap-4 text-left ">
              <InputSection />
              <GenderSelector />
              <IndustryDropdown />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button text={t('form.next')} disabled={!isValid} type="submit" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Add;
