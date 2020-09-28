import React from "react";
import { graphql } from "gatsby";
import { useI18next } from 'gatsby-plugin-react-i18next';
// js
import SEO from "../components/seo";
import { Media } from "../media"
import DesktopAbout from "../components/desktop-about";
import MobileAbout from "../components/mobile-about";
import { useHelpscout } from '../components/helpscout';

const AboutPage = ({data}) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("about:pageTitle")}
        description={t("about:pageDescription")}
      />
      <Media at="xs">
        <MobileAbout
          data={data}
          language={language}
          t={t}
        />
      </Media>
      <Media greaterThan="xs">
        <DesktopAbout
          data={data}
          language={language}
          t={t}
        />
      </Media>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query($language: String!) {
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    topLogo: file(relativeDirectory: {eq: $language},
                  base: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 697,
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
    light: file(relativePath: { eq: "emoji-light.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    easy: file(relativeDirectory: {eq: $language},
               base: { eq: "img-easy.png" }) {
      childImageSharp {
        fixed(width: 673) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    great: file(relativePath: { eq: "img-great.png" }) {
      childImageSharp {
        fixed(width: 660) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "img-mobile.png" }) {
      childImageSharp {
        fixed(width: 463) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureBg: file(relativePath: { eq: "about-feature-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileTopBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 533, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileTopLogo: file(relativeDirectory: {eq: $language},
                        base: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 320,
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
    mobileLight: file(relativePath: { eq: "emoji-light.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileEasy: file(relativeDirectory: {eq: $language},
                     base: { eq: "img-easy.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileGreat: file(relativePath: { eq: "img-great.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileMobile: file(relativePath: { eq: "img-mobile.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureBg: file(relativePath: { eq: "about-feature-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 2142, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
