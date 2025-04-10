import { ReactNode } from 'react';

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="bg-white rounded-[16px] px-[20px] py-[24px] w-full border-2 border-[#005BFF] shadow-[0_0_0_4px_rgba(0,91,255,0.1)]">
    <p className="text-[20px] font-semibold text-[#191b1c] mb-[16px]">
      {title}
    </p>
    {children}
  </div>
);

export default SectionCard;
