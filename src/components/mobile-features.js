import React from "react";
import Img from "gatsby-image";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileLayout from "../components/mobile-layout";
import { Container320, Padding, MobileSimpleTop } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./mobile-features.module.css";

const { bgOrange, bgGreen, bgBlue, bgWhite } = styles;

const DemoTemplate = ({ icon, title, desc }) => (
  <div className={styles.demoTemplate}>
    <div>
      <Img fixed={icon} className={styles.demoLogo} />
      <span className={styles.demoTitle}>- {title} -</span>
    </div>
    <Padding y={20} />
    <div className={styles.demoDesc}>{desc}</div>
  </div>
);

function FeatureTemplate(props) {
  return (
    <div
      id={props.id}
      className={[styles.featureTemplate, props.bgColor].join(" ")}
    >
      <div className={`${styles.px20} ${styles.featureTemplateTitle}`}>
        {props.title}
      </div>

      <Padding y={20} />

      <div className={`${styles.px20} ${styles.featureTemplateDesc}`}>
        {props.desc}
      </div>

      <Padding y={30} />

      <div className={styles.featureTemplateFigureContainer}>
        <Img fixed={props.figure} />
      </div>

      <Padding y={31} />

      <Container320>
        <div className={styles.px20}>
          {props.demoData.slice(0, 2).map((data, index) => (
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

const FeatureLowstock = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:lowstockTitle" />}
    figure={props.data.mobileLowstockFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:lowstockDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileLowstockDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:lowstockDemo1Title" />,
        desc: <Trans i18nKey="features:lowstockDemo1DescMobile" />,
      },
      {
        icon: props.data.mobileLowstockDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:lowstockDemo2Title" />,
        desc: <Trans i18nKey="features:lowstockDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureBarcodelabel = (props) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:barcodelabelTitleMobile" />}
    figure={props.data.mobileBarcodelabelFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:barcodelabelDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileBarcodelabelDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:barcodelabelDemo1Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo1DescMobile" />,
      },
      {
        icon: props.data.mobileBarcodelabelDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:barcodelabelDemo2Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureSummary = (props) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:summaryTitleMobile" />}
    figure={props.data.mobileSummaryFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:summaryDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileSummaryDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:summaryDemo1Title" />,
        desc: <Trans i18nKey="features:summaryDemo1DescMobile" />,
      },
      {
        icon: props.data.mobileSummaryDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:summaryDemo2Title" />,
        desc: <Trans i18nKey="features:summaryDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureViewPastQuantity = (props) => (
  <FeatureTemplate
    id={constants.idFeatureViewPastQuantity}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:viewPastQuantityTitle" />}
    figure={props.data.mobileViewPastQuantityFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:viewPastQuantityDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileViewPastQuantityDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:viewPastQuantityDemo1Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo1DescMobile" />,
      },
      {
        icon: props.data.mobileViewPastQuantityDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:viewPastQuantityDemo2Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureLocation = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:locationTitleMobile" />}
    figure={props.data.mobileLocationFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:locationDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileLocationDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:locationDemo1Title" />,
        desc: <Trans i18nKey="features:locationDemo1DescMobile" />,
      },
      {
        icon: props.data.mobileLocationDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:locationDemo2Title" />,
        desc: <Trans i18nKey="features:locationDemo2DescMobile" />,
      },
    ]}
  />
);

const MobileFeatures = ({ data, language, t }) => (
  <MobileLayout
    isFloatMenu={false}
    curMenu="features"
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
