/* eslint react/jsx-no-target-blank: 0 */
// 분석을 위해 referrer 정보는 남겨두고 싶음.

import React from "react";

import styles from "./mobile-marketing.module.css";
import Image1 from "../images/ko/marketing/mobile-1.png"
import Image2 from "../images/ko/marketing/mobile-2.png"
import Image3 from "../images/ko/marketing/mobile-3.png"
import Image4 from "../images/ko/marketing/mobile-4.png"
import Image5 from "../images/ko/marketing/mobile-5.png"
import Image6 from "../images/ko/marketing/mobile-6.png"

import { AppDownloadLink } from "../components/common";

const MobileMarketing = ({ t }) => {
  return (
    <div className={styles.container}>
      <img src={Image1} className={styles.img} alt="재고관리는 박스히어로 하나면 충분합니다." />
      <AppDownloadLink>
        <img src={Image2} className={styles.img} alt="앱 다운로드" />
      </AppDownloadLink>
      <img src={Image3} className={styles.img} alt="가입 후 한달 무료이며, 1인 제품 100개까지 평생 무료로 사용가능합니다." />

      <a href={t("url:doc")}>
        <img src={Image4} className={styles.img} alt="고객센터" />
      </a>


      <img src={Image5} className={styles.img} alt="재고관리, 이제는 쉬워질때." />
      <AppDownloadLink>
        <img src={Image6} className={styles.img} alt="앱 다운로드" />
      </AppDownloadLink>


    </div>
  );
};

export default MobileMarketing;
