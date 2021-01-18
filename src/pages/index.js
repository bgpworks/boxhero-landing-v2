import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "@jbseo/gatsby-plugin-react-i18next";
// js
import SEO from "../components/seo";
import { Media } from "../media";
import DesktopIndex from "../components/desktop-index";
import MobileIndex from "../components/mobile-index";
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

      <Media lessThan="md">
        <MobileIndex data={data} language={language} t={t} />
      </Media>

      <Media greaterThan="sm">
        <DesktopIndex data={data} language={language} t={t} />
      </Media>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    homeTopBg: file(relativePath: { eq: "home-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    homeTopRight: file(
      relativeDirectory: { eq: $language }
      base: { eq: "home-top-right.png" }
    ) {
      childImageSharp {
        fixed(
          width: 934
          webpQuality: 100
          quality: 100
          traceSVG: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature1: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-add.png" }
    ) {
      childImageSharp {
        fixed(
          width: 640
          webpQuality: 100
          quality: 100
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature2: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-scan.png" }
    ) {
      childImageSharp {
        fixed(
          width: 597
          webpQuality: 100
          quality: 100
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature3: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-grouping.png" }
    ) {
      childImageSharp {
        fixed(
          width: 624
          webpQuality: 100
          quality: 100
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    homeTeamPlayBg: file(relativePath: { eq: "home-team-play-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    teamPlay: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-team.png" }
    ) {
      childImageSharp {
        fixed(
          width: 819
          height: 572
          cropFocus: NORTH
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    coffee: file(relativePath: { eq: "emoji-coffee.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    featureExpiry: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-expiry.png" }
    ) {
      childImageSharp {
        fixed(
          width: 495
          height: 360
          fit: FILL
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureLowstock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-lowstock.png" }
    ) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureBarcodelabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-barcodelabel.png" }
    ) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureSummary: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-summary.png" }
    ) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureStatus: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-status.png" }
    ) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureLocation: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-location.png" }
    ) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerMart: file(relativePath: { eq: "customer-mart.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { background: "#DCE1FF", color: "#c7c8d2" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerFasion: file(relativePath: { eq: "customer-fasion.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#DCEDFE" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerCosmetics: file(relativePath: { eq: "customer-cosmetics.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#E9E1FA" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerCafe: file(relativePath: { eq: "customer-cafe.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#D8F1EC" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerPharmacy: file(relativePath: { eq: "customer-pharmacy.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#DEDEE2" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerHandmade: file(relativePath: { eq: "customer-handmade.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { background: "#DCE1FF", color: "#c7c8d2" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerLocation: file(relativePath: { eq: "customer-location.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#E9E1FA" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerTextbook: file(relativePath: { eq: "customer-textbook.png" }) {
      childImageSharp {
        fixed(
          width: 220
          height: 280
          fit: FILL
          traceSVG: { background: "#DCE1FF", color: "#DCEDFE" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileHomeTopBg: file(relativePath: { eq: "home-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 653, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileHomeTopRight: file(
      relativeDirectory: { eq: $language }
      base: { eq: "home-top-right.png" }
    ) {
      childImageSharp {
        fixed(
          width: 467
          webpQuality: 100
          quality: 100
          traceSVG: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeature1: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-add.png" }
    ) {
      childImageSharp {
        fixed(
          width: 320
          webpQuality: 100
          quality: 100
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeature2: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-scan.png" }
    ) {
      childImageSharp {
        fixed(
          width: 320
          webpQuality: 100
          quality: 100
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeature3: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-grouping.png" }
    ) {
      childImageSharp {
        fixed(
          width: 320
          webpQuality: 100
          quality: 100
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileHomeTeamPlayBg: file(relativePath: { eq: "home-team-play-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 513, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileTeamPlay: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-team.png" }
    ) {
      childImageSharp {
        fixed(
          width: 410
          height: 286
          cropFocus: NORTH
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCoffee: file(relativePath: { eq: "emoji-coffee.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileFeatureExpiry: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-expiry.png" }
    ) {
      childImageSharp {
        fixed(
          width: 280
          height: 204
          fit: FILL
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureLowstock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-lowstock.png" }
    ) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureBarcodelabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-barcodelabel.png" }
    ) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureSummary: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-summary.png" }
    ) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureStatus: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-status.png" }
    ) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureLocation: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-location.png" }
    ) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerMart: file(relativePath: { eq: "customer-mart.png" }) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { background: "#DCE1FF", color: "#c7c8d2" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerFasion: file(relativePath: { eq: "customer-fasion.png" }) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#DCEDFE" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerCosmetics: file(
      relativePath: { eq: "customer-cosmetics.png" }
    ) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#E9E1FA" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerCafe: file(relativePath: { eq: "customer-cafe.png" }) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#D8F1EC" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerPharmacy: file(
      relativePath: { eq: "customer-pharmacy.png" }
    ) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#DEDEE2" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerHandmade: file(
      relativePath: { eq: "customer-handmade.png" }
    ) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { background: "#DCE1FF", color: "#c7c8d2" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerLocation: file(
      relativePath: { eq: "customer-location.png" }
    ) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { color: "#c7c8d2", background: "#E9E1FA" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerTextbook: file(
      relativePath: { eq: "customer-textbook.png" }
    ) {
      childImageSharp {
        fixed(
          width: 110
          height: 140
          fit: FILL
          traceSVG: { background: "#DCE1FF", color: "#DCEDFE" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    homeStartNow: file(relativePath: { eq: "home-start-now.png" }) {
      childImageSharp {
        fixed(
          width: 307
          height: 200
          fit: FILL
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileHomeStartNow: file(relativePath: { eq: "home-start-now.png" }) {
      childImageSharp {
        fixed(
          width: 240
          height: 157
          fit: FILL
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
