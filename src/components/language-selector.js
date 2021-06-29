import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Padding } from "./common";
// css
import styles from "./language-selector.module.css";

const LANG_NAME = {
  "ko": "한국어",
  "en": "English",
  "es": "Español",
  "id": "Indonesia"
}

export const LangSelect = ({className}) => {
  const { language, languages, changeLanguage, t } = useI18next();
  return (
    <select
      className={className}
      onBlur={(e) => {}}
      onChange={(e) => {
        if (e.target.value !== "" && e.target.value !== language) {
          changeLanguage(e.target.value);
        }
      }}
    >
      <option value="">{t("footer:footerMenuLanguage")}</option>
      {languages.map((lng) => (
        <option key={lng} value={lng}>
          {LANG_NAME[lng] || lng}
        </option>
      ))}
    </select>
  );
};

const LangOption = ({lang}) => {
  const { changeLanguage } = useI18next();
  return (
    <button className={`${styles.languageOption}`}
            onClick={() => changeLanguage(lang)}>
      {LANG_NAME[lang] || lang}
    </button>
  );
}


export const LangPopup = ({isShow, onClickClose}) => {
  if (!isShow) {
    return null;
  }
  return (
    <div
      role="presentation"
      className={`${styles.popupBackground}`}
      onClick={onClickClose}>
      <div className={`${styles.container}`}>
        <div className={`${styles.closeWrapper}`}>
          <button
            className={`${styles.closeButton}`}
          >
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="-255 347 100 100" aria-hidden="true"><path d="M-160.4 434.2l-37.2-37.2 37.1-37.1-7-7-37.1 37.1-37.1-37.1-7 7 37.1 37.1-37.2 37.2 7.1 7 37.1-37.2 37.2 37.2"></path></svg>
          </button>
        </div>

        <div className={`${styles.titleContainer}`}>
          Select Language
        </div>

        <Padding y={20} />

        <LangOption lang="en" />
        <LangOption lang="ko" />
        <LangOption lang="es" />
        <LangOption lang="id" />
      </div>
    </div>
  );
};
