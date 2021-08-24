import { createMedia } from '@artsy/fresnel';

const BoxHeroMedia = createMedia({
  breakpoints: {
    xs: 0,
    md: 1024,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = BoxHeroMedia.createMediaStyle();

export const { Media, MediaContextProvider } = BoxHeroMedia;
