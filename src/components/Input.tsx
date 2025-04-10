import React from 'react';

type InputProps = {
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ placeholder, className = '', ...props }: InputProps) => {
  return (
    <input
      type="text"
      {...props}
      placeholder={placeholder}
      className={`
      w-full h-[50px] px-4 border rounded-[10px]
      border-inputBlue
      text-[#111] placeholder:text-[#999] bg-white
      focus:border-[#0053A4] focus:ring-2 focus:ring-[#99C8FF] focus:outline-none
      ${className}
    `}
    />
  );
};

export default Input;
