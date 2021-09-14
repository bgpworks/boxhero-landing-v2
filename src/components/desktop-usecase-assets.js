import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { UseCaseFeature, UseCaseTop } from "./common";
// js
import DesktopLayout from "./desktop-layout";
import DesktopUseCaseFooter from "./desktop-usecase-footer";
// css
import * as styles from "./desktop-usecase-assets.module.css";

const UseCaseFeatures = ({ data, t }) => {
  const assetsFeaturesdata = [
    {
      title: t("usecase:assetsFeature1Title"),
      speechBubbles: [
        t("usecase:assetsFeature1Bubble1"),
        <Trans i18nKey="usecase:assetsFeature1Bubble2" />,
      ],
      img: data.printLabel,
      leftDescription: <Trans i18nKey="usecase:assetsFeature1LeftDesc" />,
      rightDescriptions: [
        t("assetsFeature1RightDesc1"),
        t("assetsFeature1RightDesc2"),
        t("assetsFeature1RightDesc3"),
      ],
    },
    {
      isBgOrange: true,
      title: t("usecase:assetsFeature2Title"),
      speechBubbles: [
        t("usecase:assetsFeature2Bubble1"),
        <Trans i18nKey="usecase:assetsFeature2Bubble2" />,
      ],
      img: data.history,
      leftDescription: <Trans i18nKey="usecase:assetsFeature2LeftDesc" />,
      rightDescriptions: [
        t("assetsFeature2RightDesc1"),
        t("assetsFeature2RightDesc2"),
        t("assetsFeature2RightDesc3"),
      ],
    },
    {
      title: t("usecase:assetsFeature3Title"),
      speechBubbles: [
        t("usecase:assetsFeature3Bubble1"),
        <Trans i18nKey="usecase:assetsFeature3Bubble2" />,
      ],
      img: data.viewPast,
      leftDescription: <Trans i18nKey="usecase:assetsFeature3LeftDesc" />,
      rightDescriptions: [
        t("assetsFeature3RightDesc1"),
        t("assetsFeature3RightDesc2"),
        t("assetsFeature3RightDesc3"),
      ],
    },
  ];

  return (
    assetsFeaturesdata.map((assetsFeaturedata, index) => (
      <div
        key={index}
        className={assetsFeaturedata.isBgOrange ? styles.orangeBackground : ""}
      >
        <UseCaseFeature
          title={assetsFeaturedata.title}
          speechBubbles={[
            {
              text: assetsFeaturedata.speechBubbles[0],
              color: "#292a2f",
              backgroundColor: "rgba(245, 166, 35, 0.3)",
            },
            {
              text: assetsFeaturedata.speechBubbles[1],
              color: "white",
              backgroundColor: "#f5a623",
            },
          ]}
          img={assetsFeaturedata.img}
          leftDescription={assetsFeaturedata.leftDescription}
          rightDescriptions={assetsFeaturedata.rightDescriptions}
        />
      </div>
    ))
  );
};

const DesktopUsecaseAssets = ({ data, t }) => (
  <DesktopLayout
    isFloatMenu={false}
    showPlatforms={false}
    closingEmoji={data.finger}
    closingMsg={t("usecase:closingMsg")}
  >
    <UseCaseTop
      className={styles.useCaseTopContainer}
      title={<Trans i18nKey="usecase:assetsTopTitle" />}
      description={<Trans i18nKey="usecase:assetsTopDesc" />}
      startNow={t("usecase:startNowButton")}
      img={data.features}
    />

    <UseCaseFeatures
      data={data}
      t={t}
    />

    <DesktopUseCaseFooter />
  </DesktopLayout>
);

export default DesktopUsecaseAssets;
