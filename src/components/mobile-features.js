import React from "react";
import Img from "gatsby-image";
import { Trans } from '@jbseo/gatsby-plugin-react-i18next';
// js
import MobileLayout from "../components/mobile-layout"
import { Container320, Padding, MobileSimpleTop } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./mobile-features.module.css";
// page transition
import { TransitionUp, TransitionImage } from "../transition"

const { bgOrange, bgGreen, bgBlue } = styles;

const DemoTemplate = ({icon, title, desc, index}) => (
  <div
    className={`${styles.demoTemplate}`}
    style={{ marginTop: `${index * 50}px` }}
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
      <Container320>
        <TransitionUp
          item={
            <div className={`${styles.px20} ${styles.featureTemplateTitle}`}>
              {props.title}
            </div>
          }
        />

        <Padding y={20}/>

        <TransitionUp
          item={
            <div className={`${styles.px20} ${styles.featureTemplateDesc}`}>
              {props.desc}
            </div>
          }
        />

        <Padding y={30}/>

        <div className={styles.featureTemplateFigureContainer}>
          <TransitionImage
            item={
              <Img fixed={props.figure} />
            } />
        </div>

        <Padding y={31}/>

        <div className={styles.px20}>
          {props.demoData.slice(0, 2).map((data, index) => (
            <TransitionUp
              delay={150 * index}
              key={index}
              item={
                <DemoTemplate
                  index={index}
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  desc={data.desc}
                />
              }
            />
          ))}
        </div>
      </Container320>
    </div>
  );
}

const FeatureExpiry = (props) => (
  <FeatureTemplate
    id={constants.idFeatureExpiry}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:expiryTitle"/>}
    figure={props.data.mobileExpiryFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:expiryDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileExpiryDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:expiryDemo1Title"/>),
        desc: (<Trans i18nKey="features:expiryDemo1DescMobile" />),
      },
      {
        icon: props.data.mobileExpiryDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:expiryDemo2Title"/>),
        desc: (<Trans i18nKey="features:expiryDemo2DescMobile" />),
      },
    ]}
  />
);

const FeatureLowstock = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:lowstockTitle"/>}
    figure={props.data.mobileLowstockFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:lowstockDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileLowstockDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:lowstockDemo1Title"/>),
        desc: (<Trans i18nKey="features:lowstockDemo1DescMobile" />),
      },
      {
        icon: props.data.mobileLowstockDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:lowstockDemo2Title"/>),
        desc: (<Trans i18nKey="features:lowstockDemo2DescMobile" />),
      },
    ]}
  />
);

const FeatureBarcodelabel = (props) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:barcodelabelTitleMobile" />}
    figure={props.data.mobileBarcodelabelFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:barcodelabelDescMobile" />}
    demoData={[
      {
        icon: props.data.mobileBarcodelabelDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:barcodelabelDemo1Title"/>),
        desc: (<Trans i18nKey="features:barcodelabelDemo1DescMobile" />),
      },
      {
        icon: props.data.mobileBarcodelabelDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:barcodelabelDemo2Title"/>),
        desc: (<Trans i18nKey="features:barcodelabelDemo2DescMobile" />),
      },
    ]}
  />
);

const FeatureSummary = (props) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgOrange}
    title={<Trans i18nKey="features:summaryTitleMobile"/>}
    figure={props.data.mobileSummaryFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:summaryDescMobile"/>}
    demoData={[
      {
        icon: props.data.mobileSummaryDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:summaryDemo1Title"/>),
        desc: (<Trans i18nKey="features:summaryDemo1DescMobile" />),
      },
      {
        icon: props.data.mobileSummaryDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:summaryDemo2Title"/>),
        desc: (<Trans i18nKey="features:summaryDemo2DescMobile" />),
      },
    ]}
  />
);

const FeatureStatus = (props) => (
  <FeatureTemplate
    id={constants.idFeatureStatus}
    bgColor={bgGreen}
    title={<Trans i18nKey="features:statusTitle"/>}
    figure={props.data.mobileStatusFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:statusDescMobile"/>}
    demoData={[
      {
        icon: props.data.mobileStatusDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:statusDemo1Title"/>),
        desc: (<Trans i18nKey="features:statusDemo1DescMobile" />),
      },
      {
        icon: props.data.mobileStatusDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:statusDemo2Title"/>),
        desc: (<Trans i18nKey="features:statusDemo2DescMobile" />),
      },
    ]}
  />
);

const FeatureLocation = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgBlue}
    title={<Trans i18nKey="features:locationTitleMobile"/>}
    figure={props.data.mobileLocationFig.childImageSharp.fixed}
    desc={<Trans i18nKey="features:locationDescMobile"/>}
    demoData={[
      {
        icon: props.data.mobileLocationDemo1.childImageSharp.fixed,
        title: (<Trans i18nKey="features:locationDemo1Title"/>),
        desc: (<Trans i18nKey="features:locationDemo1DescMobile" />),
      },
      {
        icon: props.data.mobileLocationDemo2.childImageSharp.fixed,
        title: (<Trans i18nKey="features:locationDemo2Title"/>),
        desc: (<Trans i18nKey="features:locationDemo2DescMobile" />),
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
      <TransitionUp
      is_mobile= {true}
        item={
          <MobileSimpleTop
            title={t("features:topTitle")}
            desc={<Trans i18nKey="features:topDescMobile" />}
          />
        }
      />
    </Container320>

    <Padding y={50}/>

    <FeatureExpiry data={data} />
    <FeatureLowstock data={data} />
    <FeatureBarcodelabel data={data} />
    <FeatureSummary data={data} />
    <FeatureStatus data={data} />
    <FeatureLocation data={data} />

  </MobileLayout>
);

export default MobileFeatures;
