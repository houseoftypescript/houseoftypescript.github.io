import Image from 'next/image';
import Tabs, { TabPane } from 'rc-tabs';
import React from 'react';
import Container from '../../atoms/Container';
import Testimonial from '../../molecules/Testimonial';

export const Testimonials: React.FC<{ testimonials: any[] }> = ({
  testimonials = [],
}) => {
  return (
    <section className="bg-[#FFF5ED]/50 pt-8 md:pt-16 pb-16 md:pb-32 testimonials-container">
      <Container>
        <Tabs tabPosition="bottom">
          {testimonials?.map(({ id, logo, quote, author }) => (
            <TabPane key={id} tab={<Image src={logo} alt="logo" />}>
              <Testimonial quote={quote} author={author} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Testimonials;
