import { useFormContext, Controller } from 'react-hook-form';
import { FormValues } from './Add';
import { useTranslation } from 'react-i18next';

const GenderSelector = () => {
  const { control } = useFormContext<FormValues>();
  const { t } = useTranslation();

  const options: { label: string; value: string }[] = [
    { label: t('gender.female'), value: '여자' },
    { label: t('gender.male'), value: '남자' },
  ];

  return (
    <Controller
      control={control}
      name="gender"
      rules={{ required: true }}
      render={({ field }) => (
        <div className="flex flex-col gap-3">
          <p className="text-[#111] text-[18px]">{t('gender.label')}</p>
          <div className="flex gap-4">
            {options.map(({ label, value: genderValue }) => (
              <button
                key={genderValue}
                type="button"
                onClick={() => field.onChange(genderValue)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  field.value === genderValue
                    ? 'bg-mainBlue text-white border-mainBlue'
                    : 'bg-[#D9D9D9] text-[#444] border-[#D9D9D9]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default GenderSelector;
