import Container from '@mui/material/Container';
import React from 'react';
import Heading from '../../atoms/Heading';
import Service from '../../molecules/Service';
import { ServiceType } from '../Services';

export const Techstack: React.FC<{
  title: string;
  description: string;
  services: ServiceType[];
}> = ({ title = '', description = '', services = [] }) => {
  return (
    <section className="py-8 md:py-16 bg-[#F9FAFC]">
      <Container>
        <Heading title={title} description={description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

export default Techstack;
