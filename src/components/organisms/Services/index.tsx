import Container from '@mui/material/Container';
import React from 'react';
import Heading from '../../atoms/Heading';
import Service from '../../molecules/Service';
import { StaticImageData } from 'next/image';

export type ServiceType = {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
};

export const Services: React.FC<{
  title: string;
  description: string;
  services: ServiceType[];
}> = ({ title = '', description = '', services = [] }) => {
  return (
    <section id="services" className="bg-[#FFF5ED]/50 py-8 md:py-16">
      <Container>
        <Heading title={title} description={description} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {services.map(
            ({ id, image, title, description }: ServiceType, index: number) => {
              return (
                <Service
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                />
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
};

export default Services;
