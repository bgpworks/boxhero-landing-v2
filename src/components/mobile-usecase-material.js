import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { MobileUseCaseFeature, MobileUseCaseTop } from "./common";
// js
import MobileLayout from "./mobile-layout";
import MobileUseCaseFooter from "./mobile-usecase-footer";
// css
import * as styles from "./mobile-usecase-material.module.css";

const UseCaseFeatures = ({ data, t }) => {
  const materialFeaturesdata = [
    {
      title: t("usecase:materialFeature1Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:materialFeature1Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:materialFeature1Bubble2Mobile" /> },
      ],
      img: data.mobileCustomMaterial,
      descriptions: [
        t("materialFeature1RightDesc1"),
        t("materialFeature1RightDesc2"),
        t("materialFeature1RightDesc3"),
      ],
    },
    {
      isBgGreen: true,
      title: t("usecase:materialFeature2Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:materialFeature2Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:materialFeature2Bubble2Mobile" /> },
      ],
      img: data.mobileInOut,
      descriptions: [
        t("materialFeature2RightDesc1"),
        t("materialFeature2RightDesc2"),
        t("materialFeature2RightDesc3"),
      ],
    },
    {
      title: t("usecase:materialFeature3Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:materialFeature3Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:materialFeature3Bubble2Mobile" /> },
      ],
      img: data.mobileLowStock,
      descriptions: [
        t("materialFeature3RightDesc1"),
        t("materialFeature3RightDesc2"),
        t("materialFeature3RightDesc3"),
      ],
    },
  ];

  return (
    materialFeaturesdata.map((materialFeaturedata, index) => (
      <section
        key={index}
        className={materialFeaturedata.isBgGreen ? styles.greenBackground : ""}
      >
        <MobileUseCaseFeature
          title={materialFeaturedata.title}
          bubleColorSequence={[
            { text: "#292a2f", background: "rgba(60, 185, 160, 0.3)" },
            { text: "white", background: "#3cb9a0" },
          ]}
          speechBubbles={materialFeaturedata.bubbles}
          img={materialFeaturedata.img}
          descriptions={materialFeaturedata.descriptions}
        />
      </section>
    ))
  );
};

const MobileUsecaseMaterial = ({ data, t }) => (
  <MobileLayout
    isFloatMenu={false}
    showPlatforms={false}
    closingEmoji={data.mobileFinger}
    closingMsg={t("usecase:closingMsg")}
  >
    <MobileUseCaseTop
      className={styles.useCaseTopContainer}
      title={<Trans i18nKey="usecase:materialTopTitleMobile" />}
      description={<Trans i18nKey="usecase:materialTopDesc" />}
      startNow={t("usecase:startNowButton")}
      img={data.mobileHistory4}
    />

    <UseCaseFeatures
      data={data}
      t={t}
    />

    <MobileUseCaseFooter />
  </MobileLayout>
);

export default MobileUsecaseMaterial;
