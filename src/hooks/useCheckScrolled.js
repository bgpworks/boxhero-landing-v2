import { useState, useEffect } from 'react';

export const useCheckScrolled = () => {
  const [isScrolled, onChangeIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = (window.scrollY || window.pageYOffset) > 80;
      if (isScrolled !== scrolled) {
        onChangeIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return { isScrolled };
};
