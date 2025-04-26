import TextInputField from '../component/TextInputField';
import SelectField from '../component/Select';
import TextAreaField from '../component/TextAreaField';
import { useTranslation } from 'react-i18next';

const Step3Accident = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">
        {t('accident.title')}
      </p>

      <div className="flex flex-col w-full gap-8 py-4">
        <SelectField
          name="accidentInfo.type"
          label={t('accident.typeLabel')}
          options={t('accident.typeOptions', { returnObjects: true }).map(
            (option: any) => ({
              value: option.value,
              label: option.label,
            })
          )}
        />

        <TextInputField
          name="accidentInfo.date"
          label={t('accident.dateLabel')}
          placeholder={t('accident.datePlaceholder')}
        />

        <TextAreaField
          name="accidentInfo.details"
          label={t('accident.detailsLabel')}
          placeholder={t('accident.detailsPlaceholder')}
          rows={5}
        />

        <p className="text-sm text-blue-600 leading-relaxed px-8 -mt-6">
          {t('accident.guidance')}
        </p>
      </div>
    </div>
  );
};

export default Step3Accident;
