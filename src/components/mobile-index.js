/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import cn from "classnames";
import { IntersectionObserverProvider, useIntersectionObserver } from "../hooks/use-intersection-observer";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  Padding,
  SpeechBubbleContainer,
  GradientBG,
  PhotoWall,
  DarkAppInstallButton,
  IntroVideoBtn,
  FlatIntroVideoBtn,
  ConsultingButton,
  OnlyKorean,
} from "./common";
// import { useCurrentSlide } from "../hooks/use-current-slide";
import * as constants from "./constants";
// css
import "swiper/css";
import * as styles from "./mobile-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgLeftArrow from "../images/icon-mobile-left-arrow.svg";
import svgRightArrow from "../images/icon-mobile-right-arrow.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";
import svgPlayPrimary from "../images/icon-play-primary.svg";
// import { usePreviousValue } from "../hooks/use-previous-value";
// import { useCarouselHandler } from "../hooks/use-carousel-handler";

const CAROUSEL_INTERVAL = 3000;

const genElementString = (tagName, props, children) => {
  const propsStr = Object.entries(props).map(([key, value]) => `${key}="${value}"`).join("");
  return (
    `<${tagName} ${propsStr}>${children}</${tagName}>`
  );
};

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
      <h2 className={styles.topTitle}>
        <Trans i18nKey="index:topTitleMobile" />
      </h2>
      <Padding y={20} />
      <p className={styles.topDescription}>
        <Trans i18nKey="index:topDescMobile" />
      </p>
      <Padding y={60} />
      <DarkAppInstallButton label={t("usecase:appInstall")} />
      <Padding y={16} />
      <ConsultingButton transparent={false} />
      <OnlyKorean>
        <Padding y={16} />
        <FlatIntroVideoBtn />
      </OnlyKorean>
    </MobileBaseContainer>
    <ScrollContainer
      vertical={false}
      horizontal
      hideScrollbars
      className={styles.topImageScrollContainer}
    >
      <GatsbyImage
        className={styles.topImage}
        image={data.mobileHomeTopRight.childImageSharp.gatsbyImageData}
        alt={t("index:topIconAlt")}
      />
    </ScrollContainer>
    <Padding y={50} />
  </GradientBG>
);

const CHATTING_COLOR_SEQUENCE = [
  { text: "#292a2f", background: "#fbc200" },
  { text: "white", background: "#50a4fa" },
  { text: "#292a2f", background: "#e0e0e3" },
  { text: "white", background: "rgba(79, 103, 255, 0.9)" },
  { text: "white", background: "rgba(60, 185, 160, 0.8)" },
  { text: "white", background: "rgba(126, 187, 64, 0.6)" },
  { text: "white", background: "rgba(251, 97, 100, 0.6)" },
];

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

const Chatting = () => {
  const speechBubbles = [
    { text: <Trans i18nKey="index:chattingBubble1Mobile" /> },
    { text: <Trans i18nKey="index:chattingBubble2Mobile" /> },
    { text: <Trans i18nKey="index:chattingBubble3Mobile" /> },
    { text: <Trans i18nKey="index:chattingBubble4Mobile" /> },
    { text: <Trans i18nKey="index:chattingBubble5Mobile" /> },
    { text: <Trans i18nKey="index:chattingBubble6Mobile" /> },
    { text: <Trans i18nKey="index:chattingBubble7Mobile" /> },
  ];

  return (
    <MobileBaseContainer className={styles.chattingContentContainer}>
      <SpeechBubbleContainer
        speechBubbles={speechBubbles}
        colorSequence={CHATTING_COLOR_SEQUENCE}
      />
      <Padding y={50} />
      <h2 className={styles.chattingTitle}>
        <Trans i18nKey="index:chattingTitle" />
      </h2>
      <Padding y={16} />
      <p className={styles.chattingDescription}>
        <Trans i18nKey="index:chattingDescription" />
      </p>
      <OnlyKorean>
        <Padding y={16} />
        <IntroVideoBtnInChatting />
      </OnlyKorean>
    </MobileBaseContainer>
  );
};

