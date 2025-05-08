const HosInfo = ({ hospitals }: { hospitals: any[] }) => {
  return (
    <>
      {hospitals.map((hospital, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-center items-start pt-[15px]"
        >
          <p className="text-[#5673D5] text-[20px] font-normal leading-[120%]">
            {hospital.name}
          </p>
          <p className="text-[#000] text-[17px] leading-[120%] mt-[9px]">
            {hospital.address}
          </p>
          <p className="text-[#000] text-[17px] leading-[120%] mt-[9px]">
            {hospital.phoneNumber}
          </p>

          {idx < hospitals.length - 1 && (
            <div className="w-full h-[1px] mt-[15px] bg-[#B2B3B5]" />
          )}
        </div>
      ))}
    </>
  );
};

export default HosInfo;
