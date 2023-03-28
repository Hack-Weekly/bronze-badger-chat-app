import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const FormSwiper = () => {
  const slideClass = 'w-full md:flex justify-around items-center w-35';
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className={`slide ${slideClass}`}>Stay in touch</SwiperSlide>
      <SwiperSlide className={`slide-2 ${slideClass}`}>Meet friends</SwiperSlide>
      <SwiperSlide className={`slide-3 ${slideClass}`}>Brainstorm</SwiperSlide>
    </Swiper>
  );
};
