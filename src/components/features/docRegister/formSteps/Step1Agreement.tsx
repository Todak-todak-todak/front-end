import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomFormData } from '@/types/formTypes';
import CircleCheckbox from '../formControls/CheckBox';

const Step1Agreement = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CustomFormData>();

  const { t } = useTranslation();

  const agreementFields = [
    {
      name: 'consent.personalAgreement' as const,
      title: t('agreement.personalTitle'),
      description: t('agreement.personalDescription'),
      error: errors.consent?.personalAgreement,
    },
    {
      name: 'consent.agencyAgreement' as const,
      title: t('agreement.agencyTitle'),
      description: t('agreement.agencyDescription'),
      error: errors.consent?.agencyAgreement,
    },
  ];

  return (
    <div className="h-full px-8 pt-2 space-y-8">
      {agreementFields.map((fieldData) => (
        <FormControl
          key={fieldData.name}
          component="fieldset"
          error={!!fieldData.error}
          className="w-full"
        >
          <div className="bg-blue-50 border-l-4 border-blue-300 p-3">
            <p className="font-semibold text-sm text-gray-900">
              {fieldData.title}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-700">{fieldData.description}</p>

          <div className="flex gap-6 mt-4">
            <Controller
              name={fieldData.name}
              control={control}
              render={({ field }) => (
                <div className="flex w-full justify-end gap-4">
                  <label className="flex items-center space-x-2">
                    <CircleCheckbox
                      checked={field.value === false}
                      onChange={() => field.onChange(false)}
                    />
                    <span className="text-sm text-gray-800">
                      {t('agreement.disagree')}
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <CircleCheckbox
                      checked={field.value === true}
                      onChange={() => field.onChange(true)}
                    />
                    <span className="text-sm text-gray-800">
                      {t('agreement.agree')}
                    </span>
                  </label>
                </div>
              )}
            />
          </div>
          {fieldData.error && (
            <FormHelperText className="flex w-full justify-start">
              {fieldData.error.message?.toString()}
            </FormHelperText>
          )}
        </FormControl>
      ))}
    </div>
  );
};

export default Step1Agreement;
