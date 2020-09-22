module.exports = {
  siteMetadata: {
    title: "박스히어로",
    description: "박스히어로는 PC, 모바일에서 쉽게 사용할 수 있는 재고관리 플랫폼 입니다. 언제 어디서나 간편하게 재고관리를 해보세요.",
    author: `@bgpworks`,
    keywords: `재고관리, 자산관리, 바코드, QR코드, RFID, 재고, 자산, 엑셀, 제품`,
    email: "support+boxhero@bgpworks.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BoxHero`,
        short_name: `BoxHero`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4f67ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon_512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-anchor-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: [`en`, `ko`],
        defaultLanguage: `en`,

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          ns: ['translation', 'index', 'footer', 'header', 'url'],
          fallbackLng: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
        ],
      },
    },
  ],
}
