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
  StartNowButton,
  GradientBG,
  SpeechBubbleContainer,
} from "./common";
import { useCurrentSlide } from "../hooks/use-current-slide";
import * as constants from "./constants";
// css
import * as styles from "./desktop-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgConsulting from "../images/icon-consulting.svg";
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
import CustomDotGroup from "./custom-dot-group";

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

const TopTitleAndDescription = () => (
  <>
    <div className={styles.topLeftTitle}>
      <Trans i18nKey="index:topTitle" />
    </div>
    <Padding y={30} />
    <div className={styles.topLeftDescription}>
      <Trans i18nKey="index:topDesc" />
    </div>
  </>
);

const TopLeftContainerOfKorea = ({ t }) => (
  <div>
    <TopTitleAndDescription />
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
    <a href={constants.urlConsulting}>
      <button
        type="button"
        className={styles.consultingButton}
      >
        <img
          className={styles.topButtonIcon}
          src={svgConsulting}
          alt={t("index:topIconAlt")}
        />
        무료 컨설팅 받기
      </button>
    </a>
  </div>
);

const TopLeftContainer = ({ t }) => (
  <div className={styles.topLeftContainer}>
    <img
      src={svgVolt}
      alt={t("index:topIconAlt")}
    />
    <Padding y={17} />
    <TopTitleAndDescription />
    <Padding y={30} />
    <StartNowButton className={styles.startNowButton}>
      {t("index:topStartNowButton")}
    </StartNowButton>
  </div>
);

const TopLeftContainerByLanguage = ({ t, language }) => (
  language === "ko" ? (
    <TopLeftContainerOfKorea t={t} />
  ) : (
    <TopLeftContainer t={t} />
  )
);

const Top = ({ data, t, language }) => (
  <GradientBG
    className={styles.topContainer}
    colorSet={["#8122ff", "#854afe", "#4260ef", "#00b0f8"]}
    backgroundColor="#4260ef"
  >
    <DesktopBaseContainer className={styles.topContentContainer}>
      <TopLeftContainerByLanguage
        t={t}
        language={language}
      />
      <div className={styles.topRightContainer}>
        <GatsbyImage
          image={data.homeTopRight.childImageSharp.gatsbyImageData}
          alt={t("index:topIconAlt")}
        />
      </div>
    </DesktopBaseContainer>
  </GradientBG>
);

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
        <div className={styles.chattingTitle}>{t("index:chattingTitle")}</div>
        <Padding y={16} />
        <div className={styles.chattingDescription}>
          <Trans i18nKey="index:chattingDescription" />
        </div>
      </DesktopBaseContainer>
    </div>
  );
};

const KeyFeatureDescription = ({ title, description, carouselData }) => (
  <div className={styles.KeyFeatureDescriptionContainer}>
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

const KeyFeatureSlider = ({ carouselData }) => (
  <Slider className={styles.keyFeatureSlider}>
    {carouselData.map(({ img, title }, index) => (
      <Slide
        innerClassName={styles.keyFeatureSlide}
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

const KeyFeatures = ({ data, t }) => {
  const keyFeatureData = genKeyFeatureData(data, t);

  return (
    <>
      <KeyFeature totalSlides={keyFeatureData[0].length}>
        <KeyFeatureDescription
          title={<Trans i18nKey="index:keyFeature1Title" />}
          description={<Trans i18nKey="index:keyFeature1Desc" />}
          carouselData={keyFeatureData[0]}
        />
        <KeyFeatureSlider
          carouselData={keyFeatureData[0]}
        />
      </KeyFeature>

      <KeyFeature totalSlides={keyFeatureData[1].length}>
        <KeyFeatureSlider
          carouselData={keyFeatureData[1]}
        />
        <KeyFeatureDescription
          title={<Trans i18nKey="index:keyFeature2Title" />}
          description={<Trans i18nKey="index:keyFeature2Desc" />}
          carouselData={keyFeatureData[1]}
        />
      </KeyFeature>

      <KeyFeature totalSlides={keyFeatureData[2].length}>
        <KeyFeatureDescription
          title={<Trans i18nKey="index:keyFeature3Title" />}
          description={<Trans i18nKey="index:keyFeature3Desc" />}
          carouselData={keyFeatureData[2]}
        />
        <KeyFeatureSlider
          carouselData={keyFeatureData[2]}
        />
      </KeyFeature>
    </>
  );
};

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

const Customers = ({ data, t }) => {
  const customerData = genCustomerData(data);

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

        <FeatureDetailLink
          t={t}
          featureData={featureData}
        />
      </CarouselProvider>
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

    <Customers
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
