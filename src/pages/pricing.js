import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "@jbseo/gatsby-plugin-react-i18next";
// js
import SEO from "../components/seo";
import { Media } from "../media";
import DesktopPricing from "../components/desktop-pricing";
import MobilePricing from "../components/mobile-pricing";
import { useHelpscout } from "../components/helpscout";

export const PricingPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("pricing:pageTitle")}
        description={t("pricing:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobilePricing data={data} language={language} t={t} />
      </Media>

      <Media greaterThan="xs">
        <DesktopPricing data={data} language={language} t={t} />
      </Media>
    </>
  );
};

export default PricingPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { lng: { eq: $language } }) {
      ...LocaleFragment
    }
    box: file(relativePath: { eq: "emoji-box.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    emojiOne: file(relativePath: { eq: "emoji-one.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    emojiTwo: file(relativePath: { eq: "emoji-two.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileBox: file(relativePath: { eq: "emoji-box.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileEmojiOne: file(relativePath: { eq: "emoji-one.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileEmojiTwo: file(relativePath: { eq: "emoji-two.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
