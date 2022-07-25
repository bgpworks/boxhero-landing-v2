import React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  DropDownQNA,
  StartNowButton,
  Ribbon,
} from "./common";
// css
import * as styles from "./desktop-pricing.module.css";
// image
import iconCheck from "../images/icon-check.svg";
import iconVolt from "../images/volt.svg";

const BizCell = ({ children }) => (
  <td className={styles.bizCell}>{children}</td>
);

const FreeCell = ({ children }) => (
  <td className={styles.freeCell}>{children}</td>
);

const LimitRow = ({ headerLabel, children }) => (
  <tr className={styles.limitRow}>
    <th>{headerLabel}</th>
    {children}
  </tr>
);

const ExtensionRow = ({ children }) => (
  <tr className={styles.extensionRow}>{children}</tr>
);

const Divider = () => (
  <div className={styles.divider} />
);

const FeatureLimitRow = ({ headerLabel, children }) => (
  <tr className={styles.featureLimitRow}>
    <th>{headerLabel}</th>
    {children}
  </tr>
);

const CheckIcon = () => (
  <img
    className={styles.checkIcon}
    src={iconCheck}
    alt="available"
  />
);

const EmptyRow = () => (
  <tr>
    <th> </th>
    <FreeCell><Padding y={36} /></FreeCell>
    <BizCell><Padding y={36} /></BizCell>
  </tr>
);

const PriceTable = () => {
  const { t } = useI18next();
  return (
    <table className={styles.priceTable}>
      <tr className={styles.planTitleRow}>
        <th rowSpan={4}> </th>
        <FreeCell>{t("pricing:freePlanTitle")}</FreeCell>
        <BizCell>
          <Ribbon>{t("pricing:recommandRibbon")}</Ribbon>
          {t("pricing:bizPlanTitle")}
        </BizCell>
      </tr>

      <tr className={styles.priceRow}>
        <FreeCell>{t("pricing:freePlanPrice")}</FreeCell>
        <BizCell>$18</BizCell>
      </tr>

      <tr className={styles.priceUnitRow}>
        <FreeCell>{t("pricing:freePlanPriceUnit")}</FreeCell>
        <BizCell><Trans i18nKey="pricing:bizPlanPriceUnit" /></BizCell>
      </tr>

      <tr className={styles.startButtonRow}>
        <FreeCell>
          <StartNowButton className={styles.startButton}>
            {t("pricing:startNowButton")}
          </StartNowButton>
        </FreeCell>
        <BizCell>
          <StartNowButton className={styles.startButton}>
            <img
              className={styles.voltIcon}
              src={iconVolt}
              alt={t("pricing:startTrialButton")}
            />
            {t("pricing:startTrialButton")}
          </StartNowButton>
        </BizCell>
      </tr>

      <LimitRow headerLabel={t("pricing:headerMember")}>
        <FreeCell>{t("pricing:limitMemberFree")}</FreeCell>
        <BizCell>{t("pricing:limitMemberBiz")}</BizCell>
      </LimitRow>

      <LimitRow headerLabel={t("pricing:headerProduct")}>
        <FreeCell>{t("pricing:limitItemFree")}</FreeCell>
        <BizCell>{t("pricing:limitItemBiz")}</BizCell>
      </LimitRow>

      <LimitRow headerLabel={t("pricing:headerLocation")}>
        <FreeCell>
          <Trans
            i18nKey="pricing:limitLocationFree"
            components={{ small: <small /> }}
          />
        </FreeCell>
        <BizCell>
          <Trans
            i18nKey="pricing:limitLocationBiz"
            components={{ small: <small /> }}
          />
        </BizCell>
      </LimitRow>

      <ExtensionRow>
        <th rowSpan={3}>{t("pricing:headerExtension")}</th>
        <FreeCell>-</FreeCell>
        <BizCell>
          <Trans
            i18nKey="pricing:limitMemberBizExtensible"
            components={{ small: <small /> }}
          />
        </BizCell>
      </ExtensionRow>
      <ExtensionRow>
        <FreeCell>-</FreeCell>
        <BizCell>
          <Trans
            i18nKey="pricing:limitItemBizExtensible"
            components={{ small: <small /> }}
          />
        </BizCell>
      </ExtensionRow>
      <ExtensionRow>
        <FreeCell>-</FreeCell>
        <BizCell>
          <Trans
            i18nKey="pricing:limitLocationBizExtensible"
            components={{ small: <small /> }}
          />
        </BizCell>
      </ExtensionRow>

      <tr className={styles.dividerRow}>
        <th> </th>
        <FreeCell><Divider /></FreeCell>
        <BizCell><Divider /></BizCell>
      </tr>

      <FeatureLimitRow headerLabel={t("pricing:headerFeatureTx")}>
        <FreeCell><CheckIcon /></FreeCell>
        <BizCell><CheckIcon /></BizCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureExcel")}>
        <FreeCell><CheckIcon /></FreeCell>
        <BizCell><CheckIcon /></BizCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureHistory")}>
        <FreeCell>{t("pricing:limitHistoryFree")}</FreeCell>
        <BizCell>{t("pricing:limitHistoryBiz")}</BizCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureMobile")}>
        <FreeCell><CheckIcon /></FreeCell>
        <BizCell><CheckIcon /></BizCell>
      </FeatureLimitRow>

      <EmptyRow />

      <FeatureLimitRow headerLabel={t("pricing:headerFeatureLabel")}>
        <FreeCell>-</FreeCell>
        <BizCell><CheckIcon /></BizCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureAnalysis")}>
        <FreeCell>-</FreeCell>
        <BizCell><CheckIcon /></BizCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerLowStock")}>
        <FreeCell>-</FreeCell>
        <BizCell><CheckIcon /></BizCell>
      </FeatureLimitRow>

      <EmptyRow />

      <FeatureLimitRow headerLabel={t("pricing:headerFeatureSales")}>
        <FreeCell>-</FreeCell>
        <BizCell><CheckIcon /></BizCell>
      </FeatureLimitRow>
    </table>
  );
};

