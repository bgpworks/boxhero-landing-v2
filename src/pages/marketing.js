import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "@jbseo/gatsby-plugin-react-i18next";
// js
import SEO from "../components/seo";
import { Media } from "../media";
import DesktopMarketing from "../components/desktop-marketing";
import MobileMarketing from "../components/mobile-marketing";
import { useHelpscout } from "../components/helpscout";

const MarketingPage = ({ data, path }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
        path={path}
      />

      <Media at="xs">
        <MobileMarketing data={data} />
      </Media>

      <Media greaterThan="xs">
        <DesktopMarketing data={data} />
      </Media>

    </>
  );
};

export default MarketingPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {lng: {eq: $language}}) {
      ...LocaleFragment
    }
    web: file(relativePath: { eq: "marketing/web.png" }) {
      childImageSharp {
        fixed(width: 860, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    mobile1: file(relativePath: { eq: "marketing/mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile2: file(relativePath: { eq: "marketing/mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile3: file(relativePath: { eq: "marketing/mobile-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile4: file(relativePath: { eq: "marketing/mobile-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile5: file(relativePath: { eq: "marketing/mobile-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobile6: file(relativePath: { eq: "marketing/mobile-6.png" }) {
      childImageSharp {
        fluid(maxWidth: 863, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
