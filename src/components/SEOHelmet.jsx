/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEOHelmet({ description, lang, meta, title, path }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            fbAppId
          }
        }
        ogImg: file(relativePath: { eq: "og_image.png" }) {
          publicURL
        }
      }
    `
  );
  const site = data.site;

  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: `${siteUrl}${data.ogImg.publicURL}`,
        },
        {
          property: "og:url",
          content: `${siteUrl}${path}`,
        },
        {
          property: "og:name",
          content: title,
        },
        {
          property: "fb:app_id",
          content: site.siteMetadata.fbAppId,
        },
      ].concat(meta)}
    />
  );
}

SEOHelmet.defaultProps = {
  lang: `ko`,
  meta: [],
  description: ``,
  path: "/",
};

SEOHelmet.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SEOHelmet;