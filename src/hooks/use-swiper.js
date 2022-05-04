import { useState } from "react";

export const useSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTo = (index) => {
    swiperRef.slideTo(index, 300);
    setActiveIndex(index);
  };

  return {
    onSwiper: setSwiperRef,
    slideTo,
    activeIndex,
  };
};
