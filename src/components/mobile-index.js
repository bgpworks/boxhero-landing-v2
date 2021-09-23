/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Dot,
} from "pure-react-carousel";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  ContainerCenter,
  Padding,
  WithCurrentSlide,
  GradientBG,
  AppDownloadLink,
} from "./common";
import * as constants from "./constants";
// css
import * as styles from "./mobile-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgAddItem from "../images/additem.svg";
import svgCounting from "../images/counting.svg";
import svgDashboard from "../images/dashboard.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";
import svgSmallRight from "../images/smallright.svg";

const Top = ({ data, t }) => (
  <GradientBG
    className={styles.topContainer}
    colorSet={["#8122ff", "#854afe", "#4260ef", "#00b0f8"]}
    backgroundColor="#6159F5"
  >
    <MobileBaseContainer className={styles.topContentContainer}>
      <img
        className={styles.topIcon}
        src={svgVolt}
        alt={t("index:topIconAlt")}
      />
      <Padding y={10} />
      <h2 className={styles.topLeftTitle}>
        <Trans i18nKey="index:topTitleMobile" />
      </h2>
      <Padding y={20} />
      <p className={styles.topLeftDescription}>
        <Trans i18nKey="index:topDescMobile" />
      </p>
      <Padding y={50} />
      <div className={styles.topImageContainer}>
        <GatsbyImage
          image={data.mobileHomeTopRight.childImageSharp.gatsbyImageData}
          alt={t("index:topIconAlt")}
        />
      </div>
    </MobileBaseContainer>
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
  <div className={isDarkBg ? styles.darkBg : ""}>
    <ContainerCenter className={styles.keyFeatureContentContainer}>
      <img
        className={styles.keyFeatureIcon}
        src={icon}
        alt={iconAlt}
      />
      <Padding y={10} />
      <div className={styles.keyFeatureTitle}>{title}</div>
      <Padding y={20} />
      <div className={styles.keyFeatureDescription}>{desc}</div>
      <Padding y={20} />
      <div className={styles.keyFeatureSubTitle}>{subTitle}</div>
      <div className={styles.keyFeatureSubDesc}>{subDesc}</div>
      <Padding y={20} />
      <div className={styles.keyFeatureDetail}>
        <Link
          className={styles.keyFeatureDetailLinkContainer}
          to={detailUrl}
        >
          {linkDetail}
          <img
            src={svgSmallRightBlue}
            className={styles.rightArrow}
            alt={linkDetail}
          />
        </Link>
      </div>
      <Padding y={30} />
      <div>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
      </div>
    </ContainerCenter>
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
    <Padding y={50} />
    <div className={styles.teamPlayTitle}>{t("index:teamPlayTitle")}</div>
    <Padding y={20} />
    <MobileBaseContainer className={styles.teamPlayDesc}>
      <Trans i18nKey="index:teamPlayDescMobile" />
    </MobileBaseContainer>
    <Padding y={29} />
    <div className={styles.teamImageFlex}>
      <GatsbyImage
        image={data.mobileTeamPlay.childImageSharp.gatsbyImageData}
      />
    </div>
  </GradientBG>
);

const CustomerCardWrapper = ({ img, children }) => (
  <div className={styles.customerButton}>
    <div className={styles.customerButtonBackground}>
      <GatsbyImage image={img} />
    </div>
    {children}
  </div>
);

