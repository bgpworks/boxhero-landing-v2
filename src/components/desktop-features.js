import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import scrollTo from "gatsby-plugin-smoothscroll";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  ExternalLinkWithQuery,
} from "./common";
import * as constants from "./constants";
// css
import * as styles from "./desktop-features.module.css";
// img
import iconMenuEmpty from "../images/features-menu-empty.svg";
import iconMenuCustomization from "../images/features-menu-customization.svg";
import iconMenuSummary from "../images/features-menu-summary.svg";
import iconViewPastQuantity from "../images/features-menu-view-past-quantity.svg";
import iconMenuLocationmode from "../images/features-menu-locationmode.svg";

const {
  bgWhite,
  bgOrange,
  bgGreen,
  bgBlue,
  barGray,
  barOrange,
  barGreen,
  barBlue,
} = styles;

const Top = ({ t }) => (
  <DesktopBaseContainer className={styles.topContentContainer}>
    <div className={styles.topTitle}>{t("features:topTitle")}</div>
    <Padding y={16} />
    <div className={styles.topDesc}>
      <Trans i18nKey="features:topDesc" />
    </div>
    <Padding y={50} />
    <Menu t={t} />
  </DesktopBaseContainer>
);

const MenuItem = ({
  to, icon, label, title,
}) => (
  <Link
    to={`/features/${to}`}
    title={title}
    className={styles.menuItem}
    onClick={(evt) => {
      evt.preventDefault();
      scrollTo(to);
    }}
  >
    <div>
      <img
        src={icon}
        alt={label}
      />
    </div>
    <Padding y={9} />
    <div className={styles.menuItemLabel}>{label}</div>
  </Link>
);

