/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link, Trans } from "gatsby-plugin-react-i18next";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  WithCurrentSlide,
  ExternalLinkWithQuery,
  GradientBG,
} from "./common";
import * as constants from "./constants";
// css
import * as styles from "./desktop-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgAddItem from "../images/additem.svg";
import svgCounting from "../images/counting.svg";
import svgDashboard from "../images/dashboard.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";
import svgSmallRight from "../images/smallright.svg";
import svgSwipeLeft from "../images/swipeleft.svg";
import svgSwipeRight from "../images/swiperight.svg";

const Top = ({ data, t }) => (
  <GradientBG
    className={styles.topContainer}
    colorSet={["#8122ff", "#854afe", "#4260ef", "#00b0f8"]}
    backgroundColor="#4260ef"
  >
    <DesktopBaseContainer className={styles.topContentContainer}>
      <div className={styles.topLeftContainer}>
        <img
          src={svgVolt}
          alt={t("index:topIconAlt")}
        />
        <Padding y={10} />
        <div className={styles.topLeftTitle}>
          <Trans i18nKey="index:topTitle" />
        </div>
        <Padding y={30} />
        <div className={styles.topLeftDescription}>
          <Trans i18nKey="index:topDesc" />
        </div>
        <Padding y={30} />
        <ExternalLinkWithQuery href={constants.urlStart}>
          <button
            type="button"
            className={styles.startNowButton}
          >
            {t("index:topStartNowButton")}
          </button>
        </ExternalLinkWithQuery>
        <Padding y={161} />
      </div>
      <div className={styles.topRightContainer}>
        <GatsbyImage image={data.homeTopRight.childImageSharp.gatsbyImageData} />
      </div>
    </DesktopBaseContainer>
  </GradientBG>
);

const KeyFeature = ({
  isDarkBg,
  icon,
  iconAlt,
  title,
  desc,
  subTitle,
  subDesc,
  detailUrl,
  image,
  linkDetail,
}) => (
  <div
    className={`${styles.keyFeatureContainer} ${isDarkBg ? styles.darkBg : ""}`}
  >
    <DesktopBaseContainer className={styles.keyFeatureContentContainer}>
      <div className={styles.keyFeatureLeftContainer}>
        <img
          src={icon}
          alt={iconAlt}
        />
        <Padding y={20} />
        <div className={styles.keyFeatureLeftTitle}>{title}</div>
        <Padding y={35} />
        <div className={styles.keyFeatureLeftDescription}>{desc}</div>
        <Padding y={40} />
        <div className={styles.keyFeatureLeftSubTitle}>{subTitle}</div>
        <div className={styles.keyFeatureLeftSubDesc}>{subDesc}</div>
        <Padding y={20} />
        <div className={styles.keyFeatureDetail}>
          <Link to={detailUrl}>
            {linkDetail}
            <img
              src={svgSmallRightBlue}
              className={styles.rightArrow}
              alt={linkDetail}
            />
          </Link>
        </div>
      </div>
      <div className={styles.keyFeatureRightContainer}>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
      </div>
    </DesktopBaseContainer>
  </div>
);

