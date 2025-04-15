import SalaryInputItem from './SalaryInputItem';
import { useTranslation } from 'react-i18next';

interface Props {
  inputs: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalculateCard = ({ inputs, onChange }: Props) => {
  const { t } = useTranslation();

  const fields = [
    {
      label: t('result.calculator.recentSalary.label'),
      name: 'recentSalary',
      sub: t('result.calculator.recentSalary.sub'),
    },
    {
      label: t('result.calculator.annualBonus.label'),
      name: 'annualBonus',
    },
    {
      label: t('result.calculator.unusedVacationPay.label'),
      name: 'unusedVacationPay',
    },
    {
      label: t('result.calculator.dailyWage.label'),
      name: 'dailyWage',
    },
  ];

  return (
    <div
      className="bg-white mt-[14px] p-[20px] rounded-[20px] shadow-sm flex flex-col gap-[20px]"
      style={{
        boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.08)',
      }}
    >
      {fields.map(({ label, name, sub }) => (
        <SalaryInputItem
          key={name}
          label={label}
          name={name}
          subText={sub}
          value={
            inputs[name as keyof typeof inputs]
              ? Number(inputs[name as keyof typeof inputs]).toLocaleString()
              : ''
          }
          onChange={onChange}
        />
      ))}

      <button
        className="mt-[10px] py-[14px] text-[#0076FF] text-[16px] font-semibold border border-[#0076FF] rounded-[14px]"
        onClick={() => alert(t('result.calculator.alert'))}
      >
        {t('result.calculator.button')}
      </button>
    </div>
  );
};

export default CalculateCard;
