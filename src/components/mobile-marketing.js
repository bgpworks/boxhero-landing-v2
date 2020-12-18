/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";

import styles from "./mobile-marketing.module.css";
import Image from "../images/ko/marketing-mobile.png"

const MobileMarketing = ({ data, language, t }) => {
  return (
    <div className={styles.container}>
      <img src={Image} className={styles.img}/>
    </div>
  );
};

export default MobileMarketing;
