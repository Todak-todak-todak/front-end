import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, FormHelperText } from '@mui/material';
import { CustomFormData } from '../types/formTypes';
import CircleCheckbox from '../component/CheckBox';

const Step1Agreement = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CustomFormData>();

  return (
    <div className="px-8 pt-2 space-y-8 bg-white">
      <FormControl
        component="fieldset"
        error={!!errors.consent?.personalAgreement}
        className="w-full"
      >
        <div className="bg-blue-50 border-l-4 border-blue-300 p-3">
          <p className="font-semibold text-sm text-gray-900">
            [필수] 의료기관 대행신청을 위한 개인정보 수집, 제공 동의
          </p>
        </div>
        <p className="mt-2 text-sm ">
          요양급여 신청서 대행 및 제출을 위해 개인정보 수집·이용에 동의합니다.
        </p>

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
                  <span className="text-sm text-gray-800">동의하지 않음</span>
                </label>
                <label className="flex items-center space-x-2">
                  <CircleCheckbox
                    checked={field.value === true}
                    onChange={() => field.onChange(true)}
                  />
                  <span className="text-sm text-gray-800">동의함</span>
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

      <FormControl
        component="fieldset"
        error={!!errors.consent?.agencyAgreement}
        className="w-full"
      >
        <div className="bg-blue-50 border-l-4 border-blue-300 p-3">
          <p className="font-semibold text-sm text-gray-900">
            [필수] 대리인 제공 동의
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-700">
          본인은 선택한 의료기관이 요양급여신청서를 대행하여 <br />
          근로복지공단에 제출하는 것을 위임 동의합니다.{' '}
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
                  <span className="text-sm text-gray-800">동의하지 않음</span>
                </label>
                <label className="flex items-center space-x-2">
                  <CircleCheckbox
                    checked={field.value === true}
                    onChange={() => field.onChange(true)}
                  />
                  <span className="text-sm text-gray-800">동의함</span>
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
