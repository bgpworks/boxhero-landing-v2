/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Link, Trans } from "gatsby-plugin-react-i18next";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  WithCurrentSlide,
  ExternalLinkWithQuery,
  GradientBG,
  SpeechBubbleContainer,
} from "./common";
import * as constants from "./constants";
// css
import * as styles from "./desktop-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgCategory from "../images/icon-category.svg";
import svgScanning from "../images/icon-scanning.svg";
import svgImage from "../images/icon-image.svg";
import svgExcel from "../images/icon-excel.svg";
import svgFinger from "../images/icon-finger.svg";
import svgMobileScan from "../images/icon-mobile-scan.svg";
import svgHistory from "../images/icon-history.svg";
import svgConnectExcel from "../images/icon-connect-excel.svg";
import svgGraph from "../images/icon-graph.svg";
import svgList from "../images/icon-list.svg";
import svgSummary from "../images/icon-summary.svg";
import svgDashboard from "../images/icon-dashboard.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";
import svgSwipeLeft from "../images/swipeleft.svg";
import svgSwipeRight from "../images/swiperight.svg";
import CustomDotGroup from "./CustomDotGroup";

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
        <Padding y={17} />
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
      </div>
      <div className={styles.topRightContainer}>
        <GatsbyImage image={data.homeTopRight.childImageSharp.gatsbyImageData} />
      </div>
    </DesktopBaseContainer>
  </GradientBG>
);

const Chatting = ({ t }) => {
  const bubbles = [
    {
      text: t("index:chattingBubble1"),
      color: "#292a2f",
      backgroundColor: "#fbc200",
      marginLeft: 102,
    },
    {
      text: t("index:chattingBubble2"),
      color: "white",
      backgroundColor: "#50a4fa",
    },
    {
      text: t("index:chattingBubble3"),
      color: "#292a2f",
      backgroundColor: "#e0e0e3",
    },
    {
      text: t("index:chattingBubble4"),
      color: "white",
      backgroundColor: "rgba(79, 103, 255, 0.9)",
      marginRight: 102,
    },
    {
      text: t("index:chattingBubble5"),
      color: "white",
      backgroundColor: "rgba(60, 185, 160, 0.8)",
      marginLeft: 102,
    },
    {
      text: t("index:chattingBubble6"),
      color: "white",
      backgroundColor: "rgba(126, 187, 64, 0.6)",
      marginRight: 72,
    },
    {
      text: t("index:chattingBubble7"),
      color: "white",
      backgroundColor: "rgba(251, 97, 100, 0.6)",
      marginLeft: 72,
    },
  ];

  return (
    <div className={styles.chattingContainer}>
      <DesktopBaseContainer className={styles.chattingContentContainer}>
        <SpeechBubbleContainer
          containerWidth={582}
          speechBubbles={bubbles}
          columnGap={10}
        />

        <Padding y={51} />
        <div className={styles.chattingTitle}>{t("index:chattingTitle")}</div>
        <Padding y={16} />
        <div className={styles.chattingDescription}>
          <Trans i18nKey="index:chattingDescription" />
        </div>
      </DesktopBaseContainer>
    </div>
  );
};

const KeyFeatureMenuContainer = ({ title, description, carouselData }) => (
  <div>
    <div className={styles.keyFeatureTitle}>{title}</div>
    <Padding y={16} />
    <div className={styles.KeyFeatureDescription}>{description}</div>
    <Padding y={40} />
    <CustomDotGroup
      className={styles.keyFeatureMenuContainer}
      data={carouselData}
      dotClassName={styles.keyFeatureMenu}
      dotSelectedClassName={styles.selectedKeyFeatureMenu}
    />
  </div>
);

const KeyFeatureImageContainer = ({ carouselData }) => (
  <Slider className={styles.keyFeatureImageContainer}>
    {carouselData.map(({ img, text }, index) => (
      <Slide
        className={styles.keyFeatureSlide}
        key={index}
        index={index}
      >
        <GatsbyImage
          image={img}
          alt={text}
        />
      </Slide>
    ))}
  </Slider>
);

