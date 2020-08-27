import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container1024, Padding } from "../components/common";
import BackgroundImage from "gatsby-background-image";
// css
import styles from "./about.module.css";

const Top = ({data}) => (
  <BackgroundImage
    Tag="section"
    className={styles.topContainer}
    fluid={data.topBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <Container1024 className={styles.topContentContainer}>
      <div className={styles.topLeftContainer}>
        재고관리,<br />
        왜 박스히어로를<br />
        사용해야 할까요?<br />
      </div>
      <div className={styles.topRightContainer}>
        <Img fixed={data.topLogo.childImageSharp.fixed}
        />
      </div>
    </Container1024>
  </BackgroundImage>
);

const AboutPage = ({data}) => (
  <Layout
    isFloatMenu={true}
    closingEmoji={data.light}
    closingMsg="더 이상의 재고 손실은 없다."
  >
    <SEO title="박스히어로는?" />

    <Top data={data} />

    <Padding y={100}/>
    <div style={{height: "100%", textAlign: "center", fontSize: "2em", color: "red"}}>
      "TODO"<br/>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <Padding y={100}/>

  </Layout>
);

export default AboutPage;

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
        fixed(width: 697,
          traceSVG: {
            color: "#6159F5"
            optTolerance: 0.2,
            turdSize: 100,
            turnPolicy: TURNPOLICY_MINORITY
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    light: file(relativePath: { eq: "emoji-light.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
