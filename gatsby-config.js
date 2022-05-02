const { format } = require("date-fns");
const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  siteMetadata: {
    title: "BoxHero - The Simplest Inventory Management Solution",
    description:
      "Stay on top of inventory management in real-time on your computer or mobile device.",
    author: `@BoxHero_support`,
    keywords: `재고관리, 자산관리, 바코드, QR코드, RFID, 재고, 자산, 엑셀, 제품`,
    email: "support+boxhero@bgpworks.com",
    siteUrl: "https://www.boxhero-app.com",
    fbAppId: "1194988153968114",
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
    `gatsby-plugin-image`,
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
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
    //     once: true, // Defines if animation needs to be launched once
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
        ignore: [`**/\.*`, `**/*~`],
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: "locale",
        languages: [`en`, `ko`, `es`, `id`],
        defaultLanguage: `en`,
        generateDefaultLanguagePage: true,
        siteUrl: "https://www.boxhero-app.com",

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          ns: [
            "translation",
            "index",
            "footer",
            "header",
            "url",
            "about",
            "features",
            "pricing",
            "layout",
            "language-selector",
            "blog",
          ],
          fallbackLng: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
          {
            matchPath: "/(privacy|tos)",
            languages: [],
          },
          {
            matchPath: "/marketing-210524",
            languages: ["ko"],
          },
          {
            matchPath: "/marketing-210630",
            languages: ["ko"],
          },
          {
            matchPath: "/marketing",
            languages: ["en", "ko"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        excludes: ["/**/404", "/**/404.html", "/**/marketing*"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
            buildTime
          }
          allSitePage {
            nodes {
              pageContext
            }
          }
        }
        `,
        resolvePages: ({
          allSitePage: { nodes },
          site: {
            siteMetadata: { siteUrl },
            buildTime,
          },
        }) => {
          const lastmod = format(new Date(buildTime), "yyyy-MM-dd");

          const filteredNodes = nodes.filter(({ pageContext }) => pageContext.i18n.routed);
          const group = filteredNodes.reduce((prev, cur) => {
            const { originalPath, language } = cur.pageContext.i18n;
            prev[originalPath] = prev[originalPath] || []
            prev[originalPath].push(language);
            return prev;
          }, {});

          return Object.entries(group).map(([originalPath, langs]) => (
            {
              path: originalPath,
              langs: langs,
              context: {
                siteUrl,
                lastmod,
              },
            }
          ));
        },
        serialize: (page, _tools) => {
          const {
            path,
            langs,
            context: { siteUrl, lastmod },
          } = page;
          const priority = path === "/" ? 1.0 : 0.8;
          const changefreq = "always";

          if (langs.length === 1) {
            const url = `${siteUrl}/${langs[0]}${path}`;

            return {
              url,
              priority,
              changefreq,
              lastmod,
            };
          }

          const url = `${siteUrl}${path}`;
          const links = [
            { lang: "x-default", url },
            ...langs.map((lang) => ({
              lang,
              url: `${siteUrl}/${lang}${path}`,
            })),
          ];

          return {
            url,
            links,
            priority,
            changefreq,
            lastmod,
          };
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
  ],
};
