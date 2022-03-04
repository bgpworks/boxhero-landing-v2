import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostViewDesktop from "../components/desktop-postview";
import PostViewMobile from "../components/mobile-postview";

export default function PostView({ data, location, pageContext }) {
  const { t, language } = useI18next();

  const [currentPostData] = data.allStrapiPost.edges.filter(
    ({ node }) => node.id === pageContext.currentPostId,
  );

  const { node, previous, next } = currentPostData;
  const { title, description, thumbnail } = node;

  const thumbnailURL = thumbnail && thumbnail.url;

  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("blog:postviewTitle", {
          title,
        })}
        description={description}
        path={location.pathname}
        ogImageUrl={thumbnailURL}
      />

      <Media at="xs">
        <PostViewMobile
          currentPostData={node}
          prevPostData={previous}
          nextPostData={next}
        />
      </Media>

      <Media greaterThan="xs">
        <PostViewDesktop
          currentPostData={node}
          prevPostData={previous}
          nextPostData={next}
        />
      </Media>
    </>
  );
}

export const query = graphql`
  query (
    $language: String!
  ) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    allStrapiPost(
      filter: { locale: { eq: $language } }
      sort: {
        fields: [date, title],
        order: [DESC, DESC]
      }
    ) {
      edges {
        node {
          id
          title
          description
          content {
            data {
              content
            }
          }
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
        previous {
          slug
          title
          category {
            name
            bgColor
            textColor
          }
        }
        next {
          slug
          title
          category {
            name
            bgColor
            textColor
          }
        }
      }
    }
  }
`;
