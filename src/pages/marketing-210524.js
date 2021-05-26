import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEO from "../components/seo";
import MobileMarketing from "../components/mobile-marketing-210524";
import { useHelpscout } from "../components/helpscout";

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
      <MobileMarketing data={data} />
    </>
  );
};

export default MarketingPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    mobile1: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-210524-1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile2: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-210524-2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile3: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-210524-3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile4: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-210524-4.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
