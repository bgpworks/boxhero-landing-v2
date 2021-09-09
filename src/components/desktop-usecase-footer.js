import React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { DesktopBaseContainer, Padding, StartNowButton } from "./common";
import * as styles from "./desktop-usecase-footer.module.css";
import svgPerson from "../images/icon-person.svg";
import svgBox from "../images/icon-box.svg";
import svgPlus from "../images/icon-plus.svg";

const PriceCard = ({
  title, description, price, features, startNowButton,
}) => (
  <div className={styles.priceCard}>
    <div className={styles.priceCardTitle}>{title}</div>
    <Padding y={6} />
    <div className={styles.priceCardDesc}>{description}</div>
    <div className={styles.price}>{price}</div>
    <div className={styles.priceCardFeatures}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={styles.priceCardFeature}
        >
          <img
            src={feature.icon}
            alt={feature.text}
          />
          <Padding y={2} />
          {feature.text}
        </div>
      ))}
    </div>
    <Padding y={40} />
    <StartNowButton
      className={styles.startNowButton}
      startNow={startNowButton}
    />
  </div>
);

const StartNow = ({ t }) => (
  <DesktopBaseContainer className={styles.startNowContentContainer}>
    <div className={styles.startNowTitle}>
      {t("usecase-footer:startNowTitle")}
    </div>
    <Padding y={16} />
    <div className={styles.startNowDesc}>
      {t("usecase-footer:startNowDesc")}
    </div>
    <Padding y={50} />

    <div className={styles.priceCards}>
      <PriceCard
        title={t("usecase-footer:singlePlanTitle")}
        description={t("usecase-footer:singlePlanDesc")}
        price={t("usecase-footer:singlePlanPrice")}
        features={[
          { icon: svgPerson, text: t("usecase-footer:singlePlanFeature1") },
          { icon: svgBox, text: t("usecase-footer:singlePlanFeature2") },
        ]}
        startNowButton={t("usecase-footer:singlePlanStartNow")}
      />
      <Padding x={30} />
      <PriceCard
        title={t("usecase-footer:businessPlanTitle")}
        description={t("usecase-footer:businessPlanDesc")}
        price={(
          <Trans
            i18nKey="usecase-footer:businessPlanPrice"
            components={{ small: <small /> }}
          />
        )}
        features={[
          { icon: svgPerson, text: t("usecase-footer:businessPlanFeature1") },
          { icon: svgBox, text: t("usecase-footer:businessPlanFeature2") },
          { icon: svgPlus, text: t("usecase-footer:businessPlanFeature3") },
        ]}
        startNowButton={t("usecase-footer:businessPlanStartNow")}
      />
    </div>
  </DesktopBaseContainer>
);

const RelatedContents = ({ t }) => (
  <div className={styles.relatedContentsContainer}>
    <DesktopBaseContainer>
      <div className={styles.relatedContentsTitle}>
        {t("usecase-footer:relatedContentsTitle")}
      </div>
      <Padding y={50} />
      {/* TODO: 임의의 블로그 글 정보 가져와서 보여주기 */}
    </DesktopBaseContainer>
  </div>
);

const DesktopUseCaseFooter = () => {
  const { t } = useI18next();
  return (
    <>
      <StartNow t={t} />
      <RelatedContents t={t} />
    </>
  );
};

export default DesktopUseCaseFooter;
