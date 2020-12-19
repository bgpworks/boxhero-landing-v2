import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "@jbseo/gatsby-plugin-react-i18next";
// js
import SEO from "../components/seo";
import { Media } from "../media";
import DesktopMarketing from "../components/desktop-marketing";
import MobileMarketing from "../components/mobile-marketing";
import { useHelpscout } from "../components/helpscout";

const IndexPage = ({ data }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
      />

      <Media at="xs">
        <MobileMarketing data={data} language={language} t={t} />
      </Media>

      <Media greaterThan="xs">
        <DesktopMarketing data={data} language={language} t={t} />
      </Media>

    </>
  );
};

export default IndexPage;
