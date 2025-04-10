import React from 'react';

type InputProps = {
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ placeholder, className = '', ...props }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...props}
      className={`w-full h-[50px] px-4 border rounded-[10px] border-inputBlue text-[#111] placeholder:text-[#999] bg-white ${className}`}
    />
  );
};

export default Input;
