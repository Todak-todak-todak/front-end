import Box from '@/components/Box';

const DocBox = () => {
  const handleClick = () => {
    console.log('전자문서 상세페이지로 이동');
  };
  const isSuccess = false;

  return (
    <div className="flex flex-col gap-4 px-4 h-screen">
      <p className="flex items-start text-xl font-bold px-4">
        최근 신청한 산재 목록
      </p>
      <div className="flex flex-col gap-4 px-4 h-[30rem] overflow-y-auto pb-4 pt-1">
        <Box className="flex gap-4 ">
          <div className="flex flex-col flex-[7] items-start justify-center gap-2 p-4">
            <p className="font-semibold text-[18px]">출퇴근 재해</p>
            <p className="line-clamp-1 font-semibold text-mainGray">25.03.24</p>
          </div>
          <div className="flex flex-[3] p-4 justify-end items-center">
            <button
              onClick={() => handleClick()}
              className={`${
                isSuccess ? 'bg-mainGray' : 'bg-mainBlue'
              } py-2 px-5 rounded-xl`}
            >
              {isSuccess ? (
                <p className="text-white font-semibold text-sm">처리완료</p>
              ) : (
                <p className="text-white font-semibold text-sm">처리중</p>
              )}
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default DocBox;