const Menu = ({ t }) => (
  <DesktopBaseContainer className={styles.menuContainer}>
    <MenuItem
      to={`#${constants.idFeatureLowstock}`}
      icon={iconMenuEmpty}
      label={<Trans i18nKey="features:menuLowstock" />}
      title={t("features:menuLowstockLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureBarcodelabel}`}
      icon={iconMenuCustomization}
      label={<Trans i18nKey="features:menuBarcodelabel" />}
      title={t("features:menuBarcodelabelLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureSummary}`}
      icon={iconMenuSummary}
      label={<Trans i18nKey="features:menuSummary" />}
      title={t("features:menuSummaryLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureViewPastQuantity}`}
      icon={iconViewPastQuantity}
      label={<Trans i18nKey="features:menuViewPastQuantity" />}
      title={t("features:menuViewPastQuantityLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureLocation}`}
      icon={iconMenuLocationmode}
      label={<Trans i18nKey="features:menuLocation" />}
      title={t("features:menuLocationLinkTitle")}
    />
  </DesktopBaseContainer>
);

const DemoTemplate = ({
  barColor, icon, title, desc,
}) => (
  <div className={[styles.demoTemplate, barColor].join(" ")}>
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
  id, bgColor, title, desc, figure, figureStyle, barColor, demoData,
}) {
  return (
    <div
      id={id}
      className={[styles.featureTemplate, bgColor].join(" ")}
    >
      <DesktopBaseContainer className={styles.featureTemplateContentContainer}>
        <div className={styles.featureTemplateDescFigContainer}>
          <div className={styles.featureTemplateTitleDescContainer}>
            <div className={styles.featureTemplateTitle}>
              {title}
            </div>
            <Padding y={18} />
            <div className={styles.featureTemplateDesc}>
              {desc}
            </div>
            <Padding y={50} />
            <ExternalLinkWithQuery href={constants.urlStart}>
              <button
                type="button"
                className={styles.featureTemplateStartNow}
              >
                <Trans i18nKey="features:startNowButton" />
              </button>
            </ExternalLinkWithQuery>
          </div>
          <div style={figureStyle}>
            <GatsbyImage
              image={figure}
              alt={title}
            />
          </div>
        </div>
        <Padding y={70} />
        <div className={styles.halfContainer}>
          {demoData
            .slice(0, 2)
            .map((data, index) => (
              <DemoTemplate
                key={index}
                barColor={barColor}
                icon={data.icon}
                title={data.title}
                desc={data.desc}
              />
            ))}
        </div>
      </DesktopBaseContainer>
    </div>
  );
}

const FeatureLowstock = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:lowstockTitle" />}
    figure={data.lowstockFig.childImageSharp.gatsbyImageData}
    desc={<Trans i18nKey="features:lowstockDesc" />}
    barColor={barGreen}
    demoData={[
      {
        icon: data.lowstockDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:lowstockDemo1Title" />,
        desc: <Trans i18nKey="features:lowstockDemo1Desc" />,
      },
      {
        icon: data.lowstockDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:lowstockDemo2Title" />,
        desc: <Trans i18nKey="features:lowstockDemo2Desc" />,
      },
    ]}
  />
);

const FeatureBarcodelabel = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:barcodelabelTitle" />}
    figure={data.barcodelabelFig.childImageSharp.gatsbyImageData}
    figureStyle={{ marginRight: -30 }}
    desc={<Trans i18nKey="features:barcodelabelDesc" />}
    barColor={barGray}
    demoData={[
      {
        icon: data.barcodelabelDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:barcodelabelDemo1Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo1Desc" />,
      },
      {
        icon: data.barcodelabelDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:barcodelabelDemo2Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo2Desc" />,
      },
    ]}
  />
);

const FeatureSummary = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:summaryTitle" />}
    figure={data.summaryFig.childImageSharp.gatsbyImageData}
    figureStyle={{ marginTop: -30, marginRight: -102 }}
    desc={<Trans i18nKey="features:summaryDesc" />}
    barColor={barBlue}
    demoData={[
      {
        icon: data.summaryDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:summaryDemo1Title" />,
        desc: <Trans i18nKey="features:summaryDemo1Desc" />,
      },
      {
        icon: data.summaryDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:summaryDemo2Title" />,
        desc: <Trans i18nKey="features:summaryDemo2Desc" />,
      },
    ]}
  />
);

const FeatureViewPastQuantity = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureViewPastQuantity}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:viewPastQuantityTitle" />}
    figure={data.viewPastQuantityFig.childImageSharp.gatsbyImageData}
    figureStyle={{ marginTop: -30, marginRight: -102 }}
    desc={<Trans i18nKey="features:viewPastQuantityDesc" />}
    barColor={barGray}
    demoData={[
      {
        icon: data.viewPastQuantityDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:viewPastQuantityDemo1Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo1Desc" />,
      },
      {
        icon: data.viewPastQuantityDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:viewPastQuantityDemo2Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo2Desc" />,
      },
    ]}
  />
);

const FeatureLocation = ({ data }) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:locationTitle" />}
    figure={data.locationFig.childImageSharp.gatsbyImageData}
    figureStyle={{ marginTop: -30, marginRight: -102 }}
    desc={<Trans i18nKey="features:locationDesc" />}
    barColor={barOrange}
    demoData={[
      {
        icon: data.locationDemo1.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:locationDemo1Title" />,
        desc: <Trans i18nKey="features:locationDemo1Desc" />,
      },
      {
        icon: data.locationDemo2.childImageSharp.gatsbyImageData,
        title: <Trans i18nKey="features:locationDemo2Title" />,
        desc: <Trans i18nKey="features:locationDemo2Desc" />,
      },
    ]}
  />
);

const DesktopFeatures = ({ data, t }) => (
  <DesktopLayout
    isFloatMenu={false}
    closingEmoji={data.dinosaur}
    closingMsg={<Trans i18nKey="features:closingMsg" />}
  >
    <Top t={t} />

    <FeatureLowstock data={data} />
    <FeatureBarcodelabel data={data} />
    <FeatureSummary data={data} />
    <FeatureViewPastQuantity data={data} />
    <FeatureLocation data={data} />
  </DesktopLayout>
);

export default DesktopFeatures;
