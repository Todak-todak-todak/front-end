import { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextInputField from '../formControls/TextInputField';
import SelectField from '../formControls/Select';
import CircleCheckbox from '../formControls/CheckBox';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/doc';
import get from 'lodash.get';
import { FieldError } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

const Step2Worker = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  const { data: userData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  const textFields = [
    {
      name: 'workerInfo.name',
      label: t('worker.name'),
      placeholder: t('worker.namePlaceholder'),
    },
    {
      name: 'workerInfo.ssn',
      label: t('worker.ssn'),
      placeholder: t('worker.ssnPlaceholder'),
    },
    {
      name: 'workerInfo.address',
      label: t('worker.address'),
      placeholder: t('worker.addressPlaceholder'),
    },
    {
      name: 'workerInfo.phone',
      label: t('worker.phone'),
      placeholder: t('worker.phonePlaceholder'),
      type: 'tel',
    },
  ];

  useEffect(() => {
    if (userData) {
      setValue('workerInfo.name', userData.data.userName || '');
      setValue('workerInfo.ssn', userData.data.userRegisterNm || '');
      setValue('workerInfo.address', userData.data.userAddress || '');
      setValue('workerInfo.phone', userData.data.userPhoneNm || '');
    }
  }, [userData, setValue]);

  const fieldError = get(errors, 'workerInfo.gender') as FieldError | undefined;
  const hasError = !!fieldError;

  return (
    <div className="h-full flex-1 flex-col gap-4  ">
      <p className="flex font-semibold text-[20px] px-8">{t('worker.title')}</p>
      <div className="flex flex-col w-full gap-8 py-4">
        {textFields.map(({ name, label, placeholder, type }) => (
          <TextInputField
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
          />
        ))}

        <div className="flex flex-col px-8 gap-4 items-start">
          <p className="font-semibold">{t('worker.gender')}</p>
          <Controller
            name="workerInfo.gender"
            control={control}
            render={({ field }) => (
              <div className="flex gap-6">
                {['남', '여'].map((value) => (
                  <label key={value} className="flex items-center">
                    <CircleCheckbox
                      checked={field.value === value}
                      onChange={() => field.onChange(value)}
                    />
                    <span className="text-sm text-gray-800">
                      {t(`worker.${value === '남' ? 'male' : 'female'}`)}
                    </span>
                  </label>
                ))}
              </div>
            )}
          />
          {hasError && (
            <FormHelperText className="flex w-full justify-start" error>
              {fieldError?.message?.toString()}
            </FormHelperText>
          )}
        </div>

        <SelectField
          name="workerInfo.employmentType"
          label={t('worker.employmentType')}
          options={[
            { value: '', label: t('worker.employmentTypePlaceholder') },
            { value: '근로자', label: t('worker.worker') },
            { value: '노무제공자', label: t('worker.serviceProvider') },
            { value: '중소기업사업주', label: t('worker.smeOwner') },
            {
              value: '중소기업사업주 가족종사자',
              label: t('worker.smeFamilyWorker'),
            },
            { value: '학생연구자', label: t('worker.studentResearcher') },
            { value: '건강손상자녀', label: t('worker.childWithHealthIssues') },
            { value: '특수형태근로종사자', label: t('worker.specialWorker') },
            { value: '현장실습생', label: t('worker.intern') },
          ]}
        />
      </div>
    </div>
  );
};

export default Step2Worker;
