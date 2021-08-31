import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
// js
import { DesktopBaseContainer, ExternalLinkWithQuery, Padding } from "./common";
import { urlStart } from "./constants";
// css
import * as styles from "./desktop-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";
import svgDown from "../images/down.svg";
import svgSymbol from "../images/icon-symbol.svg";
import svgFeature from "../images/icon-feature.svg";
import { useCheckScrolled } from "../hooks/useCheckScrolled";

const DropDownMenu = ({
  title,
  children,
}) => {
  const [isShow, setShow] = useState(false);

  return (
    <div className={styles.dropDownMenu}>
      <div
        role="presentation"
        className={styles.dropDownMenuTitle}
        onClick={() => setShow(!isShow)}
      >
        <span>{title}</span>
        <img
          src={svgDown}
          alt="펼치기"
        />
      </div>
      {isShow && (
        <ul className={styles.subMenus}>
          {children.map((subMenu, index) => (
            <li
              key={index}
              className={styles.subMenu}
            >
              {subMenu}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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

          <DropDownMenu
            title={t("header:menuService")}
          >
            <Link
              to="/about/"
              className={curMenu === "about" ? styles.selected : ""}
            >
              <img
                src={svgSymbol}
                alt="about"
              />
              <Padding x={10} />
              {t("header:menuServiceAbout")}
            </Link>
            <Link
              to="/features/"
              className={curMenu === "features" ? styles.selected : ""}
            >
              <img
                src={svgFeature}
                alt="about"
              />
              <Padding x={10} />
              {t("header:menuServiceFeatures")}
            </Link>
          </DropDownMenu>

          <Link
            to="/pricing/"
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
