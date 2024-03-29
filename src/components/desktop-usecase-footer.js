import React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import {
  DesktopBaseContainer,
  Padding,
  StartNowButton,
} from "./common";
import * as styles from "./desktop-usecase-footer.module.css";
import svgPerson from "../images/icon-person.svg";
import svgBox from "../images/icon-box.svg";
import svgPlus from "../images/icon-plus.svg";

const PriceCard = ({
  title, description, price, features, startNowButton,
}) => (
  <div className={styles.priceCard}>
    <div className={styles.priceCardTitle}>{title}</div>
    <Padding y={8} />
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
    <StartNowButton className={styles.startNowButton}>
      {startNowButton}
    </StartNowButton>
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
        title={<Trans i18nKey="usecase-footer:singlePlanTitle" />}
        description={<Trans i18nKey="usecase-footer:singlePlanDesc" />}
        price={t("usecase-footer:singlePlanPrice")}
        features={[
          { icon: svgPerson, text: <Trans i18nKey="usecase-footer:singlePlanFeature1" /> },
          { icon: svgBox, text: <Trans i18nKey="usecase-footer:singlePlanFeature2" /> },
        ]}
        startNowButton={t("usecase-footer:singlePlanStartNow")}
      />
      <Padding x={30} />
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
    </div>
  </DesktopBaseContainer>
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
    <div className={styles.relatedContentsContainer}>
      <DesktopBaseContainer>
        <div className={styles.relatedContentsTitle}>
          {t("usecase-footer:relatedContentsTitle")}
        </div>
        <Padding y={50} />
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
      </DesktopBaseContainer>
    </div>
  );
};

const DesktopUseCaseFooter = ({ relatedContents }) => {
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

export default DesktopUseCaseFooter;
