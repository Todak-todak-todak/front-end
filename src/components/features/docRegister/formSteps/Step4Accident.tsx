import TextInputField from '../formControls/TextInputField';
import SelectField from '../formControls/Select';
import TextAreaField from '../formControls/TextAreaField';
import { useTranslation } from 'react-i18next';

const Step3Accident = () => {
  const { t } = useTranslation();
  const typeOptionsJson =
    '[{"value": "유형", "label": "유형"}, {"value": "업무상 질병", "label": "업무상 질병"}, {"value": "업무상 사고", "label": "업무상 사고"}, {"value": "출퇴근 재해", "label": "출퇴근 재해"}]';
  const typeOptions = JSON.parse(typeOptionsJson);

  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">
        {t('accident.title')}
      </p>

      <div className="flex flex-col w-full gap-8 py-4">
        <SelectField
          name="accidentInfo.type"
          label={t('accident.typeLabel')}
          options={typeOptions}
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
