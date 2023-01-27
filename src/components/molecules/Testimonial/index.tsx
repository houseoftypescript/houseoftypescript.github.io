import React from 'react';
import quoteImage from '../../../assets/images/icons/quote.png';

export type TestimonialProps = {
  quote?: string;
  author?: string;
};

export const Testimonial: React.FC<TestimonialProps> = ({
  quote = '',
  author = '',
}) => {
  return (
    <div className="pb-16">
      <div
        className="bg-no-repeat w-full md:w-2/3 pl-0 md:pl-16 mx-auto"
        style={{ backgroundImage: `url(${quoteImage.src})` }}
      >
        <blockquote className="pb-8">
          <h2 className="font-b612 text-2xl text-gray-700 text-justify leading-loose">
            {quote}
          </h2>
        </blockquote>
        <p className="font-medium text-gray-500 text-lg">{author}</p>
      </div>
    </div>
  );
};

export default Testimonial;
