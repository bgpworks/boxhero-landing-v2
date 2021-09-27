import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileLayout from "./mobile-layout";
import { Container320, Padding, MobileSimpleTop } from "./common";
import * as constants from "./constants";
// css
import * as styles from "./mobile-features.module.css";

const {
  bgOrange, bgGreen, bgBlue, bgWhite,
} = styles;

const DemoTemplate = ({ icon, title, desc }) => (
  <div className={styles.demoTemplate}>
    <div className={styles.demoUserProfile}>
      <GatsbyImage
        image={icon}
        className={styles.demoLogo}
      />
      <span className={styles.demoTitle}>
        -
        {" "}
        {title}
        {" "}
        -
      </span>
    </div>
    <Padding y={20} />
    <div className={styles.demoDesc}>{desc}</div>
  </div>
);

function FeatureTemplate({
  id, bgColor, title, desc, figure, demoData,
}) {
  return (
    <div
      id={id}
      className={[styles.featureTemplate, bgColor].join(" ")}
    >
      <div className={`${styles.px20} ${styles.featureTemplateTitle}`}>
        {title}
      </div>

      <Padding y={20} />

      <div className={`${styles.px20} ${styles.featureTemplateDesc}`}>
        {desc}
      </div>

      <Padding y={30} />

      <div className={styles.featureTemplateFigureContainer}>
        <GatsbyImage image={figure} />
      </div>

      <Padding y={31} />

      <Container320>
        <div className={styles.px20}>
          {demoData
            .slice(0, 2)
            .map((data, index) => (
              <DemoTemplate
                key={index}
                icon={data.icon}
                title={data.title}
                desc={data.desc}
              />
            ))}
        </div>
      </Container320>
    </div>
  );
}

const FeatureLowstock = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:lowstockTitle" />}
    figure={data.mobileLowstockFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:lowstockDescMobile" />}
    demoData={[
      {
        icon: data.mobileLowstockDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:lowstockDemo1Title" />,
        desc: <Trans i18nKey="features:lowstockDemo1DescMobile" />,
      },
      {
        icon: data.mobileLowstockDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:lowstockDemo2Title" />,
        desc: <Trans i18nKey="features:lowstockDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureBarcodelabel = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:barcodelabelTitleMobile" />}
    figure={data.mobileBarcodelabelFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:barcodelabelDescMobile" />}
    demoData={[
      {
        icon:
          data.mobileBarcodelabelDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:barcodelabelDemo1Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo1DescMobile" />,
      },
      {
        icon:
          data.mobileBarcodelabelDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:barcodelabelDemo2Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureSummary = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:summaryTitleMobile" />}
    figure={data.mobileSummaryFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:summaryDescMobile" />}
    demoData={[
      {
        icon: data.mobileSummaryDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:summaryDemo1Title" />,
        desc: <Trans i18nKey="features:summaryDemo1DescMobile" />,
      },
      {
        icon: data.mobileSummaryDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:summaryDemo2Title" />,
        desc: <Trans i18nKey="features:summaryDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureViewPastQuantity = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureViewPastQuantity}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:viewPastQuantityTitleMobile" />}
    figure={
      data.mobileViewPastQuantityFig.childImageSharp.gatsbyImageData
    }
    desc={<Trans i18nKey="features:viewPastQuantityDescMobile" />}
    demoData={[
      {
        icon:
          data.mobileViewPastQuantityDemo1.childImageSharp
            .gatsbyImageData,
        title: <Trans i18nKey="features:viewPastQuantityDemo1Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo1DescMobile" />,
      },
      {
        icon:
          data.mobileViewPastQuantityDemo2.childImageSharp
            .gatsbyImageData,
        title: <Trans i18nKey="features:viewPastQuantityDemo2Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureLocation = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:locationTitleMobile" />}
    figure={data.mobileLocationFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:locationDescMobile" />}
    demoData={[
      {
        icon: data.mobileLocationDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:locationDemo1Title" />,
        desc: <Trans i18nKey="features:locationDemo1DescMobile" />,
      },
      {
        icon: data.mobileLocationDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:locationDemo2Title" />,
        desc: <Trans i18nKey="features:locationDemo2DescMobile" />,
      },
    ]}
  />
);

const MobileFeatures = ({ data, t }) => (
  <MobileLayout
    isFloatMenu={false}
    closingEmoji={data.mobileDinosaur}
    closingMsg={t("features:closingMsg")}
  >
    <Container320 className={styles.px20}>
      <MobileSimpleTop title={t("features:topTitle")}>
        <Trans i18nKey="features:topDescMobile" />
      </MobileSimpleTop>
    </Container320>

    <Padding y={50} />

    <FeatureLowstock data={data} />
    <FeatureBarcodelabel data={data} />
    <FeatureSummary data={data} />
    <FeatureViewPastQuantity data={data} />
    <FeatureLocation data={data} />
  </MobileLayout>
);

export default MobileFeatures;
