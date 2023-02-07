import Chip from '@mui/material/Chip';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Project: React.FC<{
  image: StaticImageData;
  title?: string;
  description?: string;
  url?: string;
  technologies?: string[];
}> = ({ image, title = '', description = '', url = '', technologies = [] }) => {
  return (
    <div className="hover:p-4 hover:shadow hover:border transition-all duration-100">
      <Link href={url} target="_blank" className="block">
        <div
          className="aspect-video rounded border bg-cover bg-center"
          style={{ backgroundImage: `url(${image.src})` }}
        />
        <h2 className="text-lg font-bold mt-4">{title}</h2>
      </Link>
      <p className="text-gray-500 mt-4">{description}</p>
      <div className="mt-4">
        {technologies.map((technology) => (
          <Chip
            key={technology}
            label={technology}
            variant="filled"
            size="small"
            className="text-white bg-emerald-500"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
