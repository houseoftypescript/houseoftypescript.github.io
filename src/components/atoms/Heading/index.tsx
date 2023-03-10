import React from 'react';

export const Heading: React.FC<{
  title?: string;
  description?: string;
  align?: 'text-center' | 'text-left' | string;
  bottom?: boolean;
  enhanced?: boolean;
}> = ({
  title = '',
  description = '',
  align = 'text-center',
  bottom = true,
  enhanced = false,
}) => {
  return (
    <div className={bottom ? 'mb-8 md:mb-16' : ''}>
      <div className={`${align} max-w-lg mx-auto`}>
        <h1
          className={`${
            enhanced ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-3xl'
          } mb-4 font-b162 font-bold`}
        >
          {title}
        </h1>
        <h2 className="text-sm sm:text-lg">{description}</h2>
      </div>
    </div>
  );
};

export default Heading;
