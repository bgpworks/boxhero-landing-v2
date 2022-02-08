import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopUsecaseAssets from "../components/desktop-usecase-assets";
import MobileUsecaseAssets from "../components/mobile-usecase-assets";
import { useHelpscout } from "../components/helpscout";

export default function UsecaseAssetsPage({ data, location }) {
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
        <MobileUsecaseAssets
          data={data}
          language={language}
          t={t}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopUsecaseAssets
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
        Tags: {elemMatch: {name: {eq: "usecase-assets"}}}
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
    features: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-features.png" }
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
    printLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-print-label.png" }
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
    history: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history.png" }
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
    viewPast: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-view-past.png" }
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
    mobileFeatures: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-features.png" }
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
    mobilePrintLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-print-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 302
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
    mobileHistory: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 430
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
    mobileViewPast: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-view-past.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 430
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
