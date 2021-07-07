import React from "react";
import { graphql } from "gatsby";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
// js
import SEO from "../components/seo";
import { ExternalLinkWithQuery } from "../components/common";
import { useHelpscout } from "../components/helpscout";
import Img from "gatsby-image";
import { urlStart } from "../components/constants";

const MarketingPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
        path={location.pathname}
      />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Img fluid={data.mobile1.childImageSharp.fluid} />
        <ExternalLinkWithQuery href={urlStart}>
          <Img fluid={data.mobile2.childImageSharp.fluid} />
        </ExternalLinkWithQuery>
        <Img fluid={data.mobile3.childImageSharp.fluid} />
        <Link to="/">
          <Img fluid={data.mobile4.childImageSharp.fluid} />
        </Link>
        <Img fluid={data.mobile5.childImageSharp.fluid} />
      </div>
    </>
  );
};

export default MarketingPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    mobile1: file(base: { eq: "marketing-210630-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 960, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile2: file(base: { eq: "marketing-210630-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 960, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile3: file(base: { eq: "marketing-210630-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 960, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile4: file(base: { eq: "marketing-210630-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 960, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile5: file(base: { eq: "marketing-210630-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 960, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
