import React, { useState, useRef } from "react";
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
import svgUnder from "../images/under.svg";
import svgSymbol from "../images/icon-symbol.svg";
import svgFeature from "../images/icon-feature.svg";
import svgTransaction from "../images/icon-transaction.svg";
import svgParts from "../images/icon-parts.svg";
import svgAsset from "../images/icon-asset.svg";
import svgBlog from "../images/icon-blog.svg";
import svgCS from "../images/icon-cs.svg";
import { useCheckScrolled } from "../hooks/useCheckScrolled";
import { useClickOutside } from "../hooks/useClickOutside";

const DropDownSubMenu = ({
  title,
  description,
  icon,
}) => (
  <div className={styles.subMenu}>
    <img
      className={styles.subMenuIcon}
      src={icon}
      alt={title}
    />
    <div>
      {title}
      {description && (
        <div className={styles.subMenuDesc}>{description}</div>
      )}
    </div>
  </div>
);

const DropDownMenu = ({
  title,
  children,
  subMenusClassName,
}) => {
  const [isShow, onChangeIsShow] = useState(false);

  const dropDownMenuRef = useRef();
  useClickOutside(dropDownMenuRef, () => onChangeIsShow(false));

  return (
    <div
      ref={dropDownMenuRef}
      className={styles.dropDownMenu}
    >
      <div
        role="presentation"
        className={styles.dropDownMenuTitle}
        onClick={() => onChangeIsShow(!isShow)}
      >
        <span>{title}</span>
        <img
          src={svgUnder}
          alt="펼치기"
        />
      </div>
      {isShow && (
        <div className={`${styles.subMenus} ${subMenusClassName}`}>
          {children}
        </div>
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
            curMenu={curMenu}
          >
            <Link to="/about/">
              <DropDownSubMenu
                title={t("header:menuServiceAbout")}
                icon={svgSymbol}
              />
            </Link>
            <Link to="/features/">
              <DropDownSubMenu
                title={t("header:menuServiceFeatures")}
                icon={svgFeature}
              />
            </Link>
          </DropDownMenu>

          <DropDownMenu
            title={t("header:menuUseCases")}
            subMenusClassName={styles.wideSubMenus}
          >
            <Link to="/">
              <DropDownSubMenu
                title={t("header:menuUseCaseSales")}
                description={t("header:menuUseCaseSalesDesc")}
                icon={svgTransaction}
              />
            </Link>
            <Link to="/">
              <DropDownSubMenu
                title={t("header:menuUseCaseMaterial")}
                description={t("header:menuUseCaseMaterialDesc")}
                icon={svgParts}
              />
            </Link>
            <Link to="/">
              <DropDownSubMenu
                title={t("header:menuUseCaseAssets")}
                description={t("header:menuUseCaseAssetsDesc")}
                link="/"
                icon={svgAsset}
              />
            </Link>
          </DropDownMenu>

          <Link
            to="/pricing/"
            className={curMenu === "pricing" ? styles.selected : ""}
          >
            {t("header:menuPricing")}
          </Link>

          <DropDownMenu title={t("header:menuResource")}>
            <Link to="/blog">
              <DropDownSubMenu
                title={t("header:menuCompanyBlog")}
                icon={svgBlog}
              />
            </Link>
            <a href={t("url:doc")}>
              <DropDownSubMenu
                title={t("header:menuDoc")}
                icon={svgCS}
              />
            </a>
          </DropDownMenu>

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
