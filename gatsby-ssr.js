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
    // Yandex.Metrika counter
    <script
      key="yandexScriptLoad"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(57468217, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`
      }}
    />,
    <noscript key="yandexScriptLoad2">
      <div>
        <img
          src="https://mc.yandex.ru/watch/57468217"
          style={{position: "absolute", left: -9999}}
          alt=""
        />
      </div>
    </noscript>,
    // google tag manager
    <script
      key="googleTagManagerScriptLoad"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTMLRJM');`,
      }}
    />,
  ])

  setPostBodyComponents([
    // google tag manager - noscript
    <noscript key="googleTagManagerNoscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MTMLRJM"
        height="0"
        width="0"
        style={{display: "none", visibility: "hidden"}}>
      </iframe>
    </noscript>,
  ])
}
