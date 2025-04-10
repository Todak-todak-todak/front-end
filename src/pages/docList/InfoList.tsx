import { ReactNode } from 'react';

export interface DocItem {
  label: string;
  value: string | ReactNode;
}

const InfoList = ({ items }: { items: DocItem[] }) => (
  <div className="flex flex-col gap-[20px] text-[17px] leading-[22px]">
    {items.map((item, idx) => (
      <div key={idx} className="flex justify-between items-start">
        <span className="text-[#005BFF] font-medium whitespace-nowrap">
          {item.label}
        </span>
        <span className="text-[#191B1C] text-right max-w-[70%] break-words">
          {item.value}
        </span>
      </div>
    ))}
  </div>
);

export default InfoList;
