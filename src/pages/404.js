import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useHelpscout } from "../components/helpscout";

import DesktopLayout from "../components/desktop-layout";
import MobileLayout from "../components/mobile-layout";
import { Media } from "../media";
import SEOHelmet from "../components/SEOHelmet";

const NotFoundPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        lang={language}
        title="NOT FOUND"
        description="NOT FOUND"
        path={location.pathname}
      />

      <Media at="xs">
        <MobileLayout
          isFloatMenu={false}
          closingEmoji={data.mobileDinosaur}
          closingMsg={t("features:closingMsg")}
        >
          <h1 style={{ margin: 50, textAlign: "center" }}>NOT FOUND</h1>
          <p style={{ margin: 50, textAlign: "center" }}>
            You just hit a route that doesn&#39;t exist... the sadness.
          </p>
        </MobileLayout>
      </Media>

      <Media greaterThan="xs">
        <DesktopLayout
          isFloatMenu={false}
          closingEmoji={data.dinosaur}
          closingMsg={t("features:closingMsg")}
        >
          <h1 style={{ margin: 50, textAlign: "center" }}>NOT FOUND</h1>
          <p style={{ margin: 50, textAlign: "center" }}>
            You just hit a route that doesn&#39;t exist... the sadness.
          </p>
        </DesktopLayout>
      </Media>
    </>
  );
};

export default NotFoundPage;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    ...LocaleFragment
  }
  dinosaur: file(relativePath: {eq: "emoji-dinosaur.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 72
        height: 72
        transformOptions: {fit: FILL}
        layout: FIXED
      )
    }
  }
  mobileDinosaur: file(relativePath: {eq: "emoji-dinosaur.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 36
        height: 36
        transformOptions: {fit: FILL}
        layout: FIXED
      )
    }
  }
}
`;