const KeyFeature = ({ totalSlides, children }) => (
  <div className={styles.keyFeatureContainer}>
    <DesktopBaseContainer>
      <CarouselProvider
        className={styles.keyFeatureContentContainer}
        orientation="vertical"
        naturalSlideWidth={581}
        naturalSlideHeight={714}
        totalSlides={totalSlides}
      >
        {children}
      </CarouselProvider>
    </DesktopBaseContainer>
  </div>
);

function genSalesManagementData(data, t) {
  return [
    { title: t("index:salesManagementMenu1"), img: data.featureTransaction.childImageSharp.gatsbyImageData },
    { title: t("index:salesManagementMenu2"), img: data.featureOut.childImageSharp.gatsbyImageData },
    { title: t("index:salesManagementMenu3"), img: data.featureSalesAnalysis.childImageSharp.gatsbyImageData },
  ];
}

const SalesManagement = ({ data, t }) => {
  const salesManagementData = genSalesManagementData(data, t);

  return (
    <DesktopBaseContainer>
      <CarouselProvider
        className={styles.salesManagementContentContainer}
        naturalSlideWidth={828}
        naturalSlideHeight={682}
        totalSlides={salesManagementData.length}
      >
        <div className={styles.salesManagementTitle}>
          <Trans i18nKey="index:salesManagementTitle" />
        </div>
        <Padding y={16} />
        <div className={styles.salesManagementDesc}>
          <Trans i18nKey="index:salesManagementDesc" />
        </div>

        <Padding y={50} />

        <CustomDotGroup
          className={styles.salesManagementMenuContainer}
          data={salesManagementData}
          dotClassName={styles.salesManagementMenu}
          dotSelectedClassName={styles.selectedSalesManagementMenu}
        />

        <Padding y={25} />

        <Slider className={styles.salesManagementImageContainer}>
          {salesManagementData.map(({ img, title }, index) => (
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
      </CarouselProvider>
    </DesktopBaseContainer>
  );
};

const TeamPlay = ({ data, t }) => (
  <GradientBG
    className={styles.teamPlayContainer}
    colorSet={["#7D24FF", "#276EFE", "#7F50FE", "#0C92FE"]}
    backgroundColor="#6159F5"
  >
    <div className={styles.teamPlayTitle}>{t("index:teamPlayTitle")}</div>
    <Padding y={16} />
    <div className={styles.teamPlayDesc}>
      <Trans i18nKey="index:teamPlayDesc" />
    </div>
    <Padding y={22} />
    <div className={styles.teamImageFlex}>
      <GatsbyImage image={data.teamPlay.childImageSharp.gatsbyImageData} />
    </div>
  </GradientBG>
);

const CustomerCard = ({
  img, title,
}) => (
  <div className={styles.customerCard}>
    <GatsbyImage image={img.childImageSharp.gatsbyImageData} />
    <Padding x={4} />
    {title}
  </div>
);

const Customers = ({ data, t }) => {
  const customerEmojis = [
    data.book, data.box, data.truck, data.bag, data.coat, data.teeth, data.car,
    data.pinkT, data.heel, data.thermometer, data.dress, data.bag2, data.mobile,
    data.lipstick, data.burger, data.bolt, data.brick, data.ring, data.coffeeSmall,
    data.tip, data.icecream, data.lip, data.cart, data.chair, data.tea, data.pill,
    data.movie, data.tv, data.puzzle, data.camera, data.electronic, data.wheelchair,
    data.hammer, data.bed, data.meat,
  ];

  return (
    <div className={styles.customersContainer}>
      <div className={styles.customersTitle}>
        <Trans i18nKey="index:customerTitle" />
      </div>
      <Padding y={16} />
      <div className={styles.customersDesc}>
        <Trans i18nKey="index:customerDesc" />
      </div>

      <Padding y={50} />

      <div className={styles.customersCardContainer}>
        {customerEmojis.map((emoji, index) => (
          <CustomerCard
            key={index}
            img={emoji}
            title={t(`index:customerType${index + 1}`)}
          />
        ))}
        <div className={[styles.customerCard, styles.darkBg].join(" ")}>
          {t("index:customerMore")}
        </div>
      </div>
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

const Features = ({ data, t }) => {
  const featureData = genFeatureData(data, t);
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresTitle}>
        <Trans i18nKey="index:featuresTitle" />
      </div>
      <Padding y={50} />

      <CarouselProvider
        naturalSlideWidth={495}
        naturalSlideHeight={360}
        totalSlides={featureData.length}
      >
        <CustomDotGroup
          className={styles.slideDetailDotGroup}
          data={featureData}
          dotClassName={styles.slideDetailDot}
          dotSelectedClassName={styles.slideDetailDotSelected}
        />

        <Padding y={42} />

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

function genKeyFeatureData(data, t) {
  return [
    [
      { icon: svgCategory, title: t("index:keyFeature1Menu1"), img: data.feature1CustomProducts.childImageSharp.gatsbyImageData },
      { icon: svgScanning, title: t("index:keyFeature1Menu2"), img: data.feature1PrintLabel.childImageSharp.gatsbyImageData },
      { icon: svgImage, title: t("index:keyFeature1Menu3"), img: data.feature1ProductList.childImageSharp.gatsbyImageData },
      { icon: svgExcel, title: t("index:keyFeature1Menu4"), img: data.feature1ImportExcel.childImageSharp.gatsbyImageData },
    ],
    [
      { icon: svgFinger, title: t("index:keyFeature2Menu1"), img: data.feature2SelectProduct.childImageSharp.gatsbyImageData },
      { icon: svgMobileScan, title: t("index:keyFeature2Menu2"), img: data.feature2ScanBarcode.childImageSharp.gatsbyImageData },
      { icon: svgHistory, title: t("index:keyFeature2Menu3"), img: data.feature2History.childImageSharp.gatsbyImageData },
      { icon: svgConnectExcel, title: t("index:keyFeature2Menu4"), img: data.feature2ConnectExcel.childImageSharp.gatsbyImageData },
    ],
    [
      { icon: svgGraph, title: t("index:keyFeature3Menu1"), img: data.feature3Analysis.childImageSharp.gatsbyImageData },
      { icon: svgList, title: t("index:keyFeature3Menu2"), img: data.feature3GroupList.childImageSharp.gatsbyImageData },
      { icon: svgSummary, title: t("index:keyFeature3Menu3"), img: data.feature3EmailReport.childImageSharp.gatsbyImageData },
      { icon: svgDashboard, title: t("index:keyFeature3Menu4"), img: data.feature3Dashboard.childImageSharp.gatsbyImageData },
    ],
  ];
}

const DesktopIndex = ({ data, language, t }) => {
  const keyFeatureData = genKeyFeatureData(data, t);

  return (
    <DesktopLayout
      isFloatMenu
      closingEmoji={data.coffee}
      closingMsg={t("index:closingMsg")}
    >
      <Top
        data={data}
        t={t}
      />

      <Chatting t={t} />

      <KeyFeature totalSlides={keyFeatureData[0].length}>
        <KeyFeatureMenuContainer
          title={<Trans i18nKey="index:keyFeature1Title" />}
          description={<Trans i18nKey="index:keyFeature1Desc" />}
          carouselData={keyFeatureData[0]}
        />
        <KeyFeatureImageContainer
          carouselData={keyFeatureData[0]}
        />
      </KeyFeature>

      <KeyFeature totalSlides={keyFeatureData[1].length}>
        <KeyFeatureImageContainer
          carouselData={keyFeatureData[1]}
        />
        <KeyFeatureMenuContainer
          title={<Trans i18nKey="index:keyFeature2Title" />}
          description={<Trans i18nKey="index:keyFeature2Desc" />}
          carouselData={keyFeatureData[1]}
        />
      </KeyFeature>

      <KeyFeature totalSlides={keyFeatureData[2].length}>
        <KeyFeatureMenuContainer
          title={<Trans i18nKey="index:keyFeature3Title" />}
          description={<Trans i18nKey="index:keyFeature3Desc" />}
          carouselData={keyFeatureData[2]}
        />
        <KeyFeatureImageContainer
          carouselData={keyFeatureData[2]}
        />
      </KeyFeature>

      <SalesManagement
        data={data}
        t={t}
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
};

export default DesktopIndex;
