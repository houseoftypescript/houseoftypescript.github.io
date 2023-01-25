import Image, { StaticImageData } from 'next/image';
import React from 'react';

export const Post: React.FC<{
  image: StaticImageData;
  title: string;
  description: string;
}> = ({ image, title = '', description = '' }) => {
  return (
    <div>
      <div
        className="aspect-video rounded border bg-cover bg-center mb-4"
        style={{ backgroundImage: `url(${image.src})` }}
      />
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Post;
