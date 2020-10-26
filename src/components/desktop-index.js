import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link, Trans } from '@jbseo/gatsby-plugin-react-i18next';
// js
import DesktopLayout from "../components/desktop-layout"
import { Container1024, Padding, WithCurrentSlide, ExternalLinkWithQuery } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./desktop-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgAddProduct from "../images/addproduct.svg";
import svgCounting from "../images/counting.svg";
import svgDashboard from "../images/dashboard.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";
import svgSmallRight from "../images/smallright.svg";
import svgSwipeLeft from "../images/swipeleft.svg";
import svgSwipeRight from "../images/swiperight.svg";
// page transition
import { TransitionUp, TransitionImage, TransitionPiano } from "../transition"

const Top = ({data, t}) => (
  <BackgroundImage
    Tag="div"
    className={styles.topContainer}
    fluid={data.homeTopBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <Container1024 className={styles.topContentContainer}>
      <div className={styles.topLeftContainer}>
        <TransitionUp
          is_desktop= {true}
          item={
          <img src={svgVolt} alt={t("index:topIconAlt")} />
        }
        />
        <Padding y={10} />
        <div className={styles.topLeftTitle}>
          <TransitionUp item={
          <Trans i18nKey="index:topTitle" />
          } />
        </div>
        <Padding y={30} />
        <div className={styles.topLeftDescription}>
          <TransitionUp item={
          <Trans i18nKey="index:topDesc" />
          } />
        </div>
        <Padding y={30} />
        <ExternalLinkWithQuery href={constants.urlStart}>
          <TransitionUp
            item={
              <button className={styles.startNowButton}>
                {t("index:topStartNowButton")}
              </button>
            }
          />
        </ExternalLinkWithQuery>
        <Padding y={161} />
      </div>
      <div className={styles.topRightContainer}>
        <TransitionImage
          item={
          <Img fixed={data.homeTopRight.childImageSharp.fixed} />
        }
        />
      </div>
    </Container1024>
  </BackgroundImage>
);

const KeyFeature = ({isDarkBg, icon, iconAlt, title, desc, subTitle, subDesc, detailUrl, image, linkDetail}) => (
  <div className={`${styles.keyFeatureContainer} ${isDarkBg ? styles.darkBg : ""}`}>
    <Container1024 className={styles.keyFeatureContentContainer}>
      <div className={styles.keyFeatureLeftContainer}>
        <TransitionUp item={
        <img src={icon} alt={iconAlt} />
        } />
        <Padding y={20} />
        <TransitionUp
          item={
          <div className={styles.keyFeatureLeftTitle}>
            {title}
          </div>
        }
        />
        <Padding y={35} />
        <TransitionUp
          item={
          <div className={styles.keyFeatureLeftDescription}>
            {desc}
          </div>
        }
        />
        <Padding y={40} />
        <TransitionUp
          item={
          <div className={styles.keyFeatureLeftSubTitle}>
            {subTitle}
          </div>
        }
        />
        <TransitionUp
          item={
          <div className={styles.keyFeatureLeftSubDesc}>
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
      <div className={styles.keyFeatureRightContainer}>
        <TransitionImage item={
        <Img fixed={image.childImageSharp.fixed}
        />
        } />
      </div>
    </Container1024>
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
    fluid={data.homeTeamPlayBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <TransitionUp
      item={
        <div className={styles.teamPlayTitle}>
          {t("index:teamPlayTitle")}
        </div>
      }
    />
    <Padding y={40} />
    <div className={styles.teamPlayDesc}>
      <TransitionUp item={
        <Trans i18nKey="index:teamPlayDesc" />
      } />
    </div>
    <TransitionImage
      item={
        <div className={styles.teamImageFlex}>
          <Img
          fixed={data.teamPlay.childImageSharp.fixed}
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
      img: data.customerMart.childImageSharp.fixed,
      link: t("index:customerData1Link"),
    },
    // 영문 문서가 없어서 한글에서만 추가.
    (language === "ko"
      ? {
          title: t("index:customerData2Title"),
          img: data.customerFasion.childImageSharp.fixed,
          link: t("index:customerData2Link"),
        }
      : null),
    {
      title: t("index:customerData3Title"),
      img: data.customerCosmetics.childImageSharp.fixed,
      link: t("index:customerData3Link"),
    },
    {
      title: t("index:customerData4Title"),
      img: data.customerCafe.childImageSharp.fixed,
      link: t("index:customerData4Link"),
    },
    {
      title: t("index:customerData5Title"),
      img: data.customerPharmacy.childImageSharp.fixed,
      link: t("index:customerData5Link"),
    },
    {
      title: t("index:customerData6Title"),
      img: data.customerHandmade.childImageSharp.fixed,
      link: t("index:customerData6Link"),
    },
    {
      title: t("index:customerData7Title"),
      img: data.customerTextbook.childImageSharp.fixed,
      link: t("index:customerData7Link"),
    },
    {
      title: t("index:customerData8Title"),
      img: data.customerLocation.childImageSharp.fixed,
      link: t("index:customerData8Link"),
    }
  ].filter(item => item);
  return (
    <div className={styles.customersContainer}>
      <div className={styles.customersTitle}>
        <TransitionUp item={
        <Trans i18nKey="index:customerTitle" />
        } />
      </div>
      <Padding y={40} />
      <TransitionUp
        item={
          <Link
            to="/features/"
            title={t("index:customerDetailLink")}
          >
            <button className={styles.customersDetailButton}>
              {t("index:customerDetailLink")}
              <Padding x={10} />
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
            key={index + customer.title}
            delay={index * 100}
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
                    href={customer.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.customButtonContentLink}>
                    {t("index:customerDataDetailLink")}
                  </a>
                </div>
              </div>
            }
          />
        ))}
        <Padding x={500} />
      </ScrollContainer>
    </div>
  );
}

