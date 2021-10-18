import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  GradientBG,
  Padding,
} from "./common";
import * as constants from "./constants";
// css
import * as styles from "./mobile-about.module.css";
// img
import iconAddItem from "../images/feature-additem.svg";
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

const Top = ({ data, t }) => (
  <GradientBG
    className={styles.topContainer}
    colorSet={["#0090f9", "#6b3af3", "#2d71f9", "#0097a0"]}
    backgroundColor="#6159F5"
  >
    <MobileBaseContainer className={styles.topContentContainer}>
      <h2 className={styles.topTitle}>
        <Trans i18nKey="about:topTitleMobile" />
      </h2>
    </MobileBaseContainer>
    <Padding y={40} />
    <ScrollContainer className={styles.topImageScrollContainer}>
      <GatsbyImage
        className={styles.topImage}
        image={data.mobileTopLogo.childImageSharp.gatsbyImageData}
        alt={t("about:pageTitle")}
      />
    </ScrollContainer>
  </GradientBG>
);

const StrongPoint = ({
  title, desc, img, alt,
}) => (
  <section className={styles.strongPoint}>
    <h2 className={styles.title}>{title}</h2>
    <Padding y={16} />
    <p className={styles.desc}>{desc}</p>
    <Padding y={30} />
    <GatsbyImage
      image={img.childImageSharp.gatsbyImageData}
      alt={alt}
    />
  </section>
);

const StrongPoints = ({ data }) => (
  <MobileBaseContainer>
    <StrongPoint
      title={<Trans i18nKey="about:strongPoint1Title" />}
      desc={<Trans i18nKey="about:strongPoint1DescMobile" />}
      img={data.mobileEasy}
      alt="easy"
    />

    <StrongPoint
      title={<Trans i18nKey="about:strongPoint2Title" />}
      desc={<Trans i18nKey="about:strongPoint2DescMobile" />}
      img={data.mobileGreat}
      alt="great"
    />

    <StrongPoint
      title={<Trans i18nKey="about:strongPoint3Title" />}
      desc={<Trans i18nKey="about:strongPoint3DescMobile" />}
      img={data.mobileMobile}
      alt="mobile"
    />
  </MobileBaseContainer>
);

const FeatureCard = ({
  img, title, content, link,
}) => (
  <a
    href={link}
    title={title}
    target="_blank"
    rel="noreferrer"
  >
    <div className={styles.featureCard}>
      <img
        className={styles.featureIcon}
        src={img}
        alt={title}
      />
      <Padding y={8} />
      <div className={styles.featureCardTitle}>{title}</div>
      <Padding y={8} />
      <div className={styles.featureCardContent}>{content}</div>
    </div>
  </a>
);

const FeatureRow = ({ id, title, columns }) => (
  <article
    id={id}
    className={styles.featureRow}
  >
    <h3 className={styles.featureRowTitle}>{title}</h3>
    <Padding y={20} />
    <ul className={styles.featureContainer}>
      {columns.map((column, index) => (
        <li key={index}>
          <FeatureCard
            img={column.img}
            title={column.title}
            content={column.content}
            link={column.link}
          />
        </li>
      ))}
    </ul>
  </article>
);

const genFeatureRowData = (t) => (
  [
    {
      id: constants.idAboutFeatureAddItem,
      title: t("about:otherFeatureRow1Title"),
      columns: [
        {
          img: iconCategory,
          title: t("about:otherFeatureRow1Col1Title"),
          content: t("about:otherFeatureRow1Col1Content"),
          link: t("about:otherFeatureRow1Col1Link"),
        },
        {
          img: iconAddItem,
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
      ],
    },
    {
      id: constants.idAboutFeatureTx,
      title: t("about:otherFeatureRow2Title"),
      columns: [
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
      ],
    },
    {
      id: constants.idAboutFeatureStatus,
      title: t("about:otherFeatureRow3Title"),
      columns: [
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
      ],
    },
  ]
);

const OtherFeatures = ({ t }) => {
  const featureRowData = genFeatureRowData(t);
  return (
    <GradientBG
      colorSet={["#0291FD", "#0385AA", "#2A59DD", "#8228FD"]}
      backgroundColor="#6159F5"
    >
      <MobileBaseContainer className={styles.featureContentContainer}>
        <h2 className={styles.featureTitle}>{t("about:otherFeaturesTitle")}</h2>
        <Padding y={16} />
        <p className={styles.featureDesc}>
          <Trans i18nKey="about:otherFeaturesDescMobile" />
        </p>
        {featureRowData.map(({ id, title, columns }) => (
          <FeatureRow
            key={id}
            id={id}
            title={title}
            columns={columns}
          />
        ))}
      </MobileBaseContainer>
    </GradientBG>
  );
};

const MobileAbout = ({ data, t }) => (
  <MobileLayout
    isFloatMenu
    curMenu="about"
    closingEmoji={data.mobileLight}
    closingMsg={t("about:closingMsg")}
  >
    <Top
      data={data}
      t={t}
    />

    <StrongPoints data={data} />

    <OtherFeatures t={t} />
  </MobileLayout>
);

export default MobileAbout;
