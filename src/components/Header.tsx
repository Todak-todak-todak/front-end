import Allow from '@assets/images/Header/Allow.svg?react';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title?: string;
  img?: React.ReactNode;
};

const Header = ({ title, img }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center py-[40px] ">
        <button onClick={() => navigate(-1)} className="absolute left-4">
          <Allow className="w-6 h-5" />
        </button>
        {title && (
          <span className="text-center font-normal text-black text-[24px] leading-[120%]">
            {title}
          </span>
        )}
        {img && <div className="absolute right-[29px]">{img}</div>}
      </div>
    </>
  );
};

export default Header;
