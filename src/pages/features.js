import React from "react";
import { graphql } from "gatsby";
import { useI18next } from 'gatsby-plugin-react-i18next';
// js
import SEO from "../components/seo";
import { Media } from "../media"
import DesktopFeatures from "../components/desktop-features";
import MobileFeatures from "../components/mobile-features";
import { useHelpscout } from '../components/helpscout';

export const FeaturesPage = ({data}) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("features:pageTitle")}
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
};

export default FeaturesPage;

export const query = graphql`
  query($language: String!) {
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    topLogo: file(relativePath: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 697) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    dinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryFig: file(relativeDirectory: {eq: $language},
                    base: { eq: "feature-expiry-fig.png" }) {
      childImageSharp {
        fixed(width: 378) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryDemo1: file(relativePath: { eq: "feature-expiry-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryDemo2: file(relativePath: { eq: "feature-expiry-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockFig: file(relativeDirectory: {eq: $language},
                      base: { eq: "feature-lowstock-fig.png" }) {
      childImageSharp {
        fixed(width: 378) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockDemo1: file(relativePath: { eq: "feature-lowstock-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockDemo2: file(relativePath: { eq: "feature-lowstock-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelFig: file(relativeDirectory: {eq: $language},
                          base: { eq: "feature-barcodelabel-fig.png" }) {
      childImageSharp {
        fixed(width: 470) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelDemo1: file(relativePath: { eq: "feature-barcodelabel-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelDemo2: file(relativePath: { eq: "feature-barcodelabel-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryFig: file(relativeDirectory: {eq: $language},
                     base: { eq: "feature-summary-fig.png" }) {
      childImageSharp {
        fixed(width: 575) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryDemo1: file(relativePath: { eq: "feature-summary-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryDemo2: file(relativePath: { eq: "feature-summary-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusFig: file(relativeDirectory: {eq: $language},
                    base: { eq: "feature-status-fig.png" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusDemo1: file(relativePath: { eq: "feature-status-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusDemo2: file(relativePath: { eq: "feature-status-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationFig: file(relativeDirectory: {eq: $language},
                      base: { eq: "feature-location-fig.png" }) {
      childImageSharp {
        fixed(width: 518) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationDemo1: file(relativePath: { eq: "feature-location-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationDemo2: file(relativePath: { eq: "feature-location-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileDinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
