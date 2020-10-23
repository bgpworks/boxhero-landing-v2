import React, { useState } from "react";
import { Trans } from '@jbseo/gatsby-plugin-react-i18next';
// js
import MobileLayout from "../components/mobile-layout"
import { Container320, Padding, MobileSimpleTop, DropDownQNA, Switch, Ribbon } from "../components/common";
import * as constants from "../components/constants";
import {AppDownloadLink} from "../components/common";
// css
import styles from "./mobile-pricing.module.css";
// img
import svgCheck from "../images/check.svg";
// page transition
import { TransitionUp, TransitionImage } from "../transition"

const PriceTable = ({data, language, t}) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Container320 className={styles.px20}>
      <div className={styles.switchContainer}>
        <button
          className={`${styles.billingCycleButton} ${isYearly ? "" : styles.active}`}
          onClick={() => setIsYearly(false)}
        >
          {t("pricing:switchLabelMonthly")}
        </button>
        <Switch
          isActive={isYearly}
          onChange={(active) => setIsYearly(active)}
        />
        <button
          className={`${styles.billingCycleButton} ${isYearly ? styles.active : ""}`}
          onClick={() => setIsYearly(true)}
        >
          {t("pricing:switchLabelYearly")}
        </button>
      </div>

      <Padding y={50}/>

      <div className={styles.freePlanContainer}>
        <div className={styles.planTitle}>
          {t("pricing:freePlanTitle")}
        </div>
        <div className={styles.planSubtitle}>
          For Personal
        </div>
        <div className={styles.planPrice}>
          {t("pricing:freePlanPrice")}
        </div>
        <div className={styles.planPriceUnit}>
          {t("pricing:freePlanPriceUnit")}
        </div>
        <div className={styles.planDesc}>
          <Trans i18nKey="pricing:freePlanDesc"/>
        </div>
        <div>
          <AppDownloadLink>
            <button
            className={styles.startButton}>
              {t("pricing:startNowButton")}
            </button>
          </AppDownloadLink>
        </div>
        {/* */}
        <div className={styles.planDetailHeader}>
          {t("pricing:headerLimit")}
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitMemberFreeMobile" />
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitProductFreeMobile" />
        </div>
        <div className={styles.planDetailItem}>
          <Trans
            i18nKey="pricing:limitLocationFreeMobile"
            components={{
              small: <small />
            }}
          />
        </div>
      </div>

      <div className={styles.planPostscript}>
        <Trans i18nKey="pricing:postscriptFree"/>
      </div>

      <div className={styles.bizPlanContainer}>
        <Ribbon className={styles.ribbon}>
          <Trans
            i18nKey="pricing:recommandRibbon"
            components={{
              small: <small/>,
            }}
          />
        </Ribbon>
        <div className={styles.planTitle}>
          {t("pricing:bizPlanTitle")}
        </div>
        <div className={styles.planSubtitle}>
          For Teams &amp; Businesses
        </div>
        <div className={styles.planPrice}>
          {isYearly ? "$16.6" : "$20"}
        </div>
        <div className={styles.planPriceUnit}>
          {t("pricing:bizPlanPriceUnit")}
          <br/>
          {isYearly ? t("pricing:paymentCycleYearly") : t("pricing:paymentCycleMonthly")}
        </div>
        <div className={styles.planDesc}>
          <Trans i18nKey="pricing:bizPlanDesc"/>
        </div>
        <div>
          <AppDownloadLink>
            <button
              className={styles.startButton}>
                {t("pricing:startTrialButton")}
            </button>
          </AppDownloadLink>
        </div>
        {/* */}
        <div className={styles.planDetailHeader}>
          {t("pricing:headerLimit")}
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitMemberBizMobile" />
        </div>
        <div className={styles.planDetailItem}>
          <Trans i18nKey="pricing:limitProductBizMobile" />
        </div>
        <div className={styles.planDetailItem}>
          <Trans
            i18nKey="pricing:limitLocationBizMobile"
            components={{
              small: <small />
            }}
          />
        </div>
        {/* */}
        <div className={styles.planDetailHeader}>
          {t("pricing:headerTeam")}
        </div>
        <div className={styles.planDetailItemBold}>
          <img src={svgCheck} alt="OK" />
          {t("pricing:teamInvite")}
        </div>
        <div className={styles.planDetailItemBold}>
          <img src={svgCheck} alt="OK" />
          {t("pricing:teamMultiUser")}
        </div>
        <div className={styles.planDetailItemBold}>
          <img src={svgCheck} alt="OK" />
          {t("pricing:teamACL")}
        </div>
        <div className={styles.planDetailItemBold}>
          <img src={svgCheck} alt="OK" />
          {t("pricing:teamHistory")}
        </div>
        {/* */}
        <div className={styles.planDetailHeader}>
          {t("pricing:headerExtension")}
        </div>
        <div className={styles.planDetailItemBold}>
          <Trans
            i18nKey="pricing:extensionMemberBiz"
            components={{
              small: <small/>
            }}/>
        </div>
        <div className={styles.planDetailItemBold}>
          <Trans
            i18nKey="pricing:extensionProductBiz"
            components={{
              small: <small/>
            }}
          />
        </div>
        <div className={styles.planDetailItemBold}>
          <Trans
            i18nKey="pricing:extensionLocationBiz"
            components={{
              small: <small/>
            }}
          />
        </div>
      </div>

      <div className={styles.planPostscript}>
        <Trans i18nKey="pricing:postscriptBiz"/>
      </div>
    </Container320>
  );
};

