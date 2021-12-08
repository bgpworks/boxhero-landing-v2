import React from "react";
import { graphql } from "gatsby";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
// js
import { GatsbyImage } from "gatsby-plugin-image";
import SEOHelmet from "../components/SEOHelmet";
import { ExternalLinkWithQuery } from "../components/common";
import { useHelpscout } from "../components/helpscout";
import { urlStart } from "../components/constants";

const MarketingPage = ({ data }) => {
  const { t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
      />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GatsbyImage image={data.mobile1.childImageSharp.gatsbyImageData} />
        <ExternalLinkWithQuery href={urlStart}>
          <GatsbyImage image={data.mobile2.childImageSharp.gatsbyImageData} />
        </ExternalLinkWithQuery>
        <GatsbyImage image={data.mobile3.childImageSharp.gatsbyImageData} />
        <Link to="/">
          <GatsbyImage image={data.mobile4.childImageSharp.gatsbyImageData} />
        </Link>
        <GatsbyImage image={data.mobile5.childImageSharp.gatsbyImageData} />
      </div>
    </>
  );
};

export default MarketingPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    mobile1: file(base: { eq: "marketing-210630-1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 960
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile2: file(base: { eq: "marketing-210630-2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 960
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile3: file(base: { eq: "marketing-210630-3.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 960
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile4: file(base: { eq: "marketing-210630-4.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 960
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
    mobile5: file(base: { eq: "marketing-210630-5.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 960
          quality: 100
          placeholder: NONE
          layout: CONSTRAINED
        )
      }
    }
  }
`;
