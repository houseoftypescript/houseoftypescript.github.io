import Typography from '@mui/material/Typography';
import Tabs, { TabPane } from 'rc-tabs';
import React from 'react';
import Image from 'next/image';
import quote from '../../../assets/images/icons/quote.png';
import dribbble from '../../../assets/images/logos/dribbble.png';
import google from '../../../assets/images/logos/google.png';
import microsoft from '../../../assets/images/logos/microsoft.png';
import paypal from '../../../assets/images/logos/paypal.png';
import uber from '../../../assets/images/logos/uber.png';
import Container from '../../atoms/Container';

const data = [
  {
    id: 1,
    logo: uber,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
  },
  {
    id: 2,
    logo: google,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Qwilr Page we have made for them. Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a”`,
  },
  {
    id: 3,
    logo: paypal,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
  },
  {
    id: 4,
    logo: microsoft,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Qwilr Page we have made for them. Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a”`,
  },
  {
    id: 5,
    logo: dribbble,
    author: 'By Denny Albuz, Adviser of Paypal',
    quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#FFF5ED]/50 pt-16 pb-32 testimonials-container">
      <Container>
        <Tabs tabPosition="bottom">
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <div className="pb-16">
                <div
                  className="bg-no-repeat w-2/3 pl-16 mx-auto"
                  style={{ backgroundImage: `url(${quote.src})` }}
                >
                  <blockquote className="pb-8">
                    <h2 className="font-b612 text-2xl text-gray-700 text-justify leading-loose">
                      {item.quote}
                    </h2>
                  </blockquote>
                  <p className="font-medium text-gray-500 text-lg">
                    {item.author}
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
