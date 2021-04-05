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
          x="234px"
          y="2460px"
          width="391px"
          height="100px"
        />
        <Link
          href="https://www.boxhero-app.com/en/"
          x="240px"
          y="3673px"
          width="382px"
          height="100px"
        />
        <Link
          href={constants.urlStart}
          x="231px"
          y="4024px"
          width="400px"
          height="100px"
        />

        <Link
          href="mailto:support+boxhero@bgpworks.com"
          x="184px"
          y="3542px"
          width="367px"
          height="43px"
        />
      </div>
    </div>
  );
};

export default DesktopMarketing;
