import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
// js
import DesktopLayout from "./desktop-layout";
import {
  DesktopBaseContainer,
  Padding,
  DropDownQNA,
  Switch,
  StartNowButton,
} from "./common";
import * as constants from "./constants";
// css
import * as styles from "./desktop-pricing.module.css";
// image
import iconCheck from "../images/icon-check.svg";

const TopDescColumn = ({ emoji, title, desc }) => (
  <div className={styles.topDescColumn}>
    <GatsbyImage
      image={emoji}
      alt={title}
      style={{ margin: "0 auto" }}
    />

    <Padding y={10} />
    <div className={styles.topDescTitle}>{title}</div>
    <Padding y={10} />
    <div className={styles.topDescDesc}>{desc}</div>
  </div>
);

const TopDescSpliter = () => <div className={styles.vl} />;

const TopDesc = ({ data }) => {
  const { t } = useI18next();
  return (
    <div className={styles.topDescContainer}>
      <TopDescColumn
        emoji={data.emojiOne.childImageSharp.gatsbyImageData}
        title={t("pricing:topDesc1Title")}
        desc={<Trans i18nKey="pricing:topDesc1Desc" />}
      />
      <TopDescSpliter />
      <TopDescColumn
        emoji={data.emojiTwo.childImageSharp.gatsbyImageData}
        title={t("pricing:topDesc2Title")}
        desc={<Trans i18nKey="pricing:topDesc2Desc" />}
      />
    </div>
  );
};

const SwitchContainer = ({ isYearly, setIsYearly }) => {
  const { t } = useI18next();
  return (
    <div className={styles.switchContainer}>
      <button
        type="button"
        className={`${styles.billingCycleButton} ${isYearly ? "" : styles.active
        }`}
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
        className={`${styles.billingCycleButton} ${isYearly ? styles.active : ""
        }`}
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

const LimitRow = ({ children }) => (
  <tr className={styles.limitRow}>{children}</tr>
);

const Divider = () => (
  <div className={styles.divider} />
);

const FeatureLimitRow = ({ children }) => (
  <tr className={styles.featureLimitRow}>{children}</tr>
);

const CheckIcon = () => (
  <img
    className={styles.checkIcon}
    src={iconCheck}
    alt="available"
  />
);

const PriceTable = ({ isYearly }) => {
  const { t } = useI18next();
  return (
    <table className={styles.priceTable}>
      <tr className={styles.planTitleRow}>
        <th rowSpan={4}>플랜 정보</th>
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
            {t("pricing:startTrialButton")}
          </StartNowButton>
        </BizCell>
        <FreeCell>
          <StartNowButton className={styles.startButton}>
            {t("pricing:startNowButton")}
          </StartNowButton>
        </FreeCell>
      </tr>
      <LimitRow>
        <th>{t("pricing:headerMember")}</th>
        <BizCell>{t("pricing:limitMemberBiz")}</BizCell>
        <FreeCell>{t("pricing:limitMemberFree")}</FreeCell>
      </LimitRow>
      <LimitRow>
        <th>{t("pricing:headerProduct")}</th>
        <BizCell>{t("pricing:limitItemBiz")}</BizCell>
        <FreeCell>{t("pricing:limitItemFree")}</FreeCell>
      </LimitRow>
      <LimitRow>
        <th>{t("pricing:headerLocation")}</th>
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
      <LimitRow>
        <th rowSpan={2}>{t("pricing:headerExtension")}</th>
        <BizCell>
          <Trans
            i18nKey="pricing:limitMemberBizExtensible"
            components={{ small: <small /> }}
          />
          <Padding y={16} />
          <Trans
            i18nKey="pricing:limitItemBizExtensible"
            components={{ small: <small /> }}
          />
          <Padding y={16} />
          <Trans
            i18nKey="pricing:limitLocationBizExtensible"
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
      <tr className={styles.dividerRow}>
        <BizCell><Divider /></BizCell>
        <FreeCell><Divider /></FreeCell>
      </tr>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureProduct")}</th>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureTx")}</th>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureExcel")}</th>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureHistory")}</th>
        <BizCell>{t("pricing:limitHistoryBiz")}</BizCell>
        <FreeCell>{t("pricing:limitHistoryFree")}</FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureMobile")}</th>
        <BizCell>
          <CheckIcon />
          <Padding y={36} />
        </BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureLabel")}</th>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureAnalysis")}</th>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerLowStock")}</th>
        <BizCell>
          <CheckIcon />
          <Padding y={36} />
        </BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureSales")}</th>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
      <FeatureLimitRow>
        <th>{t("pricing:headerFeatureIntegration")}</th>
        <BizCell><CheckIcon /></BizCell>
        <FreeCell><CheckIcon /></FreeCell>
      </FeatureLimitRow>
    </table>
  );
};

const Top = ({ data }) => {
  const { t } = useI18next();
  const [isYearly, setIsYearly] = useState(true);

  return (
    <DesktopBaseContainer className={styles.topContentContainer}>
      <div className={styles.topTitle}>{t("pricing:topTitle")}</div>

      <Padding y={40} />

      <TopDesc data={data} />

      <Padding y={60} />

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
        components: {
          ul: <ul />,
          li: <li />,
          // eslint-disable-next-line
          faqModeLink: <a href="/help/faq/about-mode" target="_blank" />,
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

      <a href="/help/start/pricing">
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
