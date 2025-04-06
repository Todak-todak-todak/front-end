import Allow from '@assets/images/Header/Allow.svg?react';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center py-[24px] ">
        <button onClick={() => navigate(-1)} className="absolute left-4">
          <Allow className="w-6 h-5" />
        </button>
        {title && (
          <p className="text-black text-[18px] font-semibold">{title}</p>
        )}
      </div>
    </>
  );
};

export default Header;
