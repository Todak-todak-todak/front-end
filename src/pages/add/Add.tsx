import { useState } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import InputSection from './InputSection';
import GenderSelector from './GenderSelector';
import IndustryDropdown from './IndustryDropdown';

const Add = () => {
  const [name, setName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState<'FEMALE' | 'MALE' | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);

  const isFormValid =
    name.trim() &&
    registerNumber.trim() &&
    phone.trim() &&
    address.trim() &&
    gender &&
    industry;

  const inputFields = [
    {
      label: '이름',
      value: name,
      onChange: setName,
      placeholder: '이름을 입력해주세요.',
    },
    {
      label: '외국인 등록번호',
      value: registerNumber,
      onChange: setRegisterNumber,
      placeholder: '외국인 등록번호를 입력해주세요.',
    },
    {
      label: '전화번호',
      value: phone,
      onChange: setPhone,
      placeholder: '전화번호를 입력해주세요. (- 없이 숫자만 입력)',
    },
    {
      label: '주소',
      value: address,
      onChange: setAddress,
      placeholder: '주소를 입력해주세요.',
    },
  ];

  return (
    <>
      <Header />
      <div className="px-[30px] pb-[43px]">
        <div className="text-[#111111] text-[28px] leading-[34px] tracking-[-0.6px] text-left pb-[30px]">
          <p>정보를 입력해주세요</p>
          <p>Please provide your information</p>
        </div>

        <div className="flex flex-col gap-4 text-left">
          <InputSection fields={inputFields} />
          <GenderSelector gender={gender} onChange={setGender} />
          <IndustryDropdown industry={industry} onChange={setIndustry} />
        </div>

        <div className="flex justify-center mt-[78px]">
          <Button text="다음" disabled={!isFormValid} />
        </div>
      </div>
    </>
  );
};

export default Add;
