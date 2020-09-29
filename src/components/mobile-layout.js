import React from "react";
import PropTypes from "prop-types";
import { Trans } from 'gatsby-plugin-react-i18next';
// js
import MobileHeader from "./mobile-header";
import MobileFooter from "./mobile-footer";
import * as constants from "../components/constants";
// css
import styles from "./mobile-layout.module.css";
import { useCheckScrolled } from '../hooks/useCheckScrolled'

const InstallButton = () => {
  const { isScrolled } = useCheckScrolled();

  return (
    <a
      href={constants.urlDownloadApp}>
      <div className={`${styles.installButton} ${isScrolled ? styles.fixed : ""}`} >
        <Trans i18nKey="layout:appInstall" />
      </div>
    </a>
  );
};

const MobileLayout = ({ isFloatMenu, curMenu, closingEmoji, closingMsg, children }) => (
  <div className={styles.mobileLayout}>
    <MobileHeader
      isFloatMenu={isFloatMenu}
      curMenu={curMenu}
    />
    <main>{children}</main>
    <InstallButton />
    <MobileFooter
      closingEmoji={closingEmoji}
      closingMsg={closingMsg}
    />
  </div>
);

MobileLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
