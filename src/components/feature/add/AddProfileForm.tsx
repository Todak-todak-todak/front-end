import { FormProvider } from 'react-hook-form';
import Header from '@/components/common/header/Header';
import Button from '@/components/common/button/Button';
import InputSection from './InputSection';
import GenderSelector from './GenderSelector';
import IndustryDropdown from './IndustryDropdown';
import { useAddProfileForm } from '@/hooks/useAddProfileForm';
import { useTranslation } from 'react-i18next';

const AddProfileForm = () => {
  const { t } = useTranslation();
  const { methods, isPending, onSubmit } = useAddProfileForm();

  return (
    <div className="overflow-y-auto">
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="px-[30px] pb-[23px] flex flex-col justify-between"
        >
          <div className="">
            <div className="text-[#111111] text-[24px] font-semibold leading-[34px] tracking-[-0.6px] text-left pb-[30px]">
              {t('form.informationTitle')}
            </div>
            <div className="flex flex-col gap-4 text-left">
              <InputSection />
              <GenderSelector />
              <IndustryDropdown />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              text={t('form.next')}
              disabled={!methods.formState.isValid || isPending}
              type="submit"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProfileForm;
