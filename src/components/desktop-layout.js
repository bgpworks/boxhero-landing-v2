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
  children,
}) => (
  <div className={styles.desktopLayout}>
    <DesktopHeader isFloatMenu={isFloatMenu} curMenu={curMenu} />
    <main>{children}</main>
    <DesktopFooter closingEmoji={closingEmoji} closingMsg={closingMsg} />
  </div>
);

DesktopLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  children: PropTypes.node.isRequired,
};

export default DesktopLayout;
