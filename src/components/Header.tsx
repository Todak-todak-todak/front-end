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
      <div className="w-full max-w-[470px] flex items-center justify-between py-[30px] ">
        <button onClick={() => navigate(-1)} className="">
          <Allow className="w-6 h-5" />
        </button>
        {title && (
          <span className="text-center font-normal text-black text-[22px] leading-[120%]">
            {title}
          </span>
        )}
        <div className="w-[24px] h-[20px] flex items-center justify-center">
          {img ?? null}
        </div>
      </div>
    </>
  );
};

export default Header;
