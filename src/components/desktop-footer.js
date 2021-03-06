import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
// js
import { Container1024, ExternalLinkWithQuery } from "./common";
import * as constants from "./constants";
import { LangSelect } from "./language-selector";
// css
import styles from "./desktop-footer.module.css";
// images
import svgPcWeb from "../images/pcweb.svg";
import svgWindows from "../images/windows.svg";
import svgOsx from "../images/osx.svg";
import svgAppstore from "../images/appstore.svg";
import svgPlaystore from "../images/playstore.svg";
import svgCompanyLogo from "../images/company-logo.svg";

const StartNow = ({ emoji, message, t }) => (
  <div className={styles.startNowContainer}>
    <Img fixed={emoji.childImageSharp.fixed} />
    <div className={styles.startNowDescription}>{message}</div>
    <ExternalLinkWithQuery href={constants.urlStart}>
      <button className={styles.startNowButton}>
        {t("footer:startNowButton")}
      </button>
    </ExternalLinkWithQuery>
  </div>
);

StartNow.propTypes = {
  emoji: PropTypes.object.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

const Platforms = ({ t }) => (
  <div className={styles.platformContainer}>
    <div className={styles.platformGroups}>
      <div className={styles.platformGroup}>
        <div className={styles.platformGroupTitle}>
          {t("footer:platformGroupWeb")}
        </div>
        <div className={styles.platformGroupButtons}>
          <a href={constants.urlStart}>
            <button className={styles.platformButton}>
              <img src={svgPcWeb} alt="PC" />
              {t("footer:platformsPC")}
            </button>
          </a>
        </div>
      </div>

      <div className={styles.platformGroup}>
        <div className={styles.platformGroupTitle}>
          {t("footer:platformGroupDesktop")}
        </div>
        <div className={styles.platformGroupButtons}>
          <a href={constants.urlDownloadWindows}>
            <button className={styles.platformButton}>
              <img src={svgWindows} alt="Windows" />
              {t("footer:platformsWindows")}
            </button>
          </a>
          <a href={constants.urlDownloadOsx}>
            <button className={styles.platformButton}>
              <img src={svgOsx} alt="macOS" />
              {t("footer:platformsOsx")}
            </button>
          </a>
        </div>
      </div>

      <div className={styles.platformGroup}>
        <div className={styles.platformGroupTitle}>
          {t("footer:platformGroupMobile")}
        </div>
        <div className={styles.platformGroupButtons}>
          <a href="https://itunes.apple.com/app/id1325512157">
            <img
              src={svgAppstore}
              className={styles.platformImgButton}
              alt="iOS"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.bgpworks.boxhero">
            <img
              src={svgPlaystore}
              className={styles.platformImgButton}
              alt="Android"
            />
          </a>
        </div>
      </div>
    </div>

    <div className={styles.platformFooterMsg}>
      {t("footer:platformsLastMessage")}
    </div>
  </div>
);

const DesktopFooterMenus = ({ t }) => (
  <div className={styles.footerMenusContainer}>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>Service</div>
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
      <div className={styles.footerMenuLabel}>Support</div>
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
      <div className={styles.footerMenuLabel}>Company</div>
      <div>
        <a href="https://www.bgpworks.com">
          {t("footer:footerMenuCompanyHome")}
        </a>
      </div>
      <div>
        <a href={t("url:blog")}>{t("footer:footerMenuCompanyBlog")}</a>
      </div>
      <div>
        <a href={t("url:hire")} target="_blank" rel="noreferrer">
          {t("footer:footerMenuCompanyHire")}
        </a>
      </div>
    </div>
    <div className={styles.wideFooterMenusColumn}>
      <div className={styles.footerMenuLabel}>Contact</div>
      <div>{t("footer:footerMenuContactTel")}</div>
      <div>
        {t("footer:footerMenuContactEmail")}{" "}
        <a href="mailto:support+boxhero@bgpworks.com">
          support+boxhero@bgpworks.com
        </a>
      </div>
      <div>
        {t("footer:footerMenuContactBusiness")}{" "}
        <a href="mailto:corp@bgpworks.com">corp@bgpworks.com</a>
      </div>
      <div>
        {t("footer:footerMenuContactKakao")}{" "}
        <a href="https://pf.kakao.com/_rHxgpxl">@boxhero</a>
      </div>
    </div>
    <div>
      <div className={styles.footerMenuLabel}>
        <LangSelect className={styles.footerLangSelector} />
      </div>
    </div>
  </div>
);

const CompanyInfo = ({ t }) => (
  <div className={styles.companyInfoContainer}>
    <div className={styles.logoContainer}>
      <img className={styles.companyLogo} src={svgCompanyLogo} alt="BGPworks" />
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

const DesktopFooter = ({ closingEmoji, closingMsg }) => {
  const { t } = useI18next();
  return (
    <div>
      <StartNow emoji={closingEmoji} message={closingMsg} t={t} />
      <Platforms t={t} />
      <DesktopFooterMenusAndInfo t={t} />
    </div>
  );
};

DesktopFooter.propTypes = {
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default DesktopFooter;