function genFeatureData(data, t) {
  return [
    {
      title: t("index:featureData1Title"),
      link: `/features/#${constants.idFeatureExpiry}`,
      img: data.featureExpiry.childImageSharp.fixed,
    },
    {
      title: t("index:featureData2Title"),
      link: `/features/#${constants.idFeatureLowstock}`,
      img: data.featureLowstock.childImageSharp.fixed,
    },
    {
      title: t("index:featureData3Title"),
      link: `/features/#${constants.idFeatureBarcodelabel}`,
      img: data.featureBarcodelabel.childImageSharp.fixed,
    },
    {
      title: t("index:featureData4Title"),
      link: `/features/#${constants.idFeatureSummary}`,
      img: data.featureSummary.childImageSharp.fixed,
    },
    {
      title: t("index:featureData5Title"),
      link: `/features/#${constants.idFeatureStatus}`,
      img: data.featureStatus.childImageSharp.fixed,
    },
    {
      title: t("index:featureData6Title"),
      link: `/features/#${constants.idFeatureLocation}`,
      img: data.featureLocation.childImageSharp.fixed,
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
    <div className={styles.featuresContainer}>
      <div className={styles.featuresTitle}>
        <TransitionUp item={
          <Trans i18nKey="index:featuresTitle" />
        } />
      </div>
      <Padding y={80} />

      <CarouselProvider
        naturalSlideWidth={495}
        naturalSlideHeight={360}
        totalSlides={featureData.length}
      >
        <TransitionUp
          item={
            <DotGroup
              className={styles.slideDetailDotGroup}
              renderDots={(props) => renderDots(featureData, props)}
            />
          }
        />

        <Padding y={80} />

        <div className={styles.slideAndNavButtons}>
          <ButtonBack className={styles.slideNavButton}>
            <img
              src={svgSwipeLeft}
              alt={t("index:featuresNavBack")}
            />
          </ButtonBack>
          <TransitionImage
            item={
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
            }
          />
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
            { currentSlide => (
              <TransitionUp
                item={
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
                }
              />
            )}
          </WithCurrentSlide>
        </div>
      </CarouselProvider>
    </div>
  );
};

const DesktopIndex = ({ data, language, t }) => {
  return (
    <DesktopLayout
      isFloatMenu={true}
      closingEmoji={data.coffee}
      closingMsg={t("index:closingMsg")}
    >
      <Top
        data={data}
        t={t}
      />

      <KeyFeature
        icon={svgAddProduct}
        iconAlt={t("index:keyFeature1IconAlt")}
        title={<Trans i18nKey="index:keyFeature1Title" />}
        desc={<Trans i18nKey="index:keyFeature1Desc" />}
        subTitle={<Trans i18nKey="index:keyFeature1SubTitle"/>}
        subDesc={<Trans i18nKey="index:keyFeature1SubDesc" />}
        detailUrl={`/about/#${constants.idAboutFeatureAddProduct}`}
        image={data.feature1}
        linkDetail={t("index:keyFeatureLinkDetail")}
      />

      <KeyFeature
        isDarkBg={true}
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
        title={<Trans i18nKey="index:keyFeature3Title"/>}
        desc={<Trans i18nKey="index:keyFeature3Desc" />}
        subTitle={t("index:keyFeature3SubTitle")}
        subDesc={<Trans i18nKey="index:keyFeature3SubDesc" />}
        detailUrl={`/about/#${constants.idAboutFeatureStatus}`}
        image={data.feature3}
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

      <Features
        data={data}
        t={t} />
    </DesktopLayout>
  );
};

export default DesktopIndex;
