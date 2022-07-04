import React from "react";
import PropTypes from "prop-types";

import DesktopHeader from "./desktop-header";
import DesktopFooter from "./desktop-footer";
import * as styles from "./desktop-layout.module.css";

const DesktopLayout = ({
  isFloatMenu,
  showStartNow,
  mainClassName,
  children,
}) => (
  <div className={styles.desktopLayout}>
    <DesktopHeader
      isFloatMenu={isFloatMenu}
    />
    <main className={mainClassName}>{children}</main>
    <DesktopFooter showStartNow={showStartNow} />
  </div>
);

DesktopLayout.propTypes = {
  mainClassName: PropTypes.string,
  showStartNow: PropTypes.bool,
  isFloatMenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DesktopLayout;
