import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopIndex from "../components/desktop-index";
import MobileIndex from "../components/mobile-index";
import { useHelpscout } from "../components/helpscout";

const IndexPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileIndex
          data={data}
          language={language}
          t={t}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopIndex
          data={data}
          language={language}
          t={t}
        />
      </Media>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    homeTopRight: file(
      relativeDirectory: { eq: $language }
      base: { eq: "home-top-right.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 934
          quality: 100
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
    feature1: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-add.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 544
          quality: 100
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
    feature2: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-scan.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 597
          quality: 100
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
    feature3: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 544
          quality: 100
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
    teamPlay: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-team.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 819
          height: 572
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: NORTH }
          layout: FIXED
        )
      }
    }
    coffee: file(relativePath: { eq: "emoji-coffee.png" }) {
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
    featureLowstock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-lowstock.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureBarcodeLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-barcode-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureSummary: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-summary.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureViewPastQuantity: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-view-past-quantity.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureLocation: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-location.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerMart: file(relativePath: { eq: "customer-mart.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { background: "#DCE1FF", color: "#c7c8d2" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerFasion: file(relativePath: { eq: "customer-fasion.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { color: "#c7c8d2", background: "#DCEDFE" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerCosmetics: file(relativePath: { eq: "customer-cosmetics.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { color: "#c7c8d2", background: "#E9E1FA" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerCafe: file(relativePath: { eq: "customer-cafe.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { color: "#c7c8d2", background: "#D8F1EC" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerPharmacy: file(relativePath: { eq: "customer-pharmacy.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { color: "#c7c8d2", background: "#DEDEE2" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerHandmade: file(relativePath: { eq: "customer-handmade.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { background: "#DCE1FF", color: "#c7c8d2" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerLocation: file(relativePath: { eq: "customer-location.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { color: "#c7c8d2", background: "#E9E1FA" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerTextbook: file(relativePath: { eq: "customer-textbook.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { background: "#DCE1FF", color: "#DCEDFE" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    customerETC: file(relativePath: { eq: "customer-etc.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          height: 280
          tracedSVGOptions: { background: "#DCE1FF", color: "#DCEDFE" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileHomeTopRight: file(
      relativeDirectory: { eq: $language }
      base: { eq: "home-top-right.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 467
          quality: 100
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
    mobileFeature1: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-add.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 320
          quality: 100
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
    mobileFeature2: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-scan.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 320
          quality: 100
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
    mobileFeature3: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 320
          quality: 100
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
    mobileTeamPlay: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-team.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 410
          height: 286
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: NORTH }
          layout: FIXED
        )
      }
    }
    mobileCoffee: file(relativePath: { eq: "emoji-coffee.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileFeatureLowstock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-lowstock.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileFeatureBarcodeLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-barcode-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileFeatureSummary: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-summary.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileFeatureViewPastQuantity: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-view-past-quantity.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileFeatureLocation: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-location.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerMart: file(relativePath: { eq: "customer-mart.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { background: "#DCE1FF", color: "#c7c8d2" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerFasion: file(relativePath: { eq: "customer-fasion.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { color: "#c7c8d2", background: "#DCEDFE" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerCosmetics: file(
      relativePath: { eq: "customer-cosmetics.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { color: "#c7c8d2", background: "#E9E1FA" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerCafe: file(relativePath: { eq: "customer-cafe.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { color: "#c7c8d2", background: "#D8F1EC" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerPharmacy: file(
      relativePath: { eq: "customer-pharmacy.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { color: "#c7c8d2", background: "#DEDEE2" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerHandmade: file(
      relativePath: { eq: "customer-handmade.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { background: "#DCE1FF", color: "#c7c8d2" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerLocation: file(
      relativePath: { eq: "customer-location.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { color: "#c7c8d2", background: "#E9E1FA" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerETC: file(relativePath: { eq: "customer-etc.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { color: "#c7c8d2", background: "#E9E1FA" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileCustomerTextbook: file(
      relativePath: { eq: "customer-textbook.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 110
          height: 140
          tracedSVGOptions: { background: "#DCE1FF", color: "#DCEDFE" }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    homeStartNow: file(relativePath: { eq: "home-start-now.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 307
          height: 200
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileHomeStartNow: file(relativePath: { eq: "home-start-now.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 240
          height: 157
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
  }
`;
