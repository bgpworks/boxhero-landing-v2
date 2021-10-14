import React from "react";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
// js
import { Container320, Padding, AppDownloadLink } from "./common";
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
  <Container320 className={styles.startNowContentContainer}>
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
  </Container320>
);

const PostCard = ({
  title,
  categoryStyle,
  category,
  description,
  path,
}) => (
  <li className={styles.postCardWrapper}>
    <Link to={path}>
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
    </Link>
  </li>
);

const RelatedContents = ({ t }) => {
  const postCardsData = [
    {
      title: "재고 관리를 위한 3가지 중요한 기술",
      categoryStyle: { backgroundColor: "#55adfd", color: "white" },
      category: "인사이트",
      description: "글로벌 기업이 사용하는 세 가지 재고 관리 기술에 대해 알아봅시다!",
      slug: "재고-관리를-위한-3가지-중요한-기술",
    },
    {
      title: "재고자산이란?",
      categoryStyle: { backgroundColor: "#55adfd", color: "white" },
      category: "인사이트",
      description: "재고자산을 어떻게 사용해야 효율적인 재고관리가 가능할까요?",
      slug: "재고자산이란",
    },
    {
      title: "카페 재고를 관리하는 5가지 효과적인 방법!",
      categoryStyle: { backgroundColor: "#55adfd", color: "white" },
      category: "인사이트",
      description: "카페를 운영하면서 제일 철저하게 관리해야 할 부분은 무엇일까요?",
      slug: "카페-재고를-관리하는-5가지-효과적인-방법",
    },
  ];
  return (
    <section className={styles.darkBg}>
      <Container320 className={styles.relatedContentsContainer}>
        <h2 className={styles.relatedContentsTitle}>
          {t("usecase-footer:relatedContentsTitle")}
        </h2>
        <Padding y={40} />
        <ul className={styles.postCards}>
          {postCardsData.map((postCard, index) => (
            <PostCard
              key={index}
              title={postCard.title}
              categoryStyle={postCard.categoryStyle}
              category={postCard.category}
              description={postCard.description}
              path={`/blog/posts/${postCard.slug}`}
            />
          ))}
        </ul>
      </Container320>
    </section>
  );
};

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
