import { useState } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const industries = ['제조업', '건설업', '어업'];

const Information = () => {
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

  return (
    <>
      <Header />
      <div className="px-[30px] pb-[43px]">
        <div className="text-[#111111] text-[28px] leading-[34px] tracking-[-0.6px] text-left pb-[30px]">
          <p>정보를 입력해주세요</p>
          <p>Please provide your information</p>
        </div>

        <div className="flex flex-col gap-4 text-left">
          {/* 입력 필드들 */}
          {[
            {
              label: '이름',
              value: name,
              setter: setName,
              placeholder: '이름을 입력해주세요.',
            },
            {
              label: '외국인 등록번호',
              value: registerNumber,
              setter: setRegisterNumber,
              placeholder: '외국인 등록번호를 입력해주세요.',
            },
            {
              label: '전화번호',
              value: phone,
              setter: setPhone,
              placeholder: '전화번호를 입력해주세요. (- 없이 숫자만 입력)',
            },
            {
              label: '주소',
              value: address,
              setter: setAddress,
              placeholder: '주소를 입력해주세요.',
            },
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <p className="text-[#111] text-[18px]">{field.label}</p>
              <Input
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
              />
            </div>
          ))}

          {/* 성별 선택 */}
          <div className="flex flex-col gap-3">
            <p className="text-[#111] text-[18px]">성별</p>
            <div className="flex gap-4">
              {[
                { label: '여자', value: 'FEMALE' },
                { label: '남자', value: 'MALE' },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setGender(value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                    gender === value
                      ? 'bg-mainBlue text-white border-mainBlue'
                      : 'bg-[#D9D9D9] text-[#444] border-[#D9D9D9]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 산업 선택 */}
          <div className="flex flex-col gap-3">
            <p className="text-[#111] text-[18px]">종사하는 산업</p>
            <div className="relative w-full max-w-full">
              <Listbox value={industry} onChange={setIndustry}>
                <div className="relative">
                  <Listbox.Button className="relative w-full h-[50px] rounded-[10px] border border-inputBlue bg-white px-4 text-left text-[#828282]">
                    {industry || '종사하는 산업을 골라주세요.'}
                    <ChevronDownIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 mt-2 w-full bg-white rounded-[10px] shadow-md max-h-60 overflow-auto ring-1 ring-black/5 focus:outline-none">
                    {industries.map((item, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={item}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-3 transition-colors duration-150 ${
                            active ? 'bg-gray-200 text-black' : 'text-black'
                          } ${
                            idx !== industries.length - 1
                              ? 'border-b border-gray-200'
                              : ''
                          }`
                        }
                      >
                        {item}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[78px]">
          <Button text="다음" disabled={!isFormValid} />
        </div>
      </div>
    </>
  );
};

export default Information;
