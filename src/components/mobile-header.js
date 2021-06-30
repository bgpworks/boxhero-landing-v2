import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
// js
import { Container320, ExternalLinkWithQuery } from "./common";
import { urlStart } from "./constants";
// css
import styles from "./mobile-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";
import { useCheckScrolled } from "../hooks/useCheckScrolled";

const MenuItem = ({ children }) => (
  <div className={`${styles.splitLine} ${styles.menuItem}`}>{children}</div>
);

export const MobileHeader = ({
  isFloatMenu,
  curMenu,
  onChangeIsShowLangPopup,
}) => {
  // 여기서 이상한 워닝 뜨는건 gatsby-plugin-react-i18next의 이슈. 기능상 문제는 없는 듯. https://github.com/microapps/gatsby-plugin-react-i18next/issues/5
  const { t } = useI18next();
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
              <MenuItem>
                <Link
                  to="/about/"
                  className={curMenu === "about" ? styles.selected : ""}
                >
                  {t("header:menuAbout")}
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/features/"
                  className={curMenu === "features" ? styles.selected : ""}
                >
                  {t("header:menuFeatures")}
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/pricing/"
                  className={curMenu === "pricing" ? styles.selected : ""}
                >
                  {t("header:menuPricing")}
                </Link>
              </MenuItem>

              <MenuItem>
                <a href={t("url:doc")}>{t("header:menuDoc")}</a>
              </MenuItem>

              <div className={styles.langButtonContainer}>
                <button
                  className={styles.langButton}
                  onClick={() => {
                    onChangeIsShowLangPopup(true);
                    onChangeIsShow(false);
                  }}
                >
                  {t("header:menuLanguage")}
                </button>
              </div>

              <div className={styles.startNowContainer}>
                <ExternalLinkWithQuery href={urlStart}>
                  <button className={styles.startNowButton}>
                    {t("header:menuLoginButton")}
                  </button>
                </ExternalLinkWithQuery>
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
