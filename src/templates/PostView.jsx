import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostViewDesktop from "../components/desktop-postview";
import PostViewMobile from "../components/mobile-postview";

export default function PostView({ data }) {
  const { t } = useI18next();
  const { currentPostData, prevPostData, nextPostData } = data;
  const {
    frontmatter: { title, description },
  } = currentPostData;

  return (
    <>
      <SEOHelmet
        title={t("blog:postviewTitle", {
          title,
        })}
        description={description}
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
    currentPostData: markdownRemark(id: { eq: $currentPostId }) {
      fields {
        slug
        date
        categoryStyle
      }
      frontmatter {
        title
        description
        category
        author
        authorPhoto {
          childImageSharp {
            gatsbyImageData(
              width: 40
              tracedSVGOptions: {
                turnPolicy: TURNPOLICY_MAJORITY
                turdSize: 1
                alphaMax: 1
                color: "#f0f0f3"
                threshold: 160
              }
              placeholder: TRACED_SVG
            )
          }
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 800
              tracedSVGOptions: {
                turnPolicy: TURNPOLICY_MAJORITY
                turdSize: 1
                alphaMax: 1
                color: "#f0f0f3"
                threshold: 160
              }
              placeholder: TRACED_SVG
            )
          }
        }
      }
      htmlAst
    }
    prevPostData: markdownRemark(id: { eq: $prevPostId }) {
      fields {
        slug
        categoryStyle
      }
      frontmatter {
        title
        category
      }
    }
    nextPostData: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
        categoryStyle
      }
      frontmatter {
        title
        category
      }
    }
  }
`;
