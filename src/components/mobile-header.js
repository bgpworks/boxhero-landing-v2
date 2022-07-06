import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import cn from "classnames";
// js
import { AppDownloadLink, StartNowButton, Padding } from "./common";
import { useCheckScrolled } from "../hooks/use-check-scrolled";
import { useClickOutside } from "../hooks/use-click-outside";
import { LANG_NAME } from "./language-selector";
// css
import * as styles from "./mobile-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";
import svgArrowGray from "../images/icon-dropdown-arrow-gray.svg";

const DropDown = ({
  className, title, children,
}) => {
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
        className={cn(
          styles.dropDownButton,
          { [styles.dropDownActive]: isShowDropDown },
        )}
        onClick={() => onChangeIsShowDropDown(!isShowDropDown)}
      >
        <span className={styles.dropDownTitle}>{title}</span>
        <img
          className={styles.dropDownIcon}
          src={svgArrowGray}
          alt={title}
        />
      </button>
      {isShowDropDown && (
        <ul className={styles.dropDownSubMenus}>
          {children && children.map((dropDownItem, index) => (
            <li
              key={index}
              className={styles.dropDownItem}
            >
              {dropDownItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const LangOption = ({ lang }) => {
  const { language, changeLanguage } = useI18next();
  return (
    <button
      type="button"
      className={cn(
        styles.langButton,
        { [styles.selected]: language === lang },
      )}
      onClick={() => changeLanguage(lang)}
    >
      {LANG_NAME[lang] || lang}
    </button>
  );
};

const MobileMenu = ({ onChangeIsShow }) => {
  // 여기서 이상한 워닝 뜨는건 gatsby-plugin-react-i18next의 이슈. 기능상 문제는 없는 듯. https://github.com/microapps/gatsby-plugin-react-i18next/issues/5
  const { t } = useI18next();

  useEffect(() => {
    document.querySelector("html").classList.add(styles.disableScrolling);
    return () => {
      document.querySelector("html").classList.remove(styles.disableScrolling);
    };
  }, []);

  const closeMobileMenu = () => onChangeIsShow(false);

  return (
    <nav className={styles.menuContainer}>
      <DropDown title={t("header:menuService")}>
        <Link
          to="/about/"
          onClick={closeMobileMenu}
        >
          {t("header:menuServiceAbout")}
        </Link>
        <Link
          to="/features/"
          onClick={closeMobileMenu}
        >
          {t("header:menuServiceFeatures")}
        </Link>
      </DropDown>

      <DropDown title={t("header:menuUseCases")}>
        <Link
          to="/usecase-sales/"
          onClick={closeMobileMenu}
        >
          {t("header:menuUseCaseSales")}
        </Link>
        <Link
          to="/usecase-material/"
          onClick={closeMobileMenu}
        >
          {t("header:menuUseCaseMaterial")}
        </Link>
        <Link
          to="/usecase-assets/"
          onClick={closeMobileMenu}
        >
          {t("header:menuUseCaseAssets")}
        </Link>
      </DropDown>

      <div className={styles.singleMenu}>
        <Link
          to="/pricing/"
          onClick={closeMobileMenu}
        >
          {t("header:menuPricing")}
        </Link>
      </div>

      <DropDown title={t("header:menuResource")}>
        <a
          href={t("url:ghostblog")}
          target="_blank"
          rel="noreferrer"
          onClick={closeMobileMenu}
        >
          {t("header:menuCompanyBlog")}
        </a>
        <a
          href={t("url:support")}
          target="_blank"
          rel="noreferrer"
          onClick={closeMobileMenu}
        >
          {t("header:menuSupport")}
        </a>
      </DropDown>

      <DropDown title={t("header:menuLanguage")}>
        <LangOption lang="en" />
        <LangOption lang="ko" />
      </DropDown>

      <div className={styles.startNowContainer}>
        <AppDownloadLink>
          <button
            type="button"
            className={styles.appDownloadButton}
          >
            {t("header:appInstall")}
          </button>
        </AppDownloadLink>
        <Padding x={20} />
        <StartNowButton className={styles.startNowButton}>
          {t("header:menuLoginButton")}
        </StartNowButton>
      </div>
    </nav>
  );
};

const AppDownloadLinkInHeader = () => {
  const { t } = useI18next();

  return (
    <AppDownloadLink>
      <button
        type="button"
        className={styles.appDownloadButtonInHeader}
      >
        {t("header:appInstall")}
      </button>
    </AppDownloadLink>
  );
};

const MobileHeader = ({ isFloatMenu }) => {
  const [isShow, onChangeIsShow] = useState(false);
  const { isScrolled } = useCheckScrolled();

  const isBackgroundWhite = !isFloatMenu || isScrolled || isShow;

  return (
    <>
      <header
        className={cn(
          styles.headerContainer,
          { [styles.whiteContainer]: isBackgroundWhite },
        )}
      >
        <Link to="/">
          <img
            src={isBackgroundWhite ? svgBiBlue : svgBiWhite}
            className={styles.biLogo}
            alt="Home"
          />
        </Link>
        <div className={styles.controls}>
          {(isBackgroundWhite && !isShow) && <AppDownloadLinkInHeader />}
          <button
            type="button"
            className={cn(styles.menuBtn, { [styles.isOpen]: isShow })}
            onClick={() => onChangeIsShow(!isShow)}
          >
            <div className={styles.menuBtnLine} />
            <div className={styles.menuBtnLine} />
          </button>
        </div>
      </header>

      {isShow && <MobileMenu onChangeIsShow={onChangeIsShow} />}

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