KeyFeature.propTypes = {
  isDarkBg: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
  subDesc: PropTypes.node.isRequired,
  detailUrl: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

KeyFeature.defaultProps = {
  isDarkBg: false,
};

const TeamPlay = ({ data, t }) => (
  <GradientBG
    className={styles.teamPlayContainer}
    colorSet={["#7D24FF", "#276EFE", "#7F50FE", "#0C92FE"]}
    backgroundColor="#6159F5"
  >
    <div className={styles.teamPlayTitle}>{t("index:teamPlayTitle")}</div>
    <Padding y={40} />
    <div className={styles.teamPlayDesc}>
      <Trans i18nKey="index:teamPlayDesc" />
    </div>
    <div className={styles.teamImageFlex}>
      <GatsbyImage image={data.teamPlay.childImageSharp.gatsbyImageData} />
    </div>
  </GradientBG>
);

const CustomerCard = ({
  img, indexLabel, title, linkLabel, link,
}) => (
  <div className={styles.customerButton}>
    <div className={styles.customerButtonBackground}>
      <GatsbyImage image={img} />
    </div>
    <div className={styles.customerButtonContent}>
      <span className={styles.customButtonContentNumber}>{indexLabel}</span>
      <span className={styles.customButtonContentTitle}>{title}</span>
      <span className={styles.customButtonContentPadding} />
      <a
        href={link}
        target="_blank"
        rel="noopener"
        className={styles.customButtonContentLink}
      >
        {linkLabel}
      </a>
    </div>
  </div>
);

const Customers = ({ data, t, language }) => {
  const customerData = [
    {
      title: t("index:customerData1Title"),
      img: data.customerMart.childImageSharp.gatsbyImageData,
      link: t("index:customerData1Link"),
    },
    // 영문 문서가 없어서 한글에서만 추가.
    language === "ko"
      ? {
        title: t("index:customerData2Title"),
        img: data.customerFasion.childImageSharp.gatsbyImageData,
        link: t("index:customerData2Link"),
      }
      : null,
    {
      title: t("index:customerData3Title"),
      img: data.customerCosmetics.childImageSharp.gatsbyImageData,
      link: t("index:customerData3Link"),
    },
    {
      title: t("index:customerData4Title"),
      img: data.customerCafe.childImageSharp.gatsbyImageData,
      link: t("index:customerData4Link"),
    },
    {
      title: t("index:customerData5Title"),
      img: data.customerPharmacy.childImageSharp.gatsbyImageData,
      link: t("index:customerData5Link"),
    },
    {
      title: t("index:customerData6Title"),
      img: data.customerHandmade.childImageSharp.gatsbyImageData,
      link: t("index:customerData6Link"),
    },
    {
      title: t("index:customerData7Title"),
      img: data.customerTextbook.childImageSharp.gatsbyImageData,
      link: t("index:customerData7Link"),
    },
    {
      title: t("index:customerData8Title"),
      img: data.customerLocation.childImageSharp.gatsbyImageData,
      link: t("index:customerData8Link"),
    },
  ].filter((item) => item);

  return (
    <div className={styles.customersContainer}>
      <Padding y={130} />
      <div className={styles.customersTitle}>
        <Trans i18nKey="index:customerTitle" />
      </div>
      <Padding y={40} />
      <Link
        to="/features/"
        title={t("index:customerDetailLink")}
      >
        <button
          type="button"
          className={styles.customersDetailButton}
        >
          {t("index:customerDetailLink")}
          <Padding x={10} />
          <img
            src={svgSmallRight}
            className={styles.rightArrow}
            alt={t("index:customerDataDetailLink")}
          />
        </button>
      </Link>
      <ScrollContainer
        className={styles.customersWrapper}
        vertical={false}
        horizontal
        hideScrollbars
      >
        {customerData.map((customer, index) => (
          <CustomerCard
            key={index}
            img={customer.img}
            indexLabel={(`0${index + 1}`).slice(-2)}
            title={customer.title}
            link={customer.link}
            linkLabel={t("index:customerDataDetailLink")}
          />
        ))}
        <CustomerCard
          img={data.customerETC.childImageSharp.gatsbyImageData}
          indexLabel={t("index:customerOtherIndexLabel")}
          title={t("index:customerOtherTitle")}
          link="https://web.boxhero-app.com/login"
          linkLabel="GO! >"
        />
        <Padding x={500} />
      </ScrollContainer>
    </div>
  );
};

function genFeatureData(data, t) {
  return [
    {
      title: t("index:featureSafetyStock"),
      link: `/features/#${constants.idFeatureLowstock}`,
      img: data.featureLowstock.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featurePrintLabel"),
      link: `/features/#${constants.idFeatureBarcodelabel}`,
      img: data.featureBarcodeLabel.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureTransactionStats"),
      link: `/features/#${constants.idFeatureSummary}`,
      img: data.featureSummary.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureViewPastQuantity"),
      link: `/features/#${constants.idFeatureViewPastQuantity}`,
      img: data.featureViewPastQuantity.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureLocationManagement"),
      link: `/features/#${constants.idFeatureLocation}`,
      img: data.featureLocation.childImageSharp.gatsbyImageData,
    },
  ];
}

function renderDots(allData, { currentSlide, totalSlides, visibleSlides }) {
  const dots = [];
  for (let i = 0; i < totalSlides; i += 1) {
    const multipleSelected = i >= currentSlide && i < currentSlide + visibleSlides;
    const selected = multipleSelected;
    const slide = i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i;
    dots.push(
      <Dot
        key={i}
        slide={slide}
        selected={selected}
        className={`${styles.slideDetailDot} ${
          selected ? styles.slideDetailDotSelected : ""
        }`}
      >
        {allData[slide].title}
      </Dot>,
    );
  }
  return dots;
}

const Features = ({ data, t }) => {
  const featureData = genFeatureData(data, t);
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresTitle}>
        <Trans i18nKey="index:featuresTitle" />
      </div>
      <Padding y={80} />

      <CarouselProvider
        naturalSlideWidth={495}
        naturalSlideHeight={360}
        totalSlides={featureData.length}
      >
        <DotGroup
          className={styles.slideDetailDotGroup}
          renderDots={(props) => renderDots(featureData, props)}
        />

        <Padding y={80} />

        <div className={styles.slideAndNavButtons}>
          <ButtonBack className={styles.slideNavButton}>
            <img
              src={svgSwipeLeft}
              alt={t("index:featuresNavBack")}
            />
          </ButtonBack>
          <Slider className={styles.sliderWrapper}>
            {featureData.map(({ img, title }, index) => (
              <Slide
                key={index}
                index={index}
              >
                <GatsbyImage
                  image={img}
                  alt={title}
                />
              </Slide>
            ))}
          </Slider>
          <ButtonNext className={styles.slideNavButton}>
            <img
              src={svgSwipeRight}
              alt={t("index:featuresNavNext")}
            />
          </ButtonNext>
        </div>

        <Padding y={40} />

        <div className={styles.slideDetailLinkContainer}>
          <WithCurrentSlide>
            {(currentSlide) => (
              <Link
                to={featureData[currentSlide].link}
                title={featureData[currentSlide].title}
                className={styles.slideDetailLink}
              >
                {t("index:featuresDetailLink")}
                <img
                  src={svgSmallRightBlue}
                  className={styles.rightArrow}
                  alt={t("index:featuresDetailLink")}
                />
              </Link>
            )}
          </WithCurrentSlide>
        </div>
      </CarouselProvider>
    </div>
  );
};

