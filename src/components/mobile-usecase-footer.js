import React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
// js
import {
  MobileBaseContainer,
  Padding,
  AppDownloadLink,
} from "./common";
// css
import * as styles from "./mobile-usecase-footer.module.css";
// img
import svgPerson from "../images/icon-person.svg";
import svgBox from "../images/icon-box.svg";
import svgPlus from "../images/icon-plus.svg";

const PriceCard = ({
  title, description, price, features, startNowButton,
}) => (
  <article className={styles.priceCard}>
    <h3 className={styles.priceCardTitle}>{title}</h3>
    <Padding y={6} />
    <p className={styles.priceCardDesc}>{description}</p>
    <h4 className={styles.price}>{price}</h4>
    <ul className={styles.priceCardFeatures}>
      {features.map((feature, index) => (
        <li
          key={index}
          className={styles.priceCardFeature}
        >
          <img
            src={feature.icon}
            alt={feature.text}
          />
          <Padding y={2} />
          {feature.text}
        </li>
      ))}
    </ul>
    <Padding y={40} />
    <AppDownloadLink>
      <button
        type="button"
        className={styles.startNowButton}
      >
        {startNowButton}
      </button>
    </AppDownloadLink>
  </article>
);

const StartNow = ({ t }) => (
  <MobileBaseContainer className={styles.startNowContentContainer}>
    <h2 className={styles.startNowTitle}>
      {t("usecase-footer:startNowTitle")}
    </h2>
    <Padding y={16} />
    <p className={styles.startNowDesc}>
      {t("usecase-footer:startNowDesc")}
    </p>
    <Padding y={40} />

    <PriceCard
      title={<Trans i18nKey="usecase-footer:singlePlanTitle" />}
      description={<Trans i18nKey="usecase-footer:singlePlanDesc" />}
      price={t("usecase-footer:singlePlanPrice")}
      features={[
        { icon: svgPerson, text: <Trans i18nKey="usecase-footer:singlePlanFeature1" /> },
        { icon: svgBox, text: <Trans i18nKey="usecase-footer:singlePlanFeature2" /> },
      ]}
      startNowButton={t("usecase-footer:singlePlanStartNow")}
    />
    <Padding y={16} />
    <PriceCard
      title={<Trans i18nKey="usecase-footer:businessPlanTitle" />}
      description={<Trans i18nKey="usecase-footer:businessPlanDesc" />}
      price={(
        <Trans
          i18nKey="usecase-footer:businessPlanPrice"
          components={{ small: <small /> }}
        />
      )}
      features={[
        { icon: svgPerson, text: <Trans i18nKey="usecase-footer:businessPlanFeature1" /> },
        { icon: svgBox, text: <Trans i18nKey="usecase-footer:businessPlanFeature2" /> },
        { icon: svgPlus, text: <Trans i18nKey="usecase-footer:businessPlanFeature3" /> },
      ]}
      startNowButton={t("usecase-footer:businessPlanStartNow")}
    />
  </MobileBaseContainer>
);

const PostCard = ({
  title,
  categoryStyle,
  category,
  description,
  path,
}) => (
  <li className={styles.postCardWrapper}>
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
    >
      <article className={styles.postCard}>
        <span
          className={styles.postCardCategory}
          style={categoryStyle}
        >
          {category}
        </span>
        <Padding y={8} />
        <div className={styles.postCardTitle}>{title}</div>
        <Padding y={8} />
        <div className={styles.postCardDescription}>{description}</div>
      </article>
    </a>
  </li>
);

const RelatedContents = ({ contents }) => {
  const { t } = useI18next();

  return (
    <section className={styles.darkBg}>
      <MobileBaseContainer className={styles.relatedContentsContainer}>
        <h2 className={styles.relatedContentsTitle}>
          {t("usecase-footer:relatedContentsTitle")}
        </h2>
        <Padding y={40} />
        <ul className={styles.postCards}>
          {contents.slice(0, 3).map((content, index) => (
            <PostCard
              key={index}
              title={content.title}
              categoryStyle={{
                backgroundColor: content.bgColor,
              }}
              category={content.category}
              description={content.frontmatter}
              path={content.src}
            />
          ))}
        </ul>
      </MobileBaseContainer>
    </section>
  );
};

const MobileUseCaseFooter = ({ relatedContents }) => {
  const { t } = useI18next();
  return (
    <>
      <StartNow t={t} />
      <RelatedContents
        contents={relatedContents}
      />
    </>
  );
};

export default MobileUseCaseFooter;
