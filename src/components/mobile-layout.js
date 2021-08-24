import React, { useState } from "react";
import PropTypes from "prop-types";
import { Trans } from "gatsby-plugin-react-i18next";
// js
import MobileHeader from "./mobile-header";
import MobileFooter from "./mobile-footer";
import { AppDownloadLink } from "../components/common";
import { LangPopup } from "./language-selector";
// css
import * as styles from "./mobile-layout.module.css";
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
  mainClassName,
  showEssentialOnly,
  children,
}) => {
  const [isShowLangPopup, onChangeIsShowLangPopup] = useState(false);
  return (
    <div className={styles.mobileLayout}>
      <MobileHeader
        isFloatMenu={isFloatMenu}
        curMenu={curMenu}
        onChangeIsShowLangPopup={onChangeIsShowLangPopup}
      />
      <main className={mainClassName}>{children}</main>
      {!hideFloatAppInstallButton && <InstallButton />}
      <MobileFooter
        showEssentialOnly={showEssentialOnly}
        closingEmoji={closingEmoji}
        closingMsg={closingMsg}
        onChangeIsShowLangPopup={onChangeIsShowLangPopup}
      />
      <LangPopup
        isShow={isShowLangPopup}
        onClickClose={() => onChangeIsShowLangPopup(false)}
      />
    </div>
  );
};

MobileLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  hideFloatAppInstallButton: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object,
  closingMsg: PropTypes.any,
  mainClassName: PropTypes.string,
  showEssentialOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
