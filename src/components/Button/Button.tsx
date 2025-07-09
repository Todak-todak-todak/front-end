type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  text,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-[10px] m-2 px-4
        h-[52px] w-[420px]
        ${
          disabled
            ? 'bg-gray-300 cursor-not-allowed text-white'
            : 'bg-mainBlue text-white'
        }
        ${className}
      `}
    >
      <span className="text-center font-sans text-[16px] font-bold leading-none">
        {text}
      </span>
    </button>
  );
};

export default Button;
