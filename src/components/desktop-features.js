import React from "react";
import Img from "gatsby-image";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import scrollTo from "gatsby-plugin-smoothscroll";
// js
import DesktopLayout from "../components/desktop-layout";
import {
  Container1024,
  Padding,
  SimpleTop,
  ExternalLinkWithQuery,
} from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./desktop-features.module.css";
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

const MenuItem = ({ to, icon, label, title }) => (
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
      <img src={icon} alt={label} />
    </div>
    <Padding y={13} />
    <div className={styles.menuItemLabel}>{label}</div>
  </Link>
);

const Menu = ({ t }) => (
  <Container1024 className={styles.menuContainer}>
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
  </Container1024>
);

const DemoTemplate = ({ barColor, icon, title, desc }) => (
  <div className={[styles.demoTemplate, barColor].join(" ")}>
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
      <Container1024>
        <div className={styles.featureTemplateDescFigContainer}>
          <div className={styles.featureTemplateTitleDescContainer}>
            <div
              className={styles.featureTemplateTitle}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-easing="easeOutQuint"
            >
              {props.title}
            </div>
            <Padding y={35} />
            <div
              className={styles.featureTemplateDesc}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="easeOutQuint"
            >
              {props.desc}
            </div>
            <Padding y={30} />
            <ExternalLinkWithQuery
              href={constants.urlStart}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="easeOutQuint"
            >
              <button className={styles.featureTemplateStartNow}>
                <Trans i18nKey="features:startNowButton" />
              </button>
            </ExternalLinkWithQuery>
          </div>
          <div
            className={styles.featureTemplateFigureContainer}
            data-sal="slide-up-10"
            data-sal-duration="500"
            data-sal-easing="easeOutQuint"
          >
            <Img fixed={props.figure} style={props.figureStyle} />
          </div>
        </div>
        <Padding y={150} />
        <div
          className={styles.halfContainer}
          data-sal="slide-up-10"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="easeOutQuint"
        >
          {props.demoData.slice(0, 2).map((data, index) => (
            <DemoTemplate
              key={index}
              barColor={props.barColor}
              icon={data.icon}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </Container1024>
    </div>
  );
}

const FeatureLowstock = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:lowstockTitle" />}
    figure={props.data.lowstockFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:lowstockDesc" />}
    barColor={barGreen}
    demoData={[
      {
        icon: props.data.lowstockDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:lowstockDemo1Title" />,
        desc: <Trans i18nKey="features:lowstockDemo1Desc" />,
      },
      {
        icon: props.data.lowstockDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:lowstockDemo2Title" />,
        desc: <Trans i18nKey="features:lowstockDemo2Desc" />,
      },
    ]}
  />
);

const FeatureBarcodelabel = (props) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:barcodelabelTitle" />}
    figure={props.data.barcodelabelFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:barcodelabelDesc" />}
    barColor={barGray}
    demoData={[
      {
        icon: props.data.barcodelabelDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:barcodelabelDemo1Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo1Desc" />,
      },
      {
        icon: props.data.barcodelabelDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:barcodelabelDemo2Title" />,
        desc: <Trans i18nKey="features:barcodelabelDemo2Desc" />,
      },
    ]}
  />
);

const FeatureSummary = (props) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:summaryTitle" />}
    figure={props.data.summaryFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:summaryDesc" />}
    barColor={barBlue}
    demoData={[
      {
        icon: props.data.summaryDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:summaryDemo1Title" />,
        desc: <Trans i18nKey="features:summaryDemo1Desc" />,
      },
      {
        icon: props.data.summaryDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:summaryDemo2Title" />,
        desc: <Trans i18nKey="features:summaryDemo2Desc" />,
      },
    ]}
  />
);

const FeatureViewPastQuantity = (props) => (
  <FeatureTemplate
    id={constants.idFeatureViewPastQuantity}
    bgColor={bgWhite}
    title={<Trans i18nKey="features:viewPastQuantityTitle" />}
    figure={props.data.viewPastQuantityFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:viewPastQuantityDesc" />}
    barColor={barGray}
    demoData={[
      {
        icon: props.data.viewPastQuantityDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:viewPastQuantityDemo1Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo1Desc" />,
      },
      {
        icon: props.data.viewPastQuantityDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:viewPastQuantityDemo2Title" />,
        desc: <Trans i18nKey="features:viewPastQuantityDemo2Desc" />,
      },
    ]}
  />
);

const FeatureLocation = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:locationTitle" />}
    figure={props.data.locationFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:locationDesc" />}
    barColor={barOrange}
    demoData={[
      {
        icon: props.data.locationDemo1.childImageSharp.fixed,
        title: <Trans i18nKey="features:locationDemo1Title" />,
        desc: <Trans i18nKey="features:locationDemo1Desc" />,
      },
      {
        icon: props.data.locationDemo2.childImageSharp.fixed,
        title: <Trans i18nKey="features:locationDemo2Title" />,
        desc: <Trans i18nKey="features:locationDemo2Desc" />,
      },
    ]}
  />
);

export const DesktopFeatures = ({ data, language, t }) => (
  <DesktopLayout
    isFloatMenu={false}
    curMenu="features"
    closingEmoji={data.dinosaur}
    closingMsg={<Trans i18nKey="features:closingMsg" />}
  >
    <SimpleTop title={t("features:topTitle")}>
      <Trans i18nKey="features:topDesc" />
    </SimpleTop>

    <Padding y={62} />

    <Menu t={t} />

    <Padding y={100} />

    <FeatureLowstock data={data} />
    <FeatureBarcodelabel data={data} />
    <FeatureSummary data={data} />
    <FeatureViewPastQuantity data={data} />
    <FeatureLocation data={data} />
  </DesktopLayout>
);

export default DesktopFeatures;
