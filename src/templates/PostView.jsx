import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostListDesktop from "../components/desktop-postlist";

export default function PostView({ data }) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: data.currentPostData.html }}
      ></div>
    </div>
  );
}

export const query = graphql`
  query (
    $language: String!
    $currentPostId: String!
    $nextPostId: String
    $prevPostId: String
  ) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    currentPostData: markdownRemark(id: { eq: $currentPostId }) {
      fields {
        slug
        date
        categorySlug
      }
      frontmatter {
        category
        title
        email
      }
      html
    }
    prevPostData: markdownRemark(id: { eq: $prevPostId }) {
      fields {
        slug
        categorySlug
      }
      frontmatter {
        title
      }
    }
    nextPostData: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
        categorySlug
      }
      frontmatter {
        title
      }
    }
  }
`;
