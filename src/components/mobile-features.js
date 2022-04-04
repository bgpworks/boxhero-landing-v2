import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileLayout from "./mobile-layout";
import { MobileBaseContainer, Padding } from "./common";
import * as constants from "./constants";
// css
import * as styles from "./mobile-features.module.css";

const {
  bgOrange, bgGreen, bgBlue, bgWhite,
} = styles;

const Top = ({ t }) => (
  <MobileBaseContainer className={styles.topContainer}>
    <h1 className={styles.topTitle}>{t("features:topTitle")}</h1>
    <Padding y={16} />
    <p className={styles.topDesc}>
      <Trans i18nKey="features:topDescMobile" />
    </p>
  </MobileBaseContainer>
);

const DemoTemplate = ({ icon, title, desc }) => (
  <article className={styles.demoTemplate}>
    <div className={styles.demoUserProfile}>
      <GatsbyImage
        image={icon}
        alt={title}
      />
      <Padding y={12} />
      <span className={styles.demoTitle}>
        -
        {" "}
        {title}
        {" "}
        -
      </span>
    </div>
    <Padding y={16} />
    <div className={styles.demoDesc}>{desc}</div>
  </article>
);

function FeatureTemplate({
  id, bgColor, title, desc, figure, demoData,
}) {
  return (
    <section
      id={id}
      className={bgColor}
    >
      <MobileBaseContainer className={styles.featureTemplate}>
        <h2 className={styles.featureTemplateTitle}>{title}</h2>
        <Padding y={16} />
        <p className={styles.featureTemplateDesc}>{desc}</p>
        <Padding y={40} />
        <GatsbyImage
          image={figure}
          alt={title}
        />
        <Padding y={30} />

        <div>
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
      </MobileBaseContainer>
    </section>
  );
}

const FeatureLowstock = ({ t, data }) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title={t("features:lowstockTitle")}
    figure={data.mobileLowstockFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:lowstockDescMobile" />}
    demoData={[
      {
        icon: data.mobileLowstockDemo1.childImageSharp.gatsbyImageData,
        title: t("features:lowstockDemo1Title"),
        desc: <Trans i18nKey="features:lowstockDemo1DescMobile" />,
      },
      {
        icon: data.mobileLowstockDemo2.childImageSharp.gatsbyImageData,
        title: t("features:lowstockDemo2Title"),
        desc: <Trans i18nKey="features:lowstockDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureBarcodelabel = ({ t, data }) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgWhite}
    title={t("features:barcodelabelTitleMobile")}
    figure={data.mobileBarcodelabelFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:barcodelabelDescMobile" />}
    demoData={[
      {
        icon:
          data.mobileBarcodelabelDemo1.childImageSharp.gatsbyImageData,
        title: t("features:barcodelabelDemo1Title"),
        desc: <Trans i18nKey="features:barcodelabelDemo1DescMobile" />,
      },
      {
        icon:
          data.mobileBarcodelabelDemo2.childImageSharp.gatsbyImageData,
        title: t("features:barcodelabelDemo2Title"),
        desc: <Trans i18nKey="features:barcodelabelDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureSummary = ({ t, data }) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgBlue}
    title={t("features:summaryTitleMobile")}
    figure={data.mobileSummaryFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:summaryDescMobile" />}
    demoData={[
      {
        icon: data.mobileSummaryDemo1.childImageSharp.gatsbyImageData,
        title: t("features:summaryDemo1Title"),
        desc: <Trans i18nKey="features:summaryDemo1DescMobile" />,
      },
      {
        icon: data.mobileSummaryDemo2.childImageSharp.gatsbyImageData,
        title: t("features:summaryDemo2Title"),
        desc: <Trans i18nKey="features:summaryDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureViewPastQuantity = ({ t, data }) => (
  <FeatureTemplate
    id={constants.idFeatureViewPastQuantity}
    bgColor={bgWhite}
    title={t("features:viewPastQuantityTitleMobile")}
    figure={
      data.mobileViewPastQuantityFig.childImageSharp.gatsbyImageData
    }
    desc={<Trans i18nKey="features:viewPastQuantityDescMobile" />}
    demoData={[
      {
        icon:
          data.mobileViewPastQuantityDemo1.childImageSharp
            .gatsbyImageData,
        title: t("features:viewPastQuantityDemo1Title"),
        desc: <Trans i18nKey="features:viewPastQuantityDemo1DescMobile" />,
      },
      {
        icon:
          data.mobileViewPastQuantityDemo2.childImageSharp
            .gatsbyImageData,
        title: t("features:viewPastQuantityDemo2Title"),
        desc: <Trans i18nKey="features:viewPastQuantityDemo2DescMobile" />,
      },
    ]}
  />
);

const FeatureLocation = ({ t, data }) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgOrange}
    title={t("features:locationTitleMobile")}
    figure={data.mobileLocationFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:locationDescMobile" />}
    demoData={[
      {
        icon: data.mobileLocationDemo1.childImageSharp.gatsbyImageData,
        title: t("features:locationDemo1Title"),
        desc: <Trans i18nKey="features:locationDemo1DescMobile" />,
      },
      {
        icon: data.mobileLocationDemo2.childImageSharp.gatsbyImageData,
        title: t("features:locationDemo2Title"),
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
    <Top t={t} />

    <FeatureLowstock
      t={t}
      data={data}
    />

    <FeatureBarcodelabel
      t={t}
      data={data}
    />

    <FeatureSummary
      t={t}
      data={data}
    />

    <FeatureViewPastQuantity
      t={t}
      data={data}
    />

    <FeatureLocation
      t={t}
      data={data}
    />
  </MobileLayout>
);

export default MobileFeatures;
