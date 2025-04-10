type ButtonProps = {
  text: string;
  height?: string;
  width?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  text,
  height = 'h-[52px]',
  width = 'w-[420px]',
  disabled = false,
  onClick,
  className = '',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-[10px] m-2 px-4 ${height} ${width} 
        ${
          disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-mainBlue'
        } ${className}`}
    >
      <span className="text-white text-center font-sans text-[16px] font-bold leading-none">
        {text}
      </span>
    </button>
  );
};

export default Button;
