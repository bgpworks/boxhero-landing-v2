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

const MarketingPage = ({ data }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
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
        gatsbyImageData(
          width: 860
          quality: 100
          placeholder: NONE
          layout: FIXED
        )
      }
    }
    mobile1: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 863
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile2: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 863
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile3: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-3.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 863
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile4: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-4.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 863
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile5: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-5.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 863
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile6: file(
      relativeDirectory: { eq: $language }
      base: { eq: "marketing-mobile-6.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 863
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
  }
`;
