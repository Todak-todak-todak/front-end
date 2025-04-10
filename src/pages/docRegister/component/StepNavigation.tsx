import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Button from '@/components/Button';
import type { CustomFormData } from '../types/formTypes';
import { useNavigate } from 'react-router-dom';

interface StepNavigationProps {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  handleCancel?: () => void;
  isValid?: boolean;
  onSubmit?: (data: CustomFormData) => void;
}

const StepNavigation = ({
  step,
  handleNext,
  handleBack,
  handleCancel,
  onSubmit,
}: StepNavigationProps) => {
  const { handleSubmit, trigger, control } = useFormContext<CustomFormData>();
  const [canProceed, setCanProceed] = useState(false);

  const watchedValues = useWatch({ control });
  const navigate = useNavigate();

  const getStepFields = () => {
    switch (step) {
      case 0:
        return ['consent.personalAgreement', 'consent.agencyAgreement'];
      case 1:
        return [
          'workerInfo.name',
          'workerInfo.ssn',
          'workerInfo.address',
          'workerInfo.phone',
          'workerInfo.gender',
          'workerInfo.employmentType',
        ];
      case 2:
        return [
          'businessInfo.businessNumber',
          'businessInfo.address',
          'businessInfo.phone',
          'businessInfo.name',
          'businessInfo.businessName',
        ];
      case 3:
        return [
          'accidentInfo.type',
          'accidentInfo.date',
          'accidentInfo.details',
        ];
      case 4:
        return [
          'treatmentInfo.bodyPart',
          'treatmentInfo.hospital',
          'treatmentInfo.category',
        ];
      default:
        return [];
    }
  };

  const checkRequiredFieldsFilled = () => {
    const fields = getStepFields();
    return fields.every((fieldPath) => {
      const keys = fieldPath.split('.');
      let value: any = watchedValues;
      for (const key of keys) {
        value = value?.[key];
      }
      return value !== undefined && value !== null && value !== '';
    });
  };

  useEffect(() => {
    const isFilled = checkRequiredFieldsFilled();
    setCanProceed(isFilled);
  }, [watchedValues, step]);

  const handleValidateAndNext = async () => {
    const currentFields = getStepFields();
    const isValid = await trigger(currentFields);
    if (isValid) {
      handleNext();
    }
  };

  const handleFinalSubmit = async () => {
    const currentFields = getStepFields();
    const isValid = await trigger(currentFields);
    if (isValid && onSubmit) {
      handleSubmit(onSubmit)();
    }
  };

  const renderNextButton = (label: string, onClick: () => void) => (
    <Button
      text={label}
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        canProceed
          ? 'bg-[#275AEC] text-white'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
      disabled={!canProceed}
    />
  );

  if (step === 0) {
    return (
      <div className="flex justify-between gap-4">
        <Button text="취소하기" onClick={handleCancel!} />
        {renderNextButton('다음으로', handleValidateAndNext)}
      </div>
    );
  }

  if (step >= 1 && step <= 3) {
    return (
      <div className="mt-6 flex justify-between">
        <Button text="이전으로" onClick={handleBack} />
        {renderNextButton('다음으로', handleValidateAndNext)}
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="mt-6 flex justify-between">
        <Button text="이전으로" onClick={handleBack} />
        {renderNextButton('제출', handleFinalSubmit)}
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="mt-6 flex justify-end">
        <Button
          text="확인"
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
