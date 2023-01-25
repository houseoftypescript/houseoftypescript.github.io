import React from 'react';

export const Input: React.FC<{
  id: string;
  name: string;
  placeholder: string;
}> = ({ id = '', name = '', placeholder = '' }) => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full px-8 py-4 rounded-md bg-[#EFF3F7] hover:border-green-900 active:border-green-900"
    />
  );
};

export default Input;
