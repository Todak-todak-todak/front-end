import Header from '../../components/features/home/header/Header';
import Information from '../../components/features/home/information/Information';
import Statistics from '../../components/features/home/statistics/Statistics';
import {
  useGetInfomation,
  useGetCounsel,
  useGetDeclaration,
} from '@/apis/home';

const Home = () => {
  const { data: informationData } = useGetInfomation();
  const { data: counselData } = useGetCounsel();
  const { data: declarationData } = useGetDeclaration();
  return (
    <div className="flex flex-col w-full">
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
