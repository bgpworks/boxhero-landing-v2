import { useState } from "react";

const SPEED = 300;

export const useSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTo = (index) => {
    swiperRef.slideTo(index, SPEED);
    setActiveIndex(index);
  };

  const slidePrev = () => {
    swiperRef.slidePrev(SPEED);
    setActiveIndex(swiperRef.activeIndex);
  };

  const slideNext = () => {
    swiperRef.slideNext(SPEED);
    setActiveIndex(swiperRef.activeIndex);
  };

  return {
    onSwiper: setSwiperRef,
    slideTo,
    slidePrev,
    slideNext,
    activeIndex,
  };
};
