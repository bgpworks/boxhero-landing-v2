import React from "react";
import PropTypes from "prop-types";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
// js
import {
  DesktopBaseContainer,
  Padding,
  StartNowButton,
} from "./common";
import * as constants from "./constants";
import { LangSelect } from "./language-selector";
// css
import * as styles from "./desktop-footer.module.css";
// images
import svgPcWeb from "../images/pcweb.svg";
import svgWindows from "../images/windows.svg";
import svgOsx from "../images/osx.svg";
import svgAppstore from "../images/appstore.svg";
import svgPlaystore from "../images/playstore.svg";
import svgCompanyLogo from "../images/company-logo.svg";
import SocialLinkList from "./social-link-list";

const PlatformGroup = ({ title, children }) => (
  <div className={styles.platformGroup}>
    <div className={styles.platformGroupButtons}>
      {children}
    </div>
    <Padding y={8} />
    <div className={styles.platformGroupTitle}>
      {title}
    </div>
  </div>
);

const Platforms = ({ t }) => (
  <div className={styles.platformContainer}>
    <div className={styles.platformTitle}>
      {t("footer:platformsTitle")}
    </div>
    <Padding y={12} />
    <div className={styles.platformFooterMsg}>
      {t("footer:platformsMessage")}
    </div>

    <Padding y={56} />

    <div className={styles.platformGroups}>
      <PlatformGroup title={t("footer:platformGroupWeb")}>
        <StartNowButton className={styles.platformButton}>
          <img
            src={svgPcWeb}
            alt="PC"
          />
          {t("footer:platformsPC")}
        </StartNowButton>
      </PlatformGroup>

      <PlatformGroup title={t("footer:platformGroupDesktop")}>
        <a href={constants.urlDownloadWindows}>
          <button
            type="button"
            className={styles.platformButton}
          >
            <img
              src={svgWindows}
              alt="Windows"
            />
            {t("footer:platformsWindows")}
          </button>
        </a>
        <a href={constants.urlDownloadOsx}>
          <button
            type="button"
            className={styles.platformButton}
          >
            <img
              src={svgOsx}
              alt="macOS"
            />
            {t("footer:platformsOsx")}
          </button>
        </a>
      </PlatformGroup>

      <PlatformGroup title={t("footer:platformGroupMobile")}>
        <a href="https://play.google.com/store/apps/details?id=com.bgpworks.boxhero">
          <img
            src={svgPlaystore}
            className={styles.platformImgButton}
            alt="Android"
          />
        </a>
        <a href="https://itunes.apple.com/app/id1325512157">
          <img
            src={svgAppstore}
            className={styles.platformImgButton}
            alt="iOS"
          />
        </a>
      </PlatformGroup>
    </div>
  </div>
);

const DesktopFooterMenus = ({ t }) => (
  <div className={styles.footerMenusContainer}>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>{t("footer:footerMenuService")}</div>
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
      <div className={styles.footerMenuLabel}>{t("footer:footerMenuUseCases")}</div>
      <div>
        <Link to="/usecase-sales">{t("footer:footerMenuUseCaseSales")}</Link>
      </div>
      <div>
        <Link to="/usecase-material">{t("footer:footerMenuUseCaseMaterial")}</Link>
      </div>
      <div>
        <Link to="/usecase-assets">{t("footer:footerMenuUseCaseAssets")}</Link>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>{t("footer:footerMenuResource")}</div>
      <div>
        <a
          href={t("url:ghostblog")}
          target="_blank"
          rel="noreferrer"
        >
          {t("footer:footerMenuCompanyBlog")}
        </a>
      </div>
      <div>
        <a
          href={t("url:doc")}
          target="_blank"
          rel="noreferrer"
        >
          {t("footer:footerMenuSupportManual")}

        </a>
      </div>
      <div>
        <a
          href={t("url:support")}
          target="_blank"
          rel="noreferrer"
        >
          {t("footer:footerMenuSupportDocs")}
        </a>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>{t("footer:footerMenuCompany")}</div>
      <div>
        <a href="https://www.bgpworks.com">
          {t("footer:footerMenuCompanyHome")}
        </a>
      </div>
      <div>
        <a
          href={t("url:hire")}
          target="_blank"
          rel="noreferrer"
        >
          {t("footer:footerMenuCompanyHire")}
        </a>
      </div>
    </div>
    <div>
      <div>
        <LangSelect className={styles.footerLangSelector} />
      </div>

      <Padding y={36} />

      <div className={styles.wideFooterMenusColumn}>
        <div className={styles.footerMenuLabel}>{t("footer:footerMenuContact")}</div>
        <div>
          {t("footer:footerMenuContactEmail")}
          {" "}
          <a href="mailto:support+boxhero@bgpworks.com">
            support+boxhero@bgpworks.com
          </a>
        </div>
        <div>
          {t("footer:footerMenuContactBusiness")}
          {" "}
          <a href="mailto:corp@bgpworks.com">corp@bgpworks.com</a>
        </div>
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
        alt="BGPworks"
      />
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
        {`© ${new Date().getFullYear()}, BGPworks. ${t("footer:copyRight")}`}
      </div>
    </div>
    <SocialLinkList />
  </div>
);

const DesktopFooterMenusAndInfo = ({ t }) => (
  <div className={styles.footerMenusAndInfoContainer}>
    <DesktopBaseContainer className={styles.px10}>
      <DesktopFooterMenus t={t} />
      <Padding y={72} />
      <CompanyInfo t={t} />
    </DesktopBaseContainer>
  </div>
);

const DesktopFooter = ({ showPlatforms }) => {
  const { t } = useI18next();
  return (
    <div>
      {showPlatforms && <Platforms t={t} />}
      <DesktopFooterMenusAndInfo t={t} />
    </div>
  );
};

DesktopFooter.propTypes = {
  showPlatforms: PropTypes.bool,
};

DesktopFooter.defaultProps = {
  showPlatforms: true,
};

export default DesktopFooter;