const StartNow = ({ data, t }) => (
  <div className={styles.startNowContainer}>
    <div className={styles.startNowTitle}>
      <Trans i18nKey="index:startNowTitle" />
    </div>
    <Padding y={60} />
    <GatsbyImage image={data.homeStartNow.childImageSharp.gatsbyImageData} />
    <Padding y={40} />
    <div className={styles.startNowDescription}>
      <Trans i18nKey="index:startNowDescription" />
    </div>
    <Padding y={20} />
    <Link
      to="/pricing/"
      className={styles.startNowDetailLink}
    >
      {t("index:startNowDetailLink")}
      <img
        src={svgSmallRightBlue}
        className={styles.rightArrow}
        alt={t("index:startNowDetailLink")}
      />
    </Link>
  </div>
);

const DesktopIndex = ({ data, language, t }) => (
  <DesktopLayout
    isFloatMenu
    closingEmoji={data.coffee}
    closingMsg={t("index:closingMsg")}
  >
    <Top
      data={data}
      t={t}
    />

    <KeyFeature
      icon={svgAddItem}
      iconAlt={t("index:keyFeature1IconAlt")}
      title={<Trans i18nKey="index:keyFeature1Title" />}
      desc={<Trans i18nKey="index:keyFeature1Desc" />}
      subTitle={<Trans i18nKey="index:keyFeature1SubTitle" />}
      subDesc={<Trans i18nKey="index:keyFeature1SubDesc" />}
      detailUrl={`/about/#${constants.idAboutFeatureAddItem}`}
      image={data.feature1}
      linkDetail={t("index:keyFeatureLinkDetail")}
    />

    <KeyFeature
      isDarkBg
      icon={svgCounting}
      iconAlt={t("index:keyFeature2IconAlt")}
      title={<Trans i18nKey="index:keyFeature2Title" />}
      desc={<Trans i18nKey="index:keyFeature2Desc" />}
      subTitle={t("index:keyFeature2SubTitle")}
      subDesc={<Trans i18nKey="index:keyFeature2SubDesc" />}
      detailUrl={`/about/#${constants.idAboutFeatureTx}`}
      image={data.feature2}
      linkDetail={t("index:keyFeatureLinkDetail")}
    />

    <KeyFeature
      icon={svgDashboard}
      iconAlt={t("index:keyFeature3IconAlt")}
      title={<Trans i18nKey="index:keyFeature3Title" />}
      desc={<Trans i18nKey="index:keyFeature3Desc" />}
      subTitle={t("index:keyFeature3SubTitle")}
      subDesc={<Trans i18nKey="index:keyFeature3SubDesc" />}
      detailUrl={`/about/#${constants.idAboutFeatureStatus}`}
      image={data.feature3}
      linkDetail={t("index:keyFeatureLinkDetail")}
    />

    <TeamPlay
      data={data}
      t={t}
    />

    <Customers
      data={data}
      t={t}
      language={language}
    />

    <Features
      data={data}
      t={t}
    />

    <StartNow
      data={data}
      t={t}
    />
  </DesktopLayout>
);

export default DesktopIndex;
