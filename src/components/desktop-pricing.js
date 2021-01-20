import React, { useState } from "react";
import Img from "gatsby-image";
import { Trans } from "@jbseo/gatsby-plugin-react-i18next";
// js
import DesktopLayout from "../components/desktop-layout";
import {
  Container1024,
  Padding,
  SimpleTop,
  DropDownQNA,
  Switch,
  Ribbon,
  ExternalLinkWithQuery,
} from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./desktop-pricing.module.css";

const TopDescColumn = ({ emoji, title, desc }) => (
  <div className={styles.topDescColumn}>
    <div>
      <Img fixed={emoji} alt={title} />
    </div>
    <Padding y={10} />
    <div className={styles.topDescTitle}>{title}</div>
    <Padding y={10} />
    <div className={styles.topDescDesc}>{desc}</div>
  </div>
);

const TopDescSpliter = () => <div className={styles.vl}></div>;

const TopDesc = ({ data, t }) => (
  <Container1024>
    <div className={styles.topDescContainer}>
      <TopDescColumn
        emoji={data.emojiOne.childImageSharp.fixed}
        title={t("pricing:topDesc1Title")}
        desc={<Trans i18nKey="pricing:topDesc1Desc" />}
      />
      <TopDescSpliter />
      <TopDescColumn
        emoji={data.emojiTwo.childImageSharp.fixed}
        title={t("pricing:topDesc2Title")}
        desc={<Trans i18nKey="pricing:topDesc2Desc" />}
      />
    </div>
  </Container1024>
);

const PriceTable = ({ data, language, t }) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
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
      <table className={styles.pricingTable}>
        <thead>
          <tr>
            <th>
              <strong>{t("pricing:freePlanTitle")}</strong>
              <br />
              <small>For Personal</small>
            </th>
            <th>
              <strong>{t("pricing:bizPlanTitle")}</strong>
              <br />
              <small>For Teams &amp; Businesses</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.price}>{t("pricing:freePlanPrice")}</div>
              <small>{t("pricing:freePlanPriceUnit")}</small>
            </td>
            <td className={styles.priceWrapper}>
              <Ribbon className={styles.bigRibbon}>
                <Trans
                  i18nKey="pricing:recommandRibbon"
                  components={{
                    small: <small />,
                  }}
                />
              </Ribbon>
              <div className={styles.price}>{isYearly ? "$16.6" : "$20"}</div>
              <small>{t("pricing:bizPlanPriceUnit")}</small>
            </td>
          </tr>

          <tr className={styles.planDescription}>
            <td>
              <Trans i18nKey="pricing:freePlanDesc" />
            </td>
            <td>
              <strong>
                <Trans i18nKey="pricing:bizPlanDesc" />
              </strong>
            </td>
          </tr>

          <tr className={styles.startButtonRow}>
            <td>
              <ExternalLinkWithQuery href={constants.urlStart}>
                <button className={styles.startButton}>
                  {t("pricing:startNowButton")}
                </button>
              </ExternalLinkWithQuery>
            </td>
            <td>
              <ExternalLinkWithQuery href={constants.urlStart}>
                <button className={styles.startButton}>
                  {t("pricing:startTrialButton")}
                </button>
              </ExternalLinkWithQuery>
            </td>
          </tr>

          <tr className={styles.sectionTitleRow}>
            <td>{t("pricing:headerLimit")}</td>
            <td>{t("pricing:headerLimit")}</td>
          </tr>

          <tr>
            <td>
              <Trans i18nKey="pricing:limitMemberFree" />
            </td>
            <td>
              <Trans i18nKey="pricing:limitMemberBiz" />
            </td>
          </tr>
          <tr>
            <td>
              <Trans i18nKey="pricing:limitProductFree" />
            </td>
            <td>
              <Trans i18nKey="pricing:limitProductBiz" />
            </td>
          </tr>

          <tr className={styles.sectionTitleRow}>
            <td></td>
            <td>{t("pricing:headerExtension")}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Trans
                i18nKey="pricing:limitMemberBizExtensible"
                components={{ small: <small /> }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Trans
                i18nKey="pricing:extensionDescription"
                components={{
                  extraSmall: <span className={styles.extraSmall} />,
                }}
              />
            </td>
            <td>
              <Trans
                i18nKey="pricing:limitProductBizExtensible"
                components={{ small: <small /> }}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <Trans
                i18nKey="pricing:footerDescription"
                components={{
                  linkToHelpPricing: (
                    // eslint-disable-next-line
                    <a
                      href={constants.urlHelpPricing}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.plainLink}
                    />
                  ),
                }}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
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
          ul: <ul></ul>,
          li: <li></li>,
          // eslint-disable-next-line
          faqModeLink: <a href={constants.urlFaqMode} target="_blank" />,
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

      <Padding y={50} />

      <div className={styles.faqContentContainer}>
        {faqData.map((faq, index) => (
          <DropDownQNA key={index} title={faq.question}>
            <Trans {...faq.answer} />
          </DropDownQNA>
        ))}
      </div>

      <Padding y={50} />

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
    <div className={styles.directContactTitle}>
      {t("pricing:directContactTitle")}
    </div>

    <Padding y={10} />

    <div className={styles.directContactDesc}>
      {t("pricing:directContactDesc")}
    </div>

    <Padding y={50} />

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
  </div>
);

export const DesktopPricing = ({ data, language, t }) => {
  return (
    <DesktopLayout
      isFloatMenu={false}
      curMenu="pricing"
      closingEmoji={data.box}
      closingMsg={t("pricing:closingMsg")}
    >
      <SimpleTop title={t("pricing:topTitle")}>
        <TopDesc data={data} t={t} />
      </SimpleTop>

      <Padding y={80} />

      <PriceTable data={data} language={language} t={t} />

      <Padding y={100} />

      <FAQ t={t} />

      <DirectContact t={t} />
    </DesktopLayout>
  );
};

export default DesktopPricing;
