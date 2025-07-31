import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fullFormSchema } from '../../schemas/Schema';
import type { CustomFormData } from '../../types/formTypes';
import { transPayload } from '@/utils/doc/formTransformer';

import Step1Agreement from '@/components/features/docRegister/formSteps/Step1Agreement';
import Step2Worker from '@/components/features/docRegister/formSteps/Step2Worker';
import Step3Workplace from '@/components/features/docRegister/formSteps/Step3Workplace';
import Step4Accident from '@/components/features/docRegister/formSteps/Step4Accident';
import Step5Treatment from '@/components/features/docRegister/formSteps/Step5Treatment';
import Step6Complete from '@/components/features/docRegister/formSteps/Step6Complete';

import StepNavigation from '../../components/features/docRegister/StepNavigation';
import Header from '@/components/common/header/Header';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { createDocRegister } from '@/apis/doc';
import { useMutation } from '@tanstack/react-query';

const steps = [
  Step1Agreement,
  Step2Worker,
  Step3Workplace,
  Step4Accident,
  Step5Treatment,
  Step6Complete,
];

const FormStepper = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { mutate: createDocument } = useMutation({
    mutationFn: createDocRegister,
    onSuccess: () => {
      setStep(5);
    },
    onError: (error) => {
      console.error('문서 생성 실패:', error);
    },
  });

  const onSubmit = (data: CustomFormData) => {
    const payload = transPayload(data);
    createDocument(payload);
  };

  const methods = useForm({
    resolver: zodResolver(fullFormSchema),
    mode: 'onChange',
  });

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleCancel = () => {
    methods.reset();
    setStep(0);
    navigate('/doclist');
  };

  const totalVisibleSteps = 4;
  const getHeaderTitle = () => {
    if (step === 0) return `${t('docForm.title')}`;
    return `${t('docForm.title')} (${step}/${totalVisibleSteps})`;
  };

  const CurrentStep = steps[step];

  return (
    <FormProvider {...methods}>
      <div className="relative  flex flex-col ">
        {step !== 5 && <Header title={getHeaderTitle()} />}
        <div className="overflow-y-auto mb-16">
          <CurrentStep />
        </div>
        {step !== 6 && (
          <div className="fixed bottom-16 z-50 px-4 bg-white w-full  max-w-[470px]">
            <StepNavigation
              step={step}
              handleBack={handleBack}
              handleNext={handleNext}
              handleCancel={handleCancel}
              onSubmit={onSubmit}
            />
          </div>
        )}
      </div>
    </FormProvider>
  );
};

export default FormStepper;
