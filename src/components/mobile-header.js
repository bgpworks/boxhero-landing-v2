import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
// js
import cn from "classnames";
import { ExternalLinkWithQuery } from "./common";
import { urlStart } from "./constants";
import { useCheckScrolled } from "../hooks/use-check-scrolled";
import { useClickOutside } from "../hooks/use-click-outside";
// css
import * as styles from "./mobile-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";
import svgArrowBlack from "../images/icon-dropdown-arrow-black.svg";

const DropDown = ({ className, title, children }) => {
  const [isShowDropDown, onChangeIsShowDropDown] = useState(false);

  const containerRef = useRef();
  useClickOutside(containerRef, () => onChangeIsShowDropDown(false));

  return (
    <div
      className={cn([styles.dropDownContainer, className])}
      ref={containerRef}
    >
      <button
        type="button"
        className={cn([
          styles.dropDownButton,
          isShowDropDown ? styles.dropDownActive : "",
        ])}
        onClick={() => onChangeIsShowDropDown(!isShowDropDown)}
      >
        <span className={styles.dropDownTitle}>{title}</span>
        <img
          className={styles.dropDownIcon}
          src={svgArrowBlack}
          alt={title}
        />
      </button>
      {isShowDropDown && (
        <ul className={styles.dropDownSubMenus}>
          {children}
        </ul>
      )}
    </div>
  );
};

const DropDownItem = ({ children }) => (
  <li className={styles.dropDownItem}>{children}</li>
);

const LANG_NAME = {
  ko: "한국어",
  en: "English",
  es: "Español",
  id: "Indonesia",
};

const LangOption = ({ lang }) => {
  const { language, changeLanguage } = useI18next();
  return (
    <button
      type="button"
      className={`${styles.langButton} ${
        language === lang ? styles.selected : ""
      }`}
      onClick={() => changeLanguage(lang)}
    >
      {LANG_NAME[lang] || lang}
    </button>
  );
};

const MobileMenu = () => {
  // 여기서 이상한 워닝 뜨는건 gatsby-plugin-react-i18next의 이슈. 기능상 문제는 없는 듯. https://github.com/microapps/gatsby-plugin-react-i18next/issues/5
  const { t } = useI18next();
  return (
    <>
      <DropDown title={t("header:menuService")}>
        <DropDownItem>
          <Link to="/about/">
            {t("header:menuServiceAbout")}
          </Link>
        </DropDownItem>
        <DropDownItem>
          <Link to="/features/">
            {t("header:menuServiceFeatures")}
          </Link>
        </DropDownItem>
      </DropDown>

      <DropDown title={t("header:menuUseCases")}>
        <DropDownItem>
          <Link to="/usecase-sales/">
            {t("header:menuUseCaseSales")}
          </Link>
        </DropDownItem>
        <DropDownItem>
          <Link to="/usecase-material/">
            {t("header:menuUseCaseMaterial")}
          </Link>
        </DropDownItem>
        <DropDownItem>
          <Link to="/usecase-assets/">
            {t("header:menuUseCaseAssets")}
          </Link>
        </DropDownItem>
      </DropDown>

      <div className={styles.singleMenu}>
        <Link to="/pricing/">
          {t("header:menuPricing")}
        </Link>
      </div>

      <DropDown title={t("header:menuResource")}>
        <DropDownItem>
          <Link to="/blog/">
            {t("header:menuCompanyBlog")}
          </Link>
        </DropDownItem>
        <DropDownItem>
          <a href={t("url:doc")}>
            {t("header:menuDoc")}
          </a>
        </DropDownItem>
      </DropDown>

      <DropDown title={t("header:menuLanguage")}>
        <DropDownItem>
          <LangOption lang="en" />
          <LangOption lang="ko" />
          <LangOption lang="es" />
          <LangOption lang="id" />
        </DropDownItem>
      </DropDown>

      <div className={styles.startNowContainer}>
        <ExternalLinkWithQuery href={urlStart}>
          <button
            type="button"
            className={styles.startNowButton}
          >
            {t("header:startNowButton")}
          </button>
        </ExternalLinkWithQuery>
      </div>
    </>
  );
};

const MobileHeader = ({ isFloatMenu }) => {
  const [isShow, onChangeIsShow] = useState(false);
  const { isScrolled } = useCheckScrolled();

  const isBackgroundWhite = !isFloatMenu || isScrolled || isShow;
  return (
    <>
      <div
        className={`${styles.menuOpenBg} ${isShow ? styles.isOpen : ""}`}
      />
      <header
        className={`${styles.headerContainer} ${
          isBackgroundWhite ? styles.whiteContainer : ""
        }`}
      >
        <div className={styles.logoAndExpandCotainer}>
          <Link to="/">
            <img
              src={isBackgroundWhite ? svgBiBlue : svgBiWhite}
              className={styles.biLogo}
              alt="Home"
            />
          </Link>
          <button
            type="button"
            className={`${styles.menuBtn} ${isShow ? styles.isOpen : ""}`}
            onClick={() => onChangeIsShow(!isShow)}
          >
            <div className={styles.menuBtnLine} />
            <div className={styles.menuBtnLine} />
          </button>
        </div>

        {isShow && (
          <div className={styles.menuContainer}>
            <MobileMenu />
          </div>
        )}
      </header>
      {!isFloatMenu && <div className={styles.headerPlaceholder} />}
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
