import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";
import PostViewDesktop from "../components/desktop-postview";

export default function PostView({ data, location, pageContext }) {
  const { language } = useI18next();
  const { categoryStyleMapSerialized } = pageContext;
  const categoryStyleMap = JSON.parse(categoryStyleMapSerialized);
  const { currentPostData, prevPostData, nextPostData } = data;
  return (
    <>
      <SEOHelmet
        lang={language}
        title={currentPostData.frontmatter.title}
        description={currentPostData.frontmatter.description}
        path={location.pathname}
      />

      <Media at="xs">
        <div>fsadfasd</div>
      </Media>

      <Media greaterThan="xs">
        <PostViewDesktop
          categoryStyleMap={categoryStyleMap}
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
      }
      frontmatter {
        category
        title
        author
        authorPhoto {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 40)
          }
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 800)
          }
        }
      }
      htmlAst
    }
    prevPostData: markdownRemark(id: { eq: $prevPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        category
      }
    }
    nextPostData: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        category
      }
    }
  }
`;
