import Box from '@/components/Box';
import LogoIcon from '@/assets/images/Home/Logo.svg?react';
import PeopleIcon from '@assets/images/Home/People.svg?react';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/apis/doc';

const Information = () => {
  const { data: headerData } = useQuery({
    queryKey: ['header'],
    queryFn: getUserInfo,
  });

  return (
    <div className=" w-full  max-w-[470px] flex flex-col items-center justify-center bg-mainBlue h-36 gap-4 ">
      <div className="w-full mt-8 items-start">
        <LogoIcon height={52} />
      </div>
      <Box className="w-[90%] flex top-40 h-24 bg-white ">
        <div className="flex w-full flex-col h-full p-4 pt-5">
          <p className="flex w-full items-center font-semibold text-[1.3rem]">
            {headerData?.data.userName} <p>님</p>
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-sm font-semibold text-gray-600">
                {headerData?.data.userLanguage}
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-fit pt-3">
          <PeopleIcon className="w-24 h-20" />
          <p className="absolute  bottom-1 left-3 text-sm font-semibold text-center text-gray-600 flex">
            {headerData?.data.industryName} <p> 종사자</p>
          </p>
        </div>
      </Box>
    </div>
  );
};
export default Information;
