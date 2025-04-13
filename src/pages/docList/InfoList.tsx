import { useTranslation } from 'react-i18next';

const InfoList = ({ items }: { items: DocItem[] }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-[20px] text-[17px] leading-[22px]">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-start">
          <span className="text-[#005BFF] font-medium whitespace-nowrap">
            {t(item.label)}
          </span>
          <span className="text-[#191B1C] text-right max-w-[70%] break-words">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export interface DocItem {
  label: string;
  value: string | React.ReactNode;
}

export default InfoList;
