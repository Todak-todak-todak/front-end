import { useForm, Controller } from 'react-hook-form';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';
import GenderSelector from '@/pages/add/GenderSelector';
import IndustryDropdown from '@/pages/add/IndustryDropdown';

type FormValues = {
  name: string;
  registerNumber: string;
  phone: string;
  address: string;
  gender: 'FEMALE' | 'MALE' | null;
  industry: string | null;
};

const Add = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
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

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  const inputFields = [
    {
      name: 'name',
      label: '이름',
      placeholder: '이름을 입력해주세요.',
    },
    {
      name: 'registerNumber',
      label: '외국인 등록번호',
      placeholder: '외국인 등록번호를 입력해주세요.',
    },
    {
      name: 'phone',
      label: '전화번호',
      placeholder: '전화번호를 입력해주세요. (- 없이 숫자만 입력)',
    },
    {
      name: 'address',
      label: '주소',
      placeholder: '주소를 입력해주세요.',
    },
  ] as const;

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-[30px] pb-[43px] flex flex-col justify-between"
      >
        <div>
          <div className="text-[#111111] text-[28px] leading-[34px] tracking-[-0.6px] text-left pb-[30px]">
            <p>정보를 입력해주세요</p>
            <p>Please provide your information</p>
          </div>

          <div className="flex flex-col gap-4 text-left">
            {inputFields.map(({ name, label, placeholder }) => (
              <div key={name} className="flex flex-col gap-3">
                <p className="text-[#111] text-[18px]">{label}</p>
                <Input
                  type="text"
                  {...register(name, { required: true })}
                  placeholder={placeholder}
                />
              </div>
            ))}

            <Controller
              control={control}
              name="gender"
              rules={{ required: true }}
              render={({ field }) => (
                <GenderSelector value={field.value} onChange={field.onChange} />
              )}
            />

            <Controller
              control={control}
              name="industry"
              rules={{ required: true }}
              render={({ field }) => (
                <IndustryDropdown
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        <div className="flex justify-center mt-[93px]">
          <Button text="다음" disabled={!isValid} type="submit" />
        </div>
      </form>
    </>
  );
};

export default Add;