const Customers = ({ data, t, language }) => {
  const customerData = [
    {
      title: t("index:customerData1Title"),
      img: data.mobileCustomerMart.childImageSharp.gatsbyImageData,
      link: t("index:customerData1Link"),
    },
    // 영문 문서가 없어서 한글에서만 추가.
    language === "ko"
      ? {
        title: t("index:customerData2Title"),
        img: data.mobileCustomerFasion.childImageSharp.gatsbyImageData,
        link: t("index:customerData2Link"),
      }
      : null,
    {
      title: t("index:customerData3Title"),
      img: data.mobileCustomerCosmetics.childImageSharp.gatsbyImageData,
      link: t("index:customerData3Link"),
    },
    {
      title: t("index:customerData4Title"),
      img: data.mobileCustomerCafe.childImageSharp.gatsbyImageData,
      link: t("index:customerData4Link"),
    },
    {
      title: t("index:customerData5Title"),
      img: data.mobileCustomerPharmacy.childImageSharp.gatsbyImageData,
      link: t("index:customerData5Link"),
    },
    {
      title: t("index:customerData6Title"),
      img: data.mobileCustomerHandmade.childImageSharp.gatsbyImageData,
      link: t("index:customerData6Link"),
    },
    {
      title: t("index:customerData7Title"),
      img: data.mobileCustomerTextbook.childImageSharp.gatsbyImageData,
      link: t("index:customerData7Link"),
    },
    {
      title: t("index:customerData8Title"),
      img: data.mobileCustomerLocation.childImageSharp.gatsbyImageData,
      link: t("index:customerData8Link"),
    },
  ].filter((item) => item);

  return (
    <div className={styles.customersContainer}>
      <Padding y={50} />
      <div className={styles.customersTitle}>
        <Trans i18nKey="index:customerTitle" />
      </div>
      <Padding y={30} />
      <Link
        to="/features/"
        title={t("index:customerDetailLink")}
      >
        <button
          type="button"
          className={styles.customersDetailButton}
        >
          {t("index:customerDetailLink")}
          <Padding x={5} />
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
          <CustomerCardWrapper
            key={index}
            img={customer.img}
          >
            <a
              className={styles.customerButtonContent}
              rel="noopener"
              target="_blank"
              href={customer.link}
            >
              <span className={styles.customButtonContentNumber}>
                {(`0${index + 1}`).slice(-2)}
              </span>
              <span className={styles.customButtonContentTitle}>
                {customer.title}
              </span>
              <span className={styles.customButtonContentPadding} />
              <span className={styles.customButtonContentLink}>
                {t("index:customerDataDetailLink")}
              </span>
            </a>
          </CustomerCardWrapper>
        ))}
        <CustomerCardWrapper
          img={data.mobileCustomerETC.childImageSharp.gatsbyImageData}
        >
          <AppDownloadLink
            className={styles.customerButtonContent}
            rel="noopener"
            target="_blank"
          >
            <span className={styles.customButtonContentNumber}>
              {t("index:customerOtherIndexLabel")}
            </span>
            <span className={styles.customButtonContentTitle}>
              {t("index:customerOtherTitle")}
            </span>
            <span className={styles.customButtonContentPadding} />
            <span className={styles.customButtonContentLink}>{"GO! >"}</span>
          </AppDownloadLink>
        </CustomerCardWrapper>
        <Padding x={300} />
      </ScrollContainer>
    </div>
  );
};

function genFeatureData(data, t) {
  return [
    {
      title: t("index:featureSafetyStock"),
      link: `/features/#${constants.idFeatureLowstock}`,
      img: data.mobileFeatureLowstock.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featurePrintLabel"),
      link: `/features/#${constants.idFeatureBarcodelabel}`,
      img: data.mobileFeatureBarcodeLabel.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureTransactionStats"),
      link: `/features/#${constants.idFeatureSummary}`,
      img: data.mobileFeatureSummary.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureViewPastQuantity"),
      link: `/features/#${constants.idFeatureViewPastQuantity}`,
      img: data.mobileFeatureViewPastQuantity.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureLocationManagement"),
      link: `/features/#${constants.idFeatureLocation}`,
      img: data.mobileFeatureLocation.childImageSharp.gatsbyImageData,
    },
  ];
}

function renderDots(
  allData,
  setOffsetToSelected,
  setSelectedWidth,
  { currentSlide, totalSlides, visibleSlides },
) {
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
        onClick={(evt) => {
          const dom = evt.target;
          const left = dom.offsetLeft + dom.clientWidth / 2;
          setOffsetToSelected(-left);
          setSelectedWidth(dom.clientWidth + 1);
        }}
      >
        {allData[slide].title}
      </Dot>,
    );
  }
  return dots;
}

// div.carousel__dot-group mobile-index-module--slideDetailDotGroup--15TiY 의 margin-left
const DEFAULT_OFFSET_TO_SELECTED = {
  ko: -46,
  en: -60,
  es: -71.5,
  id: -69.5,
};

// div.mobile-index-module--slideDetailDotBackground--13c-D
const DEFAULT_SELECT_WIDTH = {
  ko: 93,
  en: 121,
  es: 144,
  id: 140,
};

