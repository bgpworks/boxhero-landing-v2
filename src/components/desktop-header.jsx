import React from "react";
import PropTypes from "prop-types";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import cn from "classnames";
// js
import { DesktopBaseContainer, ExternalLinkWithQuery } from "./common";
import { urlStart } from "./constants";
import { useCheckScrolled } from "../hooks/use-check-scrolled";
// css
import * as styles from "./desktop-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";
import svgDropDownArrowGray from "../images/icon-dropdown-arrow-gray.svg";
import svgDropDownArrowWhite from "../images/icon-dropdown-arrow-white.svg";
import svgSymbol from "../images/icon-symbol.svg";
import svgFeature from "../images/icon-feature.svg";
import svgTransaction from "../images/icon-transaction.svg";
import svgParts from "../images/icon-parts.svg";
import svgAsset from "../images/icon-asset.svg";
import svgBlog from "../images/icon-blog.svg";
import svgCS from "../images/icon-cs.svg";
import svgBook from "../images/icon-book.svg";

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
  isBackgroundWhite,
  children,
}) => (
  <div className={styles.dropDownMenu}>
    <div
      role="presentation"
      className={styles.dropDownMenuTitle}
    >
      <span>{title}</span>
      <img
        src={isBackgroundWhite ? svgDropDownArrowGray : svgDropDownArrowWhite}
        alt={title}
      />
    </div>
    <div className={styles.floatingMenuContainer}>
      {children}
    </div>
  </div>
);

const SingleMenu = ({ to }) => {
  const { t } = useI18next();
  return (
    <Link
      className={styles.singleMenu}
      to={to}
    >
      {t("header:menuPricing")}
    </Link>
  );
};

const DesktopHeader = ({ isFloatMenu }) => {
  const { isScrolled } = useCheckScrolled();
  const isBackgroundWhite = !isFloatMenu || isScrolled;
  // 여기서 이상한 워닝 뜨는건 gatsby-plugin-react-i18next의 이슈. 기능상 문제는 없는 듯. https://github.com/microapps/gatsby-plugin-react-i18next/issues/5
  const { t } = useTranslation();
  return (
    <>
      <header
        className={cn(styles.headerContainer, { [styles.whiteContainer]: isBackgroundWhite })}
      >
        <DesktopBaseContainer className={styles.menuContainer}>
          <Link to="/">
            <img
              src={isBackgroundWhite ? svgBiBlue : svgBiWhite}
              className={styles.biLogo}
              alt="Home"
            />
          </Link>

          <div className={styles.padding} />

          <DropDownMenu
            title={t("header:menuService")}
            isBackgroundWhite={isBackgroundWhite}
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
            isBackgroundWhite={isBackgroundWhite}
          >
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

          <SingleMenu to="/pricing/">{t("header:menuPricing")}</SingleMenu>

          <DropDownMenu
            title={t("header:menuResource")}
            isBackgroundWhite={isBackgroundWhite}
          >
            <a
              href={t("url:ghostblog")}
              target="_blank"
              rel="noreferrer"
            >
              <DropDownSubMenu
                title={t("header:menuCompanyBlog")}
                icon={svgBlog}
              />
            </a>
            <a
              href="/help"
              target="_blank"
              rel="noreferrer"
            >
              <DropDownSubMenu
                title={t("header:menuDoc")}
                icon={svgBook}
              />
            </a>
            <a
              href={t("url:support")}
              target="_blank"
              rel="noreferrer"
            >
              <DropDownSubMenu
                title={t("header:menuSupport")}
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
