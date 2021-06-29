import React, { useState } from "react";
import PropTypes from "prop-types";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileHeader from "./mobile-header";
import MobileFooter from "./mobile-footer";
import { AppDownloadLink } from "../components/common";
import { LangPopup } from "./language-selector";
// css
import styles from "./mobile-layout.module.css";
import { useCheckScrolled } from "../hooks/useCheckScrolled";
// images
import svgDownload from "../images/download.svg";

const InstallButton = () => {
  const { isScrolled } = useCheckScrolled();

  return (
    <AppDownloadLink>
      <div
        className={`${styles.installButton} ${isScrolled ? styles.fixed : ""}`}
      >
        <img
          className={styles.downloadImage}
          src={svgDownload}
          alt="Download symbol"
        />
        <Trans i18nKey="layout:appInstall" />
      </div>
    </AppDownloadLink>
  );
};

const MobileLayout = ({
  isFloatMenu,
  hideFloatAppInstallButton,
  curMenu,
  closingEmoji,
  closingMsg,
  children,
}) => {
  const [isShowLangPopup, onChangeIsShowLangPopup] = useState(false);
  return (
    <div className={styles.mobileLayout}>
      <MobileHeader isFloatMenu={isFloatMenu} curMenu={curMenu} onChangeIsShowLangPopup={onChangeIsShowLangPopup} />
      <main>{children}</main>
      {!hideFloatAppInstallButton && <InstallButton />}
      <MobileFooter closingEmoji={closingEmoji} closingMsg={closingMsg} onChangeIsShowLangPopup={onChangeIsShowLangPopup} />
      <LangPopup
        isShow={isShowLangPopup}
        onClickClose={() => onChangeIsShowLangPopup(false)}
      />
    </div>
  );
}

MobileLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  hideFloatAppInstallButton: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
