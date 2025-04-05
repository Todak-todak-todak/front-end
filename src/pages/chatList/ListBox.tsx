import Box from '@/components/Box';
import NextIcon from '@assets/images/Chat/Next.svg?react';

const ListBox = () => {
  const handleClick = () => {
    console.log('채팅분석페이지 이동');
  };

  return (
    <div className="flex flex-col gap-4 px-4 h-screen">
      <p className="flex items-start text-xl font-bold px-4">
        최근 분석 결과 목록
      </p>
      <div className="flex flex-col gap-4 px-4 h-[30rem] overflow-y-auto pb-4 pt-1">
        <Box className="flex gap-4 ">
          <div className="flex flex-col flex-[7] items-start justify-center gap-2 p-4">
            <p className="font-semibold text-[18px]">25.03.24</p>
            <p className="line-clamp-1 font-semibold text-mainGray">
              3개월 전에 제가 이거를 이렇게 했는데 3개월 전에 제가 이거를 이렇게
              했는데 3개월 전에 제가 이거를 이렇게 했는데
            </p>
          </div>
          <div className="flex flex-[3] p-4 justify-end items-center">
            <button onClick={() => handleClick()}>
              <NextIcon />
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default ListBox;
