/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ isFloatMenu, closingEmoji, closingMsg, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
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
};

Layout.propTypes = {
  isFloatMenu: PropTypes.bool,
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
