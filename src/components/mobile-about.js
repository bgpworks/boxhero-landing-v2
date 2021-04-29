import React from "react";
import Img from "gatsby-image";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileLayout from "../components/mobile-layout";
import {
  Container320,
  ContainerCenter,
  GradientBG,
  Padding,
} from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./mobile-about.module.css";
// img
import iconAddProduct from "../images/feature-addproduct.svg";
import iconBulkAdd from "../images/feature-bulkadd.svg";
import iconCounting from "../images/feature-counting.svg";
import iconGraph from "../images/feature-graph.svg";
import iconImage from "../images/feature-image.svg";
import iconPartner from "../images/feature-partner.svg";
import iconBasicmode from "../images/feature-basicmode.svg";
import iconCategory from "../images/feature-category.svg";
import iconDashboard from "../images/feature-dashboard.svg";
import iconHistory from "../images/feature-history.svg";
import iconMobilescan from "../images/feature-mobilescan.svg";
import iconUppdown from "../images/feature-uppdown.svg";
import iconAnalysis from "../images/feature-analysis.svg";
import iconInvoice from "../images/feature-invoice.svg";

const Top = ({ data }) => (
  <GradientBG
    className={styles.topContainer}
    colorSet={["#0090f9", "#6b3af3", "#2d71f9", "#0097a0"]}
    backgroundColor="#6159F5"
  >
    <Container320 className={styles.topContentContainer}>
      <Padding y={94} />
      <div className={styles.topTitleContainer}>
        <Trans i18nKey="about:topTitleMobile" />
      </div>
      <Padding y={30} />
      <Img fixed={data.mobileTopLogo.childImageSharp.fixed} />
    </Container320>
  </GradientBG>
);

const StrongPoints = ({ data }) => (
  <ContainerCenter>
    <div className={styles.section}>
      <div className={styles.title}>
        <Trans i18nKey="about:strongPoint1Title" />
      </div>
      <div className={styles.desc}>
        <Trans i18nKey="about:strongPoint1DescMobile" />
      </div>
      <div className={styles.logoContainer}>
        <Img fixed={data.mobileEasy.childImageSharp.fixed} />
      </div>
    </div>

    <div className={styles.section}>
      <div className={styles.title}>
        <Trans i18nKey="about:strongPoint2TitleMobile" />
      </div>
      <div className={styles.desc}>
        <Trans i18nKey="about:strongPoint2DescMobile" />
      </div>
      <div className={styles.logoContainer}>
        <Img fixed={data.mobileGreat.childImageSharp.fixed} />
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.title}>
        <Trans i18nKey="about:strongPoint3Title" />
      </div>
      <div className={styles.desc}>
        <Trans i18nKey="about:strongPoint3DescMobile" />
      </div>
      <div className={styles.logoContainer}>
        <Img fixed={data.mobileMobile.childImageSharp.fixed} />
      </div>
    </div>
  </ContainerCenter>
);

const FeatureCard = ({ img, title, content, link }) => (
  <a href={link} title={title} target="_blank" rel="noreferrer">
    <div className={styles.featureCard}>
      <img className={styles.featureIcon} src={img} alt={title} />
      <Padding y={8} />
      <div className={styles.featureCardTitle}>{title}</div>
      <Padding y={8} />
      <div className={styles.featureCardContent}>{content}</div>
    </div>
  </a>
);

const FeatureRow = ({ id, title, columns }) => (
  <div id={id} className={styles.featureRow}>
    <div className={styles.featureRowTitle}>{title}</div>
    <Padding y={21} />
    <div className={styles.featureContainer}>
      {columns.map((column, index) => (
        <FeatureCard
          key={index}
          img={column.img}
          title={column.title}
          content={column.content}
          link={column.link}
        />
      ))}
    </div>
  </div>
);

