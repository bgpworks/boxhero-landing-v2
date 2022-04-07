import {
  useContext, useCallback,
} from "react";
import { CarouselContext } from "pure-react-carousel";

export const useCarouselHandler = () => {
  const carouselContext = useContext(CarouselContext);

  const goToPrevSlide = useCallback(() => {
    const { currentSlide } = carouselContext.state;
    const prevSlide = Math.min((currentSlide - 1), 0);
    carouselContext.setStoreState({ currentSlide: prevSlide });
  }, [carouselContext]);

  const goToNextSlide = useCallback(() => {
    const { currentSlide, totalSlides } = carouselContext.state;
    const nextSlide = (currentSlide + 1) % totalSlides;
    carouselContext.setStoreState({ currentSlide: nextSlide });
  }, [carouselContext]);

  return {
    goToPrevSlide,
    goToNextSlide,
  };
};
