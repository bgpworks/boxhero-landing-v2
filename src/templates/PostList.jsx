import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js

import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostListDesktop from "../components/desktop-postlist";
import PostListMobile from "../components/mobile-postlist";

export default function PostList({ pageContext, location, data }) {
  const { pageIndex, lastPageIndex } = pageContext;
  const { language, t } = useI18next();
  const {
    allStrapiPosts: { edges },
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
        <PostListMobile
          title={t("blog:title")}
          description={t("blog:pageDescription")}
          edges={edges}
          pageIndex={pageIndex}
          lastPageIndex={lastPageIndex}
          pagePathPrefix="/blog/pages"
        />
      </Media>

      <Media greaterThan="xs">
        <PostListDesktop
          title={t("blog:title")}
          description={t("blog:pageDescription")}
          edges={edges}
          pageIndex={pageIndex}
          lastPageIndex={lastPageIndex}
          pagePathPrefix="/blog/pages"
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
    allStrapiPosts(
      filter: { id: { in: $ids } }
      sort: {
        fields: [date, title],
        order: [DESC, DESC]
      }
    ) {
      edges {
        node {
          slug
          title
          category {
            name
            bgColor
            textColor
          }
          description
          thumbnail {
            url
          }
        }
      }
    }
  }
`;
