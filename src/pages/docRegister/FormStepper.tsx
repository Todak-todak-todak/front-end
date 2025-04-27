import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fullFormSchema } from './schemas/Schema';
import type { CustomFormData } from './types/formTypes';

import Step1Agreement from './formSteps/Step1Agreement';
import Step2Worker from './formSteps/Step2Worker';
import Step3Workplace from './formSteps/Step3Workplace';
import Step4Accident from './formSteps/Step4Accident';
import Step5Treatment from './formSteps/Setp5Treatment';
import Step6Complete from './formSteps/Step6Complete';

import StepNavigation from './component/StepNavigation';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { createDocRegister } from '@/apis/docRegister';
import { useMutation } from '@tanstack/react-query';

const steps = [
  <Step1Agreement key="step1" />,
  <Step2Worker key="step2" />,
  <Step3Workplace key="step3" />,
  <Step4Accident key="step4" />,
  <Step5Treatment key="step5" />,
  <Step6Complete key="step6" />,
];

const FormStepper = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { mutate: createDocument } = useMutation({
    mutationFn: createDocRegister,
    onSuccess: (data) => {
      console.log('문서 생성 성공:', data);
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

  // const onSubmit = (data: CustomFormData) => {
  //   console.log('최종 제출:', data);
  //   createDocument(data)
  //   setStep(5);
  // };

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
      <div className="flex flex-col min-h-screen">
        {step !== 5 && (
          <div>
            <Header title={getHeaderTitle()} />
          </div>
        )}
        <div className="flex-grow">{steps[step]}</div>

        <div className="sticky bottom-20 bg-white p-4">
          <StepNavigation
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
            handleCancel={handleCancel}
            isValid={methods.formState.isValid}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </FormProvider>
  );
};

export default FormStepper;
