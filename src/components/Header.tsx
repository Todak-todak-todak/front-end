import Allow from '@assets/images/Header/Allow-left.svg?react';

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <div className="flex items-center ustify-between py-[43px] px-[24px]">
        <Allow className="w-6 h-6" />
        {title && (
          <span className="flex-1 text-center text-black text-[24px] font-normal leading-[120%] -ml-6">
            {title}
          </span>
        )}
      </div>
    </>
  );
};

export default Header;