const FeatureSelector = ({
  language, featureData,
}) => {
  // HACK: dom의 offset을 읽어와서 left, width css 조정해서 설정함.
  const [offsetToSelected, setOffsetToSelected] = React.useState(
    DEFAULT_OFFSET_TO_SELECTED[language] || -71.5,
  );
  const [selectedWidth, setSelectedWidth] = React.useState(
    DEFAULT_SELECT_WIDTH[language] || 144,
  );

  return (
    <WithCurrentSlide>
      {() => (
        <div className={styles.slideDetailDotGroupContainer}>
          <div
            key="background"
            className={styles.slideDetailDotBackground}
            style={{ minWidth: selectedWidth }}
          >
            0
          </div>
          <DotGroup
            className={styles.slideDetailDotGroup}
            style={{ marginLeft: offsetToSelected }}
            renderDots={(props) => renderDots(
              featureData,
              setOffsetToSelected,
              setSelectedWidth,
              props,
            )}
          />
        </div>
      )}
    </WithCurrentSlide>
  );
};

const Features = ({ data, t, language }) => {
  const featureData = genFeatureData(data, t);
  return (
    <CarouselProvider
      className={styles.featuresContainer}
      naturalSlideWidth={280}
      naturalSlideHeight={204}
      touchEnabled={false}
      dragEnabled={false}
      totalSlides={featureData.length}
    >
      <div className={styles.featuresTitle}>
        <Trans i18nKey="index:featuresTitleMobile" />
      </div>
      <Padding y={32} />

      <FeatureSelector
        data={data}
        t={t}
        language={language}
        featureData={featureData}
      />

      <Padding y={40} />

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

      <Padding y={30} />

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
  );
};

const StartNow = ({ data, t }) => (
  <ContainerCenter className={styles.startNowContainer}>
    <div className={styles.px20}>
      <div className={styles.startNowTitle}>
        <Trans i18nKey="index:startNowTitle" />
      </div>
      <Padding y={30} />
      <GatsbyImage
        image={data.mobileHomeStartNow.childImageSharp.gatsbyImageData}
        style={{ margin: "0 auto" }}
      />
      <Padding y={30} />
      <div className={styles.startNowDescription}>
        <Trans i18nKey="index:startNowDescription" />
      </div>
      <Padding y={30} />
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
  </ContainerCenter>
);

const MobileIndex = ({ data, language, t }) => (
  <MobileLayout
    isFloatMenu
    closingEmoji={data.mobileCoffee}
    closingMsg={<Trans i18nKey="index:closingMsgMobile" />}
  >
    <Top
      data={data}
      t={t}
    />

    <KeyFeature
      icon={svgAddItem}
      iconAlt={t("index:keyFeature1IconAlt")}
      title={<Trans i18nKey="index:keyFeature1Title" />}
      desc={<Trans i18nKey="index:keyFeature1DescMobile" />}
      subTitle={<Trans i18nKey="index:keyFeature1SubTitleMobile" />}
      subDesc={<Trans i18nKey="index:keyFeature1SubDescMobile" />}
      detailUrl={`/about/#${constants.idAboutFeatureAddItem}`}
      image={data.mobileFeature1}
      linkDetail={t("index:keyFeatureLinkDetail")}
    />

    <KeyFeature
      isDarkBg
      icon={svgCounting}
      iconAlt={t("index:keyFeature2IconAlt")}
      title={<Trans i18nKey="index:keyFeature2TitleMobile" />}
      desc={<Trans i18nKey="index:keyFeature2DescMobile" />}
      subTitle={t("index:keyFeature2SubTitle")}
      subDesc={<Trans i18nKey="index:keyFeature2SubDescMobile" />}
      detailUrl={`/about/#${constants.idAboutFeatureTx}`}
      image={data.mobileFeature2}
      linkDetail={t("index:keyFeatureLinkDetail")}
    />

    <KeyFeature
      icon={svgDashboard}
      iconAlt={t("index:keyFeature3IconAlt")}
      title={<Trans i18nKey="index:keyFeature3Title" />}
      desc={<Trans i18nKey="index:keyFeature3Desc" />}
      subTitle={t("index:keyFeature3SubTitle")}
      subDesc={<Trans i18nKey="index:keyFeature3SubDescMobile" />}
      detailUrl={`/about/#${constants.idAboutFeatureStatus}`}
      image={data.mobileFeature3}
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
      language={language}
    />

    <StartNow
      data={data}
      t={t}
    />
  </MobileLayout>
);

export default MobileIndex;
