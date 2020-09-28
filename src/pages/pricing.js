import React from "react";
import { graphql } from "gatsby";
import { useI18next } from 'gatsby-plugin-react-i18next';
// js
import SEO from "../components/seo";
import { Media } from "../media"
import DesktopPricing from "../components/desktop-pricing";
import MobilePricing from "../components/mobile-pricing";
import { useHelpscout } from '../components/helpscout';

export const PricingPage = ({data}) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("pricing:pageTitle")}
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
          language={language}
          t={t}
        />
      </Media>
    </>
  );
};

export default PricingPage;

export const query = graphql`
  query {
    box: file(relativePath: { eq: "emoji-box.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
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
  }
`;
