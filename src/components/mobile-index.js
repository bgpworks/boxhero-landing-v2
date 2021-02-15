/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
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
import MobileLayout from "../components/mobile-layout";
import {
  Container320,
  ContainerCenter,
  Padding,
  WithCurrentSlide,
  GradientBG,
} from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./mobile-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgAddProduct from "../images/addproduct.svg";
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
    <Container320 className={styles.topContentContainer}>
      <Padding y={74} />
      <img
        className={styles.topIcon}
        src={svgVolt}
        alt={t("index:topIconAlt")}
      />
      <Padding y={10} />
      <div className={styles.topLeftTitle}>
        <Trans i18nKey="index:topTitle" />
      </div>
      <Padding y={20} />
      <div className={styles.topLeftDescription}>
        <Trans i18nKey="index:topDesc" />
      </div>
      <Padding y={30} />
      <div className={styles.topImageContainer}>
        <Img fixed={data.mobileHomeTopRight.childImageSharp.fixed} />
      </div>
    </Container320>
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
      <img className={styles.keyFeatureIcon} src={icon} alt={iconAlt} />
      <Padding y={10} />
      <div className={styles.keyFeatureTitle}>{title}</div>
      <Padding y={20} />
      <div className={styles.keyFeatureDescription}>{desc}</div>
      <Padding y={20} />
      <div className={styles.keyFeatureSubTitle}>{subTitle}</div>
      <div className={styles.keyFeatureSubDesc}>{subDesc}</div>
      <Padding y={20} />
      <div className={styles.keyFeatureDetail}>
        <Link className={styles.keyFeatureDetailLinkContainer} to={detailUrl}>
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
        <Img fixed={image.childImageSharp.fixed} />
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
    <Container320 className={styles.teamPlayDesc}>
      <Trans i18nKey="index:teamPlayDescMobile" />
    </Container320>
    <Padding y={29} />
    <div className={styles.teamImageFlex}>
      <Img fixed={data.mobileTeamPlay.childImageSharp.fixed} />
    </div>
  </GradientBG>
);

const Customers = ({ data, t, language }) => {
  const customerData = [
    {
      title: t("index:customerData1Title"),
      img: data.mobileCustomerMart.childImageSharp.fixed,
      link: t("index:customerData1Link"),
    },
    // 영문 문서가 없어서 한글에서만 추가.
    language === "ko"
      ? {
          title: t("index:customerData2Title"),
          img: data.mobileCustomerFasion.childImageSharp.fixed,
          link: t("index:customerData2Link"),
        }
      : null,
    {
      title: t("index:customerData3Title"),
      img: data.mobileCustomerCosmetics.childImageSharp.fixed,
      link: t("index:customerData3Link"),
    },
    {
      title: t("index:customerData4Title"),
      img: data.mobileCustomerCafe.childImageSharp.fixed,
      link: t("index:customerData4Link"),
    },
    {
      title: t("index:customerData5Title"),
      img: data.mobileCustomerPharmacy.childImageSharp.fixed,
      link: t("index:customerData5Link"),
    },
    {
      title: t("index:customerData6Title"),
      img: data.mobileCustomerHandmade.childImageSharp.fixed,
      link: t("index:customerData6Link"),
    },
    {
      title: t("index:customerData7Title"),
      img: data.mobileCustomerTextbook.childImageSharp.fixed,
      link: t("index:customerData7Link"),
    },
    {
      title: t("index:customerData8Title"),
      img: data.mobileCustomerLocation.childImageSharp.fixed,
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
      <Link to="/features/" title={t("index:customerDetailLink")}>
        <button className={styles.customersDetailButton}>
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
        horizontal={true}
        hideScrollbars={true}
      >
        {customerData.map((customer, index) => (
          <div key={index} className={styles.customerButton}>
            <div className={styles.customerButtonBackground}>
              <Img fixed={customer.img} />
            </div>
            <div className={styles.customerButtonContent}>
              <span className={styles.customButtonContentNumber}>
                {("0" + (index + 1)).slice(-2)}
              </span>
              <span className={styles.customButtonContentTitle}>
                {customer.title}
              </span>
              <span className={styles.customButtonContentPadding}></span>
              <a
                target="_blank"
                rel="noopener"
                href={customer.link}
                className={styles.customButtonContentLink}
              >
                {t("index:customerDataDetailLink")}
              </a>
            </div>
          </div>
        ))}
        <Padding x={300} />
      </ScrollContainer>
    </div>
  );
};

function genFeatureData(data, t) {
  return [
    {
      title: t("index:featureData1Title"),
      link: `/features/#${constants.idFeatureExpiry}`,
      img: data.mobileFeatureExpiry.childImageSharp.fixed,
    },
    {
      title: t("index:featureData2Title"),
      link: `/features/#${constants.idFeatureLowstock}`,
      img: data.mobileFeatureLowstock.childImageSharp.fixed,
    },
    {
      title: t("index:featureData3Title"),
      link: `/features/#${constants.idFeatureBarcodelabel}`,
      img: data.mobileFeatureBarcodelabel.childImageSharp.fixed,
    },
    {
      title: t("index:featureData4Title"),
      link: `/features/#${constants.idFeatureSummary}`,
      img: data.mobileFeatureSummary.childImageSharp.fixed,
    },
    {
      title: t("index:featureData5Title"),
      link: `/features/#${constants.idFeatureStatus}`,
      img: data.mobileFeatureStatus.childImageSharp.fixed,
    },
    {
      title: t("index:featureData6Title"),
      link: `/features/#${constants.idFeatureLocation}`,
      img: data.mobileFeatureLocation.childImageSharp.fixed,
    },
  ];
}

function renderDots(
  allData,
  setOffsetToSelected,
  setSelectedWidth,
  { currentSlide, totalSlides, visibleSlides }
) {
  const dots = [];
  for (let i = 0; i < totalSlides; i += 1) {
    const multipleSelected =
      i >= currentSlide && i < currentSlide + visibleSlides;
    const selected = multipleSelected;
    const slide =
      i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i;
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
      </Dot>
    );
  }
  return dots;
}

