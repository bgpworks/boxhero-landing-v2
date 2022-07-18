import React, { useState } from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import cn from "classnames";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  DropDownQNA,
  Switch,
  StartNowButton,
} from "./common";
// css
import * as styles from "./desktop-pricing.module.css";
// image
import iconCheck from "../images/icon-check.svg";
import iconVolt from "../images/volt.svg";

const SwitchContainer = ({ isYearly, setIsYearly }) => {
  const { t } = useI18next();
  return (
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
      <Padding x={35} />
      <Switch
        isActive={isYearly}
        onChange={(active) => setIsYearly(active)}
      />
      <Padding x={35} />
      <button
        type="button"
        className={cn(
          styles.billingCycleButton,
          { [styles.active]: isYearly },
        )}
        onClick={() => setIsYearly(true)}
      >
        {t("pricing:switchLabelYearly")}
        <div className={styles.yearlyPlanSaveLabel}>
          {t("pricing:yearlyPlanSaveLabel")}
        </div>
      </button>
    </div>
  );
};

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
    <BizCell><Padding y={36} /></BizCell>
    <FreeCell><Padding y={36} /></FreeCell>
  </tr>
);

const PriceTable = ({ isYearly }) => {
  const { t } = useI18next();
  return (
    <table className={styles.priceTable}>
      <tr className={styles.planTitleRow}>
        <th rowSpan={4}> </th>
        <BizCell>{t("pricing:bizPlanTitle")}</BizCell>
        <FreeCell>{t("pricing:freePlanTitle")}</FreeCell>
      </tr>

      <tr className={styles.priceRow}>
        <BizCell>{isYearly ? "$18" : "$20"}</BizCell>
        <FreeCell>{t("pricing:freePlanPrice")}</FreeCell>
      </tr>

      <tr className={styles.priceUnitRow}>
        <BizCell>{t("pricing:bizPlanPriceUnit")}</BizCell>
        <FreeCell>{t("pricing:freePlanPriceUnit")}</FreeCell>
      </tr>

      <tr className={styles.startButtonRow}>
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
        <FreeCell>
          <StartNowButton className={styles.startButton}>
            {t("pricing:startNowButton")}
          </StartNowButton>
        </FreeCell>
      </tr>

      <LimitRow headerLabel={t("pricing:headerMember")}>
        <BizCell>{t("pricing:limitMemberBiz")}</BizCell>
        <FreeCell>{t("pricing:limitMemberFree")}</FreeCell>
      </LimitRow>

      <LimitRow headerLabel={t("pricing:headerProduct")}>
        <BizCell>{t("pricing:limitItemBiz")}</BizCell>
        <FreeCell>{t("pricing:limitItemFree")}</FreeCell>
      </LimitRow>

      <LimitRow headerLabel={t("pricing:headerLocation")}>
        <BizCell>
          <Trans
            i18nKey="pricing:limitLocationBiz"
            components={{ small: <small /> }}
          />
        </BizCell>
        <FreeCell>
          <Trans
            i18nKey="pricing:limitLocationFree"
            components={{ small: <small /> }}
          />
        </FreeCell>
      </LimitRow>

      <ExtensionRow>
        <th rowSpan={3}>{t("pricing:headerExtension")}</th>
        <BizCell>
          <Trans
            i18nKey="pricing:limitMemberBizExtensible"
            components={{ small: <small /> }}
          />
        </BizCell>
        <FreeCell>-</FreeCell>
      </ExtensionRow>
      <ExtensionRow>
        <BizCell>
          <Trans
            i18nKey="pricing:limitItemBizExtensible"
            components={{ small: <small /> }}
          />
        </BizCell>
        <FreeCell>-</FreeCell>
      </ExtensionRow>
      <ExtensionRow>
        <BizCell>
          <Trans
            i18nKey="pricing:limitLocationBizExtensible"
            components={{ small: <small /> }}
          />
        </BizCell>
        <FreeCell>-</FreeCell>
      </ExtensionRow>

      <tr className={styles.dividerRow}>
        <th> </th>
        <BizCell><Divider /></BizCell>
        <FreeCell><Divider /></FreeCell>
      </tr>

      <FeatureLimitRow headerLabel={t("pricing:headerFeatureTx")}>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureExcel")}>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureHistory")}>
        <BizCell>{t("pricing:limitHistoryBiz")}</BizCell>
        <FreeCell>{t("pricing:limitHistoryFree")}</FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureMobile")}>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>

      <EmptyRow />

      <FeatureLimitRow headerLabel={t("pricing:headerFeatureLabel")}>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell>-</FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureAnalysis")}>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell>-</FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerLowStock")}>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell>-</FreeCell>
      </FeatureLimitRow>

      <EmptyRow />

      <FeatureLimitRow headerLabel={t("pricing:headerFeatureSales")}>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell>-</FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow headerLabel={t("pricing:headerFeatureIntegration")}>
        <BizCell>{t("pricing:limitIntegrationBiz")}</BizCell>
        <FreeCell>-</FreeCell>
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
  const [isYearly, setIsYearly] = useState(true);

  return (
    <DesktopBaseContainer className={styles.topContentContainer}>
      <div className={styles.topTitle}>{t("pricing:topTitle")}</div>

      <Padding y={25} />

      <TopDesc data={data} />

      <Padding y={100} />

      <SwitchContainer
        isYearly={isYearly}
        setIsYearly={setIsYearly}
      />

      <Padding y={60} />

      <PriceTable isYearly={isYearly} />
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
