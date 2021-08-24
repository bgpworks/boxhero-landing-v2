import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Trans } from 'gatsby-plugin-react-i18next';
// js
import DesktopLayout from './desktop-layout';
import {
  Container1024,
  Padding,
  SimpleTop,
  DropDownQNA,
  Switch,
  Ribbon,
  ExternalLinkWithQuery,
} from './common';
import * as constants from './constants';
// css
import * as styles from './desktop-pricing.module.css';

const TopDescColumn = ({ emoji, title, desc }) => (
  <div className={styles.topDescColumn}>
    <GatsbyImage
      image={emoji}
      alt={title}
      style={{ margin: '0 auto' }}
    />

    <Padding y={10} />
    <div className={styles.topDescTitle}>{title}</div>
    <Padding y={10} />
    <div className={styles.topDescDesc}>{desc}</div>
  </div>
);

const TopDescSpliter = () => <div className={styles.vl} />;

const TopDesc = ({ data, t }) => (
  <Container1024>
    <div className={styles.topDescContainer}>
      <TopDescColumn
        emoji={data.emojiOne.childImageSharp.gatsbyImageData}
        title={t('pricing:topDesc1Title')}
        desc={<Trans i18nKey="pricing:topDesc1Desc" />}
      />
      <TopDescSpliter />
      <TopDescColumn
        emoji={data.emojiTwo.childImageSharp.gatsbyImageData}
        title={t('pricing:topDesc2Title')}
        desc={<Trans i18nKey="pricing:topDesc2Desc" />}
      />
    </div>
  </Container1024>
);

const PriceTable = ({ t }) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      <div className={styles.switchContainer}>
        <button
          type="button"
          className={`${styles.billingCycleButton} ${
            isYearly ? '' : styles.active
          }`}
          onClick={() => setIsYearly(false)}
        >
          {t('pricing:switchLabelMonthly')}
        </button>
        <Switch
          isActive={isYearly}
          onChange={(active) => setIsYearly(active)}
        />
        <button
          type="button"
          className={`${styles.billingCycleButton} ${
            isYearly ? styles.active : ''
          }`}
          onClick={() => setIsYearly(true)}
        >
          {t('pricing:switchLabelYearly')}
          <div className={styles.yearlyPlanSaveLabel}>
            {t('pricing:yearlyPlanSaveLabel')}
          </div>
        </button>
      </div>
      <table className={styles.pricingTable}>
        <thead>
          <tr>
            <th>
              <strong>{t('pricing:freePlanTitle')}</strong>
              <br />
              <small>For Personal</small>
            </th>
            <th>
              <strong>{t('pricing:bizPlanTitle')}</strong>
              <br />
              <small>For Teams &amp; Businesses</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.price}>{t('pricing:freePlanPrice')}</div>
              <small>{t('pricing:freePlanPriceUnit')}</small>
            </td>
            <td className={styles.priceWrapper}>
              <Ribbon>
                <Trans
                  i18nKey="pricing:recommandRibbon"
                  components={{ small: <small /> }}
                />
              </Ribbon>
              <div className={styles.price}>{isYearly ? '$16.6' : '$20'}</div>
              <small>{t('pricing:bizPlanPriceUnit')}</small>
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
                <button
                  type="button"
                  className={styles.startButton}
                >
                  {t('pricing:startNowButton')}
                </button>
              </ExternalLinkWithQuery>
            </td>
            <td>
              <ExternalLinkWithQuery href={constants.urlStart}>
                <button
                  type="button"
                  className={styles.startButton}
                >
                  {t('pricing:startTrialButton')}
                </button>
              </ExternalLinkWithQuery>
            </td>
          </tr>

          <tr className={styles.sectionTitleRow}>
            <td>{t('pricing:headerLimit')}</td>
            <td>{t('pricing:headerLimit')}</td>
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
              <Trans i18nKey="pricing:limitItemFree" />
            </td>
            <td>
              <Trans i18nKey="pricing:limitItemBiz" />
            </td>
          </tr>

          <tr className={styles.sectionTitleRow}>
            <td />
            <td>{t('pricing:headerExtension')}</td>
          </tr>
          <tr>
            <td />
            <td className={styles.multiLine}>
              <Trans
                i18nKey="pricing:limitMemberBizExtensible"
                components={{ small: <small /> }}
              />
            </td>
          </tr>
          <tr>
            <td className={styles.verticalAlignBottom}>
              <Trans
                i18nKey="pricing:extensionDescription"
                components={{
                  extraSmall: <span className={styles.extraSmall} />,
                }}
              />
            </td>
            <td className={styles.multiLine}>
              <Trans
                i18nKey="pricing:limitItemBizExtensible"
                components={{ small: <small /> }}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <Trans i18nKey="pricing:footerDescription" />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

