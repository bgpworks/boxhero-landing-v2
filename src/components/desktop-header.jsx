import React from "react";
import PropTypes from "prop-types";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
// js
import { DesktopBaseContainer, ExternalLinkWithQuery } from "./common";
import { urlStart } from "./constants";
// css
import * as styles from "./desktop-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";
import { useCheckScrolled } from "../hooks/useCheckScrolled";

const DesktopHeader = ({ isFloatMenu, curMenu }) => {
  const { isScrolled } = useCheckScrolled();
  const isWhite = !isFloatMenu || isScrolled;
  // 여기서 이상한 워닝 뜨는건 gatsby-plugin-react-i18next의 이슈. 기능상 문제는 없는 듯. https://github.com/microapps/gatsby-plugin-react-i18next/issues/5
  const { t } = useTranslation();
  return (
    <>
      <header
        className={`${styles.headerContainer} ${
          isWhite ? styles.whiteContainer : ""
        }`}
      >
        <DesktopBaseContainer className={styles.menuContainer}>
          <Link to="/">
            <img
              src={isWhite ? svgBiBlue : svgBiWhite}
              className={styles.biLogo}
              alt="Home"
            />
          </Link>

          <div className={styles.padding} />

          <Link
            to="/about/"
            className={curMenu === "about" ? styles.selected : ""}
          >
            {t("header:menuAbout")}
          </Link>

          <Link
            to="/features/"
            className={curMenu === "features" ? styles.selected : ""}
          >
            {t("header:menuFeatures")}
          </Link>

          <Link
            to="/pricing/"
            className={curMenu === "pricing" ? styles.selected : ""}
          >
            {t("header:menuPricing")}
          </Link>

          <a href={t("url:doc")}>{t("header:menuDoc")}</a>

          <ExternalLinkWithQuery href={urlStart}>
            <button
              type="button"
              className={styles.loginButton}
            >
              {t("header:menuLoginButton")}
            </button>
          </ExternalLinkWithQuery>
        </DesktopBaseContainer>
      </header>
      {!isFloatMenu && <div className={styles.headerPlaceholder} />}
    </>
  );
};

DesktopHeader.propTypes = {
  isFloatMenu: PropTypes.bool,
};

DesktopHeader.defaultProps = {
  isFloatMenu: false,
};

export default DesktopHeader;