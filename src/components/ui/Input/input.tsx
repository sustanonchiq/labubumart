import React, { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const inputClasses =
    'w-full px-4 py-2  border-main-2 rounded-md focus:outline-none focus:border-b-[2px] transition-all';

  return <input className={`${inputClasses} ${className}`} {...props} />;
};
