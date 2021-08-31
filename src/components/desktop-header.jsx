import React, { useState } from "react";
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
import svgDown from "../images/down.svg";
import svgSymbol from "../images/icon-symbol.svg";
import svgFeature from "../images/icon-feature.svg";
import svgTransaction from "../images/icon-transaction.svg";
import svgParts from "../images/icon-parts.svg";
import svgAsset from "../images/icon-asset.svg";
import { useCheckScrolled } from "../hooks/useCheckScrolled";

/* eslint-disable */
const DropDownSubMenu = ({
  title,
  link,
  icon,
}) => {
  return (
    <li className={styles.subMenu}>
      <Link
        to={link}
      >
        <img
          className={styles.subMenuIcon}
          src={icon}
          alt={title}
        />
        {title}
      </Link>
    </li>
  );
};

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
                className={styles.subMenuIcon}
                src={svgSymbol}
                alt={t("header:menuServiceAbout")}
              />
              {t("header:menuServiceAbout")}
            </Link>
            <Link
              to="/features/"
              className={curMenu === "features" ? styles.selected : ""}
            >
              <img
                className={styles.subMenuIcon}
                src={svgFeature}
                alt={t("header:menuServiceFeatures")}
              />
              {t("header:menuServiceFeatures")}
            </Link>
          </DropDownMenu>

          <DropDownMenu
            title={t("header:menuUseCases")}
          >
            <Link to="/">
              <img
                className={styles.subMenuIcon}
                src={svgTransaction}
                alt={t("header:menuUseCaseSales")}
              />
              {t("header:menuUseCaseSales")}
            </Link>
            <Link to="/">
              <img
                className={styles.subMenuIcon}
                src={svgParts}
                alt={t("header:menuUseCaseMaterial")}
              />
              <div>
                {t("header:menuUseCaseMaterial")}
                <p className={styles.subMenuDesc}>{t("header:menuUseCaseMaterialDesc")}</p>
              </div>
            </Link>
            <Link to="/">
              <img
                className={styles.subMenuIcon}
                src={svgAsset}
                alt={t("header:menuUseCaseAssets")}
              />
              {t("header:menuUseCaseAssets")}
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
