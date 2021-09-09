import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { UseCaseFeature, Padding, UseCaseTop } from "./common";
// js
import DesktopLayout from "./desktop-layout";
import DesktopUsecaseFooter from "./desktop-usecase-footer";
// css
import * as styles from "./desktop-usecase-sales.module.css";

const BottomContent = ({ data, t }) => (
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
      speechBubbles: [
        t("usecase:salesFeature1Bubble1"),
        <Trans i18nKey="usecase:salesFeature1Bubble2" />,
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
      speechBubbles: [
        t("usecase:salesFeature2Bubble1"),
        <Trans i18nKey="usecase:salesFeature2Bubble2" />,
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
      speechBubbles: [
        t("usecase:salesFeature3Bubble1"),
        <Trans i18nKey="usecase:salesFeature3Bubble2" />,
      ],
      img: data.scanBarcode,
      leftDescription: <Trans i18nKey="usecase:salesFeature3LeftDesc" />,
      rightDescriptions: [
        t("salesFeature3RightDesc1"),
        t("salesFeature3RightDesc2"),
        t("salesFeature3RightDesc3"),
      ],
      haveBottomContent: true,
    },
    {
      isBgBlue: true,
      title: t("usecase:salesFeature4Title"),
      speechBubbles: [
        t("usecase:salesFeature4Bubble1"),
        <Trans i18nKey="usecase:salesFeature4Bubble2" />,
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
      <div className={salesFeaturedata.isBgBlue ? styles.lightBlueBackground : ""}>
        <UseCaseFeature
          key={index}
          title={salesFeaturedata.title}
          speechBubbles={[
            {
              text: salesFeaturedata.speechBubbles[0],
              color: "#292a2f",
              backgroundColor: "rgba(80, 164, 250, 0.3)",
            },
            {
              text: salesFeaturedata.speechBubbles[1],
              color: "white",
              backgroundColor: "#50a4fa",
            },
          ]}
          img={salesFeaturedata.img}
          leftDescription={salesFeaturedata.leftDescription}
          rightDescriptions={salesFeaturedata.rightDescriptions}
        >
          {salesFeaturedata.haveBottomContent && (
            <BottomContent
              data={data}
              t={t}
            />
          )}
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
    <div className={styles.useCaseTopContainer}>
      <UseCaseTop
        title={<Trans i18nKey="usecase:salesTopTitle" />}
        description={<Trans i18nKey="usecase:salesTopDesc" />}
        startNow={t("usecase:startNowButton")}
        img={data.allInOne}
      />
    </div>

    <UseCaseFeatures
      data={data}
      t={t}
    />

    <DesktopUsecaseFooter />
  </DesktopLayout>
);

export default DesktopUsecaseSales;
