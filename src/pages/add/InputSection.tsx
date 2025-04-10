import { useFormContext } from 'react-hook-form';
import Input from '@/components/Input';
import { FormValues } from './Add';

const inputFields = [
  { name: 'name', label: '이름', placeholder: '이름을 입력해주세요.' },
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
  { name: 'address', label: '주소', placeholder: '주소를 입력해주세요.' },
] as const;

const InputSection = () => {
  const { register } = useFormContext<FormValues>();

  return (
    <>
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
    </>
  );
};

export default InputSection;
