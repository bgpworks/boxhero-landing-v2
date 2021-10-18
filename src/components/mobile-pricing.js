import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  ContainerCenter,
  Padding,
  MobileSimpleTop,
  DropDownQNA,
  Switch,
  Ribbon,
  AppDownloadLink,
} from "./common";
import * as constants from "./constants";

// css
import * as styles from "./mobile-pricing.module.css";

const TopDescColumn = ({ emoji, title, desc }) => (
  <>
    <GatsbyImage
      image={emoji}
      alt={title}
      style={{ margin: "0 auto" }}
    />
    <div className={styles.topDescTitle}>{title}</div>
    <Padding y={5} />
    <div className={styles.topDescDesc}>{desc}</div>
  </>
);

const TopDesc = ({ data, t }) => (
  <div>
    <TopDescColumn
      emoji={data.emojiOneSmall.childImageSharp.gatsbyImageData}
      title={t("pricing:topDesc1Title")}
      desc={<Trans i18nKey="pricing:topDesc1Desc" />}
    />
    <Padding y={30} />
    <TopDescColumn
      emoji={data.emojiTwoSmall.childImageSharp.gatsbyImageData}
      title={t("pricing:topDesc2Title")}
      desc={<Trans i18nKey="pricing:topDesc2Desc" />}
    />
  </div>
);

const PriceTable = ({ t }) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <MobileBaseContainer className={styles.px20}>
      <div className={styles.freePlanContainer}>
        <div className={styles.planTitle}>{t("pricing:freePlanTitle")}</div>
        <div className={styles.planSubtitle}>For Personal</div>
        <div className={styles.planPrice}>{t("pricing:freePlanPrice")}</div>

        <div className={styles.planDesc}>
          <Trans i18nKey="pricing:freePlanDesc" />
        </div>
        <div>
          <AppDownloadLink>
            <button
              type="button"
              className={styles.startButton}
            >
              {t("pricing:startNowButton")}
            </button>
          </AppDownloadLink>
        </div>
        {/* */}
        <div className={styles.planDetailHeader}>
          {t("pricing:headerLimit")}
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitMemberFree" />
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitItemFree" />
        </div>
        <div className={styles.planLimitExtensionDesc}>
          <Trans
            i18nKey="pricing:extensionDescription"
            components={{ extraSmall: <span /> }}
          />
        </div>
      </div>

      <div className={styles.bizPlanContainer}>
        <Ribbon>
          <Trans
            i18nKey="pricing:recommandRibbon"
            components={{ small: <small /> }}
          />
        </Ribbon>
        <div className={styles.planTitle}>{t("pricing:bizPlanTitle")}</div>
        <div className={styles.planSubtitle}>For Teams &amp; Businesses</div>

        <Padding y={30} />
        <div className={styles.switchContainer}>
          <button
            type="button"
            className={`${styles.billingCycleButton} ${
              isYearly ? "" : styles.active
            }`}
            onClick={() => setIsYearly(false)}
          >
            {t("pricing:switchLabelMonthly")}
          </button>
          <Switch
            isActive={isYearly}
            onChange={(active) => setIsYearly(active)}
          />
          <button
            type="button"
            className={`${styles.billingCycleButton} ${
              isYearly ? styles.active : ""
            }`}
            onClick={() => setIsYearly(true)}
          >
            {t("pricing:switchLabelYearly")}
            <div className={styles.yearlyPlanSaveLabel}>
              {t("pricing:yearlyPlanSaveLabel")}
            </div>
          </button>
        </div>

        <div className={styles.planPrice}>{isYearly ? "$16.6" : "$20"}</div>
        <div className={styles.planPriceUnit}>
          {t("pricing:bizPlanPriceUnit")}
        </div>
        <div className={styles.planDesc}>
          <Trans i18nKey="pricing:bizPlanDesc" />
        </div>
        <div>
          <AppDownloadLink>
            <button
              type="button"
              className={styles.startButton}
            >
              {t("pricing:startTrialButton")}
            </button>
          </AppDownloadLink>
        </div>
        {/* */}
        <div className={styles.planDetailHeader}>
          {t("pricing:headerLimit")}
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitMemberBiz" />
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitItemBizMobile" />
        </div>
        {/* */}
        <div className={styles.planDetailHeader}>
          {t("pricing:headerExtension")}
        </div>
        <div className={styles.planDetailItem}>
          <Trans
            i18nKey="pricing:limitMemberBizExtensible"
            components={{
              small: <small />,
            }}
          />
        </div>
        <div className={styles.planDetailItem}>
          <Trans
            i18nKey="pricing:limitItemBizExtensibleMobile"
            components={{
              small: <small />,
            }}
          />
        </div>
      </div>

      <div className={styles.planPostscript}>
        <Trans i18nKey="pricing:footerDescription" />
      </div>
    </MobileBaseContainer>
  );
};

