import Circle from '@/assets/images/Result/Circle.svg?react';
import MiniCircle from '@/assets/images/Result/MiniCircle.svg?react';
import Allow from '@assets/images/Result/Allow-right.svg?react';

const Percent = () => {
  return (
    <div className="flex flex-col p-0 pr-[25px] pb-[21px] pl-[25px]">
      <p
        className="text-[22px] leading-[120%] text-[#191B1C] font-normal mb-[17px] text-left"
        style={{
          WebkitTextStrokeWidth: '0.3px',
          WebkitTextStrokeColor: '#000',
        }}
      >
        산재 처리 가능성
      </p>

      <div className="relative w-full h-[233px] flex flex-col justify-center items-center flex-shrink-0 rounded-[16px] bg-[#EBEEFD] shadow-[4px_4px_10px_rgba(0,0,0,0.08)] pt-[17px] pr-[28px] pl-[28px] pb-[14px]">
        <div className="relative w-fit h-fit mb-[11px]">
          <Circle />
          <MiniCircle className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
        </div>

        <span className="absolute top-[38%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[32px] font-bold text-[#333]">
          80%
        </span>

        <button className="w-full h-[45px] rounded-[10px] bg-[#fff]">
          <div className="flex items-center justify-center gap-2">
            <p className="text-[18px] text-[#0158FE] font-normal">
              산재 신청 서류 작성하러 가기
            </p>
            <Allow />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Percent;
