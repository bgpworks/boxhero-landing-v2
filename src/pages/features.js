import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopFeatures from "../components/desktop-features";
import MobileFeatures from "../components/mobile-features";
import { useHelpscout } from "../components/helpscout";

export default function FeaturesPage({ data, location }) {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("features:pageTitle")}
        description={t("features:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileFeatures
          data={data}
          language={language}
          t={t}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopFeatures
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
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    topLogo: file(relativePath: { eq: "about-top.png" }) {
      childImageSharp {
        gatsbyImageData(width: 697, layout: FIXED)
      }
    }
    dinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
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
    lowstockFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-lowstock-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 582
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    lowstockDemo1: file(relativePath: { eq: "feature-lowstock-demo1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 80
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    lowstockDemo2: file(relativePath: { eq: "feature-lowstock-demo2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 80
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    barcodelabelFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-barcodelabel-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 582
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    barcodelabelDemo1: file(
      relativePath: { eq: "feature-barcodelabel-demo1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 80
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    barcodelabelDemo2: file(
      relativePath: { eq: "feature-barcodelabel-demo2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 80
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    summaryFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-summary-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 582
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    summaryDemo1: file(relativePath: { eq: "feature-summary-demo1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 80
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    summaryDemo2: file(relativePath: { eq: "feature-summary-demo2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 80
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    viewPastQuantityFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-view-past-quantity-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 582
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    viewPastQuantityDemo1: file(
      relativePath: { eq: "feature-view-past-quantity-demo1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 80
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
    viewPastQuantityDemo2: file(
      relativePath: { eq: "feature-view-past-quantity-demo2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 80
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
    locationFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-location-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 582
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
    locationDemo1: file(relativePath: { eq: "feature-location-demo1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 80
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
    locationDemo2: file(relativePath: { eq: "feature-location-demo2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 80
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
    mobileDinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileLowstockFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-lowstock-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f31f"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileLowstockDemo1: file(
      relativePath: { eq: "feature-lowstock-demo1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f31f"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileLowstockDemo2: file(
      relativePath: { eq: "feature-lowstock-demo2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f31f"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileBarcodelabelFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-barcodelabel-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileBarcodelabelDemo1: file(
      relativePath: { eq: "feature-barcodelabel-demo1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileBarcodelabelDemo2: file(
      relativePath: { eq: "feature-barcodelabel-demo2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileSummaryFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-summary-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileSummaryDemo1: file(
      relativePath: { eq: "feature-summary-demo1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileSummaryDemo2: file(
      relativePath: { eq: "feature-summary-demo2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileViewPastQuantityFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-view-past-quantity-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileViewPastQuantityDemo1: file(
      relativePath: { eq: "feature-view-past-quantity-demo1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileViewPastQuantityDemo2: file(
      relativePath: { eq: "feature-view-past-quantity-demo2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    mobileLocationFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-location-fig.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
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
    mobileLocationDemo1: file(
      relativePath: { eq: "feature-location-demo1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
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
    mobileLocationDemo2: file(
      relativePath: { eq: "feature-location-demo2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 48
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
