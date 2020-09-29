import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
// js
import { Container320 } from "./common";
import { urlStart } from "../components/constants";
// css
import styles from "./mobile-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";
import { useCheckScrolled } from "../hooks/useCheckScrolled";

export const MobileHeader = ({ isFloatMenu, curMenu }) => {
  // 여기서 이상한 워닝 뜨는건 gatsby-plugin-react-i18next의 이슈. 기능상 문제는 없는 듯. https://github.com/microapps/gatsby-plugin-react-i18next/issues/5
  const { language, changeLanguage, t } = useI18next();
  const [isShow, onChangeIsShow] = useState(false);
  const { isScrolled } = useCheckScrolled();

  const isWhite = !isFloatMenu || isScrolled || isShow;
  return (
    <>
      <div
        className={`${styles.menuOpenBg} ${isShow ? styles.isOpen : ""}`}
      ></div>
      <header
        className={`${styles.headerContainer} ${
          isWhite ? styles.whiteContainer : ""
        }`}
      >
        <div className={styles.logoAndExpandCotainer}>
          <Link to="/">
            <img
              src={isWhite ? svgBiBlue : svgBiWhite}
              className={styles.biLogo}
              alt="Home"
            />
          </Link>
          <button
            className={`${styles.menuBtn} ${isShow ? styles.isOpen : ""}`}
            onClick={() => onChangeIsShow(!isShow)}
          >
            <div className={styles.menuBtnLine}></div>
            <div className={styles.menuBtnLine}></div>
          </button>
        </div>
        <Container320 className={styles.menuContainer}>
          {isShow && (
            <>
              <div className={`${styles.splitLine} ${styles.menuItem}`}>
                <Link
                  to="/about/"
                  className={curMenu === "about" ? styles.selected : ""}
                >
                  {t("header:menuAbout")}
                </Link>
              </div>

              <div className={`${styles.splitLine} ${styles.menuItem}`}>
                <Link
                  to="/features/"
                  className={curMenu === "features" ? styles.selected : ""}
                >
                  {t("header:menuFeatures")}
                </Link>
              </div>

              <div className={`${styles.splitLine} ${styles.menuItem}`}>
                <Link
                  to="/pricing/"
                  className={curMenu === "pricing" ? styles.selected : ""}
                >
                  {t("header:menuPricing")}
                </Link>
              </div>

              <div className={`${styles.splitLine} ${styles.menuItem}`}>
                <a href={t("url:doc")}>{t("header:menuDoc")}</a>
              </div>

              <div className={styles.langButtonContainer}>
                <button
                  className={styles.langButton}
                  onClick={() =>
                    changeLanguage(language === "en" ? "ko" : "en")
                  }
                >
                  {language === "en" ? "KOR" : "ENG"}
                </button>
              </div>

              <div className={styles.startNowContainer}>
                <a href={urlStart}>
                  <button className={styles.startNowButton}>
                    {t("header:menuLoginButton")}
                  </button>
                </a>
              </div>
            </>
          )}
        </Container320>
      </header>
      {!isFloatMenu && <div className={styles.headerPlaceholder}></div>}
    </>
  );
};

MobileHeader.propTypes = {
  isFloatMenu: PropTypes.bool,
};

MobileHeader.defaultProps = {
  isFloatMenu: false,
};

export default MobileHeader;
