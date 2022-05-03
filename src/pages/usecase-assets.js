import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopUsecaseAssets from "../components/desktop-usecase-assets";
import MobileUsecaseAssets from "../components/mobile-usecase-assets";
import { useHelpscout } from "../components/helpscout";
import {
  genRelatedContent, CATEGORY_BG_BLUE, CATEGORY_BG_GREEN, CATEGORY_BG_RED,
} from "../components/usecase-common";

const getRelatedContents = (language) => {
  switch (language) {
    case "ko":
      return [
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/sugiro-haneun-jaegogwanri-vs-bagseuhieoro/",
          "인사이트",
          "수기로 하는 재고관리 VS 박스히어로",
          "나에게 맞는 재고관리 솔루션은 무엇일까요?",
          CATEGORY_BG_GREEN,
        ),
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/4ceon-gaeyi-jasan-pummog-gwanrido-bagseuhieoroeseon-honja-ganeunghaessjyo/",
          "성공사례",
          "4천 개의 자산 품목 관리도 박스히어로에선 혼자 가능했죠.",
          "[박스히어로 인터뷰 Vol. 01] (주)두산 큐벡스 김세권 담당자님",
          CATEGORY_BG_RED,
        ),
        genRelatedContent(
          "https://blog-ko.boxhero-app.com/bakodeu-saengseongbuteo-culryeogggaji-bagseuhieorowa-hamgge-sijaghaseyo/",
          "기능",
          "바코드 생성부터 출력까지 박스히어로와 함께 시작하세요!",
          "어렵게만 느껴지는 바코드 생성과 출력, 이해하기 쉽게 알려드려요!",
          CATEGORY_BG_BLUE,
        ),
      ];
    default:
      return [
        genRelatedContent(
          "https://blog-en.boxhero-app.com/how-our-company-manages-business-assets-with-boxhero/",
          "Insight",
          "How Our Company Manages Business Assets with BoxHero",
          "Manage assets efficiently to reduce unnecessary spending and improve the decision-making process.",
          CATEGORY_BG_BLUE,
        ),
        genRelatedContent(
          "https://blog-en.boxhero-app.com/how-to-make-barcodes/",
          "Insight",
          "How to Make Barcodes",
          "Making barcodes, it's finally easy.",
          CATEGORY_BG_BLUE,
        ),
        genRelatedContent(
          "https://blog-en.boxhero-app.com/wisely-manage-assets-in-a-small-business/",
          "Insight",
          "Wisely Manage Assets in a Small Business",
          "Read about how to overcome the challenges of asset management in a small business.",
          CATEGORY_BG_BLUE,
        ),
      ];
  }
};

export default function UsecaseAssetsPage({ data, location }) {
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
        <MobileUsecaseAssets
          data={data}
          relatedContents={relatedContents}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopUsecaseAssets
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
    features: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-features.png" }
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
    printLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-print-label.png" }
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
    history: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history.png" }
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
    viewPast: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-view-past.png" }
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
    mobileFeatures: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-features.png" }
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
    mobilePrintLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-print-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 302
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
    mobileHistory: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-history.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 430
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
    mobileViewPast: file(
      relativeDirectory: { eq: $language }
      base: { eq: "usecase-view-past.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 430
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
