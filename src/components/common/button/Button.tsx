import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary-full' | 'primary-half' | 'gray-half';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
}

const variantClassMap: Record<ButtonVariant, string> = {
  'primary-full': 'bg-mainBlue w-full',
  'primary-half': 'bg-mainBlue w-1/2',
  'gray-half': 'bg-mainGray w-1/2',
};

const disabledClass = 'bg-gray-200 cursor-not-allowed w-full';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { text, variant = 'primary-full', disabled = false, className, ...props },
    ref
  ) => {
    const variantClass = variantClassMap[variant];
    const classes = cn(
      'mb-5 text-white px-4 py-2 h-[52px] rounded-xl',
      disabled ? disabledClass : variantClass,
      className
    );

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {text}
      </button>
    );
  }
);

export default Button;
