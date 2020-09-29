import { createMedia } from "@artsy/fresnel"

const BoxHeroMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1000,
    lg: 1200,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = BoxHeroMedia.createMediaStyle();

export const { Media, MediaContextProvider } = BoxHeroMedia;