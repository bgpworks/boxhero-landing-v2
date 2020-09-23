import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import { useHelpscout } from './helpscout';

const Layout = ({ isFloatMenu, curMenu, closingEmoji, closingMsg, children }) => {
  useHelpscout();
  return (
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
};

Layout.propTypes = {
  isFloatMenu: PropTypes.bool,
  curMenu: PropTypes.string,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
