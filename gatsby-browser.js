/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/global.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Boot } from "./src/boot";

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    require("intersection-observer");
    console.log(`# IntersectionObserver is polyfilled!`);
  }
}

export const wrapRootElement = Boot;
