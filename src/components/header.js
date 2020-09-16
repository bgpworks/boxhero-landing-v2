import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
// js
import { Container1024 } from "./common"
// css
import styles from "./header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";

const Header = ({ isFloatMenu }) => (
  <header className={`${styles.headerContainer} ${isFloatMenu ? styles.floatContainer : ""}`}>
    <Container1024 className={styles.menuContainer}>
      <Link to="/">
        <img
          src={isFloatMenu ? svgBiWhite : svgBiBlue}
          className={styles.biLogo}
          alt="Home" />
      </Link>

      <div className={styles.padding}/>

      <Link to="/about/">
        박스히어로는?
      </Link>

      <Link to="/features/">
        편의기능
      </Link>

      <Link to="/pricing/">
        요금안내
      </Link>

      <a href="https://docs-ko.boxhero.io">
        고객센터
      </a>

      <a href="https://web.boxhero-app.com/team">
        <button className={styles.loginButton}>
          로그인
        </button>
      </a>
    </Container1024>
  </header>
)

Header.propTypes = {
  isFloatMenu: PropTypes.bool,
};

Header.defaultProps = {
  isFloatMenu: false,
};

export default Header;
