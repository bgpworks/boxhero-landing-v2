import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopUsecaseSales from "../components/desktop-usecase-sales";
import MobileUsecaseSales from "../components/mobile-usecase-sales";
import { useHelpscout } from "../components/helpscout";

export default function UsecaseSalesPage({ data, location }) {
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
        <MobileUsecaseSales
          data={data}
          language={language}
          t={t}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopUsecaseSales
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
    allInOne: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-all-in-one.png" }
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
    customProduct: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-product.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 928
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
    salesOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-sales-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1032
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
    scanBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-scan-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 888
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
    customizeBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-customize-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 276
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
    analysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1030
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
    mobileAllInOne: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-all-in-one.png" }
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
    mobileCustomProduct: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-product.png" }
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
    mobileSalesOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-sales-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 416
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
    mobileScanBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-scan-barcode.png" }
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
    mobileCustomizeBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-customize-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 276
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
    mobileAnalysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 372
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
