import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "@jbseo/gatsby-plugin-react-i18next";
import { useHelpscout } from "../components/helpscout";

import DesktopLayout from "../components/desktop-layout";
import MobileLayout from "../components/mobile-layout";
import { Media } from "../media";
import SEO from "../components/seo";

const NotFoundPage = ({ data }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO lang={language} title="NOT FOUND" description="NOT FOUND" />

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

export const query = graphql`
  query {
    dinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileDinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
