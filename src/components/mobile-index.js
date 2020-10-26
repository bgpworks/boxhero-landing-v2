import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { Link, Trans } from '@jbseo/gatsby-plugin-react-i18next';
import ScrollContainer from 'react-indiana-drag-scroll';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';
// js
import MobileLayout from "../components/mobile-layout"
import { Container320, Padding, WithCurrentSlide } from "../components/common";
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
// page transition
import { TransitionUp, TransitionImage, TransitionPiano } from "../transition"

const Top = ({data, t}) => (
  <BackgroundImage
    Tag="div"
    className={styles.topContainer}
    fluid={data.mobileHomeTopBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <Container320 className={styles.topContentContainer}>
      <Padding y={74} />
      <TransitionUp
        is_mobile={true}
        item={
          <img
            className={styles.topIcon}
            src={svgVolt}
            alt={t("index:topIconAlt")}
          />
        }
      />
      <Padding y={10} />
      <div className={styles.topLeftTitle}>
        <TransitionUp
          item={
            <Trans i18nKey="index:topTitle" />
          } />
      </div>
      <Padding y={20} />
      <div className={styles.topLeftDescription}>
        <TransitionUp
          item={
            <Trans i18nKey="index:topDesc" />
          } />
      </div>
      <Padding y={30} />
      <div className={styles.topImageContainer}>
        <TransitionImage
          item={
            <Img fixed={data.mobileHomeTopRight.childImageSharp.fixed} />
          }
        />
      </div>
    </Container320>
  </BackgroundImage>
);

const KeyFeature = ({isDarkBg, icon, iconAlt, title, desc, subTitle, subDesc, detailUrl, image, linkDetail}) => (
  <div className={isDarkBg ? styles.darkBg : ""}>
    <Container320 className={styles.keyFeatureContentContainer}>
      <div className={styles.px20}>
        <TransitionUp
          item={
            <img
              className={styles.keyFeatureIcon}
              src={icon}
              alt={iconAlt}
            />
          }
        />
        <Padding y={10} />
        <TransitionUp
          item={
            <div className={styles.keyFeatureTitle}>
              {title}
            </div>
          }
        />
        <Padding y={20} />
        <TransitionUp
          item={
            <div className={styles.keyFeatureDescription}>
              {desc}
            </div>
          }
        />
        <Padding y={20} />
        <TransitionUp
          item={
            <div className={styles.keyFeatureSubTitle}>
              {subTitle}
            </div>
          }
        />
        <TransitionUp
          item={
            <div className={styles.keyFeatureSubDesc}>
              {subDesc}
            </div>
          }
        />
        <Padding y={20} />
        <div className={styles.keyFeatureDetail}>
          <TransitionUp
            item={
              <Link to={detailUrl}>
                {linkDetail}
                <img
                  src={svgSmallRightBlue}
                  className={styles.rightArrow}
                  alt={linkDetail}
                />
              </Link>
            }
          />
        </div>
      </div>
      <Padding y={30} />
      <div>
        <TransitionImage
          item={
            <Img fixed={image.childImageSharp.fixed}
            />
          } />
      </div>
    </Container320>
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

const TeamPlay = ({data, t}) => (
  <BackgroundImage
    Tag="section"
    className={styles.teamPlayContainer}
    fluid={data.mobileHomeTeamPlayBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <Padding y={50} />
    <TransitionUp
      item={
        <div className={styles.teamPlayTitle}>
          {t("index:teamPlayTitle")}
        </div>
      }
    />
    <Padding y={20} />
    <Container320 className={styles.teamPlayDesc}>
      <TransitionUp
        item={
        <Trans i18nKey="index:teamPlayDescMobile" />
        } />
    </Container320>
    <Padding y={29} />
    <TransitionImage
      item={
        <div className={styles.teamImageFlex}>
          <Img
            fixed={data.mobileTeamPlay.childImageSharp.fixed}
          />
        </div>
      }
    />
  </BackgroundImage>
);

const Customers = ({data, t, language}) => {
  const customerData = [
    {
      title: t("index:customerData1Title"),
      img: data.mobileCustomerMart.childImageSharp.fixed,
      link: t("index:customerData1Link"),
    },
    // 영문 문서가 없어서 한글에서만 추가.
    (language === "ko"
      ? {
          title: t("index:customerData2Title"),
          img: data.mobileCustomerFasion.childImageSharp.fixed,
          link: t("index:customerData2Link"),
        }
      : null),
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
    }
  ].filter(item => item);
  return (
    <div className={styles.customersContainer}>
      <Padding y={50} />
      <div className={styles.customersTitle}>
        <TransitionUp
          item={
          <Trans i18nKey="index:customerTitle" />
          } />
      </div>
      <Padding y={30} />
      <TransitionUp
        item={
          <Link
            to="/features/"
            title={t("index:customerDetailLink")}
          >
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
        }
      />
      <ScrollContainer
        className={styles.customersWrapper}
        vertical={false}
        horizontal={true}
        hideScrollbars={true}
      >
        {customerData.map((customer, index) => (
          <TransitionPiano
            key={customer.title + index}
            delay={100 * index}
            item={
              <div
                key={index}
                className={styles.customerButton}>
                <div className={styles.customerButtonBackground}>
                  <Img
                  fixed={customer.img}
                  />
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
                    rel="noreferrer"
                    href={customer.link}
                    className={styles.customButtonContentLink}>
                    {t("index:customerDataDetailLink")}
                  </a>
                </div>
              </div>
            }
          />
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

function renderDots(allData, {currentSlide, totalSlides, visibleSlides}) {
  const dots = [];
  for (let i = 0; i < totalSlides; i += 1) {
    const multipleSelected = i >= currentSlide && i < (currentSlide + visibleSlides);
    const selected = multipleSelected;
    const slide = i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i;
    dots.push(
      <Dot
        key={i}
        slide={slide}
        selected={selected}
        style={{ left: `${-150 * currentSlide}px` }}
        className={`${styles.slideDetailDot} ${selected ? styles.slideDetailDotSelected : ""}`}
      >
        {allData[slide].title}
      </Dot>,
    );
  }
  return dots;
}

const Features = ({data, t}) => {
  const featureData = genFeatureData(data, t);
  return (
    <CarouselProvider
      className={styles.featuresContainer}
      naturalSlideWidth={280}
      naturalSlideHeight={204}
      touchEnabled={false}
      totalSlides={featureData.length}
    >
      <div className={styles.featuresTitle}>
        <TransitionUp item={
        <Trans i18nKey="index:featuresTitleMobile" />
        } />
      </div>
      <Padding y={32} />

      <div className={styles.selectedItemWrap}>
        <DotGroup
          className={styles.slideDetailDotGroup}
          renderDots={(props) => renderDots(featureData, props)}
        />
      </div>

      <Padding y={40} />

      <Slider className={styles.sliderWrapper}>
        {featureData.map((data, index) => (
          <Slide
            key={index}
            index={index}>
            <Img
              fixed={data.img}
              alt={data.title}
            />
          </Slide>
        ))}
      </Slider>

      <Padding y={30} />

      <div className={styles.slideDetailLinkContainer}>
        <WithCurrentSlide>
          { currentSlide => (
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

const MobileIndex = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={true}
      closingEmoji={data.mobileCoffee}
      closingMsg={<Trans i18nKey="index:closingMsgMobile" />}
    >
      <Top
        data={data}
        t={t}
      />

      <KeyFeature
        icon={svgAddProduct}
        iconAlt={t("index:keyFeature1IconAlt")}
        title={<Trans i18nKey="index:keyFeature1Title" />}
        desc={<Trans i18nKey="index:keyFeature1DescMobile" />}
        subTitle={<Trans i18nKey="index:keyFeature1SubTitleMobile"/>}
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
        title={<Trans i18nKey="index:keyFeature3Title"/>}
        desc={<Trans i18nKey="index:keyFeature3Desc" />}
        subTitle={t("index:keyFeature3SubTitle")}
        subDesc={<Trans i18nKey="index:keyFeature3SubDescMobile" />}
        detailUrl={`/about/#${constants.idAboutFeatureStatus}`}
        image={data.mobileFeature3}
        linkDetail={t("index:keyFeatureLinkDetail")}
      />

      <TeamPlay
        data={data}
        t={t} />

      <Customers
        data={data}
        t={t}
        language={language}
      />

      <TransitionImage item={
        <Features
          data={data}
          t={t} />
        } />
    </MobileLayout>
  );
};

export default MobileIndex;