const TopDesc = () => {
  const { t } = useI18next();
  return (
    <div className={styles.topDescContainer}>
      <div>{t("pricing:topDesc1Title")}</div>
      <Padding y={6} />
      <div>{t("pricing:topDesc1Desc")}</div>
    </div>
  );
};

const Top = ({ data }) => {
  const { t } = useI18next();

  return (
    <DesktopBaseContainer className={styles.topContentContainer}>
      <div className={styles.topTitle}>{t("pricing:topTitle")}</div>

      <Padding y={25} />

      <TopDesc data={data} />

      <Padding y={100} />

      <PriceTable />
    </DesktopBaseContainer>
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
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>{t("pricing:faqTitle")}</div>

      <Padding y={50} />

      <div className={styles.faqContentContainer}>
        {faqData.map((faq, index) => (
          <DropDownQNA
            key={index}
            title={faq.question}
          >
            <Trans
              i18nKey={faq.answer.i18nKey}
              components={faq.answer.components}
            />
          </DropDownQNA>
        ))}
      </div>

      <Padding y={60} />

      <a
        href={t("url:supportPayment")}
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
    </div>
  );
};

const DirectContact = ({ t }) => (
  <div className={styles.directContactContainer}>
    <div className={styles.directContactTitle}>
      {t("pricing:directContactTitle")}
    </div>

    <Padding y={16} />

    <div className={styles.directContactDesc}>
      {t("pricing:directContactDesc")}
    </div>

    <Padding y={50} />

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
  </div>
);

const DesktopPricing = ({ data, t }) => (
  <DesktopLayout>
    <Top data={data} />

    <Faq t={t} />

    <DirectContact t={t} />
  </DesktopLayout>
);

export default DesktopPricing;
