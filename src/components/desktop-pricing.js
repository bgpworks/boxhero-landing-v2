import React, { useState } from "react";
import { Trans } from '@jbseo/gatsby-plugin-react-i18next';
// js
import DesktopLayout from "../components/desktop-layout";
import { Container1024, Padding, SimpleTop, DropDownQNA, Switch, Ribbon, ExternalLinkWithQuery } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./desktop-pricing.module.css";
// img
import svgCard from "../images/card.svg";
import svgCheck from "../images/check.svg";
// page transition
import { TransitionUp, TransitionImage } from "../transition"

const PriceTable = ({data, language, t}) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Container1024>
      <table className={styles.pricingTable}>
        <thead>
          <tr>
            <th> </th>
            <th>
              <strong>{t("pricing:freePlanTitle")}</strong>
              <br/>
              <small>For Personal</small>
            </th>
            <th>
              <strong>{t("pricing:bizPlanTitle")}</strong>
              <br/>
              <small>For Teams &amp; Businesses</small>
            </th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
            </td>
            <td>
              <div className={styles.price}>{t("pricing:freePlanPrice")}</div>
              <small>{t("pricing:freePlanPriceUnit")}</small>
            </td>
            <td className={styles.priceWrapper}>
              <Ribbon>
                <Trans
                  i18nKey="pricing:recommandRibbon"
                  components={{
                    small: <small/>,
                  }}
                />
              </Ribbon>
              <div className={styles.price}>{isYearly ? "$16.6" : "$20"}</div>
              <small>{t("pricing:bizPlanPriceUnit")}{isYearly ? t("pricing:paymentCycleYearly") : t("pricing:paymentCycleMonthly")}</small>
            </td>
          </tr>

          <tr>
            <td>
              <img src={svgCard} alt={t("pricing:creditCard")} />
            </td>
            <td>
              <strong><Trans i18nKey="pricing:freePlanDesc"/></strong>
            </td>
            <td>
              <strong><Trans i18nKey="pricing:bizPlanDesc"/></strong>
            </td>
          </tr>

          <tr>
            <td>
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
            </td>
            <td>
              <ExternalLinkWithQuery href={constants.urlStart}>
                <button
                  className={styles.startButton}>
                  {t("pricing:startNowButton")}
                </button>
              </ExternalLinkWithQuery>
            </td>
            <td>
              <ExternalLinkWithQuery href={constants.urlStart}>
                <button
                  className={styles.startButton}>
                  {t("pricing:startTrialButton")}
                </button>
              </ExternalLinkWithQuery>
            </td>
          </tr>

          <tr className={styles.sectionTr}>
            <td>
              <Padding y={53}/>
              {t("pricing:headerLimit")}
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>{t("pricing:limitMember")}</td>
            <td>{t("pricing:limitMemberFree")}</td>
            <td>{t("pricing:limitMemberBiz")}</td>
          </tr>
          <tr>
            <td>{t("pricing:limitProduct")}</td>
            <td>{t("pricing:limitProductFree")}</td>
            <td>{t("pricing:limitProductBiz")}</td>
          </tr>
          <tr>
            <td className={styles.thinHeight}>
              <Trans
                i18nKey="pricing:limitLocation"
                components={{
                  small: <small/>
                }}
              />
            </td>
            <td>{t("pricing:limitLocationFree")}</td>
            <td>{t("pricing:limitLocationBiz")}</td>
          </tr>

          <tr className={styles.sectionTr}>
            <td>
              <Padding y={43}/>
              {t("pricing:headerTeam")}
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>{t("pricing:teamInvite")}</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>
          <tr>
            <td>{t("pricing:teamMultiUser")}</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>
          <tr>
            <td>{t("pricing:teamACL")}</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>
          <tr>
            <td>{t("pricing:teamHistory")}</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>

          <tr className={styles.sectionTr}>
            <td>
              <Padding y={63}/>
              {t("pricing:headerExtension")}
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>{t("pricing:extensionMember")}</td>
            <td>-</td>
            <td className={styles.thinHeight}>
              <Trans
                i18nKey="pricing:extensionMemberBiz"
                components={{
                  small: <small/>
                }}/>
            </td>
          </tr>
          <tr>
            <td>{t("pricing:extensionProduct")}</td>
            <td>-</td>
            <td className={styles.thinHeight}>
              <Trans
                i18nKey="pricing:extensionProductBiz"
                components={{
                  small: <small/>
                }}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.thinHeight}>
              <Trans
                i18nKey="pricing:extensionLocation"
                components={{
                  small: <small/>
                }}
              />
            </td>
            <td>-</td>
            <td className={styles.thinHeight}>
              <Trans
                i18nKey="pricing:extensionLocationBiz"
                components={{
                  small: <small/>
                }}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <Trans i18nKey="pricing:postscriptFree"/>
            </td>
            <td>
              <Trans i18nKey="pricing:postscriptBiz"/>
            </td>
          </tr>
        </tfoot>
      </table>
    </Container1024>
  );
}

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
          webappLink: <a href={constants.urlStart}>""</a>,
        },
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
      <div className={styles.faqTitle}>
        {t("pricing:faqTitle")}
      </div>

      <Padding y={50} />

      <div className={styles.faqContentContainer}>
        {faqData.map((faq, index) => (
          <DropDownQNA
            key={index}
            title={faq.question}
          >
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

const DirectContact = ({t}) => (
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
          window.Beacon('toggle');
        }
      }}>
      {t("pricing:directContactInquiryButon")}
    </button>
  </div>
);

export const DesktopPricing = ({data, language, t}) => {
  return (
    <DesktopLayout
      isFloatMenu={false}
      curMenu="pricing"
      closingEmoji={data.box}
      closingMsg={t("pricing:closingMsg")}
    >
      <TransitionUp
        item={
          <SimpleTop
            title={t("pricing:topTitle")}
            desc={<Trans i18nKey="pricing:topDesc" />}
          />
        }
      />

      <Padding y={80}/>

      <TransitionImage
        force_load={true}
        is_desktop={true}
        item={
        <PriceTable
          data={data}
          language={language}
          t={t}
        />}
      />

      <Padding y={100}/>

      <FAQ t={t} />

      <DirectContact
        t={t}
      />

    </DesktopLayout>
  );
};

export default DesktopPricing;
