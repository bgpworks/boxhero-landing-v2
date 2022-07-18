import React, { useState } from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import cn from "classnames";
// js
import MobileLayout from "./mobile-layout";
import {
  MobileBaseContainer,
  Padding,
  DropDownQNA,
  Switch,
  AppDownloadLink,
  AppInstallButton,
} from "./common";
// css
import * as styles from "./mobile-pricing.module.css";
// img
import iconCheck from "../images/icon-check.svg";

const Top = () => {
  const { t } = useI18next();
  return (
    <MobileBaseContainer className={styles.topContentContainer}>
      <h1 className={styles.topTitle}>{t("pricing:topTitle")}</h1>
      <Padding y={30} />
      <h3 className={styles.topDescTitle}>{t("pricing:topDesc1Title")}</h3>
      <Padding y={5} />
      <p className={styles.topDescDesc}>{t("pricing:topDesc1Desc")}</p>
    </MobileBaseContainer>
  );
};

const BasicLimitContainer = ({ children }) => (
  <ul className={styles.basicLimitContainer}>{children}</ul>
);

const BasicLimit = ({ children }) => (
  <li className={styles.basicLimit}>{children}</li>
);

const SupportFeatures = ({ children }) => (
  <ul className={styles.supportFeatures}>{children}</ul>
);

const SupportFeature = ({ children }) => (
  <li className={styles.supportFeature}>
    <img
      src={iconCheck}
      alt={children}
    />
    <span>{children}</span>
  </li>
);

const Divider = () => (
  <div className={styles.divider} />
);

const FreePlan = () => {
  const { t } = useI18next();
  return (
    <article className={styles.freePlanContainer}>
      <h2 className={styles.planTitle}>{t("pricing:freePlanTitle")}</h2>

      <Padding y={12} />

      <h3 className={styles.planPrice}>{t("pricing:freePlanPrice")}</h3>

      <AppDownloadLink>
        <button
          type="button"
          className={styles.startButton}
        >
          {t("pricing:startNowButton")}
        </button>
      </AppDownloadLink>

      <BasicLimitContainer>
        <BasicLimit><Trans i18nKey="pricing:limitMemberFreeMobile" /></BasicLimit>
        <BasicLimit><Trans i18nKey="pricing:limitItemFreeMobile" /></BasicLimit>
        <BasicLimit><Trans i18nKey="pricing:limitLocationFreeMobile" /></BasicLimit>
      </BasicLimitContainer>

      <Divider />

      <SupportFeatures>
        <SupportFeature>{t("pricing:headerFeatureTx")}</SupportFeature>
        <SupportFeature>{t("pricing:headerFeatureExcel")}</SupportFeature>
        <SupportFeature>{t("pricing:limitHistoryFreeMobile")}</SupportFeature>
        <SupportFeature>{t("pricing:headerFeatureMobile")}</SupportFeature>
      </SupportFeatures>

      <Padding y={24} />

      <p className={styles.planLimitExtensionDesc}>
        <Trans i18nKey="pricing:extensionDescriptionMobile" />
      </p>
    </article>
  );
};

const Extensions = ({ children }) => (
  <ul className={styles.extensionsContainer}>{children}</ul>
);

const Extension = ({ i18nKey }) => (
  <li className={styles.extension}>
    <Trans
      i18nKey={i18nKey}
      components={{ small: <small /> }}
    />
  </li>
);

const BusinessPlan = () => {
  const { t } = useI18next();
  const [isYearly, setIsYearly] = useState(true);

  return (
    <article className={styles.bizPlanContainer}>
      <h2 className={styles.planTitle}>{t("pricing:bizPlanTitle")}</h2>

      <div className={styles.switchContainer}>
        <button
          type="button"
          className={cn(
            styles.billingCycleButton,
            { [styles.active]: !isYearly },
          )}
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
          className={cn(
            styles.billingCycleButton,
            { [styles.active]: isYearly },
          )}
          onClick={() => setIsYearly(true)}
        >
          <div className={styles.labelYearly}>
            {t("pricing:switchLabelYearly")}
            <span className={styles.yearlyPlanSaveLabel}>
              {t("pricing:yearlyPlanSaveLabel")}
            </span>
          </div>
        </button>
      </div>

      <h3 className={styles.planPrice}>{isYearly ? "$18" : "$20"}</h3>
      <span className={styles.planPriceUnit}>
        {t("pricing:bizPlanPriceUnit")}
      </span>

      <AppInstallButton
        className={styles.startButton}
        label={t("pricing:startTrialButton")}
      />

      <BasicLimitContainer>
        <BasicLimit><Trans i18nKey="pricing:limitMemberBizMobile" /></BasicLimit>
        <BasicLimit><Trans i18nKey="pricing:limitItemBizMobile" /></BasicLimit>
        <BasicLimit><Trans i18nKey="pricing:limitLocationBizMobile" /></BasicLimit>
      </BasicLimitContainer>

      <Divider />

      <h4 className={styles.extensionsTitle}>{t("pricing:headerExtension")}</h4>
      <Extensions>
        <Extension i18nKey="pricing:limitMemberBizExtensible" />
        <Extension i18nKey="pricing:limitItemBizExtensible" />
        <Extension i18nKey="pricing:limitLocationBizExtensible" />
      </Extensions>

      <Divider />

      <SupportFeatures>
        <li className={cn(styles.supportFeature, styles.fontMedium)}>
          {t("pricing:supportFeatureBiz")}
        </li>
        <SupportFeature>{t("pricing:limitHistoryBizMobile")}</SupportFeature>
        <SupportFeature>{t("pricing:headerFeatureLabel")}</SupportFeature>
        <SupportFeature>{t("pricing:headerFeatureAnalysis")}</SupportFeature>
        <SupportFeature>{t("pricing:headerLowStock")}</SupportFeature>
        <SupportFeature>{t("pricing:headerFeatureSales")}</SupportFeature>
        <SupportFeature>{t("pricing:limitIntegrationBizMobile")}</SupportFeature>
      </SupportFeatures>
    </article>
  );
};

const PriceTable = () => (
  <MobileBaseContainer className={styles.priceTableContentContainer}>
    <FreePlan />

    <Padding y={20} />

    <BusinessPlan />
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

        <a
          href={t("url:support")}
          target="_blank"
          rel="noreferrer"
        >
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

const MobilePricing = ({ data, t }) => (
  <MobileLayout isFloatMenu={false}>
    <Top data={data} />

    <PriceTable />

    <Faq t={t} />

    <DirectContact t={t} />
  </MobileLayout>
);

export default MobilePricing;
