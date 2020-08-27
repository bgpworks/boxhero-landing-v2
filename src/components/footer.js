import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Container1024 } from "./common";
// css
import styles from "./footer.module.css";
// images
import svgPcWeb from "../images/pcweb.svg";
import svgIOS from "../images/ios.svg";
import svgAndroid from "../images/android.svg";
import svgCompanyLogo from "../images/company-logo.svg";

const StartNow = ({emoji, message}) => (
  <div className={styles.startNowContainer}>
    <Img fixed={emoji.childImageSharp.fixed} />
    <div className={styles.startNowDescription}>
      {message}
    </div>
    <button
      className={styles.startNowButton}>
      지금 시작하기
    </button>
  </div>
);

StartNow.propTypes = {
  emoji: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
}

const Platforms = () => (
  <div className={styles.platformContainer}>
    <div className={styles.platformButtons}>
      <a href="https://web.boxhero-wep.com/login">
        <button className={styles.platformButton}>
          <img
            src={svgPcWeb}
            alt="PC" />
          PC 웹
        </button>
      </a>
      <a href="https://itunes.apple.com/app/id1325512157">
        <button className={styles.platformButton}>
          <img
            src={svgIOS}
            alt="iOS"/>
          아이폰
        </button>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.bgpworks.boxhero">
        <button className={styles.platformButton}>
          <img
            src={svgAndroid}
            alt="Android"/>
          안드로이드
        </button>
      </a>
    </div>
    박스히어로는 모든 디바이스를 지원합니다.
  </div>
);

const FooterMenus = () => (
  <div className={styles.footerMenusContainer}>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Service
      </div>
      <div>
        <Link to="/about">박스히어로는?</Link>
      </div>
      <div>
        <Link to="/features">편의기능</Link>
      </div>
      <div>
        <Link to="/pricing">요금안내</Link>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Support
      </div>
      <div>
        <Link to="/">고객센터</Link>
      </div>
      <div>
        <Link to="/">자주 묻는 질문</Link>
      </div>
      <div>
        <Link to="/">매뉴얼</Link>
      </div>
      <div>
        <Link to="/">앱 다운로드</Link>
      </div>
    </div>
    <div className={styles.footerMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Company
      </div>
      <div>
        <a href="https://www.bgpworks.com">회사 소개</a>
      </div>
      <div>
        <a href="https://medium.com/boxhero-ko">블로그</a>
      </div>
    </div>
    <div className={styles.wideFooterMenusColumn}>
      <div className={styles.footerMenuLabel}>
        Contact
      </div>
      <div>
        전화 : 070-8670-4320
      </div>
      <div>
        이메일 :  <a href="mailto:support+boxhero@bgpworks.com">support+boxhero@bgpworks.com</a>
      </div>
      <div>
        사업문의 : <a href="mailto:corp@bgpworks.com">corp@bgpworks.com</a>
      </div>
      <div>
        카카오톡 : @boxhero
      </div>
    </div>
    <div>
      <div className={styles.footerMenuLabel}>
        Language
      </div>
    </div>
  </div>
);

const CompanyInfo = () => (
  <div className={styles.companyInfoContainer}>
    <div className={styles.logoContainer}>
      <img
        className={styles.companyLogo}
        src={svgCompanyLogo}
        alt="BGPworks"/>
    </div>
    <div>
      <div>
        (주)비지피웍스 ㅣ 사업자 등록 번호 : 832-86-00696 ㅣ 대표 : 문희홍
        <br />
        04778 서울특별시 성동구 왕십리로 10길 6 216호 ㅣ 이용약관 ㅣ 개인정보처리방침
      </div>
      <div className={styles.copyRight}>
        © {new Date().getFullYear()}, BGPworks. All rights reserved.
      </div>
    </div>
  </div>
);

const FooterMenusAndInfo = () => (
  <div className={styles.footerMenusAndInfoContainer}>
    <Container1024 className={styles.px10}>
      <FooterMenus />
      <CompanyInfo />
    </Container1024>
  </div>
);

const Footer = ({closingEmoji, closingMsg}) => (
  <div>
    <StartNow
      emoji={closingEmoji}
      message={closingMsg}
    />
    <Platforms />
    <FooterMenusAndInfo />
  </div>
);

Footer.propTypes = {
  closingEmoji: PropTypes.object.isRequired,
  closingMsg: PropTypes.string.isRequired,
};

export default Footer;
