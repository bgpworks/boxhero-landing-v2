import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  Padding,
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
      className={styles.topDescIcon}
      image={emoji}
      alt={title}
    />
    <Padding y={10} />
    <h3 className={styles.topDescTitle}>{title}</h3>
    <Padding y={5} />
    <p className={styles.topDescDesc}>{desc}</p>
  </>
);

const Top = ({ data, t }) => (
  <MobileBaseContainer className={styles.topContentContainer}>
    <h1 className={styles.topTitle}>{t("pricing:topTitle")}</h1>
    <Padding y={30} />
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
  </MobileBaseContainer>
);

const PlanDetail = ({ header, children }) => (
  <>
    <span className={styles.planDetailHeader}>{header}</span>
    <ul className={styles.planDetailItems}>
      {children && children.map((item, index) => (
        <li
          key={index}
          className={styles.planDetailItem}
        >
          {item}
        </li>
      ))}
    </ul>
  </>
);

const FreePlan = ({ t }) => (
  <article className={styles.freePlanContainer}>
    <h2 className={styles.planTitle}>{t("pricing:freePlanTitle")}</h2>
    <p className={styles.planSubtitle}>For Personal</p>

    <Padding y={20} />
    <h3 className={styles.planPrice}>{t("pricing:freePlanPrice")}</h3>
    <Padding y={20} />

    <p className={styles.planDesc}>
      <Trans i18nKey="pricing:freePlanDesc" />
    </p>

    <Padding y={30} />
    <AppDownloadLink>
      <button
        type="button"
        className={styles.startButton}
      >
        {t("pricing:startNowButton")}
      </button>
    </AppDownloadLink>
    <Padding y={40} />

    <PlanDetail header={t("pricing:headerLimit")}>
      <Trans i18nKey="pricing:limitMemberFree" />
      <Trans i18nKey="pricing:limitItemFree" />
    </PlanDetail>
    <Padding y={20} />

    <p className={styles.planLimitExtensionDesc}>
      <Trans i18nKey="pricing:extensionDescriptionMobile" />
    </p>
  </article>
);

const BusinessPlan = ({ t }) => {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <article className={styles.bizPlanContainer}>
      <Ribbon>
        <Trans
          i18nKey="pricing:recommandRibbon"
          components={{ small: <small /> }}
        />
      </Ribbon>
      <h2 className={styles.planTitle}>{t("pricing:bizPlanTitle")}</h2>
      <p className={styles.planSubtitle}>For Teams &amp; Businesses</p>

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
          <span className={styles.yearlyPlanSaveLabel}>
            {t("pricing:yearlyPlanSaveLabel")}
          </span>
        </button>
      </div>

      <Padding y={20} />
      <h3 className={styles.planPrice}>{isYearly ? "$16.6" : "$20"}</h3>
      <span className={styles.planPriceUnit}>
        {t("pricing:bizPlanPriceUnit")}
      </span>
      <Padding y={20} />

      <p className={styles.planDesc}>
        <Trans i18nKey="pricing:bizPlanDesc" />
      </p>

      <Padding y={30} />
      <AppDownloadLink>
        <button
          type="button"
          className={styles.startButton}
        >
          {t("pricing:startTrialButton")}
        </button>
      </AppDownloadLink>
      <Padding y={40} />

      <PlanDetail header={t("pricing:headerLimit")}>
        <Trans i18nKey="pricing:limitMemberBiz" />
        <Trans i18nKey="pricing:limitItemBizMobile" />
      </PlanDetail>
      <Padding y={40} />

      <PlanDetail header={t("pricing:headerExtension")}>
        <Trans
          i18nKey="pricing:limitMemberBizExtensible"
          components={{
            small: <small />,
          }}
        />
        <Trans
          i18nKey="pricing:limitItemBizExtensibleMobile"
          components={{
            small: <small />,
          }}
        />
      </PlanDetail>
    </article>
  );
};

const PriceTable = ({ t }) => (
  <MobileBaseContainer className={styles.priceTableContentContainer}>
    <FreePlan t={t} />

    <BusinessPlan t={t} />

    <Padding y={20} />
    <p className={styles.planPostscript}>
      <Trans i18nKey="pricing:footerDescription" />
    </p>
  </MobileBaseContainer>
);

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
    <section className={styles.faqContainer}>
      <MobileBaseContainer className={styles.faqContentContainer}>
        <h2 className={styles.faqTitle}>{t("pricing:faqTitle")}</h2>

        <Padding y={35} />

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
      </MobileBaseContainer>
    </section>
  );
};

const DirectContact = ({ t }) => (
  <MobileBaseContainer className={styles.directContactContainer}>
    <h2 className={styles.directContactTitle}>
      {t("pricing:directContactTitle")}
    </h2>

    <Padding y={12} />

    <p className={styles.directContactDesc}>
      {t("pricing:directContactDesc")}
    </p>

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
);

const MobilePricing = ({ data, language, t }) => (
  <MobileLayout
    isFloatMenu={false}
    hideFloatAppInstallButton
    closingEmoji={data.mobileBox}
    closingMsg={t("pricing:closingMsg")}
  >
    <Top
      data={data}
      t={t}
    />

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
