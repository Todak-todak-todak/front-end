import SalaryInputItem from './SalaryInputItem';

interface Props {
  inputs: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalculateCard = ({ inputs, onChange }: Props) => {
  const fields = [
    {
      label: '최근 3개월 급여',
      name: 'recentSalary',
      sub: '*(기본급+기타수당)',
    },
    { label: '연간 상여금', name: 'annualBonus' },
    { label: '최종 연차 수당', name: 'unusedVacationPay' },
    { label: '1일 통상임금', name: 'dailyWage' },
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
        onClick={() => alert('예측 기능은 추후 연결 예정입니다.')}
      >
        산재보상 금액 예측하기
      </button>
    </div>
  );
};

export default CalculateCard;