const Faq = ({ t }) => {
  const faqData = [
    {
      question: t('pricing:faq1Question'),
      answer: {
        i18nKey: 'pricing:faq1Answer',
      },
    },
    {
      question: t('pricing:faq2Question'),
      answer: {
        i18nKey: 'pricing:faq2Answer',
        components: {
          ul: <ul />,
          li: <li />,
          // eslint-disable-next-line
          faqModeLink: <a href={t("pricing:modeFaqUrl")} target="_blank" />,
        },
      },
    },
    {
      question: t('pricing:faq3Question'),
      answer: {
        i18nKey: 'pricing:faq3Answer',
      },
    },
    {
      question: t('pricing:faq4Question'),
      answer: {
        i18nKey: 'pricing:faq4Answer',
      },
    },
    {
      question: t('pricing:faq5Question'),
      answer: {
        i18nKey: 'pricing:faq5Answer',
      },
    },
    {
      question: t('pricing:faq6Question'),
      answer: {
        i18nKey: 'pricing:faq6Answer',
      },
    },
    {
      question: t('pricing:faq7Question'),
      answer: {
        i18nKey: 'pricing:faq7Answer',
      },
    },
    {
      question: t('pricing:faq8Question'),
      answer: {
        i18nKey: 'pricing:faq8Answer',
        components: {
          faqPaymentLink: (
            // eslint-disable-next-line
            <a href={constants.urlFaqPaymentDomestic} target="_blank" />
          ),
        },
      },
    },
    {
      question: t('pricing:faq9Question'),
      answer: {
        i18nKey: 'pricing:faq9Answer',
      },
    },
  ];
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>{t('pricing:faqTitle')}</div>

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

      <Padding y={50} />

      <a href={t('url:pricing')}>
        <button
          type="button"
          className={styles.buttonShowMore}
        >
          {t('pricing:faqMoreButton')}
        </button>
      </a>
    </div>
  );
};

const DirectContact = ({ t }) => (
  <div className={styles.directContactContainer}>
    <div className={styles.directContactTitle}>
      {t('pricing:directContactTitle')}
    </div>

    <Padding y={10} />

    <div className={styles.directContactDesc}>
      {t('pricing:directContactDesc')}
    </div>

    <Padding y={50} />

    <button
      type="button"
      className={styles.directContactButton}
      onClick={() => {
        if ('Beacon' in window) {
          window.Beacon('toggle');
        }
      }}
    >
      {t('pricing:directContactInquiryButon')}
    </button>
  </div>
);

const DesktopPricing = ({ data, language, t }) => (
  <DesktopLayout
    isFloatMenu={false}
    curMenu="pricing"
    closingEmoji={data.box}
    closingMsg={t('pricing:closingMsg')}
  >
    <SimpleTop title={t('pricing:topTitle')}>
      <TopDesc
        data={data}
        t={t}
      />
    </SimpleTop>

    <Padding y={80} />

    <PriceTable
      data={data}
      language={language}
      t={t}
    />

    <Padding y={100} />

    <Faq t={t} />

    <DirectContact t={t} />
  </DesktopLayout>
);

export default DesktopPricing;
