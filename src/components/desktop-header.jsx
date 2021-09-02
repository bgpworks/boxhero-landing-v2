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
import svgUnder from "../images/icon-dropdown-arrow-black.svg";
import svgSymbol from "../images/icon-symbol.svg";
import svgFeature from "../images/icon-feature.svg";
import svgTransaction from "../images/icon-transaction.svg";
import svgParts from "../images/icon-parts.svg";
import svgAsset from "../images/icon-asset.svg";
import svgBlog from "../images/icon-blog.svg";
import svgCS from "../images/icon-cs.svg";
import { useCheckScrolled } from "../hooks/use-check-scrolled";
import { useClickOutside } from "../hooks/use-click-outside";

const DropDownSubMenu = ({
  title,
  description,
  icon,
}) => (
  <div className={styles.subMenu}>
    <div className={styles.subMenuIcon}>
      <img
        src={icon}
        alt={title}
      />
    </div>
    <div>
      <div className={styles.subMenuTitle}>{title}</div>
      {description && (
        <div className={styles.subMenuDesc}>{description}</div>
      )}
    </div>
  </div>
);

const DropDownMenu = ({
  title,
  children,
}) => {
  const [isShow, onChangeIsShow] = useState(false);

  const dropDownMenuRef = useRef();
  useClickOutside(dropDownMenuRef, () => onChangeIsShow(false));

  const { t } = useTranslation();
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
          alt={t("header:menuUnderIconAlt")}
        />
      </div>
      {isShow && (
        <div className={styles.floatingMenuContainer}>
          {children}
        </div>
      )}
    </div>
  );
};

const DesktopHeader = ({ isFloatMenu }) => {
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

          <DropDownMenu title={t("header:menuService")}>
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

          <DropDownMenu title={t("header:menuUseCases")}>
            <Link to="/usecase-sales">
              <DropDownSubMenu
                title={t("header:menuUseCaseSales")}
                description={t("header:menuUseCaseSalesDesc")}
                icon={svgTransaction}
              />
            </Link>
            <Link to="/usecase-material">
              <DropDownSubMenu
                title={t("header:menuUseCaseMaterial")}
                description={t("header:menuUseCaseMaterialDesc")}
                icon={svgParts}
              />
            </Link>
            <Link to="/usecase-assets">
              <DropDownSubMenu
                title={t("header:menuUseCaseAssets")}
                description={t("header:menuUseCaseAssetsDesc")}
                icon={svgAsset}
              />
            </Link>
          </DropDownMenu>

          <Link to="/pricing/">{t("header:menuPricing")}</Link>

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
