import Container from '@mui/material/Container';
import Image from 'next/image';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import banner from '../../../assets/images/banner.png';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

export const Hero: React.FC<{ title: string; description: string }> = ({
  title = '',
  description = '',
}) => {
  return (
    <section id="home" className="py-8 md:py-16">
      <Container>
        <Heading title={title} description={description} enhanced />
        <div className="relative">
          <div className="sm:absolute top-0 w-full flex justify-center pb-16">
            <ScrollLink
              to="contact"
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <Button>Get Started</Button>
            </ScrollLink>
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
