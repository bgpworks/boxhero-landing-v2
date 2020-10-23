import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link, Trans, useI18next } from '@jbseo/gatsby-plugin-react-i18next';
// js
import { Container1024, ExternalLinkWithQuery } from "./common";
import { urlStart } from "../components/constants";
import * as constants from "../components/constants";
// css
import styles from "./desktop-footer.module.css";
// images
import svgPcWeb from "../images/pcweb.svg";
import svgIOS from "../images/ios.svg";
import svgAndroid from "../images/android.svg";
import svgCompanyLogo from "../images/company-logo.svg";

const StartNow = ({emoji, message, t}) => (
  <div className={styles.startNowContainer}>
    <Img fixed={emoji.childImageSharp.fixed} />
    <div className={styles.startNowDescription}>
      {message}
    </div>
    <ExternalLinkWithQuery href={constants.urlStart}>
      <button
        className={styles.startNowButton}>
        {t("footer:startNowButton")}
      </button>
    </ExternalLinkWithQuery>
  </div>
);

StartNow.propTypes = {
  emoji: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
}

const Platforms = ({t}) => (
  <div className={styles.platformContainer}>
    <div className={styles.platformButtons}>
      <a href={urlStart}>
        <button className={styles.platformButton}>
          <img
            src={svgPcWeb}
            alt="PC" />
          {t("footer:platformsPC")}
        </button>
      </a>
      <a href="https://itunes.apple.com/app/id1325512157">
        <button className={styles.platformButton}>
          <img
            src={svgIOS}
            alt="iOS"/>
          {t("footer:platformsIOS")}
        </button>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.bgpworks.boxhero">
        <button className={styles.platformButton}>
          <img
            src={svgAndroid}
            alt="Android"/>
          {t("footer:platformsAndroid")}
        </button>
      </a>
    </div>
    {t("footer:platformsLastMessage")}
  </div>
);

const DesktopFooterMenus = ({ language, languages, changeLanguage, t }) => (
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
    <div className={styles.wideDesktopFooterMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Contact
      </div>
      <div className={styles.footerContactSpacing}>
        {t("footer:footerMenuContactTel")}
      </div>
      <div>
        {t("footer:footerMenuContactEmail")}  <a href="mailto:support+boxhero@bgpworks.com">support+boxhero@bgpworks.com</a>
      </div>
      <div className={styles.footerContactSpacing}>
        {t("footer:footerMenuContactBusiness")} <a href="mailto:corp@bgpworks.com">corp@bgpworks.com</a>
      </div>
      <div>
        {t("footer:footerMenuContactKakao")} <a href="https://pf.kakao.com/_rHxgpxl">@boxhero</a>
      </div>
    </div>
    <div>
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
  </div>
);

const CompanyInfo = ({ t }) => (
  <div className={styles.companyInfoContainer}>
    <div className={styles.logoContainer}>
      <img
        className={styles.companyLogo}
        src={svgCompanyLogo}
        alt="BGPworks"/>
    </div>
    <div>
      <div className={styles.companyInfoDetail}>
        <Trans i18nKey="footer:companyInfoRegisterNo" />
        <br />
        <Trans
          i18nKey="footer:companyInfoAddress"
          components={{
            // eslint-disable-next-line
            tosLink: <a href={t("url:tos")} />,
            // eslint-disable-next-line
            privacyLink: <a href={t("url:privacy")} />,
          }}
        />
      </div>
      <div className={styles.copyRight}>
        © {new Date().getFullYear()}, BGPworks. All rights reserved.
      </div>
    </div>
  </div>
);

const DesktopFooterMenusAndInfo = (props) => (
  <div className={styles.footerMenusAndInfoContainer}>
    <Container1024 className={styles.px10}>
      <DesktopFooterMenus {...props} />
      <CompanyInfo {...props} />
    </Container1024>
  </div>
);

const DesktopFooter = ({closingEmoji, closingMsg}) => {
  const { language, languages, changeLanguage, t } = useI18next();
  return (
    <div>
      <StartNow
        emoji={closingEmoji}
        message={closingMsg}
        t={t}
      />
      <Platforms
        t={t}
      />
      <DesktopFooterMenusAndInfo
        language={language}
        languages={languages}
        changeLanguage={changeLanguage}
        t={t}
      />
    </div>
  );
};

DesktopFooter.propTypes = {
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.string.isRequired,
};

export default DesktopFooter;
