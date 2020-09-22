import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container1024, Padding, SimpleTop } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./features.module.css";
// img
import iconMenuExpiry from "../images/features-menu-expiry.svg";
import iconMenuEmpty from "../images/features-menu-empty.svg";
import iconMenuCustomization from "../images/features-menu-customization.svg";
import iconMenuSummary from "../images/features-menu-summary.svg";
import iconMenuStatus from "../images/features-menu-status.svg";
import iconMenuLocationmode from "../images/features-menu-locationmode.svg";

const bgOrange = "rgba(245, 166, 35, 0.2)";
const barOrange = "#f5a623";
const bgGreen = "rgba(74, 208, 81, 0.2)";
const barGreen = "#3cb9a0";
const bgBlue= "#f7f9fc";
const barBlue = "#50a4fa";

const MenuItem = ({to, icon, label, title}) => (
  <Link
    to={`/features/${to}`}
    title={title}
    className={styles.menuItem}>
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
    className={styles.demoTemplate}
    style={{
      borderLeftColor: barColor,
    }}
  >
    <div>
      <Img fixed={icon}/>
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
      className={styles.featureTemplate}
      style={{backgroundColor: props.bgColor}}
    >
      <Container1024>
        <div className={styles.halfContainer}>
          <div>
            <div
              className={styles.featureTemplateTitle}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-easing="easeOutQuint"
            >
              {props.title}
            </div>
            <Padding y={35}/>
            <div
              className={styles.featureTemplateDesc}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="easeOutQuint"
            >
              {props.desc}
            </div>
            <Padding y={30}/>
            <a
              href={constants.urlStart}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="easeOutQuint">
              <button className={styles.featureTemplateStartNow}>
                <Trans i18nKey="features:startNowButton" />
              </button>
            </a>
          </div>
          <div
            className={styles.featureTemplateFigureContainer}
            data-sal="slide-up-10"
            data-sal-duration="500"
            data-sal-easing="easeOutQuint"
          >
            <Img
              fixed={props.figure}
              style={props.figureStyle}
            />
          </div>
        </div>
        <Padding y={150}/>
        <div
          className={styles.halfContainer}
          data-sal="slide-up-10"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="easeOutQuint">
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
    title={<Trans i18nKey="features:barcodelabelTitle"/>}
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

export const FeaturesPage = ({data}) => {
  const { language, t } = useI18next();
  return (
    <Layout
      isFloatMenu={false}
      curMenu="features"
      closingEmoji={data.dinosaur}
      closingMsg={t("features:closingMsg")}
    >
      <SEO
        lang={language}
        title={t("features:pageTitle")}
      />

      <SimpleTop
        title={t("features:topTitle")}
        desc={<Trans i18nKey="features:topDesc" />}
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
    </Layout>
  );
};

export default FeaturesPage;

export const query = graphql`
  query {
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    topLogo: file(relativePath: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 697) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    dinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryFig: file(relativePath: { eq: "feature-expiry-fig.png" }) {
      childImageSharp {
        fixed(width: 378) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryDemo1: file(relativePath: { eq: "feature-expiry-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryDemo2: file(relativePath: { eq: "feature-expiry-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockFig: file(relativePath: { eq: "feature-lowstock-fig.png" }) {
      childImageSharp {
        fixed(width: 378) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockDemo1: file(relativePath: { eq: "feature-lowstock-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockDemo2: file(relativePath: { eq: "feature-lowstock-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelFig: file(relativePath: { eq: "feature-barcodelabel-fig.png" }) {
      childImageSharp {
        fixed(width: 470) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelDemo1: file(relativePath: { eq: "feature-barcodelabel-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelDemo2: file(relativePath: { eq: "feature-barcodelabel-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryFig: file(relativePath: { eq: "feature-summary-fig.png" }) {
      childImageSharp {
        fixed(width: 575) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryDemo1: file(relativePath: { eq: "feature-summary-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryDemo2: file(relativePath: { eq: "feature-summary-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusFig: file(relativePath: { eq: "feature-status-fig.png" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusDemo1: file(relativePath: { eq: "feature-status-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusDemo2: file(relativePath: { eq: "feature-status-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationFig: file(relativePath: { eq: "feature-location-fig.png" }) {
      childImageSharp {
        fixed(width: 518) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationDemo1: file(relativePath: { eq: "feature-location-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationDemo2: file(relativePath: { eq: "feature-location-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
