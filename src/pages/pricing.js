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
        <MobilePricing
          data={data}
          language={language}
          t={t}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopPricing
          data={data}
          t={t}
        />
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
        gatsbyImageData(
          width: 72
          height: 72
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    emojiOne: file(relativePath: { eq: "emoji-one.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    emojiTwo: file(relativePath: { eq: "emoji-two.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    emojiOneSmall: file(relativePath: { eq: "emoji-one.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    emojiTwoSmall: file(relativePath: { eq: "emoji-two.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    mobileBox: file(relativePath: { eq: "emoji-box.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileEmojiOne: file(relativePath: { eq: "emoji-one.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileEmojiTwo: file(relativePath: { eq: "emoji-two.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
  }
`;
