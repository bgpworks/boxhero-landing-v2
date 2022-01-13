import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import DesktopLayout from "./desktop-layout";
import { DesktopBaseContainer, GradientBG, Padding } from "./common";
import * as constants from "./constants";
// css
import * as styles from "./desktop-about.module.css";
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
import iconAnalysis from "../images/feature-analysis.svg";
import iconHistory from "../images/feature-history.svg";
import iconMobilescan from "../images/feature-mobilescan.svg";
import iconUppdown from "../images/feature-uppdown.svg";
import iconInvoice from "../images/feature-invoice.svg";

const Top = ({ data }) => (
  <GradientBG
    className={styles.topContainer}
    colorSet={["#0090f9", "#6b3af3", "#2d71f9", "#0097a0"]}
    backgroundColor="#4260ef"
  >
    <DesktopBaseContainer className={styles.topContentContainer}>
      <div className={styles.topLeftContainer}>
        <Trans i18nKey="about:topTitle" />
      </div>
      <GatsbyImage
        image={data.topLogo.childImageSharp.gatsbyImageData}
        alt="About BoxHero"
      />
    </DesktopBaseContainer>
  </GradientBG>
);

const StrongPoint = ({ children }) => (
  <DesktopBaseContainer className={styles.section}>
    {children}
  </DesktopBaseContainer>
);

const StrongPointDescription = ({ title, description }) => (
  <div className={styles.strongPointDesc}>
    <div className={styles.title}>{title}</div>
    <Padding y={16} />
    <div className={styles.desc}>{description}</div>
  </div>
);

const StrongPoints = ({ data }) => (
  <>
    <StrongPoint>
      <GatsbyImage
        image={data.easy.childImageSharp.gatsbyImageData}
        alt="easy"
      />
      <StrongPointDescription
        title={<Trans i18nKey="about:strongPoint1Title" />}
        description={<Trans i18nKey="about:strongPoint1Desc" />}
      />
    </StrongPoint>

    <StrongPoint>
      <StrongPointDescription
        title={<Trans i18nKey="about:strongPoint2Title" />}
        description={<Trans i18nKey="about:strongPoint2Desc" />}
      />
      <GatsbyImage
        image={data.great.childImageSharp.gatsbyImageData}
        alt="great"
      />
    </StrongPoint>

    <StrongPoint>
      <GatsbyImage
        image={data.mobile.childImageSharp.gatsbyImageData}
        alt="mobile"
      />
      <StrongPointDescription
        title={<Trans i18nKey="about:strongPoint3Title" />}
        description={<Trans i18nKey="about:strongPoint3Desc" />}
      />
    </StrongPoint>
  </>
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
      <div className={styles.featureCardBackground} />
      <div className={styles.featureCardContentContainer}>
        <img
          className={styles.featureIcon}
          src={img}
          alt={title}
        />
        <Padding y={4} />
        <div className={styles.featureCardTitle}>{title}</div>
        <Padding y={21} />
        <div className={styles.featureCardContent}>{content}</div>
      </div>
    </div>
  </a>
);

const FeatureRow = ({ id, title, columns }) => (
  <div
    id={id}
    className={styles.featureRow}
  >
    <div className={styles.featureRowTitle}>{title}</div>
    <Padding y={24} />
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

function genOtherFeaturesData(t) {
  return [
    {
      id: constants.idAboutFeatureAddItem,
      title: t("about:otherFeatureRow1Title"),
      columns: [
        {
          img: iconCategory,
          title: t("about:otherFeatureRow1Col1Title"),
          content: t("about:otherFeatureRow1Col1Content"),
          link: "/help/features/item",
        },
        {
          img: iconAddItem,
          title: t("about:otherFeatureRow1Col2Title"),
          content: t("about:otherFeatureRow1Col2Content"),
          link: "/help/features/barcode",
        },
        {
          img: iconImage,
          title: t("about:otherFeatureRow1Col3Title"),
          content: t("about:otherFeatureRow1Col3Content"),
          link: "/help/features/item/photos",
        },
        {
          img: iconBulkAdd,
          title: t("about:otherFeatureRow1Col4Title"),
          content: t("about:otherFeatureRow1Col4Content"),
          link: "/help/features/excel/item-registration",
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
          link: "/help/features/barcode/transaction-mobile",
        },
        {
          img: iconPartner,
          title: t("about:otherFeatureRow2Col2Title"),
          content: t("about:otherFeatureRow2Col2Content"),
          link: "/help/faq/how-do-i-add-partner",
        },
        {
          img: iconHistory,
          title: t("about:otherFeatureRow2Col3Title"),
          content: t("about:otherFeatureRow2Col3Content"),
          link: "/help/features/in-out/history",
        },
        {
          img: iconUppdown,
          title: t("about:otherFeatureRow2Col4Title"),
          content: t("about:otherFeatureRow2Col4Content"),
          link: "/help/features/excel",
        },
        {
          img: iconInvoice,
          title: t("about:otherFeatureRow2Col5Title"),
          content: t("about:otherFeatureRow2Col5Content"),
          link: "/help/features/sales",
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
          link: "/help/features/item/list",
        },
        {
          img: iconCounting,
          title: t("about:otherFeatureRow3Col2Title"),
          content: t("about:otherFeatureRow3Col2Content"),
          link: "/help/features/barcode/item-mobile",
        },
        {
          img: iconGraph,
          title: t("about:otherFeatureRow3Col3Title"),
          content: t("about:otherFeatureRow3Col3Content"),
          link: "/help/features/analysis",
        },
        {
          img: iconDashboard,
          title: t("about:otherFeatureRow3Col4Title"),
          content: t("about:otherFeatureRow3Col4Content"),
          link: "/help/features/analysis/dashboard",
        },
        {
          img: iconAnalysis,
          title: t("about:otherFeatureRow3Col5Title"),
          content: t("about:otherFeatureRow3Col5Content"),
          link: "/help/features/analysis/inventory-analysis",
        },
      ],
    },
  ];
}

const OtherFeatures = ({ t }) => {
  const rowData = genOtherFeaturesData(t);

  return (
    <GradientBG
      colorSet={["#0291FD", "#0385AA", "#2A59DD", "#8228FD"]}
      backgroundColor="#6159F5"
    >
      <DesktopBaseContainer className={styles.featureContentContainer}>
        <div className={styles.featureTitle}>{t("about:otherFeaturesTitle")}</div>
        <Padding y={16} />
        <div className={styles.featureDesc}>
          <Trans i18nKey="about:otherFeaturesDesc" />
        </div>
        <Padding y={50} />
        {rowData.map((row) => (
          <FeatureRow
            key={row.id}
            id={row.id}
            title={row.title}
            columns={row.columns}
          />
        ))}
      </DesktopBaseContainer>
    </GradientBG>
  );
};

const DesktopAbout = ({ data, t }) => (
  <DesktopLayout
    isFloatMenu
    closingEmoji={data.light}
    closingMsg={t("about:closingMsg")}
  >
    <Top data={data} />

    <StrongPoints data={data} />

    <OtherFeatures
      data={data}
      t={t}
    />
  </DesktopLayout>
);

export default DesktopAbout;
