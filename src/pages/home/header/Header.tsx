import Box from '@/components/Box';
import LogoIcon from '@/assets/images/Home/Logo.svg?react';
import PeopleIcon from '@assets/images/Home/People.svg?react';

const Information = () => {
  return (
    <div className=" w-full  max-w-[470px] flex flex-col items-center justify-center bg-mainBlue h-36 gap-4 ">
      <div className="w-full mt-8 items-start">
        <LogoIcon height={52} />
      </div>
      <Box className="w-[90%] flex top-40 h-24 bg-white ">
        <div className="flex w-full flex-col h-full p-4 pt-5">
          <p className="flex w-full items-center font-semibold text-[1.3rem]">
            hoenofneofinwfneo<p>ㅏ</p>
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-sm font-semibold text-gray-600">Việt Nam</p>
            </div>
          </div>
        </div>
        <div className="relative w-fit pt-3">
          <PeopleIcon className="w-24 h-20" />
          <p className="absolute  bottom-1 left-3 text-sm font-semibold text-center text-gray-600">
            제조업 종사자
          </p>
        </div>
      </Box>
    </div>
  );
};
export default Information;
