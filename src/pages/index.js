import React from "react"
import { graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next';
// js
import SEO from "../components/seo"
import { Media } from "../media"
import DesktopIndex from "../components/desktop-index";
import MobileIndex from "../components/mobile-index";
import { useHelpscout } from '../components/helpscout';

const IndexPage = ({data}) => {
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
  query($language: String!) {
    homeTopBg: file(relativePath: { eq: "home-top-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeTopRight: file(relativeDirectory: {eq: $language},
                       base: {eq: "home-top-right.png"}) {
      childImageSharp {
        fixed(width: 934, webpQuality: 100, quality: 100,
          traceSVG: {
            color: "#6159F5"
            optTolerance: 0.2,
            turdSize: 100,
            turnPolicy: TURNPOLICY_MINORITY
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature1: file(relativeDirectory: {eq: $language},
                   base: { eq: "img-add.png" }) {
      childImageSharp {
        fixed(width: 640, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature2: file(relativeDirectory: {eq: $language},
                   base: { eq: "img-scan.png" }) {
      childImageSharp {
        fixed(width: 597, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature3: file(relativeDirectory: {eq: $language},
                   base: { eq: "img-grouping.png" }) {
      childImageSharp {
        fixed(width: 624, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    homeTeamPlayBg: file(relativePath: { eq: "home-team-play-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teamPlay: file(relativeDirectory: {eq: $language},
                   base: { eq: "img-team.png" }) {
      childImageSharp {
        fixed(width: 819, height: 572, cropFocus: NORTH) {
          ...GatsbyImageSharpFixed_withWebp
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
    featureExpiry: file(relativeDirectory: {eq: $language},
                        base: { eq: "index-feature-expiry.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureLowstock: file(relativeDirectory: {eq: $language},
                          base: { eq: "index-feature-lowstock.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureBarcodelabel: file(relativeDirectory: {eq: $language},
                              base: { eq: "index-feature-barcodelabel.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureSummary: file(relativeDirectory: {eq: $language},
                         base: { eq: "index-feature-summary.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureStatus: file(relativeDirectory: {eq: $language},
                        base: { eq: "index-feature-status.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureLocation: file(relativeDirectory: {eq: $language},
                          base: { eq: "index-feature-location.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerMart: file(relativePath: { eq: "customer-mart.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerFasion: file(relativePath: { eq: "customer-fasion.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerCosmetics: file(relativePath: { eq: "customer-cosmetics.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerCafe: file(relativePath: { eq: "customer-cafe.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerPharmacy: file(relativePath: { eq: "customer-pharmacy.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerHandmade: file(relativePath: { eq: "customer-handmade.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerLocation: file(relativePath: { eq: "customer-location.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    customerTextbook: file(relativePath: { eq: "customer-textbook.png" }) {
      childImageSharp {
        fixed(width: 220, height: 280, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileHomeTopBg: file(relativePath: { eq: "home-top-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileHomeTopRight: file(relativeDirectory: {eq: $language},
                             base: {eq: "home-top-right.png"}) {
      childImageSharp {
        fixed(width: 467, webpQuality: 100, quality: 100,
          traceSVG: {
            color: "#6159F5"
            optTolerance: 0.2,
            turdSize: 100,
            turnPolicy: TURNPOLICY_MINORITY
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeature1: file(relativeDirectory: {eq: $language},
                         base: { eq: "img-add.png" }) {
      childImageSharp {
        fixed(width: 320, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeature2: file(relativeDirectory: {eq: $language},
                         base: { eq: "img-scan.png" }) {
      childImageSharp {
        fixed(width: 320, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeature3: file(relativeDirectory: {eq: $language},
                         base: { eq: "img-grouping.png" }) {
      childImageSharp {
        fixed(width: 320, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileHomeTeamPlayBg: file(relativePath: { eq: "home-team-play-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 513) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileTeamPlay: file(relativeDirectory: {eq: $language},
                         base: { eq: "img-team.png" }) {
      childImageSharp {
        fixed(width: 410, height: 286, cropFocus: NORTH) {
          ...GatsbyImageSharpFixed_withWebp
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
    mobileFeatureExpiry: file(relativeDirectory: {eq: $language},
                              base: { eq: "index-feature-expiry.png" }) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureLowstock: file(relativeDirectory: {eq: $language},
                                base: { eq: "index-feature-lowstock.png" }) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureBarcodelabel: file(relativeDirectory: {eq: $language},
                                    base: { eq: "index-feature-barcodelabel.png" }) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureSummary: file(relativeDirectory: {eq: $language},
                               base: { eq: "index-feature-summary.png" }) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureStatus: file(relativeDirectory: {eq: $language},
                              base: { eq: "index-feature-status.png" }) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureLocation: file(relativeDirectory: {eq: $language},
                                base: { eq: "index-feature-location.png" }) {
      childImageSharp {
        fixed(width: 280, height: 204, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerMart: file(relativePath: { eq: "customer-mart.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerFasion: file(relativePath: { eq: "customer-fasion.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerCosmetics: file(relativePath: { eq: "customer-cosmetics.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerCafe: file(relativePath: { eq: "customer-cafe.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerPharmacy: file(relativePath: { eq: "customer-pharmacy.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerHandmade: file(relativePath: { eq: "customer-handmade.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerLocation: file(relativePath: { eq: "customer-location.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileCustomerTextbook: file(relativePath: { eq: "customer-textbook.png" }) {
      childImageSharp {
        fixed(width: 110, height: 140, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
