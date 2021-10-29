import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { MobileUseCaseFeature, Padding, MobileUseCaseTop } from "./common";
// js
import MobileLayout from "./mobile-layout";
import MobileUseCaseFooter from "./mobile-usecase-footer";
// css
import * as styles from "./mobile-usecase-sales.module.css";

const BarcordScanBottomContent = ({ data, t }) => (
  <article className={styles.bottomContent}>
    <GatsbyImage
      className={styles.bottomContentImage}
      image={data.customizeBarcode.childImageSharp.gatsbyImageData}
      alt={t("usecase:salesFeature3BottomTitle")}
    />
    <Padding y={20} />
    <h3 className={styles.bottomContentTitle}>
      {t("usecase:salesFeature3BottomTitle")}
    </h3>
    <Padding y={12} />
    <p className={styles.bottomContentDesc}>
      <Trans i18nKey="usecase:salesFeature3BottomDesc" />
    </p>
  </article>
);

const UseCaseFeatures = ({ data, t }) => {
  const salesFeaturesdata = [
    {
      title: t("usecase:salesFeature1Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:salesFeature1Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:salesFeature1Bubble2Mobile" /> },
      ],
      img: data.mobileCustomProduct,
      descriptions: [
        t("salesFeature1RightDesc1"),
        t("salesFeature1RightDesc2"),
        t("salesFeature1RightDesc3"),
      ],
    },
    {
      isBgBlue: true,
      title: t("usecase:salesFeature2Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:salesFeature2Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:salesFeature2Bubble2Mobile" /> },
      ],
      img: data.mobileSalesOut,
      descriptions: [
        t("salesFeature2RightDesc1"),
        t("salesFeature2RightDesc2"),
        t("salesFeature2RightDesc3"),
      ],
    },
    {
      title: t("usecase:salesFeature3Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:salesFeature3Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:salesFeature3Bubble2Mobile" /> },
      ],
      img: data.mobileScanBarcode,
      descriptions: [
        t("salesFeature3RightDesc1"),
        t("salesFeature3RightDesc2"),
        t("salesFeature3RightDesc3"),
      ],
      bottomContent: <BarcordScanBottomContent
        data={data}
        t={t}
      />,
    },
    {
      isBgBlue: true,
      title: t("usecase:salesFeature4Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:salesFeature4Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:salesFeature4Bubble2Mobile" /> },
      ],
      img: data.mobileAnalysis,
      descriptions: [
        t("salesFeature4RightDesc1"),
        t("salesFeature4RightDesc2"),
        t("salesFeature4RightDesc3"),
      ],
    },
  ];

  return (
    salesFeaturesdata.map((salesFeaturedata, index) => (
      <section
        key={index}
        className={salesFeaturedata.isBgBlue ? styles.lightBlueBackground : ""}
      >
        <MobileUseCaseFeature
          title={salesFeaturedata.title}
          bubleColorSequence={[
            { text: "#292a2f", background: "rgba(80, 164, 250, 0.3)" },
            { text: "white", background: "#50a4fa" },
          ]}
          speechBubbles={salesFeaturedata.bubbles}
          img={salesFeaturedata.img}
          descriptions={salesFeaturedata.descriptions}
        >
          {salesFeaturedata.bottomContent}
        </MobileUseCaseFeature>
      </section>
    ))
  );
};

const MobileUsecaseSales = ({ data, t }) => (
  <MobileLayout
    isFloatMenu={false}
    hideFloatAppInstallButton
    showPlatforms={false}
    closingEmoji={data.mobileFinger}
    closingMsg={t("usecase:closingMsg")}
  >
    <MobileUseCaseTop
      className={styles.useCaseTopContainer}
      title={<Trans i18nKey="usecase:salesTopTitleMobile" />}
      description={<Trans i18nKey="usecase:salesTopDesc" />}
      appDownload={t("usecase:appInstall")}
      img={data.mobileAllInOne}
      alt="all-in-one"
    />

    <UseCaseFeatures
      data={data}
      t={t}
    />

    <MobileUseCaseFooter data={data} />
  </MobileLayout>
);

export default MobileUsecaseSales;
