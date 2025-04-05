type Props = {
  gender: 'FEMALE' | 'MALE' | null;
  onChange: (value: 'FEMALE' | 'MALE') => void;
};

const GenderSelector = ({ gender, onChange }: Props) => {
  const options: { label: string; value: 'FEMALE' | 'MALE' }[] = [
    { label: '여자', value: 'FEMALE' },
    { label: '남자', value: 'MALE' },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#111] text-[18px]">성별</p>
      <div className="flex gap-4">
        {options.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
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
  );
};

export default GenderSelector;
