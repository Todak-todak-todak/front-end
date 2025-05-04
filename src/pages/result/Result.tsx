import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Calculate from './Calculate/Calculate';
import Example from './Example';
import Hospital from './KakaoMap/Hospital';
import Percent from './Percent';
import Save from '@assets/images/Result/Save.svg?react';
import { saveResult } from '@/apis/result';
import { useParams } from 'react-router-dom';

const Result = () => {
  const { t } = useTranslation();
  const { chatResultId } = useParams<{ chatResultId: string }>();

  const [calculatorId, setCalculatorId] = useState<number | null>(null);
  const chatResultIdNum = chatResultId ? Number(chatResultId) : null;

  const handleSave = () => {
    if (!calculatorId || !chatResultIdNum) {
      alert('먼저 계산을 완료해 주세요!');
      return;
    }

    saveResult({ calculatorId, chatResultId: chatResultIdNum })
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
        <Percent chatResultId={chatResultIdNum} />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <Hospital />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <Calculate
          setCalculatorId={setCalculatorId}
          setChatResultId={() => {}}
        />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
      </main>
      <Example chatResultId={chatResultIdNum} />
    </>
  );
};

export default Result;
