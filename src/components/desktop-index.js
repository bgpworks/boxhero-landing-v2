/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

/* eslint-disable import/no-unresolved */

import React, { useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useI18next, Link, Trans } from "gatsby-plugin-react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  StartNowButton,
  GradientBG,
  SpeechBubbleContainer,
  ConsultingButton,
  PhotoWall,
  OnlyKorean,
  FlatIntroVideoBtn,
  IntroVideoBtn,
} from "./common";
import * as constants from "./constants";
// css
import "swiper/css";
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
import svgPlayPrimary from "../images/icon-play-primary.svg";
import svgRightArrow from "../images/icon-mobile-right-arrow.svg";

const CHATTING_COLOR_SEQUENCE = [
  { text: "#292a2f", background: "#fbc200" },
  { text: "white", background: "#50a4fa" },
  { text: "#292a2f", background: "#e0e0e3" },
  { text: "white", background: "rgba(79, 103, 255, 0.9)" },
  { text: "white", background: "rgba(60, 185, 160, 0.8)" },
  { text: "white", background: "rgba(126, 187, 64, 0.6)" },
  { text: "white", background: "rgba(251, 97, 100, 0.6)" },
];

const CHATTING_GRID_COLUMN_COUNT_BY_LANGUAGE = {
  ko: 6,
  en: 8,
  es: 7,
  id: 7,
};

const MARGIN_BIG = 102;
const MARGIN_SMALL = 72;

