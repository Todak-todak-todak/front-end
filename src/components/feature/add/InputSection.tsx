import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/input/Input';
import { AddProfileFormValues } from '@/schemas/addProfileSchema';
import { useTranslation } from 'react-i18next';

const InputSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddProfileFormValues>();
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">{t('input.name.label')}</p>
        <Input
          type="text"
          {...register('name')}
          placeholder={t('input.name.placeholder')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">
          {t('input.registerNumber.label')}
        </p>
        <Input
          type="text"
          {...register('registerNumber')}
          placeholder={t('input.registerNumber.placeholder')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">{t('input.phone.label')}</p>
        <Input
          type="text"
          {...register('phone')}
          placeholder={t('input.phone.placeholder')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">{t('input.address.label')}</p>
        <Input
          type="text"
          {...register('address')}
          placeholder={t('input.address.placeholder')}
        />
      </div>

      {errors.name && (
        <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
      )}
    </>
  );
};

export default InputSection;