const FeatureSelector = ({ data, t, language, featureData }) => {
  // HACK: dom의 offset을 읽어와서 left, width css 조정해서 설정함.
  const [offsetToSelected, setOffsetToSelected] = React.useState(
    language === "ko" ? -60 : -82.5
  );
  const [selectedWidth, setSelectedWidth] = React.useState(
    language === "ko" ? 121 : 166
  );

  return (
    <WithCurrentSlide>
      {(currentSlide) => (
        <div className={styles.slideDetailDotGroupContainer}>
          <div
            key="background"
            className={styles.slideDetailDotBackground}
            style={{ minWidth: selectedWidth }}
          >
            {"0"}
          </div>
          <DotGroup
            className={styles.slideDetailDotGroup}
            style={{ marginLeft: offsetToSelected }}
            renderDots={(props) =>
              renderDots(
                featureData,
                setOffsetToSelected,
                setSelectedWidth,
                props
              )
            }
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
        {featureData.map((data, index) => (
          <Slide key={index} index={index}>
            <Img fixed={data.img} alt={data.title} />
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
      <Img fixed={data.mobileHomeStartNow.childImageSharp.fixed} />
      <Padding y={30} />
      <div className={styles.startNowDescription}>
        <Trans i18nKey="index:startNowDescription" />
      </div>
      <Padding y={30} />
      <Link to="/pricing/" className={styles.startNowDetailLink}>
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

const MobileIndex = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={true}
      closingEmoji={data.mobileCoffee}
      closingMsg={<Trans i18nKey="index:closingMsgMobile" />}
    >
      <Top data={data} t={t} />

      <KeyFeature
        icon={svgAddProduct}
        iconAlt={t("index:keyFeature1IconAlt")}
        title={<Trans i18nKey="index:keyFeature1Title" />}
        desc={<Trans i18nKey="index:keyFeature1DescMobile" />}
        subTitle={<Trans i18nKey="index:keyFeature1SubTitleMobile" />}
        subDesc={<Trans i18nKey="index:keyFeature1SubDescMobile" />}
        detailUrl={`/about/#${constants.idAboutFeatureAddProduct}`}
        image={data.mobileFeature1}
        linkDetail={t("index:keyFeatureLinkDetail")}
      />

      <KeyFeature
        isDarkBg={true}
        icon={svgCounting}
        iconAlt={t("index:keyFeature2IconAlt")}
        title={<Trans i18nKey="index:keyFeature2Title" />}
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

      <TeamPlay data={data} t={t} />

      <Customers data={data} t={t} language={language} />

      <Features data={data} t={t} language={language} />

      <StartNow data={data} t={t} />
    </MobileLayout>
  );
};

export default MobileIndex;
