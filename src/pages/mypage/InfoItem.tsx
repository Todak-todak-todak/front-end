import { ReactNode } from 'react';

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  editOptions?: ReactNode;
  isButton?: boolean;
  onClick?: () => void;
}

const InfoItem = ({
  icon,
  label,
  value,
  editOptions,
  isButton,
  onClick,
}: InfoItemProps) => (
  <>
    <div
      className={`py-5 ${isButton ? 'cursor-pointer' : ''}`}
      onClick={isButton ? onClick : undefined}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="w-[28px] h-[26px] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 flex justify-between items-center">
          <span className="text-[16px] font-medium text-black">{label}</span>
          <div className="text-[15px] font-medium text-gray-600">{value}</div>
        </div>
      </div>
      {editOptions && <div>{editOptions}</div>}
    </div>
    <div className="w-full h-[1px] bg-gray-200 " />
  </>
);

export default InfoItem;
