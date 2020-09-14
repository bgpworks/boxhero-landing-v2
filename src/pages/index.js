import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
// js
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container1024, Padding } from "../components/common";
// css
import styles from "./index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgAddProduct from "../images/addproduct.svg";
import svgCounting from "../images/counting.svg";
import svgDashboard from "../images/dashboard.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";
import svgSmallRight from "../images/smallright.svg";

const Top = ({data}) => (
  <BackgroundImage
    Tag="section"
    className={styles.topContainer}
    fluid={data.homeTopBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <Container1024 className={styles.topContentContainer}>
      <div>
        <img src={svgVolt} alt="편리한 재고관리"/>
        <Padding y={10} />
        <div className={styles.topLeftTitle}>
          언제 어디서나,<br/>쉽고 편한 재고관리
        </div>
        <Padding y={30} />
        <div className={styles.topLeftDescription}>
          PC와 모바일 어떤 환경에서도 <br />
          <strong>쉽고</strong>/<strong>빠르고</strong>/<strong>편리하게</strong><br/>
          재고관리는 박스히어로 하나면 충분합니다.
        </div>
        <Padding y={30} />
        <button className={styles.startNowButton}>
          지금 시작하기
        </button>
        <Padding y={161} />
      </div>
      <div className={styles.topRightContainer}>
        <Img fixed={data.homeTopRight.childImageSharp.fixed}
        />
      </div>
    </Container1024>
  </BackgroundImage>
);

const KeyFeature = ({isDarkBg, icon, iconAlt, title, desc, subTitle, subDesc, detailUrl, image}) => (
  <div className={`${styles.keyFeatureContainer} ${isDarkBg ? styles.darkBg : ""}`}>
    <Container1024 className={styles.keyFeatureContentContainer}>
      <div className={styles.keyFeatureLeftContainer}>
        <img src={icon} alt={iconAlt} />
        <Padding y={20} />
        <div className={styles.keyFeatureLeftTitle}>
          {title}
        </div>
        <Padding y={35} />
        <div className={styles.keyFeatureLeftDescription}>
          {desc}
        </div>
        <Padding y={40} />
        <div className={styles.keyFeatureLeftSubTitle}>
          {subTitle}
        </div>
        <div className={styles.keyFeatureLeftSubDesc}>
          {subDesc}
        </div>
        <Padding y={20} />
        <div className={styles.keyFeatureDetail}>
          <a href={detailUrl}>
            자세히 알아보기
            <img
              src={svgSmallRightBlue}
              className={styles.rightArrow}
              alt="자세히 알아보기"
            />
          </a>
        </div>
      </div>
      <div className={styles.keyFeatureRightContainer}>
        <Img fixed={image.childImageSharp.fixed}
        />
      </div>
    </Container1024>
  </div>
);

KeyFeature.propTypes = {
  isDarkBg: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
  subDesc: PropTypes.node.isRequired,
  detailUrl: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

KeyFeature.defaultProps = {
  isDarkBg: false,
};

const TeamPlay = ({data}) => (
  <BackgroundImage
    Tag="section"
    className={styles.teamPlayContainer}
    fluid={data.homeTeamPlayBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <div className={styles.teamPlayTitle}>
      + 효율적인 팀플레이
    </div>
    <Padding y={40} />
    <div className={styles.teamPlayDesc}>
      초대는 쉽게, 권한은 필요한 만큼만, 기록은 투명하게!<br/>
      박스히어로와 함께라면 효율적인 실시간 팀플레이가 가능합니다.
    </div>
    <Img
      fixed={data.teamPlay.childImageSharp.fixed}
    />
  </BackgroundImage>
);

const Customers = ({data}) => (
  <div className={styles.customersContainer}>
    <div className={styles.customersTitle}>
      이미 다양한 업종의 <strong>20,000+</strong>팀이<br/>
      박스히어로를 사용하고 있습니다.
    </div>
    <Padding y={40} />
    <button className={styles.customersDetailButton}>
      업종별 사용법 알아보기
      <Padding x={10} />
      <img
        src={svgSmallRight}
        className={styles.rightArrow}
        alt="자세히 알아보기"
      />
    </button>
    <Padding y={80} />
    <div>
      <Img
        fixed={data.customerMart.childImageSharp.fixed}
      />
      <Img
        fixed={data.customerMart.childImageSharp.fixed}
      />
      <Img
        fixed={data.customerMart.childImageSharp.fixed}
      />
    </div>
  </div>
);

const Features = ({data}) => (
  <div className={styles.featuresContainer}>
    <div className={styles.featuresTitle}>
      빈틈없는 <strong>재고관리</strong>를 위해<br/>
      다양한 편의기능을 제공합니다
    </div>
    <Padding y={80} />
    <div>
      TODO
    </div>
  </div>
);

const IndexPage = ({data}) => (
  <Layout
    isFloatMenu={true}
    closingEmoji={data.coffee}
    closingMsg="재고관리, 이제는 쉬워질 때."
  >
    <SEO
      lang="ko"
      title="박스히어로 - 가장 쉬운 재고 관리"
    />

    <Top data={data} />

    <KeyFeature
      icon={svgAddProduct}
      iconAlt="제품등록"
      title={(<span><strong>제품등록</strong>은 쉽게-</span>)}
      desc={(<span>업종 별로 필요한 정보만 입력해 제품을 쉽게 등록하세요.<br/>제품 등록에 필요한 속성은 박스히어로가 추천해드립니다.</span>)}
      subTitle="지금까지 엑셀을 사용했어도 걱정하지 마세요!"
      subDesc="박스히어로에서 엑셀에 저장했던 제품을 쉽게 불러올 수 있습니다."
      detailUrl=""
      image={data.feature1}
    />

    <KeyFeature
      isDarkBg={true}
      icon={svgCounting}
      iconAlt="빠른 입출고"
      title={(<span><strong>입출고</strong>는 빠르게-</span>)}
      desc={(<span>제품 선택, 수량 입력, 입출고 버튼 누르면 끝!<br/>스마트폰으로 바코드를 스캔하면 입출고가 더욱 빨라집니다.</span>)}
      subTitle="바코드가 없어도 걱정하지 마세요!"
      subDesc={<span>박스히어로에서 당신에게 맞는 바코드를 만들어<br/>인쇄할 수 있습니다.</span>}
      detailUrl=""
      image={data.feature2}
    />

    <KeyFeature
      icon={svgDashboard}
      iconAlt="편리한 재고확인"
      title={(<span><strong>재고확인</strong>은 편리하게-</span>)}
      desc={(<span>보기 쉬운 제품목록으로 재고관리가 편해집니다.<br/>수많은 데이터 중 원하는 재고정보를 한 눈에 확인하세요.</span>)}
      subTitle="어려운 재고분석도 이제는 걱정하지 마세요!"
      subDesc="박스히어로에서 쉽고 직관적인 재고분석 정보를 제공합니다."
      detailUrl=""
      image={data.feature3}
    />

    <TeamPlay data={data} />

    <Customers data={data} />

    <Features data={data} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    homeTopBg: file(relativePath: { eq: "home-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    homeTopRight: file(relativePath: { eq: "home-top-right.png" }) {
      childImageSharp {
        fixed(width: 934, webpQuality: 100,
          traceSVG: {
            color: "#6159F5"
            optTolerance: 0.2,
            turdSize: 100,
            turnPolicy: TURNPOLICY_MINORITY
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature1: file(relativePath: { eq: "img-add.png" }) {
      childImageSharp {
        fixed(width: 640, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature2: file(relativePath: { eq: "img-scan.png" }) {
      childImageSharp {
        fixed(width: 597, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    feature3: file(relativePath: { eq: "img-grouping.png" }) {
      childImageSharp {
        fixed(width: 624, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    homeTeamPlayBg: file(relativePath: { eq: "home-team-play-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    teamPlay: file(relativePath: { eq: "img-team.png" }) {
      childImageSharp {
        fixed(width: 819, height: 572, cropFocus: NORTH) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    customerMart: file(relativePath: { eq: "customer-mart-preview.png" }) {
      childImageSharp {
        fixed(width: 298, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    coffee: file(relativePath: { eq: "emoji-coffee.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
