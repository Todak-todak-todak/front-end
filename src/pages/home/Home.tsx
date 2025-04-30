import Header from './header/Header';
import Information from './information/Information';
import Statistics from './statistics/Statistics';
import { useQuery } from '@tanstack/react-query';
import { getInfomation, getCounsel, getDeclaration } from '@/apis/home';

const Home = () => {
  const { data: informationData } = useQuery({
    queryKey: ['information'],
    queryFn: getInfomation,
  });
  const { data: counselData } = useQuery({
    queryKey: ['counsel'],
    queryFn: getCounsel,
  });
  const { data: declarationData } = useQuery({
    queryKey: ['declaration'],
    queryFn: getDeclaration,
  });
  console.log(counselData);
  return (
    <div className="flex flex-col h-screen w-full mb-24">
      <div className="flex-[2] w-full">
        <Header />
      </div>
      <div className="flex-[4]">
        <Information
          data={informationData}
          counsel={counselData}
          declaration={declarationData}
        />
      </div>
      <div className="flex-[4] ">
        <Statistics data={informationData} />
      </div>
    </div>
  );
};

export default Home;
