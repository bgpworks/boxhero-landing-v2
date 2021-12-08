import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

const WithAlternateLangs = (props) => {
  const { children } = props;

  const {
    defaultLanguage, language, originalPath, siteUrl = "",
  } = useI18next();
  const data = useStaticQuery(
    graphql`
      query AllSite {
        allSitePage:
          allSitePage(filter: {context: {i18n: {routed: {eq: true}}}}) {
            group(field: context___i18n___originalPath) {
              fieldValue
              totalCount
              nodes {
                context {
                  language
                }
              }
            }
          }
      }
    `,
  );

  const { allSitePage: { group: groupByOriginalPath } } = data;

  const createUrlWithLang = (lng) => {
    const url = `${siteUrl}/${lng}${originalPath}`;
    return url.endsWith("/") ? url : `${url}/`;
  };
  const curPathGroup = groupByOriginalPath.find(({ fieldValue }) => fieldValue === originalPath);
  const allAlternativeLangs = curPathGroup.nodes.map(({ context }) => context.language);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Helmet {...props}>
      <link
        rel="canonical"
        href={createUrlWithLang(language)}
      />
      {allAlternativeLangs.map((lng) => (
        <link
          rel="alternate"
          key={lng}
          href={createUrlWithLang(lng)}
          hrefLang={lng}
        />
      ))}
      <link
        rel="alternate"
        href={createUrlWithLang(defaultLanguage)}
        hrefLang="x-default"
      />
      {children}
    </Helmet>
  );
};

export default WithAlternateLangs;
