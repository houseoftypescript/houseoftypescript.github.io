import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import arrowRight from '../../../assets/images/icons/arrow-right.png';
import avatar1 from '../../../assets/images/team/member1.png';
import avatar2 from '../../../assets/images/team/member2.png';
import avatar3 from '../../../assets/images/team/member3.png';
import avatar4 from '../../../assets/images/team/member4.png';
import Container from '../../atoms/Container';
import Heading from '../../atoms/Heading';
import Member from '../../molecules/Member';

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Emmalee Mclain',
    designation: 'Product Designer',
    socialLinks: [
      {
        id: 'github',
        name: 'github',
        link: 'http://github.com',
      },
      {
        id: 'facebook',
        name: 'facebook',
        link: 'http://facebook.com',
      },
      {
        id: 'twitter',
        name: 'twitter',
        link: 'http://twitter.com',
      },
    ],
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Daisy Morgan',
    designation: 'Lead developer',
    socialLinks: [
      {
        id: 'facebook',
        name: 'facebook',
        link: 'http://facebook.com',
      },
      {
        id: 'twitter',
        name: 'twitter',
        link: 'http://twitter.com',
      },
    ],
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Ariyanna Hicks',
    designation: 'Experience Designer',
    socialLinks: [
      {
        id: 'github',
        name: 'github',
        link: 'http://github.com',
      },
      {
        id: 'twitter',
        name: 'twitter',
        link: 'http://twitter.com',
      },
    ],
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Yamilet Hooker',
    designation: 'User interface designer',
    socialLinks: [
      {
        id: 'github',
        name: 'github',
        link: 'http://github.com',
      },
      {
        id: 'facebook',
        name: 'facebook',
        link: 'http://facebook.com',
      },
      {
        id: 'twitter',
        name: 'twitter',
        link: 'http://twitter.com',
      },
    ],
  },
  {
    id: 5,
    avatar: avatar1,
    name: 'Emmalee Mclain',
    designation: 'Product Designer',
    socialLinks: [
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'facebook',
        link: 'http://facebook.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
    ],
  },
  {
    id: 6,
    avatar: avatar2,
    name: 'Daisy Morgan',
    designation: 'Lead developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'facebook',
        link: 'http://facebook.com',
      },
    ],
  },
  {
    id: 7,
    avatar: avatar3,
    name: 'Ariyanna Hicks',
    designation: 'Experience Designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 8,
    avatar: avatar4,
    name: 'Yamilet Hooker',
    designation: 'User interface designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'facebook',
        link: 'http://facebook.com',
      },
    ],
  },
];

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1601: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

export const Team: React.FC<{ title: string; description: string }> = ({
  title = '',
  description = '',
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setCurrentIndex(swiperRef?.current?.swiper?.activeIndex || 0);
  };

  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setCurrentIndex(swiperRef?.current?.swiper?.activeIndex || 0);
  };

  return (
    <section id="team" className="py-32">
      <div className="mb-16">
        <Heading title={title} description={description} />
      </div>
      <div className="px-8">
        <div className="swiper-container transition-all duration-300">
          {currentIndex !== 0 && (
            <button
              onClick={handlePrev}
              className="bg-white cursor-pointer w-9 h-9 md:w-9 md:h-9 flex items-center justify-center rounded-full absolute z-10 shadow-xl left-2 md:left-4 swiper-arrow swiper-arrow-left"
            >
              <Image
                src={arrowRight}
                alt="arrow left"
                className="w-3 h-3 md:w-3 md:h-3"
              />
            </button>
          )}
          {!isEnd && (
            <button
              className="bg-white cursor-pointer w-9 h-9 md:w-9 md:h-9 flex items-center justify-center rounded-full absolute z-10 shadow-xl right-2 md:right-4 swiper-arrow swiper-arrow-right"
              onClick={handleNext}
            >
              <Image
                src={arrowRight}
                alt="arrow right"
                className="w-3 h-3 md:w-3 md:h-3"
              />
            </button>
          )}
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={breakpoints}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <Member member={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
