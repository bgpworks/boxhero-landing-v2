import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopUsecaseSales from "../components/desktop-usecase-sales";
import MobileUsecaseSales from "../components/mobile-usecase-sales";
import { useHelpscout } from "../components/helpscout";
import {
  genRelatedContent, CATEGORY_BG_BLUE, CATEGORY_BG_GREEN, CATEGORY_BG_RED,
} from "../components/usecase-common";

const getRelatedContents = (language) => {
  switch (language) {
    case "ko":
      return [
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/opeuraingwa-onrain-jaegogwanri-bagseuhieoro-hanaro-ggeutnaesseoyo/",
          "성공사례",
          "오프라인과 온라인 재고관리, 박스히어로 하나로 끝냈어요.",
          "[박스히어로 인터뷰 Vol. 02] (주)베르띠 안재환 담당자님",
          CATEGORY_BG_RED,
        ),
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/syopingmol-jaegogwanrido-bagseuhieorowa-swibge/",
          "기능",
          "쇼핑몰 재고관리도 박스히어로와 쉽게!",
          "쇼핑몰 재고들도 박스히어로와 함께 쉽고 완벽하게 재고관리하세요!",
          CATEGORY_BG_BLUE,
        ),
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/onrain-syopingmol-jaegogwanriyi-5gaji-tib/",
          "인사이트",
          "온라인 쇼핑몰 재고관리의 5가지 팁!",
          "매출 증가와 함께 쇼핑몰 비즈니스를 성공시키기 위한 5가지 팁에 대해 알아볼까요?",
          CATEGORY_BG_GREEN,
        ),
      ];
    default:
      return [
        genRelatedContent(
          "https://blog-en.boxhero-app.com/whats-important-in-e-commerce-inventory-management/",
          "Insight",
          "What is the Importance of Inventory Management in E-Commerce",
          "Inventory management is the start to business streamlining.",
          CATEGORY_BG_BLUE,
        ),
        genRelatedContent(
          "https://blog-en.boxhero-app.com/5-effective-ways-to-manage-online-store-inventory/",
          "Insight",
          "5 Effective Ways to Manage Online Store Inventory",
          "Follow these tips to improve your inventory management and be one step closer to a successful business.",
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

export default function UsecaseSalesPage({ data, location }) {
  const { language, t } = useI18next();
  const relatedContents = getRelatedContents(language);

  useHelpscout();

  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("usecase:pageTitleSales")}
        description={t("usecase:pageDescriptionSales")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileUsecaseSales
          data={data}
          relatedContents={relatedContents}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopUsecaseSales
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
    allInOne: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-all-in-one.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 844
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
    customProduct: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-product.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 928
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
    salesOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-sales-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1032
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
    scanBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-scan-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 888
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
    customizeBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-customize-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 276
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
    analysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1030
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
    mobileAllInOne: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-all-in-one.png" }
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
    mobileCustomProduct: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-custom-product.png" }
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
    mobileSalesOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-sales-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 416
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
    mobileScanBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-scan-barcode.png" }
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
    mobileCustomizeBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-customize-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 276
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
    mobileAnalysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 372
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
