import React from "react";
import Img from "gatsby-image";
import { Link, Trans } from '@jbseo/gatsby-plugin-react-i18next';
import scrollTo from 'gatsby-plugin-smoothscroll';
// js
import DesktopLayout from "../components/desktop-layout";
import { Container1024, Padding, SimpleTop, ExternalLinkWithQuery } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./desktop-features.module.css";
// img
import iconMenuExpiry from "../images/features-menu-expiry.svg";
import iconMenuEmpty from "../images/features-menu-empty.svg";
import iconMenuCustomization from "../images/features-menu-customization.svg";
import iconMenuSummary from "../images/features-menu-summary.svg";
import iconMenuStatus from "../images/features-menu-status.svg";
import iconMenuLocationmode from "../images/features-menu-locationmode.svg";
// page transition
import { TransitionUp, TransitionImage, TransitionLeft } from "../transition"

const { bgOrange, bgGreen, bgBlue, barOrange, barGreen, barBlue } = styles;

const MenuItem = ({to, icon, label, title}) => (
  <TransitionUp
    item={
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
        <Padding y={13} />
        <div className={styles.menuItemLabel}>
          {label}
        </div>
      </Link>
    }
  />
);

const Menu = ({t}) => (
  <Container1024 className={styles.menuContainer}>
    <MenuItem
      to={`#${constants.idFeatureExpiry}`}
      icon={iconMenuExpiry}
      label={<Trans i18nKey="features:menuExpiry"/>}
      title={t("features:menuExpiryLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureLowstock}`}
      icon={iconMenuEmpty}
      label={<Trans i18nKey="features:menuLowstock"/>}
      title={t("features:menuLowstockLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureBarcodelabel}`}
      icon={iconMenuCustomization}
      label={<Trans i18nKey="features:menuBarcodelabel"/>}
      title={t("features:menuBarcodelabelLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureSummary}`}
      icon={iconMenuSummary}
      label={<Trans i18nKey="features:menuSummary"/>}
      title={t("features:menuSummaryLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureStatus}`}
      icon={iconMenuStatus}
      label={<Trans i18nKey="features:menuStatus"/>}
      title={t("features:menuStatusLinkTitle")}
    />
    <MenuItem
      to={`#${constants.idFeatureLocation}`}
      icon={iconMenuLocationmode}
      label={<Trans i18nKey="features:menuLocation"/>}
      title={t("features:menuLocationLinkTitle")}
    />
  </Container1024>
);

const DemoTemplate = ({barColor, icon, title, desc}) => (
  <div
    className={[styles.demoTemplate, barColor].join(" ")}
  >
    <div>
      <Img
        fixed={icon}
        className={styles.demoLogo}
      />
      <span className={styles.demoTitle}>
        - {title} -
      </span>
    </div>
    <Padding y={20} />
    <div className={styles.demoDesc}>
      {desc}
    </div>
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
            <TransitionUp
              item={
                <div
                  className={styles.featureTemplateTitle}
                >
                    {props.title}
                  </div>
              }
            />
            <Padding y={35} />
            <TransitionUp
              item={
                <div
                  className={styles.featureTemplateDesc}
                >
                    {props.desc}
                  </div>
              }
            />
            <Padding y={30} />
            <ExternalLinkWithQuery
              href={constants.urlStart}
            >
              <TransitionUp
                item={
                  <button className={styles.featureTemplateStartNow}>
                    <Trans i18nKey="features:startNowButton" />
                  </button>
                }
              />
            </ExternalLinkWithQuery>
          </div>
          <div
            className={styles.featureTemplateFigureContainer}
          >
            <TransitionImage
              item={
                <Img
                  fixed={props.figure}
                  style={props.figureStyle}
                />
              }
            />
          </div>
        </div>
        <Padding y={150} />
        <div
          className={styles.halfContainer}
        >
          {props.demoData.slice(0, 2).map((data, index) => (
            <TransitionLeft
              key={index}
              delay={150 * index}
              item={
                <DemoTemplate
                  key={index}
                  barColor={props.barColor}
                  icon={data.icon}
                  title={data.title}
                  desc={data.desc}
                />
              }
            />
          ))}
        </div>
      </Container1024>
    </div>
  );
}

const FeatureExpiry = (props) => (
  <FeatureTemplate
    id={constants.idFeatureExpiry}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:expiryTitle"/>}
    figure={props.data.expiryFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:expiryDesc" />}
    barColor={barOrange}
    demoData={[
      {
        icon: props.data.expiryDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:expiryDemo1Title"/>),
        desc: (<Trans i18nKey="features:expiryDemo1Desc" />),
      },
      {
        icon: props.data.expiryDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:expiryDemo2Title"/>),
        desc: (<Trans i18nKey="features:expiryDemo2Desc" />),
      },
    ]}
  />
);

const FeatureLowstock = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:lowstockTitle"/>}
    figure={props.data.lowstockFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:lowstockDesc" />}
    barColor={barGreen}
    demoData={[
      {
        icon: props.data.lowstockDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:lowstockDemo1Title"/>),
        desc: (<Trans i18nKey="features:lowstockDemo1Desc" />),
      },
      {
        icon: props.data.lowstockDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:lowstockDemo2Title"/>),
        desc: (<Trans i18nKey="features:lowstockDemo2Desc" />),
      },
    ]}
  />
);

const FeatureBarcodelabel = (props) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:barcodelabelTitle" />}
    figure={props.data.barcodelabelFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:barcodelabelDesc" />}
    barColor={barBlue}
    demoData={[
      {
        icon: props.data.barcodelabelDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:barcodelabelDemo1Title"/>),
        desc: (<Trans i18nKey="features:barcodelabelDemo1Desc" />),
      },
      {
        icon: props.data.barcodelabelDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:barcodelabelDemo2Title"/>),
        desc: (<Trans i18nKey="features:barcodelabelDemo2Desc" />),
      },
    ]}
  />
);

const FeatureSummary = (props) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:summaryTitle"/>}
    figure={props.data.summaryFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:summaryDesc"/>}
    barColor={barOrange}
    demoData={[
      {
        icon: props.data.summaryDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:summaryDemo1Title"/>),
        desc: (<Trans i18nKey="features:summaryDemo1Desc" />),
      },
      {
        icon: props.data.summaryDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:summaryDemo2Title"/>),
        desc: (<Trans i18nKey="features:summaryDemo2Desc" />),
      },
    ]}
  />
);

const FeatureStatus = (props) => (
  <FeatureTemplate
    id={constants.idFeatureStatus}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:statusTitle"/>}
    figure={props.data.statusFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:statusDesc"/>}
    barColor={barGreen}
    demoData={[
      {
        icon: props.data.statusDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:statusDemo1Title"/>),
        desc: (<Trans i18nKey="features:statusDemo1Desc" />),
      },
      {
        icon: props.data.statusDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:statusDemo2Title"/>),
        desc: (<Trans i18nKey="features:statusDemo2Desc" />),
      },
    ]}
  />
);

const FeatureLocation = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:locationTitle"/>}
    figure={props.data.locationFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:locationDesc"/>}
    barColor={barBlue}
    demoData={[
      {
        icon: props.data.locationDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:locationDemo1Title"/>),
        desc: (<Trans i18nKey="features:locationDemo1Desc" />),
      },
      {
        icon: props.data.locationDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:locationDemo2Title"/>),
        desc: (<Trans i18nKey="features:locationDemo2Desc" />),
      },
    ]}
  />
);

export const DesktopFeatures = ({data, language, t}) => (
  <DesktopLayout
    isFloatMenu={false}
    curMenu="features"
    closingEmoji={data.dinosaur}
    closingMsg={t("features:closingMsg")}
  >
    <TransitionUp
      is_desktop={true}
      item={
        <SimpleTop
          title={t("features:topTitle")}
          desc={<Trans i18nKey="features:topDesc" />}
        />
      }
    />

    <Padding y={62}/>

    <Menu t={t} />

    <Padding y={100}/>

    <FeatureExpiry data={data} />
    <FeatureLowstock data={data} />
    <FeatureBarcodelabel data={data} />
    <FeatureSummary data={data} />
    <FeatureStatus data={data} />
    <FeatureLocation data={data} />
  </DesktopLayout>
);

export default DesktopFeatures;
