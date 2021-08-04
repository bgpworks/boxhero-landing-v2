import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopPricing from "../components/desktop-pricing";
import MobilePricing from "../components/mobile-pricing";
import { useHelpscout } from "../components/helpscout";

export default function PricingPage({ data, location }) {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
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
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
    emojiOneSmall: file(relativePath: { eq: "emoji-one.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    emojiTwoSmall: file(relativePath: { eq: "emoji-two.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24, fit: FILL) {
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
