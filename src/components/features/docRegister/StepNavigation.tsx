import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '@/components/common/button/Button';
import type { CustomFormData } from '../../../types/formTypes';
import { getFormStepFields } from '@/utils/doc/formStepFields';

interface StepNavigationProps {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  handleCancel?: () => void;
  onSubmit?: (data: CustomFormData) => void;
}

const StepNavigation = ({
  step,
  handleNext,
  handleBack,
  handleCancel,
  onSubmit,
}: StepNavigationProps) => {
  const { t } = useTranslation();
  const { handleSubmit, trigger } = useFormContext<CustomFormData>();
  const navigate = useNavigate();

  const handleValidateAndNext = async () => {
    const currentFields = getFormStepFields(step);
    const isValidTriggered = await trigger(currentFields);

    if (isValidTriggered) {
      handleNext();
    } else {
      console.error('유효성 검사 실패');
    }
  };

  const handleFinalSubmit = async () => {
    const isValidFinalForm = await trigger();

    if (isValidFinalForm && onSubmit) {
      handleSubmit(onSubmit)();
    } else {
      console.log('전체 단계 유효성 검사 실패');
    }
  };

  const renderActionButton = (label: string, onClick: () => void) => (
    <Button
      text={label}
      onClick={onClick}
      className={'px-4 py-2 bg-[#275AEC] text-white'}
      disabled={false}
    />
  );

  if (step === 0) {
    return (
      <div className="flex justify-between gap-5 ">
        <Button
          text={t('docButton.cancel')}
          onClick={handleCancel || (() => {})}
        />
        {renderActionButton(t('docButton.next'), handleValidateAndNext)}
      </div>
    );
  }

  if (step >= 1 && step <= 3) {
    return (
      <div className="flex justify-between gap-5">
        <Button text={t('docButton.previous')} onClick={handleBack} />
        {renderActionButton(t('docButton.next'), handleValidateAndNext)}
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="flex justify-between gap-5">
        <Button text={t('docButton.previous')} onClick={handleBack} />
        {renderActionButton(t('docButton.submit'), handleFinalSubmit)}
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="mt-6 flex ">
        <Button
          text={t('docButton.confirm')}
          onClick={() => {
            navigate('/doclist');
          }}
        />
      </div>
    );
  }

  return null;
};

export default StepNavigation;
