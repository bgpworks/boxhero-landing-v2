/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

/* eslint-disable import/no-unresolved */

import React, { useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useI18next, Link, Trans } from "gatsby-plugin-react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";
import cn from "classnames";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  StartNowButton,
  ConsultingButton,
  PhotoWall,
  OnlyKorean,
} from "./common";
import * as constants from "./constants";
// css
import "swiper/css";
import * as styles from "./desktop-index.module.css";
// img
import iconVolt from "../images/volt.svg";
import iconMobileScan from "../images/icon-mobile-scan.svg";
import iconSummary from "../images/icon-summary.svg";
import iconMemberRole from "../images/icon-member-role.svg";
import iconMove from "../images/icon-move.svg";
import iconInOut from "../images/icon-inout.svg";
import iconTransaction from "../images/icon-transaction.svg";
import iconScanning from "../images/icon-scanning.svg";
import iconAddItem from "../images/feature-additem.svg";
import iconSync from "../images/icon-sync.svg";
import iconEye from "../images/icon-viewer.svg";
import iconLink from "../images/icon-link.svg";
import iconSmallRightBlue from "../images/smallright-blue.svg";
import iconSwipeLeft from "../images/swipeleft.svg";
import iconSwipeRight from "../images/swiperight.svg";

function genKeyFeaturesData(data, t) {
  return [
    [
      { icon: iconMobileScan, title: t("index:keyFeature1Menu1"), img: data.featureSelectProduct.childImageSharp.gatsbyImageData },
      { icon: iconSummary, title: t("index:keyFeature1Menu2"), img: data.featureHistory.childImageSharp.gatsbyImageData },
      { icon: iconMemberRole, title: t("index:keyFeature1Menu3"), img: data.featureSettingRole.childImageSharp.gatsbyImageData },
    ],
    [
      { icon: iconMove, title: t("index:keyFeature2Menu1"), img: data.featureMove.childImageSharp.gatsbyImageData },
      { icon: iconInOut, title: t("index:keyFeature2Menu2"), img: data.featureOut.childImageSharp.gatsbyImageData },
      { icon: iconTransaction, title: t("index:keyFeature2Menu3"), img: data.featureTransaction.childImageSharp.gatsbyImageData },
    ],
    [
      { icon: iconScanning, title: t("index:keyFeature3Menu1"), img: data.featureScanBarcode.childImageSharp.gatsbyImageData },
      { icon: iconAddItem, title: t("index:keyFeature3Menu2"), img: data.featurePrintLabel.childImageSharp.gatsbyImageData },
      { icon: iconSync, title: t("index:keyFeature3Menu3"), img: data.featureOutDetail.childImageSharp.gatsbyImageData },
    ],
    [
      { icon: iconEye, title: t("index:keyFeature4Menu1"), img: data.featureAllInOne.childImageSharp.gatsbyImageData },
      { icon: iconVolt, title: t("index:keyFeature4Menu2"), img: data.featureQuantity.childImageSharp.gatsbyImageData },
      { icon: iconLink, title: t("index:keyFeature4Menu3"), img: data.featureIntegration.childImageSharp.gatsbyImageData },
    ],
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

const Top = () => {
  const { t } = useI18next();
  return (
    <div className={styles.topContainer}>
      <DesktopBaseContainer className={styles.topContentContainer}>
        <div className={styles.topDescription}>
          <Trans i18nKey="index:topDesc" />
        </div>
        <Padding y={12} />
        <div className={styles.topTitle}>
          <Trans i18nKey="index:topTitle" />
        </div>
        <Padding y={48} />
        <div className={styles.buttons}>
          <StartNowButton className={styles.startNowButton}>
            <img
              className={styles.topButtonIcon}
              src={iconVolt}
              alt={t("index:topIconAlt")}
            />
            {t("index:topStartNowButton")}
          </StartNowButton>
          <Padding x={16} />
          <ConsultingButton transparent={false} />
        </div>
        <OnlyKorean>
          <Padding y={72} />
          <YouTube
            className={styles.video}
            videoId={constants.introVideoYoutubeIdKo}
            opts={{
              width: "990",
              height: "556.875",
              playerVars: {
                origin: window.location.origin,
                autoplay: 1,
                controls: 1,
                playsinline: 1,
                rel: 0,
                modestbranding: 1,
                loop: 1,
                playlist: constants.introVideoYoutubeIdKo,
              },
            }}
          />
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

const KeyFeature = ({
  title, carouselData, direction,
}) => {
  const swiperRef = useRef(null);
  const setSwiperRef = (swiper) => {
    swiperRef.current = swiper;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const slideTo = (index) => swiperRef.current.slideTo(index);

  const isReverse = direction === "reverse";

  return (
    <div className={styles.keyFeatureContainer}>
      <DesktopBaseContainer>
        <Swiper
          className={styles.keyFeatureContentContainer}
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          direction="vertical"
        >
          <div slot={isReverse ? "container-end" : "container-start"}>
            <div className={styles.KeyFeatureDescriptionContainer}>
              <div className={styles.keyFeatureTitle}>{title}</div>
              <Padding y={60} />
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
          </div>
          {carouselData.map((data, index) => (
            <SwiperSlide
              className={cn(
                styles.keyFeatureSlide,
                { [styles.keyFeatureSlideLeft]: isReverse },
              )}
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
      </DesktopBaseContainer>
    </div>
  );
};

const KeyFeatures = ({ data }) => {
  const { t } = useI18next();
  const keyFeaturesData = genKeyFeaturesData(data, t);

  return (
    <>
      <KeyFeature
        title={<Trans i18nKey="index:keyFeature1Title" />}
        carouselData={keyFeaturesData[0]}
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature2Title" />}
        carouselData={keyFeaturesData[1]}
        direction="reverse"
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature3Title" />}
        carouselData={keyFeaturesData[2]}
      />

      <KeyFeature
        title={<Trans i18nKey="index:keyFeature4Title" />}
        carouselData={keyFeaturesData[3]}
        direction="reverse"
      />
    </>
  );
};

const StartButtons = () => {
  const { t } = useI18next();

  return (
    <DesktopBaseContainer className={styles.startButtons}>
      <p className={styles.startButtonsDesc}>{t("index:topDesc")}</p>
      <Padding y={12} />
      <h2 className={styles.startButtonsTitle}>{t("index:startButtonsTitle")}</h2>
      <Padding y={48} />
      <div className={styles.buttons}>
        <StartNowButton className={styles.startNowButton}>
          <img
            className={styles.topButtonIcon}
            src={iconVolt}
            alt={t("index:topIconAlt")}
          />
          {t("index:topStartNowButton")}
        </StartNowButton>
        <Padding x={16} />
        <ConsultingButton transparent={false} />
      </div>
    </DesktopBaseContainer>
  );
};

const CustomerCard = ({
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
  const { t } = useI18next();
  const customerData = genCustomerData(data);

  return (
    <div className={styles.sectorsContainer}>
      <DesktopBaseContainer className={styles.sectorsContentContainer}>
        <div className={styles.sectorsTitle}>{t("index:customerTitle")}</div>

        <Padding y={50} />

        <div className={styles.sectorsCardContainer}>
          {customerData.map((customer, index) => (
            <CustomerCard
              key={index}
              img={customer.emoji}
              title={t(customer.i18nKey)}
            />
          ))}
          <div className={styles.moreCard}>
            {t("index:customerMore")}
          </div>
        </div>
      </DesktopBaseContainer>
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
        src={iconSmallRightBlue}
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
            src={iconSwipeLeft}
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
            src={iconSwipeRight}
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
        src={iconSmallRightBlue}
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
    <DesktopBaseContainer className={styles.customersContentContainer}>
      <h2 className={styles.customersTitle}>
        <Trans i18nKey="index:customerSectionTitle" />
      </h2>
      <Padding y={30} />
      <p className={styles.customersDesc}>
        {t("index:customerSectionDesc")}
      </p>
      <Padding y={94} />
      <PhotoWall
        items={customerList}
        columnCount={columnCount}
        gap={30}
        ItemRenderer={Customer}
      />
    </DesktopBaseContainer>
  );
};

const DesktopIndex = ({ data, t }) => (
  <DesktopLayout
    isFloatMenu
    closingEmoji={data.coffee}
    closingMsg={t("index:closingMsg")}
  >
    <Top />

    <Customers data={data} />

    <KeyFeatures data={data} />

    <StartButtons />

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
