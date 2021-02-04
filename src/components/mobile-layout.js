import React from "react";
import PropTypes from "prop-types";
import { Trans } from "@jbseo/gatsby-plugin-react-i18next";
// js
import MobileHeader from "./mobile-header";
import MobileFooter from "./mobile-footer";
import { AppDownloadLink } from "../components/common";
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
}) => (
  <div className={styles.mobileLayout}>
    <MobileHeader isFloatMenu={isFloatMenu} curMenu={curMenu} />
    <main>{children}</main>
    {!hideFloatAppInstallButton && <InstallButton />}
    <MobileFooter closingEmoji={closingEmoji} closingMsg={closingMsg} />
  </div>
);

MobileLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  hideFloatAppInstallButton: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
