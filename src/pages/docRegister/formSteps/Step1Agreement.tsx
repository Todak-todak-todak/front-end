import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, FormHelperText } from '@mui/material';
import { CustomFormData } from '../types/formTypes';
import CircleCheckbox from '../component/CheckBox';
import { useTranslation } from 'react-i18next';

const Step1Agreement = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CustomFormData>();

  const { t } = useTranslation();

  return (
    <div className=" h-full px-8 pt-2 space-y-8 ">
      {/* 개인정보 동의 */}
      <FormControl
        component="fieldset"
        error={!!errors.consent?.personalAgreement}
        className="w-full"
      >
        <div className="bg-blue-50 border-l-4 border-blue-300 p-3">
          <p className="font-semibold text-sm text-gray-900">
            {t('agreement.personalTitle')}
          </p>
        </div>
        <p className="mt-2 text-sm ">{t('agreement.personalDescription')}</p>

        <div className="flex gap-6 mt-4">
          <Controller
            name="consent.personalAgreement"
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
        {errors.consent?.personalAgreement && (
          <FormHelperText className=" flex w-full justify-end ">
            {errors.consent.personalAgreement.message?.toString()}
          </FormHelperText>
        )}
      </FormControl>

      {/* 대리인 동의 */}
      <FormControl
        component="fieldset"
        error={!!errors.consent?.agencyAgreement}
        className="w-full"
      >
        <div className="bg-blue-50 border-l-4 border-blue-300 p-3">
          <p className="font-semibold text-sm text-gray-900">
            {t('agreement.agencyTitle')}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-700">
          {t('agreement.agencyDescription')}
        </p>

        <div className="flex gap-6 mt-4">
          <Controller
            name="consent.agencyAgreement"
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
        {errors.consent?.agencyAgreement && (
          <FormHelperText className=" flex w-full justify-end">
            {errors.consent.agencyAgreement.message?.toString()}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default Step1Agreement;
