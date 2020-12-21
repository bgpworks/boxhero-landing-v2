/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";

import { ExternalLinkWithQuery } from "../components/common";
import * as constants from "../components/constants";

import styles from "./desktop-marketing.module.css";
import Image from "../images/ko/marketing/web.png";

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

const DesktopMarketing = ({ t }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={Image} className={styles.img} alt="재고관리는 박스히어로 하나면 충분합니다." />

        <Link href={constants.urlStart} x="240px" y="2610px" width="400px" height="100px" />
        <Link href={t("url:doc")} x="240px" y="3770px" width="400px" height="100px" />
        <Link href={constants.urlStart} x="240px" y="4170px" width="400px" height="100px" />

        <Link href="mailto:support+boxhero@bgpworks.com" x="261px" y="3628px" width="354px" height="43px" />
        <Link href="https://pf.kakao.com/_rHxgpxl" x="512px" y="3673px" width="119px" height="30px" />
      </div>
    </div>
  );
};

export default DesktopMarketing;
