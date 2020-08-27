import React from "react";
import { Link, graphql } from "gatsby";
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Padding } from "../components/common";

export const FeaturesPage = ({data}) => (
  <Layout
    isFloatMenu={false}
    closingEmoji={data.dinosaur}
    closingMsg="박스히어로는 오늘도 진화 중."
  >
    <SEO title="편의기능" />

    <div style={{height: "100%", textAlign: "center", fontSize: "2em", color: "red"}}>
      "TODO"<br/>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <Padding y={100}/>

  </Layout>
);

export default FeaturesPage;

export const query = graphql`
  query {
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    topLogo: file(relativePath: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 697) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    dinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
