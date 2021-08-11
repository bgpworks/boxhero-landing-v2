import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js

import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostListDesktop from "../components/desktop-postlist";

export default function PostListByCategory({ pageContext, location, data }) {
  const { pageIndex, lastPageIndex, categorySlug, category } = pageContext;
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
          title={category}
          description={`${category} 관련 게시물`}
          edges={edges}
          pageIndex={pageIndex}
          lastPageIndex={lastPageIndex}
          pagePathPrefix={`/blog/categories/${categorySlug}`}
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
    allMarkdownRemark(filter: { id: { in: $ids } }) {
      edges {
        node {
          fields {
            slug
            categorySlug
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
