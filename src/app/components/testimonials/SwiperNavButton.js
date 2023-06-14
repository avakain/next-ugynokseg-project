import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center">
      <button onClick={() => swiper.slidePrev()}>
        <BsArrowLeftSquareFill
          size={30}
          className='text-indigo-500 m-3'
        /></button>
      <button onClick={() => swiper.slideNext()}>
        <BsArrowRightSquareFill
          className='text-indigo-500  m-3'
          size={30}
        /></button>
    </div>
  );
};