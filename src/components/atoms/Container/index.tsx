import React, { ReactNode } from 'react';

export const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto px-4 sm:px-8">{children}</div>;
};

export default Container;
