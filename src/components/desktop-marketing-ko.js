import React from "react";

import { ExternalLinkWithQuery } from "./common";
import * as constants from "./constants";

import styles from "./desktop-marketing.module.css";
import Img from "gatsby-image";

const Link = ({ href, x, y, width, height }) => {
  return (
    <ExternalLinkWithQuery
      href={href}
      className={styles.link}
      style={{
        left: x,
        top: y,
        width: width,
        height: height,
      }}
    />
  );
};

const DesktopMarketing = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Img fixed={data.web.childImageSharp.fixed} />

        <Link
          href={constants.urlStart}
          x="240px"
          y="2610px"
          width="400px"
          height="100px"
        />
        <Link
          href="/"
          x="240px"
          y="3770px"
          width="400px"
          height="100px"
        />
        <Link
          href={constants.urlStart}
          x="240px"
          y="4170px"
          width="400px"
          height="100px"
        />

        <Link
          href="mailto:support+boxhero@bgpworks.com"
          x="261px"
          y="3628px"
          width="354px"
          height="43px"
        />
        <Link
          href="https://pf.kakao.com/_rHxgpxl"
          x="512px"
          y="3673px"
          width="119px"
          height="30px"
        />
      </div>
    </div>
  );
};

export default DesktopMarketing;
