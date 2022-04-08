import React, { useState } from "react";
import PropTypes from "prop-types";
// js
import MobileHeader from "./mobile-header";
import MobileFooter from "./mobile-footer";
import { LangPopup } from "./language-selector";
// css
import * as styles from "./mobile-layout.module.css";

const MobileLayout = ({
  isFloatMenu,
  closingEmoji,
  closingMsg,
  mainClassName,
  showPlatforms,
  showStartNow,
  children,
}) => {
  const [isShowLangPopup, onChangeIsShowLangPopup] = useState(false);
  return (
    <div className={styles.mobileLayout}>
      <MobileHeader isFloatMenu={isFloatMenu} />
      <main className={mainClassName}>{children}</main>
      <MobileFooter
        showPlatforms={showPlatforms}
        showStartNow={showStartNow}
        closingEmoji={closingEmoji}
        closingMsg={closingMsg}
        onChangeIsShowLangPopup={onChangeIsShowLangPopup}
      />
      <LangPopup
        isShow={isShowLangPopup}
        onClickClose={() => onChangeIsShowLangPopup(false)}
      />
    </div>
  );
};

MobileLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  closingEmoji: PropTypes.object,
  closingMsg: PropTypes.any,
  mainClassName: PropTypes.string,
  showPlatforms: PropTypes.bool,
  showStartNow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
