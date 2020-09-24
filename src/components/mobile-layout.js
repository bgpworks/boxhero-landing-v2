import React from "react";
import PropTypes from "prop-types";

import DesktopHeader from "./desktop-header";
import DesktopFooter from "./desktop-footer";
import styles from "./layout.module.css";

const MobileLayout = ({ isFloatMenu, curMenu, closingEmoji, closingMsg, children }) => {
  return (
    <>
      <DesktopHeader
        isFloatMenu={isFloatMenu}
        curMenu={curMenu}
      />
      <main>{children}</main>
      <DesktopFooter
        closingEmoji={closingEmoji}
        closingMsg={closingMsg}
      />
    </>
  );
};

MobileLayout.propTypes = {
  isFloatMenu: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
