import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopUsecaseMaterial from "../components/desktop-usecase-material";
import MobileUsecaseMaterial from "../components/mobile-usecase-material";
import { useHelpscout } from "../components/helpscout";

export default function UsecaseMaterialPage({ data, location }) {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("usecase:pageTitle")}
        description={t("usecase:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileUsecaseMaterial
          data={data}
          language={language}
          t={t}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopUsecaseMaterial
          data={data}
          language={language}
          t={t}
        />
      </Media>
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    relatedContents: allStrapiPosts(
      filter: {
        locale: { code: { eq: $language } },
        Tags: {elemMatch: {name: {eq: "usecase-material"}}}
      }
      sort: {
        fields: [date, title],
        order: [DESC, DESC]
      }
    ) {
      nodes {
        title
        category {
          name
          bgColor
          textColor
        }
        description
        slug
      }
    }
    finger: file(relativePath: { eq: "emoji-finger.png" }) {
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
    history4: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history-4.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 844
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    customMaterial: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-material.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 844
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    inOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-in-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 844
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    lowStock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-low-stock.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 844
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileFinger: file(relativePath: { eq: "emoji-finger.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    mobileHistory4: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history-4.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 90
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileCustomMaterial: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-material.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 390
          quality: 80
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileInOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-in-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 528
          quality: 80
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileLowStock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-low-stock.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 398
          quality: 80
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
  }
`;
