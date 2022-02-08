import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostViewDesktop from "../components/desktop-postview";
import PostViewMobile from "../components/mobile-postview";

export default function PostView({ data, location }) {
  const { t, language } = useI18next();
  const { currentPostData, prevPostData, nextPostData } = data;
  const { title, description } = currentPostData;

  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("blog:postviewTitle", {
          title,
        })}
        description={description}
        path={location.pathname}
      />

      <Media at="xs">
        <PostViewMobile
          currentPostData={currentPostData}
          prevPostData={prevPostData}
          nextPostData={nextPostData}
        />
      </Media>

      <Media greaterThan="xs">
        <PostViewDesktop
          currentPostData={currentPostData}
          prevPostData={prevPostData}
          nextPostData={nextPostData}
        />
      </Media>
    </>
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
    currentPostData: strapiPosts(id: { eq: $currentPostId }) {
      title
      description
      content
      category {
        name
        bgColor
        textColor
      }
      author {
        name
        photo {
          url
        }
      }
      slug
      date
      thumbnail {
        url
      }
    }
    prevPostData: strapiPosts(id: { eq: $prevPostId }) {
      slug
      title
      category {
        name
        bgColor
        textColor
      }
    }
    nextPostData: strapiPosts(id: { eq: $nextPostId }) {
      slug
      title
      category {
        name
        bgColor
        textColor
      }
    }
  }
`;
