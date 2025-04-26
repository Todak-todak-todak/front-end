import { useState } from 'react';
import CalculateCard from './CalculateCard';
import { useTranslation } from 'react-i18next';
import ResultCard from './ResultCard';
import { Dispatch, SetStateAction } from 'react';

interface CalculateProps {
  setCalculatorId: Dispatch<SetStateAction<number | null>>;
  setChatResultId: Dispatch<SetStateAction<number | null>>;
}

const Calculate = ({ setCalculatorId, setChatResultId }: CalculateProps) => {
  const [inputs, setInputs] = useState({
    recentSalary: '',
    annualBonus: '',
    unusedVacationPay: '',
    dailyWage: '',
  });

  const [showResult, setShowResult] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formatted = value.replace(/[^0-9]/g, '');
    setInputs((prev) => ({ ...prev, [name]: formatted }));
  };

  const handleCalculate = () => {
    if (Object.values(inputs).some((v) => !v)) {
      alert(t('result.calculator.alert'));
      return;
    }
    setShowResult(true);
  };

  return (
    <div className="flex flex-col pt-[15px] pr-[25px] pb-[20px] pl-[25px]">
      {!showResult ? (
        <>
          <div className="flex flex-col">
            <p
              className="text-[22px] leading-[120%] text-[#191B1C] font-normal text-left"
              style={{
                WebkitTextStrokeWidth: '0.3px',
                WebkitTextStrokeColor: '#000',
              }}
            >
              {t('result.calculator.title')}
            </p>
            <p className="text-[12px] leading-[120%] text-[#000] text-left mt-[5px]">
              {t('result.calculator.sub')}
            </p>
          </div>

          <CalculateCard
            inputs={inputs}
            onChange={handleChange}
            onSubmit={handleCalculate}
          />
        </>
      ) : (
        <ResultCard
          inputs={inputs}
          onRetry={() => setShowResult(false)}
          setCalculatorId={setCalculatorId}
          setChatResultId={setChatResultId}
        />
      )}
    </div>
  );
};

export default Calculate;
