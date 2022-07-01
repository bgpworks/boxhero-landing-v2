/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

/* eslint-disable import/no-unresolved */

import React, { useEffect, useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
import YouTube from "react-youtube";
import cn from "classnames";
import { IntersectionObserverProvider, useIntersectionObserver } from "../hooks/use-intersection-observer";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  Padding,
  PhotoWall,
  AppInstallButton,
  ConsultingButton,
  OnlyKorean,
  OnlyEnglish,
} from "./common";
import * as constants from "./constants";
import { usePreviousValue } from "../hooks/use-previous-value";
import { useConstrainedSize } from "../hooks/use-constrained-size";
// css
import "swiper/css";
import * as styles from "./mobile-index.module.css";
// img
import svgLeftArrow from "../images/icon-mobile-left-arrow.svg";
import svgRightArrow from "../images/icon-mobile-right-arrow.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";

const CAROUSEL_INTERVAL = 3000;
const genLeftOffsetTransform = (offset) => `translate3d(${offset}px, 0, 0)`;

const RATIO = { W: 16, H: 9 };

const Youtube = () => {
  const {
    constrainedSize,
    containerRef,
  } = useConstrainedSize(RATIO.W, RATIO.H);
  const isBrowser = typeof window !== "undefined";

  return (
    <div
      ref={containerRef}
      className={styles.playerWrapper}
    >
      {constrainedSize && isBrowser && (
        <YouTube
          className={styles.player}
          videoId={constants.introVideoYoutubeIdKo}
          opts={{
            playerVars: {
              origin: window.location.origin,
              autoplay: 1,
              controls: 0,
              playsinline: 1,
              rel: 0,
              modestbranding: 1,
              loop: 1,
              playlist: constants.introVideoYoutubeIdKo,
            },
            ...constrainedSize,
          }}
        />
      )}
    </div>
  );
};

const Top = ({ data }) => {
  const { t, language } = useI18next();

  return (
    <div className={cn({ [styles.darkBg]: language === "en" })}>
      <MobileBaseContainer className={styles.topContentContainer}>
        <p className={styles.topDescription}>
          <Trans i18nKey="index:topDescMobile" />
        </p>
        <Padding y={16} />
        <h2 className={styles.topTitle}>
          <Trans i18nKey="index:topTitleMobile" />
        </h2>
        <Padding y={40} />
        <AppInstallButton label={t("usecase:appInstall")} />
        <Padding y={10} />
        <ConsultingButton
          className={styles.consultingButton}
          transparent={false}
        />
      </MobileBaseContainer>
      <OnlyKorean>
        <Padding y={50} />
        <Youtube />
      </OnlyKorean>
      <OnlyEnglish>
        <Padding y={40} />
        <GatsbyImage
          image={data.main.childImageSharp.gatsbyImageData}
          alt="BoxHero"
        />
      </OnlyEnglish>
    </div>
  );
};

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
    <MobileBaseContainer className={styles.customersContentContainer}>
      <h2 className={styles.customersTitle}>
        <Trans i18nKey="index:customerSectionTitle" />
      </h2>
      <Padding y={16} />
      <p className={styles.customersDesc}>
        {t("index:customerSectionDesc")}
      </p>
      <Padding y={40} />
      <PhotoWall
        items={customerList}
        columnCount={3}
        gap={10}
        ItemRenderer={Customer}
      />
    </MobileBaseContainer>
  );
};

const KeyFeatureDotGroup = ({ keyFeatureData, activeIndex }) => {
  const swiper = useSwiper();

  return (
    <div className={styles.keyFeatureDotGroup}>
      {keyFeatureData.map(({ title }, index) => (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          key={title}
          type="button"
          className={styles.keyFeatureDot}
          disabled={activeIndex === index}
          onClick={() => swiper.slideTo(index)}
        />
      ))}
    </div>
  );
};

