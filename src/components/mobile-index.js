/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Dot,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  Padding,
  SpeechBubbleContainer,
  GradientBG,
  useCurrentSlide,
} from "./common";
import * as constants from "./constants";
// css
import * as styles from "./mobile-index.module.css";
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
import svgLeftArrow from "../images/icon-mobile-left-arrow.svg";
import svgRightArrow from "../images/icon-mobile-right-arrow.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";

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
    </MobileBaseContainer>
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

const Chatting = ({ t }) => {
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
      <h2 className={styles.chattingTitle}>{t("index:chattingTitle")}</h2>
      <Padding y={16} />
      <p className={styles.chattingDescription}>
        <Trans i18nKey="index:chattingDescription" />
      </p>
    </MobileBaseContainer>
  );
};

const KeyFeatureSelector = ({ carouselData }) => {
  const { t } = useI18next();
  const { currentSlide } = useCurrentSlide();

  return (
    <MobileBaseContainer className={styles.KeyFeatureSelector}>
      <ButtonBack className={styles.slideNavButton}>
        <img
          src={svgLeftArrow}
          alt={t("index:featuresNavBack")}
        />
      </ButtonBack>
      <div className={styles.keyFeatureSlideTitle}>
        <img
          src={carouselData[currentSlide].icon}
          alt={carouselData[currentSlide].title}
        />
        {carouselData[currentSlide].title}
      </div>
      <ButtonNext className={styles.slideNavButton}>
        <img
          src={svgRightArrow}
          alt={t("index:featuresNavNext")}
        />
      </ButtonNext>
    </MobileBaseContainer>
  );
};

const KeyFeature = ({
  title, description, carouselData,
}) => (
  <section className={styles.keyFeatureContainer}>
    <MobileBaseContainer className={styles.keyFeatureContentContainer}>
      <h2 className={styles.keyFeatureTitle}>{title}</h2>
      <Padding y={16} />
      <p className={styles.keyFeatureDescription}>{description}</p>
      <Padding y={40} />
    </MobileBaseContainer>
    <CarouselProvider
      naturalSlideWidth={375}
      naturalSlideHeight={0}
      totalSlides={carouselData.length}
      touchEnabled={false}
      isIntrinsicHeight
    >
      <KeyFeatureSelector carouselData={carouselData} />

      <Padding y={30} />

      <MobileBaseContainer>
        <Slider className={styles.keyFeatureSlider}>
          {carouselData.map((slide, index) => (
            <Slide
              key={index}
              index={index}
            >
              <GatsbyImage
                image={slide.img.childImageSharp.gatsbyImageData}
                alt={slide.title}
              />
            </Slide>
          ))}
        </Slider>
      </MobileBaseContainer>

      <Padding y={10} />

      <DotGroup className={styles.keyFeatureDotGroup} />
    </CarouselProvider>
  </section>
);

const KeyFeatures = ({ data, t }) => (
  <>
    <KeyFeature
      title={<Trans i18nKey="index:keyFeature1Title" />}
      description={<Trans i18nKey="index:keyFeature1Desc" />}
      carouselData={[
        { icon: svgCategory, title: t("index:keyFeature1Menu1"), img: data.mobileFeature1CustomProducts },
        { icon: svgScanning, title: t("index:keyFeature1Menu2"), img: data.mobileFeature1PrintLabel },
        { icon: svgImage, title: t("index:keyFeature1Menu3"), img: data.mobileFeature1ProductList },
        { icon: svgExcel, title: t("index:keyFeature1Menu4"), img: data.mobileFeature1ImportExcel },
      ]}
    />

    <KeyFeature
      title={<Trans i18nKey="index:keyFeature2Title" />}
      description={<Trans i18nKey="index:keyFeature2Desc" />}
      carouselData={[
        { icon: svgFinger, title: t("index:keyFeature2Menu1"), img: data.mobileFeature2SelectProduct },
        { icon: svgMobileScan, title: t("index:keyFeature2Menu2"), img: data.mobileFeature2ScanBarcode },
        { icon: svgHistory, title: t("index:keyFeature2Menu3"), img: data.mobileFeature2History },
        { icon: svgConnectExcel, title: t("index:keyFeature2Menu4"), img: data.mobileFeature2ConnectExcel },
      ]}
    />

    <KeyFeature
      title={<Trans i18nKey="index:keyFeature3Title" />}
      description={<Trans i18nKey="index:keyFeature3Desc" />}
      carouselData={[
        { icon: svgGraph, title: t("index:keyFeature3Menu1"), img: data.mobileFeature3Analysis },
        { icon: svgList, title: t("index:keyFeature3Menu2"), img: data.mobileFeature3GroupList },
        { icon: svgSummary, title: t("index:keyFeature3Menu3"), img: data.mobileFeature3EmailReport },
        { icon: svgDashboard, title: t("index:keyFeature3Menu4"), img: data.mobileFeature3Dashboard },
      ]}
    />
  </>
);

