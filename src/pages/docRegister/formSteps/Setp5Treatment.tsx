import { useFormContext, Controller } from 'react-hook-form';
import TextInputField from '../component/TextInputField';
import CircleCheckbox from '../component/CheckBox';
import { useTranslation } from 'react-i18next';

const Step5Treatment = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">
        {t('treatment.title')}
      </p>
      <div className="flex flex-col w-full gap-8 py-4">
        <TextInputField
          name="treatmentInfo.bodyPart"
          label={t('treatment.bodyPartLabel')}
          placeholder={t('treatment.bodyPartPlaceholder')}
        />

        <TextInputField
          name="treatmentInfo.hospital"
          label={t('treatment.hospitalLabel')}
          placeholder={t('treatment.hospitalPlaceholder')}
        />

        <div className="flex flex-col px-8 gap-4 items-start">
          <p className="font-semibold">{t('treatment.categoryLabel')}</p>
          <Controller
            name="treatmentInfo.category"
            control={control}
            render={({ field }) => (
              <div className="flex gap-6">
                <label className="flex items-center">
                  <CircleCheckbox
                    checked={field.value === '입원'}
                    onChange={() => field.onChange('입원')}
                  />
                  <span className="text-sm text-gray-800">
                    {t('treatment.categoryOptions.admission')}
                  </span>
                </label>
                <label className="flex items-center">
                  <CircleCheckbox
                    checked={field.value === '통원'}
                    onChange={() => field.onChange('통원')}
                  />
                  <span className="text-sm text-gray-800">
                    {t('treatment.categoryOptions.outpatient')}
                  </span>
                </label>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Step5Treatment;
