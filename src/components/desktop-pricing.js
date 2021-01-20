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
// img
import svgCard from "../images/card.svg";
import svgCheck from "../images/check.svg";

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
        </button>
        <div className={styles.yearlyPlanSaveLabel}>
          {t("pricing:yearlyPlanSaveLabel")}
        </div>
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
              <Ribbon>
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

          <tr>
            <td>
              <strong>
                <Trans i18nKey="pricing:freePlanDesc" />
              </strong>
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
            <td>기본 제공 한도</td>
            <td>기본 제공 한도</td>
          </tr>

          <tr>
            <td>{t("pricing:limitMemberFree")}</td>
            <td>{t("pricing:limitMemberBiz")}</td>
          </tr>
          <tr>
            <td>{t("pricing:limitProductFree")}</td>
            <td>{t("pricing:limitProductBiz")}</td>
          </tr>

          <tr className={styles.sectionTitleRow}>
            <td></td>
            <td>한도 확장</td>
          </tr>
          <tr>
            <td></td>
            <td className={styles.withSubDescription}>
              팀 멤버 최대 100명
              <br />
              (추가 멤버 1인당 월 $5)
            </td>
          </tr>
          <tr>
            <td className={styles.smallText}>
              *한도 확장을 위해서는 <br />
              비즈니스 플랜 이용이 필요합니다.
            </td>
            <td className={styles.withSubDescription}>
              관리 제품 5,000개
              <br />
              (추가 제품 1,000개당 월 $10)
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              *가장 보편적인 기본모드 기준이며 다른 모드로 팀 생성 시 한도 측정
              기준이 일부분 달라집니다.
              <br />
              자세한 내용은 여기를 눌러주세요.
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
          webappLink: <a href={constants.urlStart} />,
        },
      },
    },
    {
      question: t("pricing:faq11Question"),
      answer: {
        i18nKey: "pricing:faq11Answer",
        components: {
          // eslint-disable-next-line
          webappLink: <a href={constants.urlStart} />,
        },
      },
    },
    {
      question: t("pricing:faq12Question"),
      answer: {
        i18nKey: "pricing:faq12Answer",
        components: {
          otherMethodLink: (
            // eslint-disable-next-line
            <a href="https://docs-ko.boxhero-app.com/docs/pricing#%EA%B5%AD%EB%82%B4-%EC%B9%B4%EB%93%9C-%EB%B0%8F-%EA%B3%84%EC%A2%8C%EC%9D%B4%EC%B2%B4-%EA%B2%B0%EC%A0%9C-%EB%B0%A9%EB%B2%95" />
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
