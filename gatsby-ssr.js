/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */


import React from "react"

// https://isamrish.com/how-to-add-3rd-party-script-in-your-gatsby-website/

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
  setHeadComponents([
    <link
      key="font"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Roboto:wght@400;700&display=fallback"
      rel='stylesheet'
      type='text/css'
    />,
    // https://github.com/nuxodin/ie11CustomProperties
    <script
      key="cssVariableIEPolyfill"
      dangerouslySetInnerHTML={{
        __html: `window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\\x2fscript>');`,
      }}/>,
    // helpscout beacon script. init은 gatsby-browser.js에서 한다.
    <script
      key="helpscoutScriptLoad"
      dangerouslySetInnerHTML={{
        __html: `!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`,
      }}/>,
  ])

  setPostBodyComponents([
  ])
}
