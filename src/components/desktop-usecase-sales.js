import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { UseCaseFeature, Padding, UseCaseTop } from "./common";
// js
import DesktopLayout from "./desktop-layout";
import DesktopUseCaseFooter from "./desktop-usecase-footer";
// css
import * as styles from "./desktop-usecase-sales.module.css";

const BarcordScanBottomContent = ({ data, t }) => (
  <div className={styles.useCaseFeatureBottomContent}>
    <GatsbyImage
      image={data.customizeBarcode.childImageSharp.gatsbyImageData}
      alt={t("usecase:salesFeature3BottomTitle")}
    />
    <div>
      <Padding y={8} />
      <div className={styles.useCaseFeatureBottomContentTitle}>
        {t("usecase:salesFeature3BottomTitle")}
      </div>
      <Padding y={12} />
      <div className={styles.useCaseFeatureBottomContentDesc}>
        <Trans i18nKey="usecase:salesFeature3BottomDesc" />
      </div>
    </div>
  </div>
);

const UseCaseFeatures = ({ data, t }) => {
  const salesFeaturesdata = [
    {
      title: t("usecase:salesFeature1Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:salesFeature1Bubble1" /> },
        { text: <Trans i18nKey="usecase:salesFeature1Bubble2" /> },
      ],
      img: data.customProduct,
      leftDescription: <Trans i18nKey="usecase:salesFeature1LeftDesc" />,
      rightDescriptions: [
        t("salesFeature1RightDesc1"),
        t("salesFeature1RightDesc2"),
        t("salesFeature1RightDesc3"),
      ],
    },
    {
      isBgBlue: true,
      title: t("usecase:salesFeature2Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:salesFeature2Bubble1" /> },
        { text: <Trans i18nKey="usecase:salesFeature2Bubble2" /> },
      ],
      img: data.salesOut,
      leftDescription: <Trans i18nKey="usecase:salesFeature2LeftDesc" />,
      rightDescriptions: [
        t("salesFeature2RightDesc1"),
        t("salesFeature2RightDesc2"),
        t("salesFeature2RightDesc3"),
      ],
    },
    {
      title: t("usecase:salesFeature3Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:salesFeature3Bubble1" /> },
        { text: <Trans i18nKey="usecase:salesFeature3Bubble2" /> },
      ],
      img: data.scanBarcode,
      leftDescription: <Trans i18nKey="usecase:salesFeature3LeftDesc" />,
      rightDescriptions: [
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
        { text: <Trans i18nKey="usecase:salesFeature4Bubble1" /> },
        { text: <Trans i18nKey="usecase:salesFeature4Bubble2" /> },
      ],
      img: data.analysis,
      leftDescription: <Trans i18nKey="usecase:salesFeature4LeftDesc" />,
      rightDescriptions: [
        t("salesFeature4RightDesc1"),
        t("salesFeature4RightDesc2"),
        t("salesFeature4RightDesc3"),
      ],
    },
  ];

  return (
    salesFeaturesdata.map((salesFeaturedata, index) => (
      <div
        key={index}
        className={salesFeaturedata.isBgBlue ? styles.lightBlueBackground : ""}
      >
        <UseCaseFeature
          title={salesFeaturedata.title}
          bubleColorSequence={[
            { text: "#292a2f", background: "rgba(80, 164, 250, 0.3)" },
            { text: "white", background: "#50a4fa" },
          ]}
          speechBubbles={salesFeaturedata.bubbles}
          img={salesFeaturedata.img}
          leftDescription={salesFeaturedata.leftDescription}
          rightDescriptions={salesFeaturedata.rightDescriptions}
        >
          {salesFeaturedata.bottomContent}
        </UseCaseFeature>
      </div>
    ))
  );
};

const DesktopUsecaseSales = ({ data, t }) => (
  <DesktopLayout
    isFloatMenu={false}
    showPlatforms={false}
    closingEmoji={data.finger}
    closingMsg={t("usecase:closingMsg")}
  >
    <UseCaseTop
      className={styles.useCaseTopContainer}
      title={<Trans i18nKey="usecase:salesTopTitle" />}
      description={<Trans i18nKey="usecase:salesTopDesc" />}
      startNow={t("usecase:startNowButton")}
      img={data.allInOne}
    />

    <UseCaseFeatures
      data={data}
      t={t}
    />

    <DesktopUseCaseFooter />
  </DesktopLayout>
);

export default DesktopUsecaseSales;