const FAQ = ({t}) => {
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
      },
    },
    {
      question: t("pricing:faq9Question"),
      answer: {
        i18nKey: "pricing:faq9Answer",
      },
    },
    {
      question: t("pricing:faq10Question"),
      answer: {
        i18nKey: "pricing:faq10Answer",
        components: {
          // eslint-disable-next-line
          webappLink: <a href={constants.urlStart} />
        }
      },
    },
    {
      question: t("pricing:faq11Question"),
      answer: {
        i18nKey: "pricing:faq11Answer",
        components: {
          // eslint-disable-next-line
          webappLink: <a href={constants.urlStart} />
        }
      },
    },
    {
      question: t("pricing:faq12Question"),
      answer: {
        i18nKey: "pricing:faq12Answer",
        components: {
          // eslint-disable-next-line
          otherMethodLink: (
            <a href="https://docs-ko.boxhero-app.com/docs/pricing#%EA%B5%AD%EB%82%B4-%EC%B9%B4%EB%93%9C-%EB%B0%8F-%EA%B3%84%EC%A2%8C%EC%9D%B4%EC%B2%B4-%EA%B2%B0%EC%A0%9C-%EB%B0%A9%EB%B2%95">
              ""
            </a>
          ),
        },
      },
    },
    {
      question: t("pricing:faq13Question"),
      answer: {
        i18nKey: "pricing:faq13Answer",
      },
    },
    {
      question: t("pricing:faq14Question"),
      answer: {
        i18nKey: "pricing:faq14Answer",
      },
    },
    {
      question: t("pricing:faq15Question"),
      answer: {
        i18nKey: "pricing:faq15Answer",
      },
    },
    {
      question: t("pricing:faq16Question"),
      answer: {
        i18nKey: "pricing:faq16Answer",
      },
    },
  ];
  return (
    <div className={styles.faqContainer}>
      <Container320 className={styles.px20}>
        <div className={styles.faqTitle}>
          {t("pricing:faqTitle")}
        </div>

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
      </Container320>
    </div>
  );
};

const DirectContact = ({t}) => (
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
            window.Beacon('toggle');
          }
        }}>
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
      <Container320 className={styles.px20}>
        <TransitionUp
          item={
            <MobileSimpleTop
              title={t("pricing:topTitle")}
              desc={<Trans i18nKey="pricing:topDescMobile" />}
            />
          }
        />
      </Container320>

      <Padding y={50}/>

      <TransitionImage
        is_mobile={true}
        force_load={true}
        item={
          <PriceTable
            data={data}
            language={language}
            t={t}
            />
        }
      />

      <FAQ t={t} />

      <DirectContact
        t={t}
      />

    </MobileLayout>
  );
};

export default MobilePricing;