const DEFAULT_OFFSET = -95.5;
const DOT_WIDTH = 200;
const OFFSET_PER_DOT = DOT_WIDTH;

const SalesManagementSelector = ({
  salesManagementData,
}) => {
  const { currentSlide } = useCurrentSlide();
  const additionalOffset = currentSlide * OFFSET_PER_DOT * -1;

  return (
    <div className={styles.salesManagementSelectorContainer}>
      <DotGroup
        className={styles.salesManagementSelector}
        style={{ marginLeft: DEFAULT_OFFSET + additionalOffset }}
      >
        {salesManagementData.map(({ title }, index) => (
          <Dot
            key={index}
            slide={index}
            className={styles.salesManagementDot}
            style={{
              width: DOT_WIDTH,
            }}
          >
            {title}
          </Dot>
        ))}
      </DotGroup>
    </div>
  );
};

const SalesManagement = ({ data, t }) => {
  const salesManagementData = [
    { title: t("index:salesManagementMenu1"), img: data.mobileFeatureTransaction },
    { title: t("index:salesManagementMenu2"), img: data.mobileFeatureOut },
    { title: t("index:salesManagementMenu3"), img: data.mobileFeatureSalesAnalysis },
  ];

  return (
    <CarouselProvider
      className={styles.salesManagementContentContainer}
      naturalSlideWidth={335}
      naturalSlideHeight={276}
      interval={3000}
      isPlaying
      totalSlides={salesManagementData.length}
      touchEnabled={false}
    >
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
      />

      <Padding y={30} />

      <Slider className={styles.salesManagementSlider}>
        {salesManagementData.map(({ img, title }, index) => (
          <Slide
            key={index}
            index={index}
          >
            <GatsbyImage
              image={img.childImageSharp.gatsbyImageData}
              alt={title}
            />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
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

const Customers = ({ data, t }) => {
  const customerData = genCustomerData(data);

  return (
    <MobileBaseContainer className={styles.customersContainer}>
      <h1 className={styles.customersTitle}>
        <Trans i18nKey="index:customerTitle" />
      </h1>
      <Padding y={16} />
      <p className={styles.customersDesc}>
        <Trans i18nKey="index:customerDesc" />
      </p>

      <Padding y={40} />

      <div className={styles.customersCardContainer}>
        {customerData.map((customer, index) => (
          <CustomerCard
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
  );
};

const FeatureDetailLink = ({ t, featureData }) => {
  const { currentSlide } = useCurrentSlide();
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
      <h2 className={styles.featuresTitle}>
        <Trans i18nKey="index:featuresTitleMobile" />
      </h2>
      <Padding y={40} />

      <FeatureSelector
        data={data}
        t={t}
        language={language}
        featureData={featureData}
      />

      <Padding y={25} />

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

      <FeatureDetailLink
        t={t}
        featureData={featureData}
      />
    </CarouselProvider>
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
  <MobileLayout
    isFloatMenu
    closingEmoji={data.mobileCoffee}
    closingMsg={<Trans i18nKey="index:closingMsgMobile" />}
  >
    <Top
      data={data}
      t={t}
    />

    <Chatting t={t} />

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

    <Customers
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
);

export default MobileIndex;