const KeyFeatureSelector = ({ keyFeatureData, activeIndex }) => {
  const { t } = useI18next();
  const swiper = useSwiper();

  const SLIDE_TITLE_WIDTH = 212;
  const additionalOffset = activeIndex * SLIDE_TITLE_WIDTH * -1;

  const isFirstIndex = activeIndex === 0;
  const isLastIndex = activeIndex === keyFeatureData.length - 1;

  return (
    <div className={styles.keyFeatureSelector}>
      <button
        type="button"
        className={styles.slideNavButton}
        disabled={isFirstIndex}
        onClick={() => swiper.slidePrev()}
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
            width: SLIDE_TITLE_WIDTH * keyFeatureData.length,
            transform: genLeftOffsetTransform(additionalOffset),
          }}
        >
          {keyFeatureData.map(({ title }, index) => (
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
        className={styles.slideNavButton}
        disabled={isLastIndex}
        onClick={() => swiper.slideNext()}
      >
        <img
          src={svgRightArrow}
          alt={t("index:featuresNavNext")}
        />
      </button>
    </div>
  );
};

const KeyFeature = ({ title, keyFeatureData }) => {
  const { nodeRef, isVisible, everVisible } = useIntersectionObserver();
  const isFirstVisible = isVisible && !everVisible;
  const prevIsFirstVisible = usePreviousValue(isFirstVisible);

  const swiperRef = useRef(null);
  const setSwiperRef = (swiper) => {
    swiperRef.current = swiper;
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplay = {
    delay: CAROUSEL_INTERVAL,
  };

  useEffect(() => {
    if (isFirstVisible && prevIsFirstVisible !== isFirstVisible) {
      setTimeout(() => {
        swiperRef.current.slideNext();
      }, 500);
    }
  });

  useEffect(() => {
    if (swiperRef && swiperRef.current) {
      if (isVisible) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  });

  return (
    <section className={styles.keyFeatureContainer}>
      <MobileBaseContainer className={styles.keyFeatureContentContainer}>
        <h2 className={styles.keyFeatureTitle}>{title}</h2>
        <Padding y={40} />

        <div
          ref={nodeRef}
          className={styles.keyFeatureCarousel}
        >
          <Swiper
            className={styles.keyFeatureSlider}
            onSwiper={setSwiperRef}
            onSlideChange={(changedSwiper) => setActiveIndex(changedSwiper.activeIndex)}
            autoplay={autoplay}
            modules={[Autoplay]}
          >
            <div slot="container-start">
              <KeyFeatureSelector
                keyFeatureData={keyFeatureData}
                activeIndex={activeIndex}
              />
              <Padding y={30} />
            </div>
            {keyFeatureData.map((slide, index) => (
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
            <div slot="container-end">
              <Padding y={10} />
              <KeyFeatureDotGroup
                keyFeatureData={keyFeatureData}
                activeIndex={activeIndex}
              />
            </div>
          </Swiper>
        </div>
      </MobileBaseContainer>
    </section>
  );
};

const KeyFeatures = ({ data }) => {
  const { t } = useI18next();

  return (
    <>
      <KeyFeature
        title={<Trans i18nKey="index:keyFeature1Title" />}
        keyFeatureData={[
          { title: t("index:keyFeature1Menu1"), img: data.featureSelectProduct },
          { title: t("index:keyFeature1Menu2"), img: data.featureHistory },
          { title: t("index:keyFeature1Menu3"), img: data.featureSettingRole },
        ]}
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature2Title" />}
        keyFeatureData={[
          { title: t("index:keyFeature2Menu1"), img: data.featureMove },
          { title: t("index:keyFeature2Menu2"), img: data.featureOut },
          { title: t("index:keyFeature2Menu3"), img: data.featureTransaction },
        ]}
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature3Title" />}
        keyFeatureData={[
          { title: t("index:keyFeature3Menu1"), img: data.featureScanBarcode },
          { title: t("index:keyFeature3Menu2"), img: data.featurePrintLabel },
          { title: t("index:keyFeature3Menu3"), img: data.featureOutDetail },
        ]}
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature4Title" />}
        keyFeatureData={[
          { title: t("index:keyFeature4Menu1"), img: data.featureAllInOne },
          { title: t("index:keyFeature4Menu2"), img: data.featureQuantity },
          { title: t("index:keyFeature4Menu3"), img: data.featureIntegration },
        ]}
      />
    </>
  );
};

const StartButtons = () => {
  const { t } = useI18next();

  return (
    <MobileBaseContainer className={styles.startButtons}>
      <p className={styles.startButtonsDesc}>{t("index:topDesc")}</p>
      <Padding y={16} />
      <h2 className={styles.startButtonsTitle}>
        <Trans i18nKey="index:startButtonsTitleMobile" />
      </h2>
      <Padding y={40} />
      <div className={styles.buttons}>
        <AppInstallButton label={t("usecase:appInstall")} />
        <Padding y={10} />
        <ConsultingButton
          className={styles.consultingButton}
          transparent={false}
        />
      </div>
    </MobileBaseContainer>
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
  <div className={styles.sectorCard}>
    <GatsbyImage
      image={img.childImageSharp.gatsbyImageData}
      alt={title}
    />
    <Padding x={4} />
    {title}
  </div>
);

const Sectors = ({ data }) => {
  const customerData = genCustomerData(data);
  const { t } = useI18next();

  return (
    <div className={styles.sectorsContainer}>
      <MobileBaseContainer className={styles.sectorsContentContainer}>
        <h1 className={styles.sectorsTitle}>
          <Trans i18nKey="index:customerTitleMobile" />
        </h1>

        <Padding y={40} />

        <div className={styles.sectorsCardContainer}>
          {customerData.map((customer, index) => (
            <SectorCard
              key={index}
              img={customer.emoji}
              title={t(customer.i18nKey)}
            />
          ))}
          <div className={styles.sectorsFadeOut} />
        </div>
      </MobileBaseContainer>
    </div>
  );
};

function genFeatureData(data, t) {
  return [
    {
      title: t("index:featureLocationManagement"),
      subTitle: t("index:featureDescLocationManagement"),
      img: data.featureLocation.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureTransactionStats"),
      subTitle: t("index:featureDescTransactionStats"),
      img: data.featureSummary.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureViewPastQuantity"),
      subTitle: t("index:featureDescViewPastQuantity"),
      img: data.featureViewPastQuantity.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureSettingRole"),
      subTitle: t("index:featureDescSettingRole"),
      img: data.featureSettingMembers.childImageSharp.gatsbyImageData,
    },
    {
      title: t("index:featureAnalysis"),
      subTitle: t("index:featureDescAnalysis"),
      img: data.featureAnalysis.childImageSharp.gatsbyImageData,
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
  ko: 95,
  en: 121,
};

const FeatureSelector = ({
  featureData, activeIndex, slideTo,
}) => {
  const { language } = useI18next();

  // HACK: dom의 offset을 읽어와서 left, width css 조정해서 설정함.
  const [offsetToSelected, setOffsetToSelected] = useState(
    DEFAULT_OFFSET_TO_SELECTED[language] || -71.5,
  );
  const [selectedWidth, setSelectedWidth] = useState(
    DEFAULT_SELECT_WIDTH[language] || 144,
  );

  const calcLeftOffset = (dom) => (dom.offsetLeft + dom.clientWidth / 2) * -1;

  return (
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
        style={{ transform: genLeftOffsetTransform(offsetToSelected) }}
      >
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
              onClick={(evt) => {
                slideTo(index);
                const dom = evt.target;
                const left = calcLeftOffset(dom);
                setOffsetToSelected(left);
                setSelectedWidth(dom.clientWidth + 1);
              }}
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Features = ({ data }) => {
  const swiperRef = useRef(null);
  const setSwiperRef = (swiper) => {
    swiperRef.current = swiper;
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useI18next();
  const featureData = genFeatureData(data, t);

  const slideTo = (index) => swiperRef.current.slideTo(index);

  return (
    <MobileBaseContainer className={styles.featuresContainer}>
      <h2 className={styles.featuresTitle}>
        <Trans i18nKey="index:featuresTitleMobile" />
      </h2>
      <Padding y={40} />

      <FeatureSelector
        featureData={featureData}
        activeIndex={activeIndex}
        slideTo={slideTo}
      />

      <Padding y={40} />

      <h3 className={styles.featureSubTitle}>{featureData[activeIndex].subTitle}</h3>

      <Padding y={20} />

      <div className={styles.featureSwiperWrapper}>
        <Swiper
          className={styles.featureSwiper}
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

      </div>

      <Padding y={35} />

      <Link
        to="/features"
        className={styles.slideDetailLink}
      >
        {t("index:featuresDetailLink")}
        <img
          src={svgSmallRightBlue}
          className={styles.rightArrow}
          alt={t("index:featuresDetailLink")}
        />
      </Link>
    </MobileBaseContainer>
  );
};

const Partners = ({ data }) => (
  <div className={styles.partnersContainer}>
    <MobileBaseContainer className={styles.partnersContentContainer}>
      <h3 className={styles.partnersTitle}>
        <Trans i18nKey="index:partnersTitle" />
      </h3>
      <Padding y={20} />
      <div className={styles.partners}>
        <GatsbyImage
          image={data.kakaoventures.childImageSharp.gatsbyImageData}
          alt="kakaoventures"
        />
        <GatsbyImage
          image={data.tips.childImageSharp.gatsbyImageData}
          alt="tips"
        />
      </div>
    </MobileBaseContainer>
  </div>
);

const MobileIndex = ({ data }) => (
  <IntersectionObserverProvider threshold={1}>
    <MobileLayout>
      <Top data={data} />

      <Customers data={data} />

      <KeyFeatures data={data} />

      <StartButtons />

      <Sectors data={data} />

      <Features data={data} />

      <Partners data={data} />
    </MobileLayout>
  </IntersectionObserverProvider>
);

export default MobileIndex;
