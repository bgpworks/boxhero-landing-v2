import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopUsecaseMaterial from "../components/desktop-usecase-material";
import MobileUsecaseMaterial from "../components/mobile-usecase-material";
import { useHelpscout } from "../components/helpscout";
import {
  genRelatedContent, CATEGORY_BG_BLUE, CATEGORY_BG_GREEN, CATEGORY_BG_RED,
} from "../components/usecase-common";

const getRelatedContents = (language) => {
  switch (language) {
    case "ko":
      return [
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/bagseuhieoro-doib-ihu-jeonhwa-eungdaega-95-juleodeuleosseoyo/",
          "성공사례",
          "박스히어로 도입 이후 전화 응대가 95% 줄어들었어요.",
          "[박스히어로 인터뷰 Vol. 03] (주)유알오 이철우 담당자님",
          CATEGORY_BG_RED,
        ),
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/bagseuhieorowa-ggomggomhage-jaegobunseog-hagi/",
          "기능",
          "박스히어로와 꼼꼼하게 재고분석 하기!",
          "효과적인 재고관리를 위해서는 관리하고 있는 재고에 대해 명확하게 파악하는 것이 매우 중요해요!",
          CATEGORY_BG_BLUE,
        ),
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/anjeonjaegowa-jeogjeongjaego/",
          "인사이트",
          "안전재고와 적정재고",
          "안전재고와 적정재고 관리를 통해 재고관리 리스크를 줄이는 방법을 알려드려요.",
          CATEGORY_BG_GREEN,
        ),
      ];
    default:
      return [
        genRelatedContent(
          "https://blog-en.boxhero-app.com/what-is-safety-stock/",
          "Insight",
          "What is Safety Stock?",
          "Satisfy your customers by applying safety stock for good inventory management.",
          CATEGORY_BG_BLUE,
        ),
        genRelatedContent(
          "https://blog-en.boxhero-app.com/4-most-effective-inventory-management-techniques/",
          "Insight",
          "4 Most Effective Inventory Management Techniques",
          "Read about the four inventory management techniques for efficient stock control.",
          CATEGORY_BG_BLUE,
        ),
        genRelatedContent(
          "https://blog-en.boxhero-app.com/how-to-optimize-your-inventory/",
          "Insight",
          "How to Optimize Your Inventory",
          "Are you looking for a better way to manage your inventory?",
          CATEGORY_BG_BLUE,
        ),
      ];
  }
};

export default function UsecaseMaterialPage({ data, location }) {
  const { language, t } = useI18next();
  const relatedContents = getRelatedContents(language);

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
        <MobileUsecaseMaterial
          data={data}
          relatedContents={relatedContents}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopUsecaseMaterial
          data={data}
          relatedContents={relatedContents}
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
    history4: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history-4.png" }
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
    customMaterial: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-material.png" }
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
    inOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-in-out.png" }
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
    lowStock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-low-stock.png" }
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
    mobileHistory4: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history-4.png" }
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
    mobileCustomMaterial: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-material.png" }
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
    mobileInOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-in-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 528
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
    mobileLowStock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-low-stock.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 398
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
