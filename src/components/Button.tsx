type ButtonProps = {
  text: string;
  height?: string;
  width?: string;
  disabled?: boolean;
};

const Button = ({
  text,
  height = 'h-[52px]',
  width = 'w-[420px]',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center rounded-[10px] px-4 ${height} ${width} 
      ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-mainBlue'}
    `}
    >
      <span className="text-white text-center font-sans text-[16px] font-bold leading-none">
        {text}
      </span>
    </button>
  );
};

export default Button;
