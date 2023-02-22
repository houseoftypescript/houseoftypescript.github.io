import Container from '@mui/material/Container';
import Image from 'next/image';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';
import React from 'react';
import Tabs from '../../atoms/Tabs';
import Testimonial from '../../molecules/Testimonial';

export const Testimonials: React.FC<{ testimonials: any[] }> = ({
  testimonials = [],
}) => {
  return (
    <section className="bg-[#FFF5ED]/50 py-8 md:py-16 testimonials-container">
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
