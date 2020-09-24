import React from "react"
import { graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next';
// js
import SEO from "../components/seo"
import { Media } from "../media"
import DesktopIndex from "../components/desktop-index";
import { useHelpscout } from '../components/helpscout';

const IndexPage = ({data}) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("index:pageTitle")}
      />

      <Media at="xs">
        Hello mobile!
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
    homeTopBg: file(relativePath: { eq: "home-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    homeTopRight: file(relativeDirectory: {eq: $language},
                       base: {eq: "home-top-right.png"}) {
      childImageSharp {
        fixed(width: 934, webpQuality: 100,
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
    feature1: file(relativePath: { eq: "img-add.png" }) {
      childImageSharp {
        fixed(width: 640, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature2: file(relativePath: { eq: "img-scan.png" }) {
      childImageSharp {
        fixed(width: 597, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature3: file(relativePath: { eq: "img-grouping.png" }) {
      childImageSharp {
        fixed(width: 624, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    homeTeamPlayBg: file(relativePath: { eq: "home-team-play-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    teamPlay: file(relativePath: { eq: "img-team.png" }) {
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
    featureExpiry: file(relativePath: { eq: "index-feature-expiry.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureLowstock: file(relativePath: { eq: "index-feature-lowstock.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureBarcodelabel: file(relativePath: { eq: "index-feature-barcodelabel.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureSummary: file(relativePath: { eq: "index-feature-summary.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureStatus: file(relativePath: { eq: "index-feature-status.png" }) {
      childImageSharp {
        fixed(width: 495, height: 360, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureLocation: file(relativePath: { eq: "index-feature-location.png" }) {
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
  }
`;
