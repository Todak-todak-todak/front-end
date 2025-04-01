import allow from '../assets/images/allow-left.svg';

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-between py-[43px] px-[24px]">
        <img src={allow} alt="뒤로가기" className="w-6 h-6" />
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
