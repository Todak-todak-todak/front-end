import Header from '../../components/Header';
import Calculate from './Calculate';
import Example from './Example';
import Hospital from './Hospital';
import Percent from './Percent';

const Result = () => {
  return (
    <>
      <Header title="분석 결과" />
      <main className="flex-1 overflow-y-auto">
        <Percent />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <Hospital />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
        <Calculate />
        <div className="w-full h-[13px] bg-[#F6F7F9]"></div>
      </main>
      <Example />
    </>
  );
};

export default Result;
