import Container from '@mui/material/Container';
import React from 'react';
import service1 from '../../../assets/images/services/service1.png';
import service2 from '../../../assets/images/services/service2.png';
import service3 from '../../../assets/images/services/service3.png';
import Heading from '../../atoms/Heading';
import Service from '../../molecules/Service';

const icons = [service1, service2, service3];

export type ServiceType = { id: string; title: string; description: string };

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
            ({ id, title, description }: ServiceType, index: number) => {
              return (
                <Service
                  key={id}
                  image={icons[index]}
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
