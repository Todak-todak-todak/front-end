import { useTranslation } from 'react-i18next';
import TextInputField from '../formControls/TextInputField';

const Step3Workplace = () => {
  const { t } = useTranslation();

  const fields = [
    {
      name: 'businessInfo.businessNumber',
      label: t('workplace.businessNumber'),
      placeholder: t('workplace.businessNumberPlaceholder'),
    },
    {
      name: 'businessInfo.address',
      label: t('workplace.address'),
      placeholder: t('workplace.addressPlaceholder'),
    },
    {
      name: 'businessInfo.phone',
      label: t('workplace.phone'),
      placeholder: t('workplace.phonePlaceholder'),
    },
    {
      name: 'businessInfo.name',
      label: t('workplace.ownerName'),
      placeholder: t('workplace.ownerNamePlaceholder'),
    },
    {
      name: 'businessInfo.businessName',
      label: t('workplace.businessName'),
      placeholder: t('workplace.businessNamePlaceholder'),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">
        {t('workplace.title')}
      </p>
      <div className="flex flex-col w-full gap-8 py-4">
        {fields.map(({ name, label, placeholder }) => (
          <TextInputField
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
          />
        ))}
      </div>
    </div>
  );
};

export default Step3Workplace;
