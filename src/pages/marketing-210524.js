import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import MobileMarketing from "../components/mobile-marketing-210524";
import { useHelpscout } from "../components/helpscout";

const MarketingPage = ({ data }) => {
  const { t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
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
      relativeDirectory: { eq: "ko" }
      base: { eq: "marketing-210524-1.png" }
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
      relativeDirectory: { eq: "ko" }
      base: { eq: "marketing-210524-2.png" }
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
      relativeDirectory: { eq: "ko" }
      base: { eq: "marketing-210524-3.png" }
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
      relativeDirectory: { eq: "ko" }
      base: { eq: "marketing-210524-4.png" }
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
