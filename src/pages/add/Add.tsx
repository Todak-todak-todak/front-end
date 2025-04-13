import { useForm, FormProvider } from 'react-hook-form';
import Header from '@/components/Header';
import Button from '@/components/Button';
import InputSection from './InputSection';
import GenderSelector from '@/pages/add/GenderSelector';
import IndustryDropdown from '@/pages/add/IndustryDropdown';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    navigate('/home');
  };

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-[30px] pb-[43px] flex flex-col justify-between"
        >
          <div>
            <div className="text-[#111111] text-[28px] leading-[34px] tracking-[-0.6px] text-left pb-[30px] pt-[20px]">
              <p>{t('form.informationTitle')}</p>
            </div>

            <div className="flex flex-col gap-4 text-left">
              <InputSection />
              <GenderSelector />
              <IndustryDropdown />
            </div>
          </div>

          <div className="flex justify-center mt-[93px]">
            <Button text={t('form.next')} disabled={!isValid} type="submit" />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Add;
