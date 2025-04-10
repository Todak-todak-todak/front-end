type Props = {
  value?: 'FEMALE' | 'MALE' | null;
  onChange: (value: 'FEMALE' | 'MALE') => void;
};

const GenderSelector = ({ value, onChange }: Props) => {
  const options: { label: string; value: 'FEMALE' | 'MALE' }[] = [
    { label: '여자', value: 'FEMALE' },
    { label: '남자', value: 'MALE' },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#111] text-[18px]">성별</p>
      <div className="flex gap-4">
        {options.map(({ label, value: genderValue }) => (
          <button
            key={genderValue}
            type="button"
            onClick={() => onChange(genderValue)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              value === genderValue
                ? 'bg-mainBlue text-white border-mainBlue'
                : 'bg-[#D9D9D9] text-[#444] border-[#D9D9D9]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderSelector;
