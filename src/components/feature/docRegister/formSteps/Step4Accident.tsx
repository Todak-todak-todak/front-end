import TextInputField from '../TextInputField';
import SelectField from '../Select';
import TextAreaField from '../TextAreaField';
import { useTranslation } from 'react-i18next';

const Step3Accident = () => {
  const { t } = useTranslation();
  let mappedOptions: { value: string; label: string }[] = [];

  try {
    const typeOptionsString = t('accident.typeOptions', {
      returnObjects: true,
    });
    const parsedOptions = JSON.parse(typeOptionsString as string);

    if (Array.isArray(parsedOptions)) {
      mappedOptions = parsedOptions.map((option: any) => ({
        value: option.value,
        label: option.label,
      }));
    } else {
      console.warn(
        "번역 키 'accident.typeOptions'의 데이터가 올바른 배열 형식이 아닙니다:",
        parsedOptions
      );
    }
  } catch (error) {
    console.error("번역 키 'accident.typeOptions' 파싱 중 오류 발생:", error);
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">
        {t('accident.title')}
      </p>

      <div className="flex flex-col w-full gap-8 py-4">
        <SelectField
          name="accidentInfo.type"
          label={t('accident.typeLabel')}
          options={mappedOptions}
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
