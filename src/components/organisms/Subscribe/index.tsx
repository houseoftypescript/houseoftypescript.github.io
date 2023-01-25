import React from 'react';
import background from '../../../assets/images/background/subscribe.png';
import Heading from '../../atoms/Heading';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';

export const Subscribe: React.FC<{ title: string; description: string }> = ({
  title = '',
  description = '',
}) => {
  return (
    <section
      id="subscribe"
      className="py-0 md:py-32 bg-[#F8F0EA] bg-bottom bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="container mx-auto">
        <div className="bg-white rounded-none md:rounded-2xl">
          <div className="px-4 py-8 md:px-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="col-span-1">
                <Heading
                  title={title}
                  description={description}
                  align="text-center md:text-left"
                  bottom={false}
                  enhanced
                />
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 md:col-span-2">
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="col-span-1">
                    <Button className="w-full">Subscribe</Button>
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <Checkbox
                      id="promote"
                      label="Don't provide any promotional message."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
