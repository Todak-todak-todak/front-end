import TextInputField from '../component/TextInputField';
import { useTranslation } from 'react-i18next';

const Step3Workplace = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">
        {t('workplace.title')}
      </p>

      <div className="flex flex-col w-full gap-10 py-4">
        <TextInputField
          name="businessInfo.businessNumber"
          label={t('workplace.businessNumber')}
          placeholder={t('workplace.businessNumberPlaceholder')}
        />
        <TextInputField
          name="businessInfo.address"
          label={t('workplace.address')}
          placeholder={t('workplace.addressPlaceholder')}
        />
        <TextInputField
          name="businessInfo.phone"
          label={t('workplace.phone')}
          placeholder={t('workplace.phonePlaceholder')}
        />
        <TextInputField
          name="businessInfo.name"
          label={t('workplace.ownerName')}
          placeholder={t('workplace.ownerNamePlaceholder')}
        />
        <TextInputField
          name="businessInfo.businessName"
          label={t('workplace.businessName')}
          placeholder={t('workplace.businessNamePlaceholder')}
        />
      </div>
    </div>
  );
};

export default Step3Workplace;
