import React from 'react';
import service4 from '../../../assets/images/services/service4.png';
import service5 from '../../../assets/images/services/service5.png';
import service6 from '../../../assets/images/services/service6.png';
import service7 from '../../../assets/images/services/service7.png';
import service8 from '../../../assets/images/services/service8.png';
import service9 from '../../../assets/images/services/service9.png';
import Container from '../../atoms/Container';
import Heading from '../../atoms/Heading';
import Service from '../../molecules/Service';
import { ServiceType } from '../Services';

const icons = [service4, service5, service6, service7, service8, service9];

export const Techstack: React.FC<{
  title: string;
  description: string;
  services: ServiceType[];
}> = ({ title = '', description = '', services = [] }) => {
  return (
    <section className="py-16 md:py-32 bg-[#F9FAFC]">
      <Container>
        <Heading title={title} description={description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

export default Techstack;
