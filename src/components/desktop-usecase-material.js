import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { UseCaseFeature, UseCaseTop } from "./common";
// js
import DesktopLayout from "./desktop-layout";
import DesktopUseCaseFooter from "./desktop-usecase-footer";
// css
import * as styles from "./desktop-usecase-material.module.css";

const UseCaseFeatures = ({ data, t }) => {
  const materialFeaturesdata = [
    {
      title: t("usecase:materialFeature1Title"),
      speechBubbles: [
        t("usecase:materialFeature1Bubble1"),
        <Trans i18nKey="usecase:materialFeature1Bubble2" />,
      ],
      img: data.customMaterial,
      leftDescription: <Trans i18nKey="usecase:materialFeature1LeftDesc" />,
      rightDescriptions: [
        t("materialFeature1RightDesc1"),
        t("materialFeature1RightDesc2"),
        t("materialFeature1RightDesc3"),
      ],
    },
    {
      isBgGreen: true,
      title: t("usecase:materialFeature2Title"),
      speechBubbles: [
        t("usecase:materialFeature2Bubble1"),
        <Trans i18nKey="usecase:materialFeature2Bubble2" />,
      ],
      img: data.inOut,
      leftDescription: <Trans i18nKey="usecase:materialFeature2LeftDesc" />,
      rightDescriptions: [
        t("materialFeature2RightDesc1"),
        t("materialFeature2RightDesc2"),
        t("materialFeature2RightDesc3"),
      ],
    },
    {
      title: t("usecase:materialFeature3Title"),
      speechBubbles: [
        t("usecase:materialFeature3Bubble1"),
        <Trans i18nKey="usecase:materialFeature3Bubble2" />,
      ],
      img: data.lowStock,
      leftDescription: <Trans i18nKey="usecase:materialFeature3LeftDesc" />,
      rightDescriptions: [
        t("materialFeature3RightDesc1"),
        t("materialFeature3RightDesc2"),
        t("materialFeature3RightDesc3"),
      ],
    },
  ];

  return (
    materialFeaturesdata.map((materialFeaturedata, index) => (
      <div
        key={index}
        className={materialFeaturedata.isBgGreen ? styles.greenBackground : ""}
      >
        <UseCaseFeature
          title={materialFeaturedata.title}
          speechBubbles={[
            {
              text: materialFeaturedata.speechBubbles[0],
              color: "#292a2f",
              backgroundColor: "rgba(60, 185, 160, 0.3)",
            },
            {
              text: materialFeaturedata.speechBubbles[1],
              color: "white",
              backgroundColor: "#3cb9a0",
            },
          ]}
          img={materialFeaturedata.img}
          leftDescription={materialFeaturedata.leftDescription}
          rightDescriptions={materialFeaturedata.rightDescriptions}
        />
      </div>
    ))
  );
};

const DesktopUsecaseMaterial = ({ data, t }) => (
  <DesktopLayout
    isFloatMenu={false}
    showPlatforms={false}
    closingEmoji={data.finger}
    closingMsg={t("usecase:closingMsg")}
  >
    <UseCaseTop
      className={styles.useCaseTopContainer}
      title={<Trans i18nKey="usecase:materialTopTitle" />}
      description={<Trans i18nKey="usecase:materialTopDesc" />}
      startNow={t("usecase:startNowButton")}
      img={data.history4}
    />

    <UseCaseFeatures
      data={data}
      t={t}
    />

    <DesktopUseCaseFooter />
  </DesktopLayout>
);

export default DesktopUsecaseMaterial;
