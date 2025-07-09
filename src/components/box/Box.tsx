import React from 'react';

type BoxVariant = 'default' | 'selectable';

interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  variant?: BoxVariant;
  selected?: boolean;
}

const Box = ({
  className = '',
  children,
  variant = 'default',
  selected = false,
  ...props
}: BoxProps) => {
  const baseClass = 'shadow-commonBox rounded-2xl';

  const selectableStyle =
    variant === 'selectable'
      ? selected
        ? 'bg-softBlue text-white'
        : 'bg-white'
      : 'bg-white';

  const combinedClass = [baseClass, selectableStyle, className].join(' ');

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

export default Box;
