import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
// js
import { Padding } from "./common";
// css
import * as styles from "./mobile-footer.module.css";
// images
import svgCompanyLogo from "../images/company-logo.svg";

const StartNow = ({ emoji, message, t }) => (
  <div className={styles.startNowContainer}>
    <GatsbyImage image={emoji.childImageSharp.gatsbyImageData} />
    <div className={styles.startNowDescription}>{message}</div>
  </div>
);

StartNow.propTypes = {
  emoji: PropTypes.object.isRequired,
  // string or object
  message: PropTypes.any.isRequired,
};

const MobileFooterMenus = ({ t, onChangeIsShowLangPopup }) => (
  <div>
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
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        <button
          className={styles.langButton}
          onClick={() => onChangeIsShowLangPopup(true)}
        >
          {t("footer:footerMenuLanguage")}
        </button>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
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
  </div>
);

const CompanyInfo = ({ t }) => (
  <div>
    <div>
      <img className={styles.companyLogo} src={svgCompanyLogo} alt="BGPworks" />
    </div>
    <Padding y={10} />
    <div className={styles.companyInfoDetail}>
      <Trans i18nKey="footer:companyInfoRegisterNoMobile" />
      <br />
      <Trans
        i18nKey="footer:companyInfoAddressMobile"
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
    <Padding y={10} />
    <div>© {new Date().getFullYear()}, BGPworks. All rights reserved.</div>
  </div>
);

const MobileFooterMenusAndInfo = (props) => (
  <div className={styles.footerMenusAndInfoContainer}>
    <div className={styles.footerMenusAndInfoContentContainer}>
      <MobileFooterMenus {...props} />
      <Padding y={50} />
      <CompanyInfo {...props} />
    </div>
  </div>
);

const MobileFooter = ({
  closingEmoji,
  closingMsg,
  onChangeIsShowLangPopup,
  showEssentialOnly,
}) => {
  const { t } = useI18next();
  return (
    <div>
      {!showEssentialOnly && (
        <StartNow emoji={closingEmoji} message={closingMsg} t={t} />
      )}
      <MobileFooterMenusAndInfo
        t={t}
        onChangeIsShowLangPopup={onChangeIsShowLangPopup}
      />
    </div>
  );
};

MobileFooter.propTypes = {
  closingEmoji: PropTypes.object.isRequired,
  // string or object
  closingMsg: PropTypes.any.isRequired,
  showEssentialOnly: PropTypes.bool,
};

export default MobileFooter;
