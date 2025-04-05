import React from 'react';

interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Box = ({ className, children, ...props }: BoxProps) => {
  return (
    <div className={`box shadow-commonBox rounded-2xl ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Box;
