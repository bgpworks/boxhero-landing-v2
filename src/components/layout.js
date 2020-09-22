import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ isFloatMenu, curMenu, closingEmoji, closingMsg, children }) => (
  <>
    <Header
      isFloatMenu={isFloatMenu}
      curMenu={curMenu}
    />
    <main>{children}</main>
    <Footer
      closingEmoji={closingEmoji}
      closingMsg={closingMsg}
    />
  </>
);

Layout.propTypes = {
  isFloatMenu: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
