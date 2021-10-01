import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopAbout from "../components/desktop-about";
import MobileAbout from "../components/mobile-about";
import { useHelpscout } from "../components/helpscout";

const AboutPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("about:pageTitle")}
        description={t("about:pageDescription")}
        path={location.pathname}
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
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    topLogo: file(
      relativeDirectory: { eq: $language }
      base: { eq: "about-top.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 786
          quality: 80
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
    light: file(relativePath: { eq: "emoji-light.png" }) {
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
    easy: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-easy.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 582
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
    great: file(relativePath: { eq: "img-great.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 582
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
    mobile: file(relativePath: { eq: "img-mobile.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 582
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
    mobileTopLogo: file(
      relativeDirectory: { eq: $language }
      base: { eq: "about-top.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 320
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
    mobileLight: file(relativePath: { eq: "emoji-light.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileEasy: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-easy.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 300
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
    mobileGreat: file(relativePath: { eq: "img-great.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
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
    mobileMobile: file(relativePath: { eq: "img-mobile.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
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
