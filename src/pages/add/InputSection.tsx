import { useFormContext } from 'react-hook-form';
import Input from '@/components/Input';
import { FormValues } from './Add';
import { useTranslation } from 'react-i18next';

const InputSection = () => {
  const { register } = useFormContext<FormValues>();
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">{t('input.name.label')}</p>
        <Input
          type="text"
          {...register('name', { required: true })}
          placeholder={t('input.name.placeholder')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">
          {t('input.registerNumber.label')}
        </p>
        <Input
          type="text"
          {...register('registerNumber', { required: true })}
          placeholder={t('input.registerNumber.placeholder')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">{t('input.phone.label')}</p>
        <Input
          type="text"
          {...register('phone', { required: true })}
          placeholder={t('input.phone.placeholder')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">{t('input.address.label')}</p>
        <Input
          type="text"
          {...register('address', { required: true })}
          placeholder={t('input.address.placeholder')}
        />
      </div>
    </>
  );
};

export default InputSection;
