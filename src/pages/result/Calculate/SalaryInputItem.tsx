import { useTranslation } from 'react-i18next';

interface SalaryInputItemProps {
  label: string;
  name: string;
  value: string;
  subText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SalaryInputItem = ({
  label,
  name,
  value,
  subText,
  onChange,
}: SalaryInputItemProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <label className="text-[16px] text-[#191B1C] font-medium">
            {label}
          </label>
          {subText && (
            <p className="text-[12px] text-[#666] mt-[2px]">{subText}</p>
          )}
        </div>

        <div className="flex items-center gap-[6px]">
          <input
            type="text"
            inputMode="numeric"
            name={name}
            value={value}
            onChange={onChange}
            className="text-right text-[#666] text-[16px] outline-none bg-transparent border border-[#0076FF] rounded-[10px] px-[16px] py-[10px] w-[180px] h-[35px]"
            placeholder="0"
          />
          <span className="text-[#191B1C] text-[16px] font-semibold">
            {t('result.calculator.currency')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalaryInputItem;
