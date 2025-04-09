type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  editOptions?: React.ReactNode;
  isButton?: boolean;
};

const InfoItem = ({
  icon,
  label,
  value,
  editOptions,
  isButton = false,
}: InfoItemProps) => {
  return (
    <>
      <div className={`py-8 ${isButton ? 'cursor-pointer' : ''}`}>
        <div className="flex items-center justify-between gap-3">
          <div className="w-[30px] h-[30px] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>

          <div className="flex-1 flex justify-between items-center">
            <span className="text-[18px] font-medium text-black">{label}</span>
            <div className="text-[18px] font-medium text-black">{value}</div>
          </div>
        </div>

        {editOptions && <div className="mt-4">{editOptions}</div>}
      </div>
      <div className="w-full h-[1px] bg-[#B2B3B5] mt-[-23px]" />
    </>
  );
};

export default InfoItem;
