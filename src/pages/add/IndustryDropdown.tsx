import { useFormContext, Controller } from 'react-hook-form';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FormValues } from './Add';

const industries = ['제조업', '건설업', '어업'];

const IndustryDropdown = () => {
  const { control } = useFormContext<FormValues>();

  return (
    <Controller
      control={control}
      name="industry"
      rules={{ required: true }}
      render={({ field }) => (
        <div className="flex flex-col gap-3">
          <p className="text-[#111] text-[18px]">종사하는 산업</p>
          <div className="relative w-full max-w-full">
            <Listbox value={field.value} onChange={field.onChange}>
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button
                    className={`relative w-full h-[50px] rounded-[10px] border px-4 text-left text-[#828282] bg-white transition-colors duration-150
                      ${
                        open
                          ? 'border-[#0053A4] ring-2 ring-[#99C8FF]'
                          : 'border-inputBlue'
                      }`}
                  >
                    {field.value || '종사하는 산업을 골라주세요.'}
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
              )}
            </Listbox>
          </div>
        </div>
      )}
    />
  );
};

export default IndustryDropdown;
