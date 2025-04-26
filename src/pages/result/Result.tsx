import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Calculate from './Calculate/Calculate';
import Example from './Example';
import Hospital from './KakaoMap/Hospital';
import Percent from './Percent';
import Save from '@assets/images/Result/Save.svg?react';
import { saveResult } from '@/apis/result';

const Result = () => {
  const { t } = useTranslation();

  const [calculatorId, setCalculatorId] = useState<number | null>(null);
  // eslint-disable-next-line
  const [chatResultId, setChatResultId] = useState<number | null>(null);

  const handleSave = () => {
    if (!calculatorId) {
      alert('먼저 계산을 완료해 주세요!');
      return;
    }

    const fakeChatResultId = 3; // ✅ 임시 chatResultId 사용 (임시)

    saveResult({ calculatorId, chatResultId: fakeChatResultId })
      .then(() => {
        alert('결과가 저장되었습니다!');
      })
      .catch((err) => {
        console.error('[저장 실패]', err);
        alert('저장에 실패했습니다.');
      });
  };

  return (
    <>
      <Header
        title={t('result.title')}
        img={
          <Save
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={handleSave}
          />
        }
      />
      <main className="flex-1 overflow-y-auto">
        <Percent />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <Hospital />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <Calculate
          setCalculatorId={setCalculatorId}
          setChatResultId={setChatResultId}
        />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
      </main>
      <Example />
    </>
  );
};

export default Result;
