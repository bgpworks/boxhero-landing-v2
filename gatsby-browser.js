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
  // CustomEvent polyfill for gatsby-plugin-scroll-reveal (IE)
  if(! (typeof window.CustomEvent === "function")) {
    (function () {
      function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
       };

      CustomEvent.prototype = window.Event.prototype;

      window.CustomEvent = CustomEvent;
    })();
  }

  // query param을 local storage에 쓴다.
  // 광고 트래킹을 위해 query param을 보관하고 외부로 나갈때 붙여서 나간다.
  const search = window.location.search;
  if(search) {
    console.log("Search param", window.location.search)
    localStorage.setItem('search_param', window.location.search);
  }

}

export const wrapRootElement = Boot;
