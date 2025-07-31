import { useFormContext, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextInputField from '../formControls/TextInputField';
import CircleCheckbox from '../formControls/CheckBox';
import get from 'lodash.get';
import { FieldError } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

const Step5Treatment = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const fieldError = get(errors, 'treatmentInfo.category') as
    | FieldError
    | undefined;
  const hasError = !!fieldError;

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
          {hasError && (
            <FormHelperText className="flex w-full justify-start" error>
              {fieldError?.message?.toString()}
            </FormHelperText>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step5Treatment;
