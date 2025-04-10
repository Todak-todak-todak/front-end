import { useForm, FormProvider } from 'react-hook-form';
import Header from '@/components/Header';
import Button from '@/components/Button';
import InputSection from './InputSection';
import GenderSelector from '@/pages/add/GenderSelector';
import IndustryDropdown from '@/pages/add/IndustryDropdown';
import { useNavigate } from 'react-router-dom';

export type FormValues = {
  name: string;
  registerNumber: string;
  phone: string;
  address: string;
  gender: 'FEMALE' | 'MALE' | null;
  industry: string | null;
};

const Add = () => {
  const navigate = useNavigate();

  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      registerNumber: '',
      phone: '',
      address: '',
      gender: null,
      industry: null,
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    navigate('/home');
  };

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-[30px] pb-[43px] flex flex-col justify-between"
        >
          <div>
            <div className="text-[#111111] text-[28px] leading-[34px] tracking-[-0.6px] text-left pb-[30px] pt-[20px]">
              <p>정보를 입력해주세요</p>
              <p>Please provide your information</p>
            </div>

            <div className="flex flex-col gap-4 text-left">
              <InputSection />
              <GenderSelector />
              <IndustryDropdown />
            </div>
          </div>

          <div className="flex justify-center mt-[93px]">
            <Button text="다음" disabled={!isValid} type="submit" />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Add;
