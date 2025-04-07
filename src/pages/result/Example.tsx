const cases = [
  {
    title: '제조업',
    content:
      '2016년 2월경 지붕위에서 재해자가 국소배기장치의 강관덕트 위치를 조정하는 작업 중 4.7m 아래로 추락하여 사망',
  },
  {
    title: '제조업',
    content:
      '2016년 2월 가구판매점 소속 재해자가 회사 2층 창고 자재반입문에서 1층에서 지게차로 들어올린 가구를 받아올리는 작업을 하던 중 균형을 잃고 가구와 함께 1층 바닥(약 4.3m)으로 떨어짐',
  },
];

const Example = () => {
  return (
    <div className="flex flex-col px-[25px] py-[20px] pb-[100px]">
      <p
        className="text-[22px] leading-[120%] text-[#191B1C] font-normal mb-[50px] text-left"
        style={{
          WebkitTextStrokeWidth: '0.3px',
          WebkitTextStrokeColor: '#000',
        }}
      >
        강재준님과 비슷한 사례
      </p>

      <div className="flex justify-between gap-[10px] w-full ">
        {cases.map((item, i) => (
          <div
            key={i}
            className="relative w-1/2 bg-white px-[14px] pt-[30px] pb-[30px] text-center flex flex-col justify-center items-center"
            style={{
              border: '1px solid #0158FE',
              borderRadius: '0px 10px 10px 10px',
            }}
          >
            <div className="absolute top-[-30px] left-[-1px]">
              <div
                className="bg-[#0076FF] text-white text-[14px] font-semibold px-[12px] py-[8px] 
            rounded-t-[10px] rounded-b-none 
            border border-[#0076FF]"
              >
                {item.title}
              </div>
            </div>

            <p className="text-[14px] text-[#191B1C] leading-[1.5] whitespace-pre-line ">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
