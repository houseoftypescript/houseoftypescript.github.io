import Image from 'next/image';
import React from 'react';
import banner from '../../../assets/images/banner.png';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Container from '../../atoms/Container';

export const Hero: React.FC<{ title: string; description: string }> = ({
  title = '',
  description = '',
}) => {
  return (
    <section id="hero" className="pt-32">
      <Container>
        <Heading title={title} description={description} enhanced />
        <div className="relative">
          <div className="sm:absolute top-0 w-full flex justify-center pb-16">
            <Button>Get Started</Button>
          </div>
          <Image src={banner} alt="Banner" className="hidden sm:block" />
        </div>
      </Container>
      <div className="relative hidden sm:block">
        <div className="bottom-0 -z-10 absolute bg-[#FFF5ED]/50 w-full h-32"></div>
      </div>
    </section>
  );
};

export default Hero;
