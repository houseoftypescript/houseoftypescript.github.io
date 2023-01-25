import React, { ReactNode } from 'react';

export const Button: React.FC<{
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  className?: string;
}> = ({ type = 'button', children = <></>, className = '' }) => {
  return (
    <button
      type={type}
      className={`px-8 py-4 rounded-md bg-green-900 hover:bg-gray-900 text-white transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