const KeyFeatureSelector = ({ currentSlide, carouselData }) => {
  const { t } = useI18next();

  const SLIDE_TITLE_WIDTH = 188;
  const additionalOffset = currentSlide * SLIDE_TITLE_WIDTH * -1;

  return (
    <div className={styles.keyFeatureSelector}>
      <button
        type="button"
        className={styles.slideNavButtonPrev}
      >
        <img
          src={svgLeftArrow}
          alt={t("index:featuresNavBack")}
        />
      </button>

      <div
        className={styles.keyFeatureDisplaySlide}
        style={{ width: SLIDE_TITLE_WIDTH }}
      >
        <ul
          className={styles.keyFeatureSlideTitleContainer}
          style={{
            width: SLIDE_TITLE_WIDTH * carouselData.length,
            marginLeft: additionalOffset,
          }}
        >
          {carouselData.map(({ title }, index) => (
            <li
              key={index}
              className={styles.keyFeatureSlideTitle}
              style={{ width: SLIDE_TITLE_WIDTH }}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={styles.slideNavButtonNext}
      >
        <img
          src={svgRightArrow}
          alt={t("index:featuresNavNext")}
        />
      </button>
    </div>
  );
};

const KeyFeatureSlider = ({
  keyFeatureIndex, setActiveIndex, carouselData,
}) => {
  const { nodeRef, isVisible } = useIntersectionObserver();
  const [swiperRef, setSwiperRef] = useState(null);

  const pagination = {
    el: `.keyFeature${keyFeatureIndex} .${styles.keyFeatureDotGroup}`,
    horizontalClass: styles.keyFeatureDotGroup,
    bulletClass: styles.keyFeatureDot,
    bulletActiveClass: styles.selectedKeyFeatureDot,
    clickable: true,
  };
  const navigation = {
    prevEl: `.keyFeature${keyFeatureIndex} .${styles.slideNavButtonPrev}`,
    nextEl: `.keyFeature${keyFeatureIndex} .${styles.slideNavButtonNext}`,
    disabledClass: styles.slideNavButtonDisabled,
  };
  const autoplay = {
    delay: CAROUSEL_INTERVAL,
  };

  useEffect(() => {
    // TODO: 최선인가
    if (swiperRef) {
      if (isVisible) {
        swiperRef.autoplay.start();
      } else {
        swiperRef.autoplay.stop();
      }
    }
  });

  return (
    <div ref={nodeRef}>
      <Swiper
        className={styles.keyFeatureSlider}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={pagination}
        navigation={navigation}
        autoplay={autoplay}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide
            key={index}
            index={index}
          >
            <GatsbyImage
              image={slide.img.childImageSharp.gatsbyImageData}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

const KeyFeature = ({
  keyFeatureIndex, title, description, carouselData,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={cn(styles.keyFeatureContainer, `keyFeature${keyFeatureIndex}`)}
    >
      <MobileBaseContainer className={styles.keyFeatureContentContainer}>
        <h2 className={styles.keyFeatureTitle}>{title}</h2>
        <Padding y={16} />
        <p className={styles.keyFeatureDescription}>{description}</p>
        <Padding y={40} />

        <div className={styles.keyFeatureCarousel}>
          <KeyFeatureSelector
            currentSlide={activeIndex}
            carouselData={carouselData}
          />

          <Padding y={30} />

          <KeyFeatureSlider
            keyFeatureIndex={keyFeatureIndex}
            setActiveIndex={setActiveIndex}
            carouselData={carouselData}
          />

          <Padding y={10} />

          <div className={styles.keyFeatureDotGroup} />
        </div>
      </MobileBaseContainer>
    </section>
  );
};

const KeyFeatures = ({ data, t }) => (
  <>
    <KeyFeature
      keyFeatureIndex={0}
      title={<Trans i18nKey="index:keyFeature1Title" />}
      description={<Trans i18nKey="index:keyFeature1Desc" />}
      carouselData={[
        { title: t("index:keyFeature1Menu1"), img: data.mobileFeature1CustomProducts },
        { title: t("index:keyFeature1Menu2"), img: data.mobileFeature1PrintLabel },
        { title: t("index:keyFeature1Menu3"), img: data.mobileFeature1ProductList },
        { title: t("index:keyFeature1Menu4"), img: data.mobileFeature1ImportExcel },
      ]}
    />

    <KeyFeature
      keyFeatureIndex={1}
      title={<Trans i18nKey="index:keyFeature2Title" />}
      description={<Trans i18nKey="index:keyFeature2Desc" />}
      carouselData={[
        { title: t("index:keyFeature2Menu1"), img: data.mobileFeature2SelectProduct },
        { title: t("index:keyFeature2Menu2"), img: data.mobileFeature2ScanBarcode },
        { title: t("index:keyFeature2Menu3"), img: data.mobileFeature2History },
        { title: t("index:keyFeature2Menu4"), img: data.mobileFeature2ConnectExcel },
      ]}
    />

    <KeyFeature
      keyFeatureIndex={2}
      title={<Trans i18nKey="index:keyFeature3Title" />}
      description={<Trans i18nKey="index:keyFeature3Desc" />}
      carouselData={[
        { title: t("index:keyFeature3Menu1"), img: data.mobileFeature3Analysis },
        { title: t("index:keyFeature3Menu2"), img: data.mobileFeature3GroupList },
        { title: t("index:keyFeature3Menu3"), img: data.mobileFeature3EmailReport },
        { title: t("index:keyFeature3Menu4"), img: data.mobileFeature3Dashboard },
      ]}
    />
  </>
);

const DEFAULT_OFFSET = -95.5;
const DOT_WIDTH = 200;
const OFFSET_PER_DOT = DOT_WIDTH;

const SalesManagementSelector = ({ currentSlide }) => {
  const additionalOffset = currentSlide * OFFSET_PER_DOT * -1;

  return (
    <div className={styles.salesManagementSelectorContainer}>
      <div
        className={styles.salesManagementSelector}
        style={{ marginLeft: DEFAULT_OFFSET + additionalOffset }}
      />
    </div>
  );
};

const SalesManagement = ({ data, t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(0);
  const { nodeRef, isVisible } = useIntersectionObserver();
  const salesManagementData = [
    { title: t("index:salesManagementMenu1"), img: data.mobileFeatureTransaction },
    { title: t("index:salesManagementMenu2"), img: data.mobileFeatureOut },
    { title: t("index:salesManagementMenu3"), img: data.mobileFeatureSalesAnalysis },
  ];

  const pagination = {
    el: `.${styles.salesManagementSelector}`,
    bulletClass: styles.salesManagementDot,
    bulletActiveClass: styles.selectedSalesManagementDot,
    clickable: true,
    renderBullet: (index, className) => {
      const currentData = salesManagementData[index];
      const element = genElementString("button", { class: className, style: `width: ${DOT_WIDTH}px` }, currentData.title);
      return element;
    },
  };
  const autoplay = {
    delay: CAROUSEL_INTERVAL,
  };

  useEffect(() => {
    // TODO: 최선인가
    if (swiperRef) {
      if (isVisible) {
        swiperRef.autoplay.start();
      } else {
        swiperRef.autoplay.stop();
      }
    }
  });

  return (
    <div className={styles.salesManagementContentContainer}>
      <h2 className={styles.salesManagementTitle}>
        <Trans i18nKey="index:salesManagementTitle" />
      </h2>
      <Padding y={16} />
      <p className={styles.salesManagementDesc}>
        <Trans i18nKey="index:salesManagementDesc" />
      </p>

      <Padding y={40} />

      <SalesManagementSelector
        salesManagementData={salesManagementData}
        currentSlide={activeIndex}
      />

      <Padding y={30} />

      <div ref={nodeRef}>
        <Swiper
          className={styles.salesManagementSlider}
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={pagination}
          autoplay={autoplay}
          modules={[Pagination, Autoplay]}
        >
          {salesManagementData.map(({ img, title }, index) => (
            <SwiperSlide
              key={index}
              index={index}
            >
              <GatsbyImage
                image={img.childImageSharp.gatsbyImageData}
                alt={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const TeamPlay = ({ data, t }) => (
  <GradientBG
    className={styles.teamPlayContainer}
    colorSet={["#7D24FF", "#276EFE", "#7F50FE", "#0C92FE"]}
    backgroundColor="#6159F5"
  >
    <MobileBaseContainer className={styles.teamPlayContentContainer}>
      <Padding y={50} />
      <h2 className={styles.teamPlayTitle}>{t("index:teamPlayTitle")}</h2>
      <Padding y={16} />
      <p className={styles.teamPlayDesc}>
        <Trans i18nKey="index:teamPlayDescMobile" />
      </p>
      <Padding y={40} />
      <GatsbyImage
        image={data.mobileTeamPlay.childImageSharp.gatsbyImageData}
        alt={t("index:teamPlayTitle")}
      />
    </MobileBaseContainer>
  </GradientBG>
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
  const customerList = language === "ko" ? data.koCustomers.nodes : data.enCustomers.nodes;

  return (
    <div className={styles.customersSection}>
      <MobileBaseContainer className={styles.customersContentContainer}>
        <h2 className={styles.customersTitle}>
          {t("index:customerSectionTitle")}
        </h2>
        <p className={styles.customersDesc}>
          {t("index:customerSectionDesc")}
        </p>
        <PhotoWall
          items={customerList}
          columnCount={3}
          gap={10}
          ItemRenderer={Customer}
        />
      </MobileBaseContainer>
    </div>
  );
};

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
    { i18nKey: "index:customerTypeCafe", emoji: data.coffeeSmall },
    { i18nKey: "index:customerTypeCosmetics", emoji: data.lipstick },
    { i18nKey: "index:customerTypeFood", emoji: data.burger },
    { i18nKey: "index:customerTypeJewelry", emoji: data.ring },
    { i18nKey: "index:customerTypeElevatorParts", emoji: data.bolt },
    { i18nKey: "index:customerTypeRawMeterial", emoji: data.brick },
    { i18nKey: "index:customerTypeCreativeProduct", emoji: data.tip },
    { i18nKey: "index:customerTypeIcecream", emoji: data.icecream },
    { i18nKey: "index:customerTypeCosmeticSurgery", emoji: data.lip },
    { i18nKey: "index:customerTypePharmacy", emoji: data.pill },
    { i18nKey: "index:customerTypeCinema", emoji: data.movie },
    { i18nKey: "index:customerTypeSupermarket", emoji: data.cart },
    { i18nKey: "index:customerTypeElectronicParts", emoji: data.electronic },
    { i18nKey: "index:customerTypeTea", emoji: data.tea },
    { i18nKey: "index:customerTypeApplianceStore", emoji: data.tv },
    { i18nKey: "index:customerTypeCamera", emoji: data.camera },
    { i18nKey: "index:customerTypeFurniture", emoji: data.chair },
    { i18nKey: "index:customerTypeSticker", emoji: data.puzzle },
    { i18nKey: "index:customerTypeMedicalEquipment", emoji: data.wheelchair },
    { i18nKey: "index:customerTypeMeat", emoji: data.meat },
    { i18nKey: "index:customerTypeAirConditionerParts", emoji: data.hammer },
    { i18nKey: "index:customerTypeComforter", emoji: data.bed },
  ];
}

const SectorCard = ({
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
    <MobileBaseContainer className={styles.customersContainer}>
      <h1 className={styles.customersTitle}>
        <Trans i18nKey="index:customerTitle" />
      </h1>

      <Padding y={40} />

      <div className={styles.customersCardContainer}>
        {customerData.map((customer, index) => (
          <SectorCard
            key={index}
            img={customer.emoji}
            title={t(customer.i18nKey)}
          />
        ))}
        <div className={styles.customersFadeOut} />
      </div>
    </MobileBaseContainer>
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

// div.mobile-index-module--slideDetailDotGroup--15TiY 의 margin-left
const DEFAULT_OFFSET_TO_SELECTED = {
  ko: -46,
  en: -60,
};

// div.mobile-index-module--slideDetailDotBackground--13c-D
const DEFAULT_SELECT_WIDTH = {
  ko: 93,
  en: 121,
};

const FeatureSelector = ({
  language, featureData, activeIndex, slideTo,
}) => {
  // HACK: dom의 offset을 읽어와서 left, width css 조정해서 설정함.
  const [offsetToSelected, setOffsetToSelected] = useState(
    DEFAULT_OFFSET_TO_SELECTED[language] || -71.5,
  );
  const [selectedWidth, setSelectedWidth] = useState(
    DEFAULT_SELECT_WIDTH[language] || 144,
  ); return (
    <div className={styles.slideDetailDotGroupContainer}>
      <div
        key="background"
        className={styles.slideDetailDotBackground}
        style={{ minWidth: selectedWidth }}
      >
        0
      </div>
      <div
        className={styles.slideDetailDotGroup}
        style={{ marginLeft: offsetToSelected }}
      >
        {featureData.map(({ title }, index) => (
          <button
            type="button"
            className={cn(
              styles.slideDetailDot,
              { [styles.slideDetailDotSelected]: activeIndex === index },
            )}
            key={title}
            onClick={(evt) => {
              slideTo(index);
              const dom = evt.target;
              const left = dom.offsetLeft + dom.clientWidth / 2;
              setOffsetToSelected(-left);
              setSelectedWidth(dom.clientWidth + 1);
            }}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

const FeatureDetailLink = ({ currentSlide, featureData }) => {
  const { t } = useI18next();
  return (
    <div className={styles.slideDetailLinkContainer}>
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
    </div>
  );
};

const Features = ({ data, t, language }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const featureData = genFeatureData(data, t);

  const slideTo = (index) => swiperRef.slideTo(index);

  return (
    <div className={styles.featuresContainer}>
      <h2 className={styles.featuresTitle}>
        <Trans i18nKey="index:featuresTitleMobile" />
      </h2>
      <Padding y={40} />

      <FeatureSelector
        language={language}
        featureData={featureData}
        activeIndex={activeIndex}
        slideTo={slideTo}
      />

      <Padding y={25} />

      <Swiper
        className={styles.sliderWrapper}
        allowTouchMove={false}
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

      <Padding y={30} />

      <FeatureDetailLink
        currentSlide={activeIndex}
        featureData={featureData}
      />
    </div>
  );
};

const StartNow = ({ data, t }) => (
  <MobileBaseContainer className={styles.startNowContainer}>
    <h2 className={styles.startNowTitle}>
      <Trans i18nKey="index:startNowTitleMobile" />
    </h2>
    <Padding y={40} />
    <GatsbyImage
      image={data.mobileHomeStartNow.childImageSharp.gatsbyImageData}
      alt={t("index:startNowTitle")}
      style={{ margin: "0 auto" }}
    />
    <Padding y={40} />
    <p className={styles.startNowDescription}>
      <Trans i18nKey="index:startNowDescription" />
    </p>
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
  </MobileBaseContainer>
);

const MobileIndex = ({ data, language, t }) => (
  <IntersectionObserverProvider threshold={1}>
    <MobileLayout
      isFloatMenu
      closingEmoji={data.mobileCoffee}
      closingMsg={<Trans i18nKey="index:closingMsgMobile" />}
    >
      <Top
        data={data}
        t={t}
      />

      <Customers data={data} />

      <Chatting />

      <KeyFeatures
        data={data}
        t={t}
      />

      <SalesManagement
        data={data}
        t={t}
        language={language}
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
        language={language}
      />

      <StartNow
        data={data}
        t={t}
      />
    </MobileLayout>
  </IntersectionObserverProvider>
);

export default MobileIndex;
