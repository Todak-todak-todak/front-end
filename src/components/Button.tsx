type ButtonProps = {
  text: string;
  height?: string;
  width?: string;
};

const Button = ({
  text,
  height = 'h-[52px]',
  width = 'w-[420px]',
}: ButtonProps) => {
  return (
    <button
      className={`ml-6 flex items-center justify-center rounded-[10px] bg-mainBlue px-4 ${height} ${width}`}
    >
      <span className="text-white text-center font-sans text-[16px] font-bold leading-none">
        {text}
      </span>
    </button>
  );
};

export default Button;
