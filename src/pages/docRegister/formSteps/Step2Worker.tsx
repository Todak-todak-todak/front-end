import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextInputField from '../component/TextInputField';
import SelectField from '../component/Select';
import CircleCheckbox from '../component/CheckBox';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/doc';

const Step2Worker = () => {
  const { control, setValue } = useFormContext();
  const { t } = useTranslation();

  const { data: userData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  React.useEffect(() => {
    if (userData) {
      setValue('workerInfo.name', userData.data.userName || '');
      setValue('workerInfo.ssn', userData.data.userRegisterNm || '');
      setValue('workerInfo.address', userData.data.userAddress || '');
      setValue('workerInfo.phone', userData.data.userPhoneNm || '');
    }
  }, [userData, setValue]);

  return (
    <div className="h-full flex-1 flex-col gap-4  ">
      <p className="flex font-semibold text-[20px] px-8">{t('worker.title')}</p>
      <div className="flex flex-col w-full gap-8 py-4">
        <TextInputField
          name="workerInfo.name"
          label={t('worker.name')}
          placeholder={t('worker.namePlaceholder')}
        />
        <TextInputField
          name="workerInfo.ssn"
          label={t('worker.ssn')}
          placeholder={t('worker.ssnPlaceholder')}
        />
        <TextInputField
          name="workerInfo.address"
          label={t('worker.address')}
          placeholder={t('worker.addressPlaceholder')}
        />
        <TextInputField
          name="workerInfo.phone"
          label={t('worker.phone')}
          placeholder={t('worker.phonePlaceholder')}
          type="tel"
        />

        <div className="flex flex-col px-8 gap-4 items-start">
          <p className="font-semibold">{t('worker.gender')}</p>
          <Controller
            name="workerInfo.gender"
            control={control}
            render={({ field }) => (
              <div className="flex gap-6">
                <label className="flex items-center">
                  <CircleCheckbox
                    checked={field.value === '남'}
                    onChange={() => field.onChange('남')}
                  />
                  <span className="text-sm text-gray-800">
                    {t('worker.male')}
                  </span>
                </label>
                <label className="flex items-center">
                  <CircleCheckbox
                    checked={field.value === '여'}
                    onChange={() => field.onChange('여')}
                  />
                  <span className="text-sm text-gray-800">
                    {t('worker.female')}
                  </span>
                </label>
              </div>
            )}
          />
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
