import React from "react";
import { Link, graphql } from "gatsby";
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Padding, SimpleTop } from "../components/common";

export const PricingPage = ({data}) => (
  <Layout
    isFloatMenu={false}
    closingEmoji={data.box}
    closingMsg="비용절감의 시작은 재고관리부터."
  >
    <SEO title="요금안내" />

    <SimpleTop
      title="요금안내"
      desc={<>결제 한번으로 팀원 전체가 사용할 수 있는 박스히어로!<br/>이제 재고관리는 합리적인 가격으로 쉽고 빠르고 편리하게</>}
    />

    <div style={{height: "100%", textAlign: "center", fontSize: "2em", color: "red"}}>
      "TODO: 가격"<br/>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <Padding y={100}/>

  </Layout>
);

export default PricingPage;

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
    box: file(relativePath: { eq: "emoji-box.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