const genBubblesMap = (t) => ({
  ko: [
    { text: t("index:chattingBubble1"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble2") },
    { text: t("index:chattingBubble3") },
    { text: t("index:chattingBubble4"), marginRight: MARGIN_BIG },
    { text: t("index:chattingBubble5"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble6"), marginRight: MARGIN_SMALL },
    { text: t("index:chattingBubble7"), marginLeft: MARGIN_SMALL },
  ],
  en: [
    { text: t("index:chattingBubble1"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble2") },
    { text: t("index:chattingBubble3") },
    { text: t("index:chattingBubble4"), marginRight: MARGIN_BIG },
    { text: t("index:chattingBubble5"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble6"), marginRight: MARGIN_SMALL },
    { text: t("index:chattingBubble7"), marginLeft: MARGIN_SMALL },
  ],
  es: [
    { text: t("index:chattingBubble1"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble2") },
    { text: t("index:chattingBubble3") },
    { text: t("index:chattingBubble4"), marginRight: MARGIN_SMALL },
    { text: t("index:chattingBubble5"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble6") },
    { text: t("index:chattingBubble7") },
  ],
  id: [
    { text: t("index:chattingBubble1") },
    { text: t("index:chattingBubble2") },
    { text: t("index:chattingBubble3"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble4"), marginRight: MARGIN_BIG },
    { text: t("index:chattingBubble5"), marginLeft: MARGIN_BIG },
    { text: t("index:chattingBubble6"), marginRight: MARGIN_SMALL },
    { text: t("index:chattingBubble7"), marginLeft: MARGIN_SMALL },
  ],
});

function genKeyFeaturesData(data, t) {
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

function genSalesManagementData(data, t) {
  return [
    { title: t("index:salesManagementMenu1"), img: data.featureTransaction.childImageSharp.gatsbyImageData },
    { title: t("index:salesManagementMenu2"), img: data.featureOut.childImageSharp.gatsbyImageData },
    { title: t("index:salesManagementMenu3"), img: data.featureSalesAnalysis.childImageSharp.gatsbyImageData },
  ];
}

function genCustomerData(data) {
  return [
    { i18nKey: "index:customerTypeBookstore", emoji: data.book },
    { i18nKey: "index:customerTypeWarehouse", emoji: data.box },
    { i18nKey: "index:customerType3PL", emoji: data.truck },
    { i18nKey: "index:customerTypeBags", emoji: data.bag },
    { i18nKey: "index:customerTypeFashionBrand", emoji: data.coat },
    { i18nKey: "index:customerTypeDentalClinic", emoji: data.teeth },
    { i18nKey: "index:customerTypeAutoParts", emoji: data.car },
    { i18nKey: "index:customerTypeFabric", emoji: data.pinkT },
    { i18nKey: "index:customerTypeShoes", emoji: data.heel },
    { i18nKey: "index:customerTypeMedicine", emoji: data.thermometer },
    { i18nKey: "index:customerTypeClothes", emoji: data.dress },
    { i18nKey: "index:customerTypeUsedItems", emoji: data.bag2 },
    { i18nKey: "index:customerTypeCellphones", emoji: data.mobile },
    { i18nKey: "index:customerTypeCosmetics", emoji: data.lipstick },
    { i18nKey: "index:customerTypeFood", emoji: data.burger },
    { i18nKey: "index:customerTypeElevatorParts", emoji: data.bolt },
    { i18nKey: "index:customerTypeRawMeterial", emoji: data.brick },
    { i18nKey: "index:customerTypeJewelry", emoji: data.ring },
    { i18nKey: "index:customerTypeCafe", emoji: data.coffeeSmall },
    { i18nKey: "index:customerTypeCreativeProduct", emoji: data.tip },
    { i18nKey: "index:customerTypeIcecream", emoji: data.icecream },
    { i18nKey: "index:customerTypeCosmeticSurgery", emoji: data.lip },
    { i18nKey: "index:customerTypeSupermarket", emoji: data.cart },
    { i18nKey: "index:customerTypeFurniture", emoji: data.chair },
    { i18nKey: "index:customerTypeTea", emoji: data.tea },
    { i18nKey: "index:customerTypePharmacy", emoji: data.pill },
    { i18nKey: "index:customerTypeCinema", emoji: data.movie },
    { i18nKey: "index:customerTypeApplianceStore", emoji: data.tv },
    { i18nKey: "index:customerTypeSticker", emoji: data.puzzle },
    { i18nKey: "index:customerTypeCamera", emoji: data.camera },
    { i18nKey: "index:customerTypeElectronicParts", emoji: data.electronic },
    { i18nKey: "index:customerTypeMedicalEquipment", emoji: data.wheelchair },
    { i18nKey: "index:customerTypeAirConditionerParts", emoji: data.hammer },
    { i18nKey: "index:customerTypeComforter", emoji: data.bed },
    { i18nKey: "index:customerTypeMeat", emoji: data.meat },
  ];
}

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

const TopLeftContainer = ({ t }) => (
  <div>
    <div className={styles.topLeftTitle}>
      <Trans i18nKey="index:topTitle" />
    </div>
    <Padding y={30} />
    <div className={styles.topLeftDescription}>
      <Trans i18nKey="index:topDesc" />
    </div>
    <Padding y={30} />
    <StartNowButton className={styles.startNowButton}>
      <img
        className={styles.topButtonIcon}
        src={svgVolt}
        alt={t("index:topIconAlt")}
      />
      {t("index:topStartNowButton")}
    </StartNowButton>
    <Padding y={12} />
    <ConsultingButton transparent={false} />
    <OnlyKorean>
      <Padding y={22} />
      <FlatIntroVideoBtn className={styles.introVideoBtn} />
    </OnlyKorean>
  </div>
);

const Top = ({ data, t }) => (
  <GradientBG
    className={styles.topContainer}
    colorSet={["#8122ff", "#854afe", "#4260ef", "#00b0f8"]}
    backgroundColor="#4260ef"
  >
    <DesktopBaseContainer className={styles.topContentContainer}>
      <TopLeftContainer t={t} />

      <div className={styles.topRightContainer}>
        <GatsbyImage
          image={data.homeTopRight.childImageSharp.gatsbyImageData}
          alt={t("index:topIconAlt")}
        />
      </div>
    </DesktopBaseContainer>
  </GradientBG>
);

const IntroVideoBtnInChatting = () => {
  const { t } = useI18next();

  return (
    <IntroVideoBtn className={styles.introVideoBtnInChatting}>
      <img
        className={styles.introVideoBtnInChattingPlaySymbol}
        src={svgPlayPrimary}
        alt="Play"
      />
      <span className={styles.introVideoBtnInChattingLabel}>
        {t("index:chattingIntroVideoBtnLabel")}
      </span>
      <img
        className={styles.introVideoBtnInChattingArrowSymbol}
        src={svgRightArrow}
        alt="icon arrow"
      />
    </IntroVideoBtn>
  );
};

const Chatting = ({ t, language }) => {
  const speechBubblesByLanguageMap = genBubblesMap(t);

  return (
    <div className={styles.chattingContainer}>
      <DesktopBaseContainer className={styles.chattingContentContainer}>
        <SpeechBubbleContainer
          containerGridColumns={CHATTING_GRID_COLUMN_COUNT_BY_LANGUAGE[language]}
          speechBubbles={speechBubblesByLanguageMap[language]}
          colorSequence={CHATTING_COLOR_SEQUENCE}
        />

        <Padding y={51} />
        <div className={styles.chattingTitle}>
          <Trans i18nKey="index:chattingTitle" />
        </div>
        <Padding y={16} />
        <div className={styles.chattingDescription}>
          <Trans i18nKey="index:chattingDescription" />
        </div>
        <OnlyKorean>
          <Padding y={30} />
          <IntroVideoBtnInChatting />
        </OnlyKorean>
      </DesktopBaseContainer>
    </div>
  );
};

const KeyFeatureButton = ({
  title, icon, isActive, onClick,
}) => (
  <button
    type="button"
    className={cn(
      styles.keyFeatureMenu,
      { [styles.selectedKeyFeatureMenu]: isActive },
    )}
    onClick={onClick}
  >
    <img
      src={icon}
      alt={title}
    />
    {title}
  </button>
);

const KeyFeature = ({ title, description, carouselData }) => {
  const swiperRef = useRef(null);
  const setSwiperRef = (swiper) => {
    swiperRef.current = swiper;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const slideTo = (index) => swiperRef.current.slideTo(index);

  return (
    <div className={styles.keyFeatureContainer}>
      <DesktopBaseContainer>
        <div className={styles.keyFeatureContentContainer}>
          <div className={styles.KeyFeatureDescriptionContainer}>
            <div className={styles.keyFeatureTitle}>{title}</div>
            <Padding y={16} />
            <div className={styles.KeyFeatureDescription}>{description}</div>
            <Padding y={40} />
            <div className={styles.keyFeatureMenuContainer}>
              {carouselData.map((data, index) => {
                const isActive = activeIndex === index;
                return (
                  <KeyFeatureButton
                    key={data.title}
                    title={data.title}
                    icon={data.icon}
                    isActive={isActive}
                    onClick={() => slideTo(index)}
                  />
                );
              })}
            </div>
          </div>
          <Swiper
            className={styles.keyFeatureSlider}
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            direction="vertical"
          >
            {carouselData.map((data, index) => (
              <SwiperSlide
                className={styles.keyFeatureSlide}
                key={index}
                index={index}
              >
                <GatsbyImage
                  image={data.img}
                  alt={data.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </DesktopBaseContainer>
    </div>
  );
};

const KeyFeatures = ({ data, t }) => {
  const keyFeaturesData = genKeyFeaturesData(data, t);

  return (
    <>
      <KeyFeature
        title={<Trans i18nKey="index:keyFeature1Title" />}
        description={<Trans i18nKey="index:keyFeature1Desc" />}
        carouselData={keyFeaturesData[0]}
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature2Title" />}
        description={<Trans i18nKey="index:keyFeature2Desc" />}
        carouselData={keyFeaturesData[1]}
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature3Title" />}
        description={<Trans i18nKey="index:keyFeature3Desc" />}
        carouselData={keyFeaturesData[2]}
      />
    </>
  );
};

const SalesManagement = ({ data, t }) => {
  const salesManagementData = genSalesManagementData(data, t);

  const swiperRef = useRef(null);
  const setSwiperRef = (swiper) => {
    swiperRef.current = swiper;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const slideTo = (index) => swiperRef.current.slideTo(index);

  return (
    <DesktopBaseContainer>
      <div className={styles.salesManagementContentContainer}>
        <div className={styles.salesManagementTitle}>
          <Trans i18nKey="index:salesManagementTitle" />
        </div>
        <Padding y={16} />
        <div className={styles.salesManagementDesc}>
          <Trans i18nKey="index:salesManagementDesc" />
        </div>

        <Padding y={50} />

        <div className={styles.salesManagementMenuContainer}>
          {salesManagementData.map(({ title }, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={title}
                type="button"
                className={cn(
                  styles.salesManagementMenu,
                  { [styles.selectedSalesManagementMenu]: isActive },
                )}
                onClick={() => slideTo(index)}
              >
                {title}
              </button>
            );
          })}
        </div>

        <Padding y={25} />

        <Swiper
          className={styles.salesManagementImageContainer}
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {salesManagementData.map(({ img, title }) => (
            <SwiperSlide key={title}>
              <GatsbyImage
                image={img}
                alt={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
      <GatsbyImage
        image={data.teamPlay.childImageSharp.gatsbyImageData}
        alt={t("index:teamPlayTitle")}
      />
    </div>
  </GradientBG>
);

const CustomerCard = ({
  img, title,
}) => (
  <div className={styles.customerCard}>
    <GatsbyImage
      image={img.childImageSharp.gatsbyImageData}
      alt={title}
    />
    <Padding x={4} />
    {title}
  </div>
);

const Sectors = ({ data, t }) => {
  const customerData = genCustomerData(data);

  return (
    <div className={styles.customersContainer}>
      <div className={styles.customersTitle}>
        <Trans i18nKey="index:customerTitle" />
      </div>

      <Padding y={50} />

      <div className={styles.customersCardContainer}>
        {customerData.map((customer, index) => (
          <CustomerCard
            key={index}
            img={customer.emoji}
            title={t(customer.i18nKey)}
          />
        ))}
        <div className={[styles.customerCard, styles.darkBg].join(" ")}>
          {t("index:customerMore")}
        </div>
      </div>
    </div>
  );
};

const FeatureDetailLink = ({ t, featureData, activeIndex }) => (
  <div className={styles.slideDetailLinkContainer}>
    <Link
      to={featureData[activeIndex].link}
      title={featureData[activeIndex].title}
      className={styles.slideDetailLink}
    >
      {t("index:featuresDetailLink")}
      <img
        src={svgSmallRightBlue}
        className={styles.rightArrow}
        alt={t("index:featuresDetailLink")}
      />
    </Link>
  </div>
);

const Features = ({ data, t }) => {
  const featureData = genFeatureData(data, t);

  const swiperRef = useRef(null);
  const setSwiperRef = (swiper) => {
    swiperRef.current = swiper;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const slideTo = (index) => swiperRef.current.slideTo(index);

  const isFirstIndex = activeIndex === 0;
  const isLastIndex = activeIndex === featureData.length - 1;

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresTitle}>
        <Trans i18nKey="index:featuresTitle" />
      </div>
      <Padding y={50} />
      <div className={styles.slideDetailDotGroup}>
        {featureData.map(({ title }, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={title}
              type="button"
              className={cn(
                styles.slideDetailDot,
                { [styles.slideDetailDotSelected]: isActive },
              )}
              onClick={() => slideTo(index)}
            >
              {title}
            </button>
          );
        })}
      </div>

      <Padding y={42} />

      <div className={styles.slideAndNavButtons}>
        <button
          type="button"
          className={styles.slideNavButton}
          disabled={isFirstIndex}
          onClick={() => swiperRef.current.slidePrev()}
        >
          <img
            src={svgSwipeLeft}
            alt={t("index:featuresNavBack")}
          />
        </button>
        <Swiper
          className={styles.sliderWrapper}
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {featureData.map(({ img, title }, index) => (
            <SwiperSlide
              key={index}
              index={index}
            >
              <GatsbyImage
                image={img}
                alt={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className={styles.slideNavButton}
          disabled={isLastIndex}
          onClick={() => swiperRef.current.slideNext()}
        >
          <img
            src={svgSwipeRight}
            alt={t("index:featuresNavNext")}
          />
        </button>
      </div>

      <Padding y={40} />

      <FeatureDetailLink
        t={t}
        featureData={featureData}
        activeIndex={activeIndex}
      />
    </div>
  );
};

const StartNow = ({ data, t }) => (
  <div className={styles.startNowContainer}>
    <div className={styles.startNowTitle}>
      <Trans i18nKey="index:startNowTitle" />
    </div>
    <Padding y={50} />
    <GatsbyImage
      image={data.homeStartNow.childImageSharp.gatsbyImageData}
      alt={t("index:startNowTitle")}
    />
    <Padding y={40} />
    <div className={styles.startNowDescription}>
      <Trans i18nKey="index:startNowDescription" />
    </div>
    <Padding y={40} />
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

const Customer = ({ data }) => {
  const { name, childImageSharp } = data;

  return (
    <GatsbyImage
      image={childImageSharp.gatsbyImageData}
      alt={name}
    />
  );
};

const Customers = ({ data }) => {
  const { language, t } = useI18next();
  const columnCount = language === "ko" ? 6 : 5;
  const customerList = language === "ko" ? data.koCustomers.nodes : data.enCustomers.nodes;

  return (
    <div className={styles.customersSection}>
      <DesktopBaseContainer className={styles.customersContentContainer}>
        <h2 className={styles.customersTitle}>
          {t("index:customerSectionTitle")}
        </h2>
        <p className={styles.customersDesc}>
          {t("index:customerSectionDesc")}
        </p>
        <PhotoWall
          items={customerList}
          columnCount={columnCount}
          gap={30}
          ItemRenderer={Customer}
        />
      </DesktopBaseContainer>
    </div>
  );
};

const DesktopIndex = ({ data, language, t }) => (
  <DesktopLayout
    isFloatMenu
    closingEmoji={data.coffee}
    closingMsg={t("index:closingMsg")}
  >
    <Top
      data={data}
      t={t}
      language={language}
    />

    <Customers data={data} />

    <Chatting
      t={t}
      language={language}
    />

    <KeyFeatures
      data={data}
      t={t}
    />

    <SalesManagement
      data={data}
      t={t}
    />

    <TeamPlay
      data={data}
      t={t}
    />

    <Sectors
      data={data}
      t={t}
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
