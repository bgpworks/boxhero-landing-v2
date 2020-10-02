import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link, Trans, useI18next } from '@jbseo/gatsby-plugin-react-i18next';
// js
import { Container320, Padding } from "./common";
// css
import styles from "./mobile-footer.module.css";
// images
import svgCompanyLogo from "../images/company-logo.svg";

const StartNow = ({emoji, message, t}) => (
  <div className={styles.startNowContainer}>
    <Img fixed={emoji.childImageSharp.fixed} />
    <div className={styles.startNowDescription}>
      {message}
    </div>
  </div>
);

StartNow.propTypes = {
  emoji: PropTypes.object.isRequired,
  // string or object
  message: PropTypes.any.isRequired,
}

const MobileFooterMenus = ({ language, languages, changeLanguage, t }) => (
  <div className={styles.footerMenusContainer}>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Service
      </div>
      <div>
        <Link to="/about/">{t("footer:footerMenuServiceAbout")}</Link>
      </div>
      <div>
        <Link to="/features/">{t("footer:footerMenuServiceFeatures")}</Link>
      </div>
      <div>
        <Link to="/pricing/">{t("footer:footerMenuServicePricing")}</Link>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Support
      </div>
      <div>
        <a href={t("url:doc")}>{t("footer:footerMenuSupportDocs")}</a>
      </div>
      <div>
        <a href={t("url:faq")}>{t("footer:footerMenuSupportFaq")}</a>
      </div>
      <div>
        <a href={t("url:manual")}>{t("footer:footerMenuSupportManual")}</a>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Company
      </div>
      <div>
        <a href="https://www.bgpworks.com">{t("footer:footerMenuCompanyHome")}</a>
      </div>
      <div>
        <a href={t("url:blog")}>{t("footer:footerMenuCompanyBlog")}</a>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        <select
          className={styles.footerLangSelector}
          onBlur={(e) => {}}
          onChange={(e) => {
            if (e.target.value !== "" && e.target.value !== language) {
              changeLanguage(e.target.value);
            }
          }}
        >
          <option value="">{t("footer:footerMenuLanguage")}</option>
          {languages.map((lng) => (
            <option
              key={lng}
              value={lng}>
              {lng === "en"
               ? "English"
               : lng === "ko"
               ? "한국어"
               : lng}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Contact
      </div>
      <div>
        {t("footer:footerMenuContactTel")}
      </div>
      <div>
        {t("footer:footerMenuContactEmail")}  <a href="mailto:support+boxhero@bgpworks.com">support+boxhero@bgpworks.com</a>
      </div>
      <div>
        {t("footer:footerMenuContactBusiness")} <a href="mailto:corp@bgpworks.com">corp@bgpworks.com</a>
      </div>
      <div>
        {t("footer:footerMenuContactKakao")} <a href="https://pf.kakao.com/_rHxgpxl">@boxhero</a>
      </div>
    </div>
  </div>
);

const CompanyInfo = ({ t }) => (
  <div>
    <div>
      <img
        className={styles.companyLogo}
        src={svgCompanyLogo}
        alt="BGPworks"/>
    </div>
    <Padding y={10} />
    <div className={styles.companyInfoDetail}>
      <Trans i18nKey="footer:companyInfoRegisterNoMobile" />
      <br />
      <Trans
        i18nKey="footer:companyInfoAddressMobile"
        components={{
          // eslint-disable-next-line
          tosLink: <a
                     className={styles.tosPrivacyLink}
                     href={t("url:tos")} />,
          // eslint-disable-next-line
          privacyLink: <a
                         className={styles.tosPrivacyLink}
                         href={t("url:privacy")} />,
        }}
      />
    </div>
    <Padding y={10} />
    <div>
      © {new Date().getFullYear()}, BGPworks. All rights reserved.
    </div>
  </div>
);

const MobileFooterMenusAndInfo = (props) => (
  <div className={styles.footerMenusAndInfoContainer}>
    <Container320 className={styles.footerMenusAndInfoContentContainer}>
      <MobileFooterMenus {...props} />
      <Padding y={50} />
      <CompanyInfo {...props} />
    </Container320>
  </div>
);

const MobileFooter = ({closingEmoji, closingMsg}) => {
  const { language, languages, changeLanguage, t } = useI18next();
  return (
    <div>
      <StartNow
        emoji={closingEmoji}
        message={closingMsg}
        t={t}
      />
      <MobileFooterMenusAndInfo
        language={language}
        languages={languages}
        changeLanguage={changeLanguage}
        t={t}
      />
    </div>
  );
};

MobileFooter.propTypes = {
  closingEmoji: PropTypes.object.isRequired,
  // string or object
  closingMsg: PropTypes.any.isRequired,
};

export default MobileFooter;
