import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  const baseClasses =
    'bg-main-2 text-white box-border border-main-2 hover:border-main hover:bg-transparent hover:text-main hover:border-[1px] shadow hover:shadow-md px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none cursor-pointer';

  return (
    <button className={twMerge(baseClasses, className)} {...props}>
      {children}
    </button>
  );
};
