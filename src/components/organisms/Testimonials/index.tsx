import Image from 'next/image';
import Tabs, { TabPane } from 'rc-tabs';
import React from 'react';
import quote from '../../../assets/images/icons/quote.png';
import Container from '../../atoms/Container';

export const Testimonials: React.FC<{ testimonials: any[] }> = ({
  testimonials = [],
}) => {
  return (
    <section className="bg-[#FFF5ED]/50 pt-16 pb-32 testimonials-container">
      <Container>
        <Tabs tabPosition="bottom">
          {testimonials?.map((testimonial) => (
            <TabPane
              key={testimonial.id}
              tab={<Image src={testimonial.logo} alt="logo" />}
            >
              <div className="pb-16">
                <div
                  className="bg-no-repeat w-2/3 pl-16 mx-auto"
                  style={{ backgroundImage: `url(${quote.src})` }}
                >
                  <blockquote className="pb-8">
                    <h2 className="font-b612 text-2xl text-gray-700 text-justify leading-loose">
                      {testimonial.quote}
                    </h2>
                  </blockquote>
                  <p className="font-medium text-gray-500 text-lg">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Testimonials;
