import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
// js
import * as constants from "./constants";
import { Padding } from "./common";
import SocialLinkList from "./social-link-list";
// css
import * as styles from "./mobile-footer.module.css";
// images
import svgCompanyLogo from "../images/company-logo.svg";

const Platforms = ({ t }) => (
  <section>{t("footer:platformsTitle")}</section>
);

const StartNow = ({ emoji, message }) => (
  <section className={styles.startNowContainer}>
    <GatsbyImage image={emoji.childImageSharp.gatsbyImageData} />
    <Padding y={10} />
    <p className={styles.startNowDescription}>{message}</p>
  </section>
);

StartNow.propTypes = {
  emoji: PropTypes.object.isRequired,
  // string or object
  message: PropTypes.any.isRequired,
};

const FooterMenu = ({ title, children }) => (
  <div className={styles.footerMenu}>
    <strong className={styles.footerMenuLabel}>{title}</strong>
    <ul className={styles.footerSubMenu}>
      {children && children.map((subMenu, index) => (
        <li key={index}>{subMenu}</li>
      ))}
    </ul>
  </div>
);

const MobileFooterMenus = ({ t, language, onChangeIsShowLangPopup }) => (
  <article>
    <FooterMenu title={t("footer:footerMenuService")}>
      <Link to="/about/">{t("footer:footerMenuServiceAbout")}</Link>
      <Link to="/features/">{t("footer:footerMenuServiceFeatures")}</Link>
      <Link to="/pricing/">{t("footer:footerMenuServicePricing")}</Link>
    </FooterMenu>

    <FooterMenu title={t("footer:footerMenuUseCases")}>
      <Link to="/usecase-sales">{t("footer:footerMenuUseCaseSales")}</Link>
      <Link to="/usecase-material">{t("footer:footerMenuUseCaseMaterial")}</Link>
      <Link to="/usecase-assets">{t("footer:footerMenuUseCaseAssets")}</Link>
    </FooterMenu>

    <FooterMenu title={t("footer:footerMenuResource")}>
      <Link to="/blog">{t("footer:footerMenuCompanyBlog")}</Link>
      <a href={t("url:doc")}>{t("footer:footerMenuSupportDocs")}</a>
      <a href={t("url:faq")}>{t("footer:footerMenuSupportFaq")}</a>
      <a href={t("url:manual")}>{t("footer:footerMenuSupportManual")}</a>
    </FooterMenu>

    <FooterMenu title={t("footer:footerMenuCompany")}>
      <a href="https://www.bgpworks.com">
        {t("footer:footerMenuCompanyHome")}
      </a>
      <a
        href={t("url:hire")}
        target="_blank"
        rel="noreferrer"
      >
        {t("footer:footerMenuCompanyHire")}
      </a>
    </FooterMenu>

    <FooterMenu
      title={(
        <button
          type="button"
          className={styles.langButton}
          onClick={() => onChangeIsShowLangPopup(true)}
        >
          {t("footer:footerMenuLanguage")}
        </button>
      )}
    />

    <FooterMenu title={t("footer:footerMenuContact")}>
      <span>{t("footer:footerMenuContactTel")}</span>
      <span>
        {t("footer:footerMenuContactEmail")}
        {" "}
        <a href="mailto:support+boxhero@bgpworks.com">
          support+boxhero@bgpworks.com
        </a>
      </span>
      <span>
        {t("footer:footerMenuContactBusiness")}
        {" "}
        <a href="mailto:corp@bgpworks.com">corp@bgpworks.com</a>
      </span>
      {language === "ko"
        ? (
          <span>
            {t("footer:footerMenuContactKakao")}
            { " "}
            <a href={constants.urlKakaoTalk}>@boxhero</a>
          </span>
        )
        : (
          <span>
            {t("footer:footerMenuContactWhatsApp")}
            {" "}
            <a href={constants.urlWhatsApp}>@boxhero</a>
          </span>
        )}
    </FooterMenu>
  </article>
);

const CompanyInfo = ({ t }) => (
  <article>
    <img
      className={styles.companyLogo}
      src={svgCompanyLogo}
      alt="BGPworks"
    />
    <Padding y={20} />
    <div className={styles.companyInfoDetail}>
      <Trans i18nKey="footer:companyInfoRegisterNoMobile" />
      <br />
      <Trans
        i18nKey="footer:companyInfoAddressMobile"
      />
    </div>
    <Padding y={40} />
    <div className={styles.policyLink}>
      <Trans
        i18nKey="footer:policyLinkMobile"
        components={{
          // eslint-disable-next-line
          tosLink: <a className={styles.tosPrivacyLink} href={t("url:tos")} />,
          privacyLink: (
            // eslint-disable-next-line
            <a className={styles.tosPrivacyLink} href={t("url:privacy")} />
          ),
        }}
      />
    </div>
    <Padding y={40} />
    <SocialLinkList />
    <Padding y={20} />
    <div>
      {`© ${new Date().getFullYear()}, BGPworks. ${t("footer:copyRight")}`}
    </div>
  </article>
);

const MobileFooterMenusAndInfo = ({ t, language, onChangeIsShowLangPopup }) => (
  <section className={styles.footerMenusAndInfoContainer}>
    <MobileFooterMenus
      t={t}
      language={language}
      onChangeIsShowLangPopup={onChangeIsShowLangPopup}
    />
    <Padding y={50} />
    <CompanyInfo t={t} />
  </section>
);

const MobileFooter = ({
  closingEmoji,
  closingMsg,
  onChangeIsShowLangPopup,
  showPlatforms,
  showStartNow,
}) => {
  const { t, language } = useI18next();
  return (
    <footer>
      {showPlatforms && <Platforms t={t} />}
      {showStartNow && (
        <StartNow
          emoji={closingEmoji}
          message={closingMsg}
        />
      )}
      <MobileFooterMenusAndInfo
        t={t}
        language={language}
        onChangeIsShowLangPopup={onChangeIsShowLangPopup}
      />
    </footer>
  );
};

MobileFooter.propTypes = {
  closingEmoji: PropTypes.object,
  // string or object
  closingMsg: PropTypes.any,
  showPlatforms: PropTypes.bool,
  showStartNow: PropTypes.bool,
};

MobileFooter.defaultProps = {
  showPlatforms: true,
  showStartNow: true,
};

export default MobileFooter;
