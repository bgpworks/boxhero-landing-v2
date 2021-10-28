import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { MobileUseCaseFeature, MobileUseCaseTop } from "./common";
// js
import MobileLayout from "./mobile-layout";
import MobileUseCaseFooter from "./mobile-usecase-footer";
// css
import * as styles from "./mobile-usecase-assets.module.css";

const UseCaseFeatures = ({ data, t }) => {
  const assetsFeaturesdata = [
    {
      title: t("usecase:assetsFeature1Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:assetsFeature1Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:assetsFeature1Bubble2Mobile" /> },
      ],
      img: data.mobilePrintLabel,
      descriptions: [
        t("assetsFeature1RightDesc1"),
        t("assetsFeature1RightDesc2"),
        t("assetsFeature1RightDesc3"),
      ],
    },
    {
      isBgOrange: true,
      title: t("usecase:assetsFeature2Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:assetsFeature2Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:assetsFeature2Bubble2Mobile" /> },
      ],
      img: data.mobileHistory,
      descriptions: [
        t("assetsFeature2RightDesc1"),
        t("assetsFeature2RightDesc2"),
        t("assetsFeature2RightDesc3"),
      ],
    },
    {
      title: t("usecase:assetsFeature3Title"),
      bubbles: [
        { text: <Trans i18nKey="usecase:assetsFeature3Bubble1Mobile" /> },
        { text: <Trans i18nKey="usecase:assetsFeature3Bubble2Mobile" /> },
      ],
      img: data.mobileViewPast,
      descriptions: [
        t("assetsFeature3RightDesc1"),
        t("assetsFeature3RightDesc2"),
        t("assetsFeature3RightDesc3"),
      ],
    },
  ];

  return (
    assetsFeaturesdata.map((assetsFeaturedata, index) => (
      <section
        key={index}
        className={assetsFeaturedata.isBgOrange ? styles.orangeBackground : ""}
      >
        <MobileUseCaseFeature
          title={assetsFeaturedata.title}
          bubleColorSequence={[
            { text: "#292a2f", background: "rgba(245, 166, 35, 0.3)" },
            { text: "white", background: "#f5a623" },
          ]}
          speechBubbles={assetsFeaturedata.bubbles}
          img={assetsFeaturedata.img}
          leftDescription={assetsFeaturedata.leftDescription}
          descriptions={assetsFeaturedata.descriptions}
        />
      </section>
    ))
  );
};

const MobileUsecaseAssets = ({ data, t }) => (
  <MobileLayout
    isFloatMenu={false}
    hideFloatAppInstallButton
    showPlatforms={false}
    closingEmoji={data.mobileFinger}
    closingMsg={t("usecase:closingMsg")}
  >
    <MobileUseCaseTop
      className={styles.useCaseTopContainer}
      title={<Trans i18nKey="usecase:assetsTopTitleMobile" />}
      description={<Trans i18nKey="usecase:assetsTopDesc" />}
      appDownload={t("usecase:appInstall")}
      img={data.mobileFeatures}
      alt="features"
    />

    <UseCaseFeatures
      data={data}
      t={t}
    />

    <MobileUseCaseFooter />
  </MobileLayout>
);

export default MobileUsecaseAssets;
