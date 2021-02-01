import React, { useState } from "react";
import Img from "gatsby-image";
import { Trans } from "@jbseo/gatsby-plugin-react-i18next";
// js
import MobileLayout from "../components/mobile-layout";
import {
  Container320,
  ContainerCenter,
  Padding,
  MobileSimpleTop,
  DropDownQNA,
  Switch,
  Ribbon,
} from "../components/common";
import * as constants from "../components/constants";
import { AppDownloadLink } from "../components/common";
// css
import styles from "./mobile-pricing.module.css";

const TopDescColumn = ({ emoji, title, desc }) => (
  <>
    <Img fixed={emoji} alt={title} />
    <div className={styles.topDescTitle}>{title}</div>
    <Padding y={5} />
    <div className={styles.topDescDesc}>{desc}</div>
  </>
);

const TopDesc = ({ data, t }) => (
  <div>
    <TopDescColumn
      emoji={data.emojiOneSmall.childImageSharp.fixed}
      title={t("pricing:topDesc1Title")}
      desc={<Trans i18nKey="pricing:topDesc1Desc" />}
    />
    <Padding y={30} />
    <TopDescColumn
      emoji={data.emojiTwoSmall.childImageSharp.fixed}
      title={t("pricing:topDesc2Title")}
      desc={<Trans i18nKey="pricing:topDesc2Desc" />}
    />
  </div>
);

const PriceTable = ({ data, language, t }) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Container320 className={styles.px20}>
      <div className={styles.freePlanContainer}>
        <div className={styles.planTitle}>{t("pricing:freePlanTitle")}</div>
        <div className={styles.planSubtitle}>For Personal</div>
        <div className={styles.planPrice}>{t("pricing:freePlanPrice")}</div>

        <div className={styles.planDesc}>
          <Trans i18nKey="pricing:freePlanDesc" />
        </div>
        <div>
          <AppDownloadLink>
            <button className={styles.startButton}>
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
          <Trans i18nKey="pricing:limitProductFree" />
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
            <button className={styles.startButton}>
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
          <Trans i18nKey="pricing:limitProductBizMobile" />
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
            i18nKey="pricing:limitProductBizExtensibleMobile"
            components={{
              small: <small />,
            }}
          />
        </div>
      </div>

      <div className={styles.planPostscript}>
        <Trans i18nKey="pricing:footerDescription" />
      </div>
    </Container320>
  );
};

const FAQ = ({ t }) => {
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
        components: {
          faqPaymentLink: (
            // eslint-disable-next-line
            <a href={constants.urlFaqPaymentDomestic} target="_blank" />
          ),
        },
      },
    },
    {
      question: t("pricing:faq8Question"),
      answer: {
        i18nKey: "pricing:faq8Answer",
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
          <Trans {...faq.answer} />
        </DropDownQNA>
      ))}

      <Padding y={30} />

      <a href={t("url:pricing")}>
        <button className={styles.buttonShowMore}>
          {t("pricing:faqMoreButton")}
        </button>
      </a>
    </div>
  );
};

const DirectContact = ({ t }) => (
  <div className={styles.directContactContainer}>
    <Container320 className={styles.px20}>
      <div className={styles.directContactTitle}>
        {t("pricing:directContactTitle")}
      </div>

      <Padding y={14} />

      <div className={styles.directContactDesc}>
        {t("pricing:directContactDesc")}
      </div>

      <Padding y={30} />

      <button
        className={styles.directContactButton}
        onClick={() => {
          if ("Beacon" in window) {
            window.Beacon("toggle");
          }
        }}
      >
        {t("pricing:directContactInquiryButon")}
      </button>
    </Container320>
  </div>
);

const MobilePricing = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={false}
      hideFloatAppInstallButton={true}
      curMenu="pricing"
      closingEmoji={data.mobileBox}
      closingMsg={t("pricing:closingMsg")}
    >
      <ContainerCenter className={styles.px20}>
        <MobileSimpleTop title={t("pricing:topTitle")}>
          <Padding y={10} />
          <TopDesc data={data} t={t} />
        </MobileSimpleTop>
      </ContainerCenter>

      <Padding y={50} />

      <PriceTable data={data} language={language} t={t} />

      <FAQ t={t} />

      <DirectContact t={t} />
    </MobileLayout>
  );
};

export default MobilePricing;
