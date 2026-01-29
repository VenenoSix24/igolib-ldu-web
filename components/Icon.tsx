import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}

const sizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

export const Icon: React.FC<IconProps> = ({ name, className = '', size }) => {
  return (
    <span 
      className={`material-symbols-outlined select-none ${size ? sizeMap[size] : ''} ${className}`}
    >
      {name}
    </span>
  );
};