import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fullFormSchema } from '../../schemas/Schema';
import type { CustomFormData } from '../../types/formTypes';

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
  () => <Step1Agreement />,
  () => <Step2Worker />,
  () => <Step3Workplace />,
  () => <Step4Accident />,
  () => <Step5Treatment />,
  () => <Step6Complete />,
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

  const methods = useForm<CustomFormData>({
    resolver: zodResolver(fullFormSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CustomFormData) => {
    console.log('원본 data:', data);

    const payload = {
      docType: data.workerInfo.employmentType,
      docCompanyNm: data.businessInfo.name,
      docCompanyAddress: data.businessInfo.address,
      docCompanyPhoneNm: data.businessInfo.phone,
      docOwnerName: data.businessInfo.name,
      docBusinessName: data.businessInfo.businessName,
      disaster: data.accidentInfo.type,
      docDisasterDate: data.accidentInfo.date,
      docReason: data.accidentInfo.details,
      docInjury: data.treatmentInfo.bodyPart,
      docHospital: data.treatmentInfo.hospital,
      therapy: data.treatmentInfo.category,
    };

    console.log('payload:', payload);

    createDocument(payload);
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
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

  return (
    <FormProvider {...methods}>
      <div className="relative  flex flex-col">
        {/* 헤더 */}
        {step !== 5 && (
          <div className="">
            <Header title={getHeaderTitle()} />
          </div>
        )}

        {/* 폼 콘텐츠 - 스크롤 영역 */}
        <div className="overflow-y-auto mb-16">{steps[step]()}</div>

        {/* 고정 버튼 */}
        {step !== 6 && (
          <div className="fixed bottom-16 w-[470px] z-50 px-4 bg-white">
            <StepNavigation
              step={step}
              handleBack={handleBack}
              handleNext={handleNext}
              handleCancel={handleCancel}
              isValid={methods.formState.isValid}
              onSubmit={onSubmit}
            />
          </div>
        )}
      </div>
    </FormProvider>
  );
};

export default FormStepper;