const Faq = ({ t }) => {
  const faqData = [
    {
      question: t("pricing:faq1Question"),
      answer: {
        i18nKey: "pricing:faq1Answer",
      },
    },
    {
      question: t("pricing:faq2Question"),
      answer: {
        i18nKey: "pricing:faq2Answer",
        components: {
          ul: <ul />,
          li: <li />,
          // eslint-disable-next-line
          faqModeLink: <a href={t("pricing:modeFaqUrl")} target="_blank" />,
        },
      },
    },
    {
      question: t("pricing:faq3Question"),
      answer: {
        i18nKey: "pricing:faq3Answer",
      },
    },
    {
      question: t("pricing:faq4Question"),
      answer: {
        i18nKey: "pricing:faq4Answer",
      },
    },
    {
      question: t("pricing:faq5Question"),
      answer: {
        i18nKey: "pricing:faq5Answer",
      },
    },
    {
      question: t("pricing:faq6Question"),
      answer: {
        i18nKey: "pricing:faq6Answer",
      },
    },
    {
      question: t("pricing:faq7Question"),
      answer: {
        i18nKey: "pricing:faq7Answer",
      },
    },
    {
      question: t("pricing:faq8Question"),
      answer: {
        i18nKey: "pricing:faq8Answer",
        components: {
          faqPaymentLink: (
            // eslint-disable-next-line
            <a href={constants.urlFaqPaymentDomestic} target="_blank" />
          ),
        },
      },
    },
    {
      question: t("pricing:faq9Question"),
      answer: {
        i18nKey: "pricing:faq9Answer",
      },
    },
  ];
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>{t("pricing:faqTitle")}</div>

      <Padding y={39} />

      {faqData.map((faq, index) => (
        <DropDownQNA
          key={index}
          title={faq.question}
          titleClassName={styles.faqItemTitle}
          bodyClassName={styles.faqItemBody}
        >
          <Trans
            i18nKey={faq.answer.i18nKey}
            components={faq.answer.components}
          />
        </DropDownQNA>
      ))}

      <Padding y={30} />

      <a href={t("url:pricing")}>
        <button
          type="button"
          className={styles.buttonShowMore}
        >
          {t("pricing:faqMoreButton")}
        </button>
      </a>
    </div>
  );
};

const DirectContact = ({ t }) => (
  <div className={styles.directContactContainer}>
    <MobileBaseContainer className={styles.px20}>
      <div className={styles.directContactTitle}>
        {t("pricing:directContactTitle")}
      </div>

      <Padding y={14} />

      <div className={styles.directContactDesc}>
        {t("pricing:directContactDesc")}
      </div>

      <Padding y={30} />

      <button
        type="button"
        className={styles.directContactButton}
        onClick={() => {
          if ("Beacon" in window) {
            window.Beacon("toggle");
          }
        }}
      >
        {t("pricing:directContactInquiryButon")}
      </button>
    </MobileBaseContainer>
  </div>
);

const MobilePricing = ({ data, language, t }) => (
  <MobileLayout
    isFloatMenu={false}
    hideFloatAppInstallButton
    curMenu="pricing"
    closingEmoji={data.mobileBox}
    closingMsg={t("pricing:closingMsg")}
  >
    <ContainerCenter className={styles.px20}>
      <MobileSimpleTop title={t("pricing:topTitle")}>
        <Padding y={10} />
        <TopDesc
          data={data}
          t={t}
        />
      </MobileSimpleTop>
    </ContainerCenter>

    <Padding y={50} />

    <PriceTable
      data={data}
      language={language}
      t={t}
    />

    <Faq t={t} />

    <DirectContact t={t} />
  </MobileLayout>
);

export default MobilePricing;
