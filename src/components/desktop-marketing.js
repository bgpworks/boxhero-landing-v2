/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";

import styles from "./desktop-marketing.module.css";
import Image from "../images/ko/marketing-web.png"

console.log(styles);


const DesktopMarketing = ({ data, language, t }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={Image} className={styles.img}/>
        <a href="" className={styles.link1}></a>
      </div>

    </div>
  );
};

export default DesktopMarketing;
