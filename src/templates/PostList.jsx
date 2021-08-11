import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js

import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostListDesktop from "../components/desktop-postlist";

export default function PostList({ pageContext, location, data }) {
  const { pageIndex, lastPageIndex } = pageContext;
  const { language, t } = useI18next();
  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("blog:pageTitle")}
        description={t("blog:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <div>fsadfasd</div>
      </Media>

      <Media greaterThan="xs">
        <PostListDesktop
          title={t("blog:pageTitle")}
          description={t("blog:pageDescription")}
          edges={edges}
          pageIndex={pageIndex}
          lastPageIndex={lastPageIndex}
          pagePathPrefix={`/blog/pages`}
        />
      </Media>
    </>
  );
}

export const query = graphql`
  query ($language: String!, $ids: [String]) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    allMarkdownRemark(
      filter: { id: { in: $ids } }
      sort: {
        fields: [frontmatter___title, frontmatter___date]
        order: [DESC, DESC]
      }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            title
            category
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  }
`;
