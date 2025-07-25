import InputSection from './InputSection';
import GenderSelector from './GenderSelector';
import IndustryDropdown from './IndustryDropdown';
import { useTranslation } from 'react-i18next';

const AddProfileForm = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-[#111111] text-[24px] font-semibold leading-[34px] tracking-[-0.6px] text-left pb-[30px]">
        {t('form.informationTitle')}
      </div>
      <div className="flex flex-col gap-4 text-left">
        <InputSection />
        <GenderSelector />
        <IndustryDropdown />
      </div>
    </div>
  );
};

export default AddProfileForm;
