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
  ContainerCenter,
  Padding,
  SpeechBubbleContainer,
  WithCurrentSlide,
  GradientBG,
  AppDownloadLink,
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
  return (
    <div className={styles.KeyFeatureSelector}>
      <ButtonBack className={styles.slideNavButton}>
        <img
          src={svgLeftArrow}
          alt={t("index:featuresNavBack")}
        />
      </ButtonBack>
      <WithCurrentSlide>
        {(currentSlide) => (
          <div className={styles.keyFeatureSlideTitle}>
            <img
              src={carouselData[currentSlide].icon}
              alt={carouselData[currentSlide].title}
            />
            {carouselData[currentSlide].title}
          </div>
        )}
      </WithCurrentSlide>
      <ButtonNext className={styles.slideNavButton}>
        <img
          src={svgRightArrow}
          alt={t("index:featuresNavNext")}
        />
      </ButtonNext>
    </div>
  );
};

const KeyFeature = ({
  title, description, carouselData,
}) => (
  <div className={styles.keyFeatureContainer}>
    <MobileBaseContainer className={styles.keyFeatureContentContainer}>
      <h2 className={styles.keyFeatureTitle}>{title}</h2>
      <Padding y={16} />
      <p className={styles.keyFeatureDescription}>{description}</p>
      <Padding y={40} />

      <CarouselProvider
        naturalSlideWidth={335}
        naturalSlideHeight={388}
        totalSlides={carouselData.length}
        isIntrinsicHeight
      >
        <KeyFeatureSelector carouselData={carouselData} />

        <Padding y={30} />

        <Slider>
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

        <Padding y={10} />

        <DotGroup className={styles.keyFeatureDotGroup} />
      </CarouselProvider>
    </MobileBaseContainer>
  </div>
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

const SalesManagementSelectorKOR = ({ salesManagementData }) => (
  <DotGroup className={styles.salesManagementSelectorKOR}>
    {salesManagementData.map(({ title }, index) => (
      <Dot
        key={index}
        slide={index}
        className={styles.salesManagementDotKOR}
      >
        {title}
      </Dot>
    ))}
  </DotGroup>
);

function renderSalesManagementDots(
  allData,
  setOffsetToSelected,
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
        className={`${styles.salesManagementDot} ${
          selected ? styles.salesManagementDotSelected : ""
        }`}
        onClick={(evt) => {
          const dom = evt.target;
          const left = dom.offsetLeft + dom.clientWidth / 2;
          setOffsetToSelected(-left);
        }}
      >
        {allData[slide].title}
      </Dot>,
    );
  }
  return dots;
}

// div.carousel__dot-group mobile-index-module--salesManagementSelector--GSaLI 의 margin-left
const SM_DEFAULT_OFFSET_TO_SELECTED = {
  en: -80.5,
  es: -163,
  id: -69.5,
};

const SalesManagementSelector = ({
  language, salesManagementData,
}) => {
  // HACK: dom의 offset을 읽어와서 left, width css 조정해서 설정함.
  const [offsetToSelected, setOffsetToSelected] = React.useState(
    SM_DEFAULT_OFFSET_TO_SELECTED[language] || -71.5,
  );

  return (
    <div className={styles.salesManagementSelectorContainer}>
      <DotGroup
        className={styles.salesManagementSelector}
        style={{ marginLeft: offsetToSelected }}
        renderDots={(props) => renderSalesManagementDots(
          salesManagementData,
          setOffsetToSelected,
          props,
        )}
      />
    </div>
  );
};

const SalesManagement = ({ data, t, language }) => {
  const salesManagementData = [
    { title: t("index:salesManagementMenu1"), img: data.mobileFeatureTransaction },
    { title: t("index:salesManagementMenu2"), img: data.mobileFeatureOut },
    { title: t("index:salesManagementMenu3"), img: data.mobileFeatureSalesAnalysis },
  ];

  return (
    <MobileBaseContainer className={styles.salesManagementContentContainer}>
      <CarouselProvider
        naturalSlideWidth={335}
        naturalSlideHeight={276}
        totalSlides={salesManagementData.length}
      >
        <h2 className={styles.salesManagementTitle}>
          <Trans i18nKey="index:salesManagementTitle" />
        </h2>
        <Padding y={16} />
        <p className={styles.salesManagementDesc}>
          <Trans i18nKey="index:salesManagementDesc" />
        </p>

        <Padding y={40} />

        {language === "ko" ? (
          <SalesManagementSelectorKOR
            salesManagementData={salesManagementData}
          />
        ) : (
          <SalesManagementSelector
            language={language}
            salesManagementData={salesManagementData}
          />
        )}

        <Padding y={30} />

        <Slider>
          {salesManagementData.map(({ img, title }, index) => (
            <Slide
              innerClassName={styles.salesManagementSlide}
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
    </MobileBaseContainer>
  );
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
