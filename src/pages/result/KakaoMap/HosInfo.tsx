const hospitals = [
  {
    name: '강남세브란스병원',
    address1: '서울 강남구 도곡로 216 (도곡동) 치휴한방병원',
    address2: '서울 강남구 언주로 211',
    distance: '200m',
    tel: '02-2019-2163',
  },
  {
    name: '서울대병원',
    address1: '서울 종로구 대학로 101',
    address2: '서울 종로구 연건동',
    distance: '500m',
    tel: '02-2072-2114',
  },
  {
    name: '포켓몬센터',
    address1: '서울시 태초마을',
    address2: '졸리당 이것만 하고 자야지',
    distance: '500m',
    tel: '02-2020-2020',
  },
];

const HosInfo = () => {
  return (
    <>
      {hospitals.map((hospital, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-center items-start pt-[20px]"
        >
          <p className="text-[#5673D5] text-center text-[20px] font-normal leading-[120%] ">
            {hospital.name}
          </p>
          <p className="text-[#000] text-center text-[17px] font-normal leading-[120%] mt-[9px]">
            {hospital.address1}
          </p>
          <p className="text-[#000] text-center text-[17px] font-normal leading-[120%] mt-[9px]">
            {hospital.address2}
          </p>
          <div className="flex  mt-[6px] mb-[20px]">
            <p className="text-[#B2B3B5] text-[17px] font-normal leading-[120%]">
              {hospital.distance} |
            </p>
            <p className="text-[#0158fe] text-[17px] font-normal leading-[120%] ml-[5px] ">
              {hospital.tel}
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#B2B3B5]"></div>
        </div>
      ))}
    </>
  );
};

export default HosInfo;
