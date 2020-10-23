module.exports = {
  siteMetadata: {
    title: "BoxHero - The Simplest Inventory Management Solution",
    description: "Stay on top of inventory management in real-time on your computer or mobile device.",
    author: `@BoxHero_support`,
    keywords: `재고관리, 자산관리, 바코드, QR코드, RFID, 재고, 자산, 엑셀, 제품`,
    email: "support+boxhero@bgpworks.com",
    siteUrl: "https://www.boxhero-app.com",
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
    // responsive랑 역이면 망가짐. 일단 끔.
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
      },
    },
    {
      resolve: `@jbseo/gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: [`en`, `ko`],
        defaultLanguage: `en`,
        generateDefaultLanguagePage: true,
        siteUrl: "https://www.boxhero-app.com",

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          ns: ['translation', 'index', 'footer', 'header', 'url', 'about', 'features', 'pricing', 'layout'],
          fallbackLng: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
          {
            matchPath: '/(privacy|tos)',
            excludeLanguages: ['en', 'ko']
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/**/404', '/**/404.html'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
              edges {
                node {
                  context {
                    i18n {
                      defaultLanguage
                      languages
                      originalPath
                    }
                  }
                  path
                }
              }
            }
          }
        `,
        serialize: ({site, allSitePage}) => {
          return allSitePage.edges.map((edge) => {
            const {languages, originalPath, defaultLanguage} = edge.node.context.i18n;
            const {siteUrl} = site.siteMetadata;
            const url = siteUrl + originalPath;
            const links = [
              {lang: 'x-default', url}
            ];
            languages.forEach((lang) => {
              links.push({lang, url: `${siteUrl}/${lang}${originalPath}`});
            });
            return {
              url,
              changefreq: 'always',
              priority: originalPath === '/' ? 1.0 : 0.85,
              links
            };
          });
        }
      }
    },
    `gatsby-plugin-smoothscroll`,
  ],
}
