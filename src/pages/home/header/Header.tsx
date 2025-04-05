import Box from '@/components/Box';
import LogoIcon from '@/assets/images/Home/Logo.svg?react';
import PeopleIcon from '@assets/images/Home/People.svg?react';

const Information = () => {
  return (
    <div className="flex justify-center bg-mainBlue h-36 ">
      <div className="absolute left-[-8px] top-1">
        <LogoIcon height={52} />
      </div>
      <Box className="absolute top-16 w-[90%] h-28 bg-white">
        <div className="flex flex-col h-full justify-between p-4 pt-7">
          <p className="flex items-start font-semibold text-3xl">
            hoenofneofinwfneo님
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-sm ">국가</p>
              <p className="text-sm font-bold">Việt Nam</p>
            </div>
            <p className="text-sm font-bold ">제조업 종사자</p>
          </div>
        </div>
        <div className="absolute right-4 bottom-3.5 z-0 ">
          <PeopleIcon />
        </div>
      </Box>
    </div>
  );
};
export default Information;
