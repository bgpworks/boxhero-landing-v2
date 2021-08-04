import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopMarketingKo from "../components/desktop-marketing-ko";
import DesktopMarketingEn from "../components/desktop-marketing-en";
import MobileMarketing from "../components/mobile-marketing";
import { useHelpscout } from "../components/helpscout";

const MarketingPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileMarketing data={data} />
      </Media>

      <Media greaterThan="xs">
        {language === "ko" ? (
          <DesktopMarketingKo data={data} />
        ) : (
          <DesktopMarketingEn data={data} />
        )}
      </Media>
    </>
  );
};

export default MarketingPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    web: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-all.png" }
    ) {
      childImageSharp {
        fixed(width: 860, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    mobile1: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile2: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile3: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile4: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-4.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile5: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-5.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile6: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-6.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
