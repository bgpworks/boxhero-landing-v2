import React from "react";
import PropTypes from "prop-types";

import MobileHeader from "./mobile-header";
import MobileFooter from "./mobile-footer";
import styles from "./mobile-layout.module.css";

const MobileLayout = ({ isFloatMenu, curMenu, closingEmoji, closingMsg, children }) => (
  <div className={styles.desktopLayout}>
    <MobileHeader
      isFloatMenu={isFloatMenu}
      curMenu={curMenu}
    />
    <main>{children}</main>
    <MobileFooter
      closingEmoji={closingEmoji}
      closingMsg={closingMsg}
    />
  </div>
);

MobileLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
