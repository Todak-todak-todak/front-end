import Header from './header/Header';
import Information from './information/Information';
import Statistics from './statistics/Statistics';

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex-[2.5] w-full">
        <Header />
      </div>
      <div className="flex-[4] ">
        <Information />
      </div>
      <div className="flex-[4] ">
        <Statistics />
      </div>
    </div>
  );
};
export default Home;