const OtherFeatures = ({ t }) => (
  <GradientBG
    colorSet={["#0291FD", "#0385AA", "#2A59DD", "#8228FD"]}
    backgroundColor="#6159F5"
  >
    <div className={styles.featureContentContainer}>
      <div className={styles.featureTitle}>{t("about:otherFeaturesTitle")}</div>
      <Padding y={30} />
      <div className={styles.featureDesc}>
        <Trans i18nKey="about:otherFeaturesDescMobile" />
      </div>
      <FeatureRow
        id={constants.idAboutFeatureAddProduct}
        title={t("about:otherFeatureRow1Title")}
        columns={[
          {
            img: iconCategory,
            title: t("about:otherFeatureRow1Col1Title"),
            content: t("about:otherFeatureRow1Col1Content"),
            link: t("about:otherFeatureRow1Col1Link"),
          },
          {
            img: iconAddProduct,
            title: t("about:otherFeatureRow1Col2Title"),
            content: t("about:otherFeatureRow1Col2Content"),
            link: t("about:otherFeatureRow1Col2Link"),
          },
          {
            img: iconImage,
            title: t("about:otherFeatureRow1Col3Title"),
            content: t("about:otherFeatureRow1Col3Content"),
            link: t("about:otherFeatureRow1Col3Link"),
          },
          {
            img: iconBulkAdd,
            title: t("about:otherFeatureRow1Col4Title"),
            content: t("about:otherFeatureRow1Col4Content"),
            link: t("about:otherFeatureRow1Col4Link"),
          },
        ]}
      />
      <FeatureRow
        id={constants.idAboutFeatureTx}
        title={t("about:otherFeatureRow2Title")}
        columns={[
          {
            img: iconMobilescan,
            title: t("about:otherFeatureRow2Col1Title"),
            content: t("about:otherFeatureRow2Col1Content"),
            link: t("about:otherFeatureRow2Col1Link"),
          },
          {
            img: iconPartner,
            title: t("about:otherFeatureRow2Col2Title"),
            content: t("about:otherFeatureRow2Col2Content"),
            link: t("about:otherFeatureRow2Col2Link"),
          },
          {
            img: iconHistory,
            title: t("about:otherFeatureRow2Col3Title"),
            content: t("about:otherFeatureRow2Col3Content"),
            link: t("about:otherFeatureRow2Col3Link"),
          },
          {
            img: iconUppdown,
            title: t("about:otherFeatureRow2Col4Title"),
            content: t("about:otherFeatureRow2Col4Content"),
            link: t("about:otherFeatureRow2Col4Link"),
          },
          {
            img: iconInvoice,
            title: t("about:otherFeatureRow2Col5Title"),
            content: t("about:otherFeatureRow2Col5Content"),
            link: t("about:otherFeatureRow2Col5Link"),
          },
        ]}
      />
      <FeatureRow
        id={constants.idAboutFeatureStatus}
        title={t("about:otherFeatureRow3Title")}
        columns={[
          {
            img: iconBasicmode,
            title: t("about:otherFeatureRow3Col1Title"),
            content: t("about:otherFeatureRow3Col1Content"),
            link: t("about:otherFeatureRow3Col1Link"),
          },
          {
            img: iconCounting,
            title: t("about:otherFeatureRow3Col2Title"),
            content: t("about:otherFeatureRow3Col2Content"),
            link: t("about:otherFeatureRow3Col2Link"),
          },
          {
            img: iconGraph,
            title: t("about:otherFeatureRow3Col3Title"),
            content: t("about:otherFeatureRow3Col3Content"),
            link: t("about:otherFeatureRow3Col3Link"),
          },
          {
            img: iconDashboard,
            title: t("about:otherFeatureRow3Col4Title"),
            content: t("about:otherFeatureRow3Col4Content"),
            link: t("about:otherFeatureRow3Col4Link"),
          },
          {
            img: iconAnalysis,
            title: t("about:otherFeatureRow3Col5Title"),
            content: t("about:otherFeatureRow3Col5Content"),
            link: t("about:otherFeatureRow3Col5Link"),
          },
        ]}
      />
    </div>
  </GradientBG>
);

const MobileAbout = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={true}
      curMenu="about"
      closingEmoji={data.mobileLight}
      closingMsg={t("about:closingMsg")}
    >
      <Top data={data} />

      <StrongPoints data={data} />

      <OtherFeatures data={data} t={t} />
    </MobileLayout>
  );
};

export default MobileAbout;
