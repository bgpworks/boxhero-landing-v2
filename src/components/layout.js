import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ isFloatMenu, closingEmoji, closingMsg, children }) => (
  <>
    <Header
      isFloatMenu={isFloatMenu}
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
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
