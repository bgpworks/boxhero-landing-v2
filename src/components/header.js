import React from "react";
import PropTypes from "prop-types";
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
// js
import { Container1024 } from "./common"
import { urlStart } from "../components/constants";
// css
import styles from "./header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";

const Header = ({ isFloatMenu, curMenu }) => {
  const { t } = useTranslation();
  return (
    <header className={`${styles.headerContainer} ${isFloatMenu ? styles.floatContainer : ""}`}>
      <Container1024 className={styles.menuContainer}>
        <Link to="/">
          <img
            src={isFloatMenu ? svgBiWhite : svgBiBlue}
            className={styles.biLogo}
            alt="Home" />
        </Link>

        <div className={styles.padding}/>

        <Link
          to="/about/"
          className={curMenu === "about" ? styles.selected : ""}>
          {t("header:menuAbout")}
        </Link>

        <Link
          to="/features/"
          className={curMenu === "features" ? styles.selected : ""}>
          {t("header:menuFeatures")}

        </Link>

        <Link
          to="/pricing/"
          className={curMenu === "pricing" ? styles.selected : ""}>
          {t("header:menuPricing")}
        </Link>

        <a href={t("url:doc")}>
          {t("header:menuDoc")}
        </a>

        <a href={urlStart}>
          <button className={styles.loginButton}>
            {t("header:menuLoginButton")}
          </button>
        </a>
      </Container1024>
    </header>
  );
};

Header.propTypes = {
  isFloatMenu: PropTypes.bool,
};

Header.defaultProps = {
  isFloatMenu: false,
};

export default Header;
