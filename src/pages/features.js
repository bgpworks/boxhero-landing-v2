import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEO from "../components/seo";
import { Media } from "../media";
import DesktopFeatures from "../components/desktop-features";
import MobileFeatures from "../components/mobile-features";
import { useHelpscout } from "../components/helpscout";

export const FeaturesPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("features:pageTitle")}
        description={t("features:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileFeatures data={data} language={language} t={t} />
      </Media>

      <Media greaterThan="xs">
        <DesktopFeatures data={data} language={language} t={t} />
      </Media>
    </>
  );
};

export default FeaturesPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100, quality: 100) {
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
    lowstockFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-lowstock-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 378
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
    lowstockDemo1: file(relativePath: { eq: "feature-lowstock-demo1.png" }) {
      childImageSharp {
        fixed(
          width: 80
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
    lowstockDemo2: file(relativePath: { eq: "feature-lowstock-demo2.png" }) {
      childImageSharp {
        fixed(
          width: 80
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
    barcodelabelFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-barcodelabel-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 470
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    barcodelabelDemo1: file(
      relativePath: { eq: "feature-barcodelabel-demo1.png" }
    ) {
      childImageSharp {
        fixed(
          width: 80
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    barcodelabelDemo2: file(
      relativePath: { eq: "feature-barcodelabel-demo2.png" }
    ) {
      childImageSharp {
        fixed(
          width: 80
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    summaryFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-summary-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 575
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    summaryDemo1: file(relativePath: { eq: "feature-summary-demo1.png" }) {
      childImageSharp {
        fixed(
          width: 80
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    summaryDemo2: file(relativePath: { eq: "feature-summary-demo2.png" }) {
      childImageSharp {
        fixed(
          width: 80
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    viewPastQuantityFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-view-past-quantity-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 575
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    viewPastQuantityDemo1: file(
      relativePath: { eq: "feature-view-past-quantity-demo1.png" }
    ) {
      childImageSharp {
        fixed(
          width: 80
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
    viewPastQuantityDemo2: file(
      relativePath: { eq: "feature-view-past-quantity-demo2.png" }
    ) {
      childImageSharp {
        fixed(
          width: 80
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
    locationFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-location-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 518
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
    locationDemo1: file(relativePath: { eq: "feature-location-demo1.png" }) {
      childImageSharp {
        fixed(
          width: 80
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
    locationDemo2: file(relativePath: { eq: "feature-location-demo2.png" }) {
      childImageSharp {
        fixed(
          width: 80
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
    mobileDinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileLowstockFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-lowstock-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 300
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f31f"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileLowstockDemo1: file(
      relativePath: { eq: "feature-lowstock-demo1.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f31f"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileLowstockDemo2: file(
      relativePath: { eq: "feature-lowstock-demo2.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f31f"
            threshold: 160
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileBarcodelabelFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-barcodelabel-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 300
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileBarcodelabelDemo1: file(
      relativePath: { eq: "feature-barcodelabel-demo1.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileBarcodelabelDemo2: file(
      relativePath: { eq: "feature-barcodelabel-demo2.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileSummaryFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-summary-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 300
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileSummaryDemo1: file(
      relativePath: { eq: "feature-summary-demo1.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileSummaryDemo2: file(
      relativePath: { eq: "feature-summary-demo2.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
          traceSVG: {
            turdSize: 1
            color: "#f0f0f3"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileViewPastQuantityFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-view-past-quantity-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 300
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
    mobileViewPastQuantityDemo1: file(
      relativePath: { eq: "feature-view-past-quantity-demo1.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
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
    mobileViewPastQuantityDemo2: file(
      relativePath: { eq: "feature-view-past-quantity-demo2.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
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
    mobileLocationFig: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-location-fig.png" }
    ) {
      childImageSharp {
        fixed(
          width: 300
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
    mobileLocationDemo1: file(
      relativePath: { eq: "feature-location-demo1.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
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
    mobileLocationDemo2: file(
      relativePath: { eq: "feature-location-demo2.png" }
    ) {
      childImageSharp {
        fixed(
          width: 48
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
  }
`;
