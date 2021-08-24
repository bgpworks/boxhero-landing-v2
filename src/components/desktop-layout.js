import React from "react";
import PropTypes from "prop-types";

import DesktopHeader from "./desktop-header";
import DesktopFooter from "./desktop-footer";
import * as styles from "./desktop-layout.module.css";

export const DesktopLayout = ({
  isFloatMenu,
  curMenu,
  closingEmoji,
  closingMsg,
  showEssential,
  mainClassName,
  children,
}) => (
  <div className={styles.desktopLayout}>
    <DesktopHeader isFloatMenu={isFloatMenu} curMenu={curMenu} />
    <main className={mainClassName}>{children}</main>
    <DesktopFooter
      closingEmoji={closingEmoji}
      closingMsg={closingMsg}
      showEssential={showEssential}
    />
  </div>
);

DesktopLayout.propTypes = {
  mainClassName: PropTypes.string,
  showEssential: PropTypes.bool,
  isFloatMenu: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object,
  closingMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node.isRequired,
};

export default DesktopLayout;
